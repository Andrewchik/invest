import { unstable_setRequestLocale } from "next-intl/server";

import HomeScreen from "@/domains/home";

export type HomeParams = Readonly<{
  params: {
    locale: string;
  };
}>;

export default function Home({ params }: HomeParams) {
  unstable_setRequestLocale(params.locale);

  return <HomeScreen />;
}
