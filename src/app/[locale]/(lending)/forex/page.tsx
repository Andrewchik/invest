import { unstable_setRequestLocale } from "next-intl/server";

import ForexScreen from "@/domains/forex";

export type ForexParams = Readonly<{
  params: {
    locale: string;
  };
}>;

export default function Forex({ params }: ForexParams) {
  unstable_setRequestLocale(params.locale);

  return <ForexScreen />;
}
