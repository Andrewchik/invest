import { unstable_setRequestLocale } from "next-intl/server";

import NewsScreen from "@/domains/news";

export type NewsParams = Readonly<{
  params: {
    locale: string;
  };
}>;

export default function News({ params }: NewsParams) {
  unstable_setRequestLocale(params.locale);

  return <NewsScreen />;
}
