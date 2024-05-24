import { unstable_setRequestLocale } from "next-intl/server";

import CryptoScreen from "@/domains/crypto";

export type CryptoParams = Readonly<{
  params: {
    locale: string;
  };
}>;

export default function Crypto({ params }: CryptoParams) {
  unstable_setRequestLocale(params.locale);

  return <CryptoScreen />;
}
