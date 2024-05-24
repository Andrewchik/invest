import { unstable_setRequestLocale } from "next-intl/server";

import RegistrationAddressScreen from "@/domains/registration-address";

export type RegistrationAddressParams = Readonly<{
  params: {
    locale: string;
  };
}>;

export default function RegistrationAddress({
  params,
}: RegistrationAddressParams) {
  unstable_setRequestLocale(params.locale);

  return <RegistrationAddressScreen />;
}
