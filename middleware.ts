import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const locales = ['es', 'en', 'eu'];

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(new URL(`/es${pathname}`, request.url));
  }
}

export const config = {
  matcher: [
    // Ignora archivos internos de Netlify y estáticos
    '/((?!api|_next/static|_next/image|favicon.ico|flags|.*\\.svg|.*\\.jpg|.*\\.png|_netlify).*)',
  ],
};