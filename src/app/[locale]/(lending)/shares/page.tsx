import { unstable_setRequestLocale } from "next-intl/server";

import SharesScreen from "@/domains/shares";

export type SharesParams = Readonly<{
  params: {
    locale: string;
  };
}>;

export default function Shares({ params }: SharesParams) {
  unstable_setRequestLocale(params.locale);

  return <SharesScreen />;
}
