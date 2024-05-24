import { unstable_setRequestLocale } from "next-intl/server";

import ForgotScreen from "@/domains/forgot";

export type ForgotParams = Readonly<{
  params: {
    locale: string;
  };
}>;

export default function Forgot({ params }: ForgotParams) {
  unstable_setRequestLocale(params.locale);

  return <ForgotScreen />;
}
