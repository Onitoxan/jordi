import { NextRequest, NextResponse } from "next/server";

import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { locales } from "./libs/i18n/i18n";
import { LocaleKey } from "./libs/contentful";

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  const defaultLocale: LocaleKey = "es-ES";

  return match(languages, locales, defaultLocale); // -> 'en-US' }
}
export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );
  if (pathnameHasLocale) return;
  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    "/",
  ],
};
