import { unstable_setRequestLocale } from "next-intl/server";

import LayoutPolicy from "@/layouts/policy";

import content from "./data";

export type ClientCategorizationParams = Readonly<{
  params: {
    locale: string;
  };
}>;

export default function ClientCategorization({
  params,
}: ClientCategorizationParams) {
  unstable_setRequestLocale(params.locale);

  return <LayoutPolicy content={content[params.locale]} />;
}
