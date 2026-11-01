// import { NextRequest, NextResponse } from 'next/server';
// import { getToken } from 'next-auth/jwt';

// export async function middleware(req: NextRequest) {
//   const secret = process.env.NEXTAUTH_SECRET;

//   // console.log(secret);
//   const isToken = await getToken({ req, secret });
//   if (isToken) {
//     console.log('token allready exist ');
//   } else {
//     // console.log(isToken);
//     console.log('token not exist');
//   }

//   if (!isToken) {
//     return NextResponse.redirect(new URL('/home', req.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: '/',
// };

import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  // const pathname = req.nextUrl.pathname;

  // 1. Fast fail: Check if the auth cookie exists before doing heavy JWT decryption
  // (Use '__Secure-next-auth.session-token' in production if using HTTPS)
  const cookieName =
    process.env.NODE_ENV === 'production' ? '__Secure-next-auth.session-token' : 'next-auth.session-token';

  const hasCookie = req.cookies.has(cookieName) || req.cookies.has('next-auth.session-token');

  if (!hasCookie) {
    return NextResponse.redirect(new URL('/home', req.url));
  }

  // 2. Only verify the token cryptographically if the cookie actually exists
  const secret = process.env.NEXTAUTH_SECRET;
  const isToken = await getToken({ req, secret });

  if (!isToken) {
    return NextResponse.redirect(new URL('/home', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/',
};
