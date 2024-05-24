import { useMemo } from "react";
import { useTranslations } from "next-intl";

import type { ForexProps } from "./forex";

const useForex = (props: ForexProps) => {
  const t = useTranslations("pages.forex.advantages");

  const advantages = useMemo(() => {
    const res = [
      {
        key: "flexibility",
        title: t("flexibility.title"),
        description: t("flexibility.description"),
        icon: "/images/forex/advantages/flexibility.svg",
      },
      {
        key: "commissions",
        title: t("commissions.title"),
        description: t("commissions.description"),
        icon: "/images/forex/advantages/commissions.svg",
      },
      {
        key: "protection",
        title: t("protection.title"),
        description: t("protection.description"),
        icon: "/images/forex/advantages/protection.svg",
      },
    ];

    return res;
  }, []);

  return { advantages };
};

export { useForex };
