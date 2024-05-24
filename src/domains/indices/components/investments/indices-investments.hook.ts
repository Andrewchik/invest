import { useMemo } from "react";
import { useTranslations } from "next-intl";

import type { IndicesInvestmentsProps } from "./indices-investments";

const useIndicesInvestments = (props: IndicesInvestmentsProps) => {
  const t = useTranslations("pages.indices.investments");

  const items = useMemo(() => {
    const res = [
      {
        key: "markets",
        title: t("items.markets.title"),
        description: t("items.markets.description"),
        icon: "/images/indices/icons/markets.svg",
      },
      {
        key: "exposure",
        title: t("items.exposure.title"),
        description: t("items.exposure.description"),
        icon: "/images/indices/icons/exposure.svg",
      },
      {
        key: "resources",
        title: t("items.resources.title"),
        description: t("items.resources.description"),
        icon: "/images/indices/icons/resources.svg",
      },
      {
        key: "access",
        title: t("items.access.title"),
        description: t("items.access.description"),
        icon: "/images/indices/icons/access.svg",
      },
    ];

    return res;
  }, []);

  return { items };
};

export { useIndicesInvestments };
