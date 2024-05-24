import { unstable_setRequestLocale } from "next-intl/server";

import CareersScreen from "@/domains/careers";

export type CareersParams = Readonly<{
  params: {
    locale: string;
  };
}>;

export default function Careers({ params }: CareersParams) {
  unstable_setRequestLocale(params.locale);

  return <CareersScreen />;
}
