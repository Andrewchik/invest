import { unstable_setRequestLocale } from "next-intl/server";

import WebTraderScreen from "@/domains/web-trader";

export type WebTraderParams = Readonly<{
  params: {
    locale: string;
  };
}>;

export default function WebTrader({ params }: WebTraderParams) {
  unstable_setRequestLocale(params.locale);

  return <WebTraderScreen />;
}
