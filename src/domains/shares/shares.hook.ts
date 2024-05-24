import { useMemo } from "react";
import { useTranslations } from "next-intl";

import type { SharesProps } from "./shares";

const useShares = (props: SharesProps) => {
  const t = useTranslations("pages.shares.advantages");

  const advantages = useMemo(() => {
    const res = [
      {
        key: "flexibility",
        title: t("flexibility.title"),
        description: t("flexibility.description"),
        icon: "/images/shares/advantages/flexibility.svg",
      },
      {
        key: "insights",
        title: t("insights.title"),
        description: t("insights.description"),
        icon: "/images/shares/advantages/insights.svg",
      },
      {
        key: "potential",
        title: t("potential.title"),
        description: t("potential.description"),
        icon: "/images/shares/advantages/potential.svg",
      },
    ];

    return res;
  }, []);

  return { advantages };
};

export { useShares };
