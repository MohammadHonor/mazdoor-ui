// middleware.ts or middleware.js

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Example logic
  console.log('middleware');
  return NextResponse.next();
}
