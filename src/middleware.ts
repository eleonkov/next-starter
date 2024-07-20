import createMiddleware from "next-intl/middleware";
import {
  defaultLocale,
  locales,
  localePrefix,
  localeDetection,
} from "./config";

export default createMiddleware({
  defaultLocale,
  locales,
  localePrefix,
  localeDetection,
});

export const config = {
  matcher: ["/", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
