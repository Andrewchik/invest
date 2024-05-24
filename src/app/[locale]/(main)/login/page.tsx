import { unstable_setRequestLocale } from "next-intl/server";

import LoginScreen from "@/domains/login";

export type LoginParams = Readonly<{
  params: {
    locale: string;
  };
}>;

export default function Login({ params }: LoginParams) {
  unstable_setRequestLocale(params.locale);

  return <LoginScreen />;
}
