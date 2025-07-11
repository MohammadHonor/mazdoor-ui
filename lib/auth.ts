// import { API_ENDPOINTS } from '@/services/apiEndPoint';
// import { MAZDOOR_BASE_URL } from '@/services/config';
// import NextAuth from 'next-auth';
// import Credentials from 'next-auth/providers/credentials';
// import Email from 'next-auth/providers/email';

// export const { handler, signIn, signOut, auth } = NextAuth({
//   providers: [
//     Credentials({
//       credentials:{email:{} ,password:{}},
//       authorize: async (credentials)=>{

//         if(!credentials?.email || !credentials?.password){
//           throw new Error("email and password are required")
//         }

//         try {
//           const loginUrl=`${MAZDOOR_BASE_URL}${API_ENDPOINTS.LOGIN}`

//           await fetch(loginUrl,{

//           })

//         } catch (error) {

//         }

//       }
//     })
//   ]
// })
