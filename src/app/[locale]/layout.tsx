import { unstable_setRequestLocale, getTranslations } from "next-intl/server";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

import { locales } from "@/navigation";

import { AOSInit } from "@/aos";

import { DM_Sans } from "next/font/google";

import "../globals.scss";

const DMSans = DM_Sans({ subsets: ["latin"] });

export type RootLayoutParams = Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>;

export default function RootLayout({ children, params }: RootLayoutParams) {
  unstable_setRequestLocale(params.locale);

  const messages = useMessages();

  return (
    <html lang={params.locale}>
      <AOSInit />
      <body className={DMSans.className}>
        <AppRouterCacheProvider>
          <SessionProvider
            basePath="/api/auth"
            refetchOnWindowFocus={true}
            refetchInterval={5 * 60}
          >
            <NextIntlClientProvider locale={params.locale} messages={messages}>
              {children}

              <Toaster />
            </NextIntlClientProvider>
          </SessionProvider>

          <Script
            src="/static/datafeeds/udf/dist/bundle.js"
            strategy="lazyOnload"
          // onReady={() => {
          //   console.log("onReady");

          //   // setIsScriptReady(true);
          // }}
          />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

export async function generateMetadata({
  params: { locale },
}: RootLayoutParams) {
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
    },
    twitter: {
      title: t("title"),
      description: t("description"),
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
