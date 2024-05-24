import { unstable_setRequestLocale } from "next-intl/server";

import NewsItemScreen from "@/domains/news-item";

export type NewsItemParams = Readonly<{
  params: {
    locale: string;
  };
}>;

export default function NewsItem({ params }: NewsItemParams) {
  unstable_setRequestLocale(params.locale);

  return <NewsItemScreen />;
}
