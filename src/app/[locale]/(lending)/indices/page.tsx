import { unstable_setRequestLocale } from "next-intl/server";

import IndicesScreen from "@/domains/indices";

export type IndicesParams = Readonly<{
  params: {
    locale: string;
  };
}>;

export default function Indices({ params }: IndicesParams) {
  unstable_setRequestLocale(params.locale);

  return <IndicesScreen />;
}
