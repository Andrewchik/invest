import { unstable_setRequestLocale } from "next-intl/server";

import TradingScreen from "@/domains/trading";

export type TradingParams = Readonly<{
  params: {
    locale: string;
  };
}>;

export default function Forgot({ params }: TradingParams) {
  unstable_setRequestLocale(params.locale);

  return <TradingScreen />;
}
