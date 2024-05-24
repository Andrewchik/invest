import { unstable_setRequestLocale } from "next-intl/server";

import SingupScreen from "@/domains/singup";

export type SingupParams = Readonly<{
  params: {
    locale: string;
  };
}>;

export default function Singup({ params }: SingupParams) {
  unstable_setRequestLocale(params.locale);

  return <SingupScreen />;
}
