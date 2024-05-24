import { useMemo } from "react";
import { useTranslations } from "next-intl";

import type { CryptoProps } from "./crypto";

const useCrypto = (props: CryptoProps) => {
  const t = useTranslations("pages.crypto.advantages");

  const advantages = useMemo(() => {
    const res = [
      {
        key: "support",
        title: t("support.title"),
        description: t("support.description"),
        icon: "/images/crypto/advantages/support.svg",
      },
      {
        key: "access",
        title: t("access.title"),
        description: t("access.description"),
        icon: "/images/crypto/advantages/access.svg",
      },
      {
        key: "transactions",
        title: t("transactions.title"),
        description: t("transactions.description"),
        icon: "/images/crypto/advantages/transactions.svg",
      },
    ];

    return res;
  }, []);

  return { advantages };
};

export { useCrypto };
