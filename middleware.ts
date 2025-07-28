import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const secret = process.env.NEXTAUTH_SECRET;

  console.log(secret);
  const isToken = await getToken({ req, secret });
  if (isToken) {
    console.log('token allready exist ');
  } else {
    console.log(isToken);
    console.log('token not exist');
  }

  if (!isToken) {
    return NextResponse.redirect(new URL('/home', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/',
};
