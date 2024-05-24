import { unstable_setRequestLocale } from "next-intl/server";

import SelectAccountScreen from "@/domains/select-account";

export type SelectAccountParams = Readonly<{
  params: {
    locale: string;
  };
}>;

export default function SelectAccount({ params }: SelectAccountParams) {
  unstable_setRequestLocale(params.locale);

  return <SelectAccountScreen />;
}
