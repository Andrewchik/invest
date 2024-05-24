import { unstable_setRequestLocale } from "next-intl/server";

import LayoutRoot from "@/layouts/root";

import { locales } from "@/navigation";

export type RootLayoutParams = Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>;

export default function RootLayout({ children, params }: RootLayoutParams) {
  unstable_setRequestLocale(params.locale);

  return <LayoutRoot>{children}</LayoutRoot>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
