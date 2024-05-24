import { unstable_setRequestLocale } from "next-intl/server";

import AboutUsScreen from "@/domains/about-us";

export type AboutUsParams = Readonly<{
  params: {
    locale: string;
  };
}>;

export default function AboutUs({ params }: AboutUsParams) {
  unstable_setRequestLocale(params.locale);

  return <AboutUsScreen />;
}
