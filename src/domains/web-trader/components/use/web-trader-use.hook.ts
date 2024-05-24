import { useMemo } from "react";
import { useTranslations } from "next-intl";

import type { WebTraderUseProps } from "./web-trader-use";

const useWebTraderUse = (props: WebTraderUseProps) => {
  const t = useTranslations("pages.web-trader.use");

  const items = useMemo(() => {
    const res = [
      {
        key: "access",
        title: t("items.access.title"),
        description: t("items.access.description"),
        icon: "/images/web-trader/icons/access.svg",
      },
      {
        key: "trading",
        title: t("items.trading.title"),
        description: t("items.trading.description"),
        icon: "/images/web-trader/icons/trading.svg",
      },
      {
        key: "secure",
        title: t("items.secure.title"),
        description: t("items.secure.description"),
        icon: "/images/web-trader/icons/secure.svg",
      },
      {
        key: "charts",
        title: t("items.charts.title"),
        description: t("items.charts.description"),
        icon: "/images/web-trader/icons/charts.svg",
      },
    ];

    return res;
  }, []);

  return { items };
};

export { useWebTraderUse };
