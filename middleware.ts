import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const sessionToken =
    request.cookies.get('authjs.session-token')?.value ||
    request.cookies.get('__Secure-authjs.session-token')?.value;

  const token = sessionToken
    ? await getToken({
        req: request,
        secret: process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET,
        raw: true, // Try with raw option
      })
    : null;

  const requestedUrl = request.nextUrl.pathname;

  if (requestedUrl.startsWith('/account')) {
    if (!token) {
      const url = new URL('/login', request.url);
      url.searchParams.set('callbackUrl', requestedUrl);
      return NextResponse.redirect(url);
    }
  }

  if (requestedUrl.startsWith('/login') || requestedUrl.startsWith('/signup')) {
    if (token) {
      const url = new URL('/', request.url);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/account/:path*', '/login', '/signup'],
};
