import { createI18nServer } from "next-international/server";
// import uk from "./uk";

export const { getI18n, getScopedI18n, getCurrentLocale, getStaticParams } =
  createI18nServer(
    {
      en: () => import("./en"),
      uk: () => import("./pl"),
    },
    {
      // Uncomment to use custom segment name
      segmentName: "lang",
      // Uncomment to set fallback locale
      // fallbackLocale: uk,
    }
  );
