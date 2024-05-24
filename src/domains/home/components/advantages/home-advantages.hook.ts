import { useMemo } from "react";
import { useTranslations } from "next-intl";

import type { HomeAdvantagesProps } from "./home-advantages";

const useHomeAdvantages = (props: HomeAdvantagesProps) => {
  const t = useTranslations("pages.home.advantages");

  const items = useMemo(() => {
    const res: IOption[] = [
      { label: t("funding_fee"), value: "0" },
      { label: t("support"), value: "24/7" },
      { label: t("micro_lot_trading"), value: "0.01" },
      { label: t("fast_order_execution"), value: "<20ms" },
    ];

    return res;
  }, []);

  return { items };
};

export { useHomeAdvantages };
