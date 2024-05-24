import { useMemo } from "react";
import { useTranslations } from "next-intl";

import type { CareersProps } from "./сareers";

const useCareers = (props: CareersProps) => {
  const t = useTranslations("pages.careers.statistic");

  const statistic = useMemo(() => {
    const res: Statistic[] = [
      {
        key: "1",
        value: "$14.1B",
        description: t("equitycapital.description"),
      },
      { key: "2", value: "2.56M", description: t("accounts.description") },
      { key: "3", value: "23%", description: t("growth.description") },
      { key: "4", value: "2,900+", description: t("employees.description") },
      { key: "5", value: "IBKR", description: t("symbol.description") },
      { key: "6", value: "27", description: t("offices.description") },
    ];

    return res;
  }, []);

  return { statistic };
};

export { useCareers };
