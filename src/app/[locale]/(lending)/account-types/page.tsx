import { unstable_setRequestLocale } from "next-intl/server";

import AccountTypesScreen from "@/domains/account-types";

export type AccountTypesParams = Readonly<{
  params: {
    locale: string;
  };
}>;

export default function AccountTypes({ params }: AccountTypesParams) {
  unstable_setRequestLocale(params.locale);

  return <AccountTypesScreen />;
}
