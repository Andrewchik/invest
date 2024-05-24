import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const defaultLocale = "en";

export const locales = ["en", "pl"] as const;

export const localePrefix = "as-needed";

const res = createSharedPathnamesNavigation({
  locales,
  localePrefix,
});

export const NextLink = res.Link;
export const redirect = res.redirect;
export const usePathname = res.usePathname;
export const useRouter = res.useRouter;
