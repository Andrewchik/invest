import { useMemo } from "react";
import { useTranslations } from "next-intl";

import type { HomeUnlockingProps } from "./home-unlocking";

const useHomeUnlocking = (props: HomeUnlockingProps) => {
  const t = useTranslations("pages.home.unlocking");

  const items = useMemo(() => {
    const res = [
      {
        icon: "/images/home/unlocking/1.svg",
        title: t("items.professional_pricing.title"),
        description: t("items.professional_pricing.description"),
      },
      {
        icon: "/images/home/unlocking/2.svg",
        title: t("items.global_access.title"),
        description: t("items.global_access.description"),
      },
      {
        icon: "/images/home/unlocking/3.svg",
        title: t("items.premier_technology.title"),
        description: t("items.premier_technology.description"),
      },
      {
        icon: "/images/home/unlocking/4.svg",
        title: t("items.strength_security.title"),
        description: t("items.strength_security.description"),
      },
    ];

    return res;
  }, []);

  return { items };
};

export { useHomeUnlocking };
