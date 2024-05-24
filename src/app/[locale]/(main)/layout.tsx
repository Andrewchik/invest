import { unstable_setRequestLocale } from "next-intl/server";

import LayoutAuth from "@/layouts/auth";

export type AuthLayoutParams = Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>;

export default function AuthLayout({ children, params }: AuthLayoutParams) {
  unstable_setRequestLocale(params.locale);

  return <LayoutAuth>{children}</LayoutAuth>;
}

// export async function generateMetadata({
//   params: { locale },
// }: RootLayoutParams) {
//   const t = await getTranslations({ locale, namespace: "metadata" });

//   return {
//     title: t("title"),
//     description: t("description"),
//     openGraph: {
//       title: t("title"),
//       description: t("description"),
//     },
//     twitter: {
//       title: t("title"),
//       description: t("description"),
//     },
//   };
// }
