import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'kn'] as const;
const defaultLocale = 'en';

function getLocale(request: NextRequest): string {
  const accept = request.headers.get('accept-language') ?? '';
  const preferred = accept
    .split(',')
    .map((part) => part.split(';')[0].trim().toLowerCase())
    .find((tag) => locales.some((l) => tag === l || tag.startsWith(`${l}-`)));

  if (preferred) {
    return locales.find((l) => preferred === l || preferred.startsWith(`${l}-`)) ?? defaultLocale;
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
