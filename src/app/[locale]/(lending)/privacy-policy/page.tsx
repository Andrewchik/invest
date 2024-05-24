import { unstable_setRequestLocale } from "next-intl/server";

import LayoutPolicy from "@/layouts/policy";

import content from "./data";

export type PrivacyPolicyParams = Readonly<{
  params: {
    locale: string;
  };
}>;

export default function PrivacyPolicy({ params }: PrivacyPolicyParams) {
  unstable_setRequestLocale(params.locale);

  return <LayoutPolicy content={content[params.locale]} />;
}
