import axios from 'axios';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const user = await axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/mazdoor-api/v1/user/login',
            data: {
              email: credentials?.email,
              password: credentials?.password,
            },
          });
          console.log('user data', user);
          if (user) {
            return user.data;
          }
          return null;
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 2 * 60,
  },
  pages: {
    signIn: '/home',
    error: '/error',
  },
  callbacks: {
    jwt({ token, user }) {
      // console.log("user", user);
      if (user) {
        token.id = user.id;
        token.username = user.name ?? '';
        token.email = user.email ?? '';
      }
      return token;
    },
    session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: false,
};
