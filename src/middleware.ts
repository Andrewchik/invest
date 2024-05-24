// import createIntlMiddleware from "next-intl/middleware";
// import { auth } from "../auth";

// import { NextRequest } from "next/server";

// import { locales, localePrefix } from "@/navigation";

// // const publicPages = ["/", "/login"];

// const intlMiddleware = createIntlMiddleware({
//   defaultLocale: "en",
//   localePrefix,
//   locales,
// });

// export default intlMiddleware;
// // const authMiddleware = auth((req) => {
// //   const { nextUrl } = req;

// //   const isAuthenticated = !!req.auth;

// //   console.log("isAuthenticated", isAuthenticated);

// //   // const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname);

// //   // if (isPublicRoute && isAuthenticated)
// //   //  return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl));

// //   // if (!isAuthenticated && !isPublicRoute)
// //   //  return Response.redirect(new URL(ROOT, nextUrl));

// //   return Response.redirect(nextUrl);
// // });

// // export default function middleware(req: NextRequest) {
// //   const publicPathnameRegex = RegExp(
// //     `^(/(${locales.join("|")}))?(${publicPages
// //       .flatMap((p) => (p === "/" ? ["", "/"] : p))
// //       .join("|")})/?$`,
// //     "i"
// //   );
// //   const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

// //   if (isPublicPage) {
// //     return intlMiddleware(req);
// //   } else {
// //     return Response.redirect(req.nextUrl);
// //     // return (authMiddleware as any)(req);
// //   }
// // }

// // export { auth as middleware } from "../auth";

// export const config = {
//   // Match only internationalized pathnames
//   // matcher: ["/", "/(pl|en)/:path*"],
//   matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
// };

import createMiddleware from "next-intl/middleware";

import { locales, localePrefix } from "@/navigation";

export default createMiddleware({
  defaultLocale: "en",
  localePrefix,
  locales,
});

export const config = {
  // Match only internationalized pathnames
  // matcher: ["/", "/(pl|en)/:path*"],
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
