import { unstable_setRequestLocale } from "next-intl/server";

import LayoutPolicy from "@/layouts/policy";

import content from "./data";

export type TermsConditionsParams = Readonly<{
  params: {
    locale: string;
  };
}>;

export default function TermsConditions({ params }: TermsConditionsParams) {
  unstable_setRequestLocale(params.locale);

  return <LayoutPolicy content={content[params.locale]} />;
}
