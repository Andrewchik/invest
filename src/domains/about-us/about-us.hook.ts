import { useMemo } from "react";
import { useTranslations } from "next-intl";

import type { AboutUsProps } from "./about-us";

const useAboutUs = (props: AboutUsProps) => {
  const t = useTranslations("pages.about-us.statistic");

  const statistic = useMemo(() => {
    const res: Statistic[] = [
      { key: "1", value: "500K+", description: t("users.description") },
      { key: "2", value: "$104M", description: t("funding.description") },
      { key: "3", value: "105+", description: t("team-members.description") },
      { key: "4", value: "150+", description: t("partnerships.description") },
      { key: "5", value: "98%", description: t("customer.description") },
      { key: "6", value: "$1B", description: t("market-value.description") },
    ];

    return res;
  }, []);

  return { statistic };
};

export { useAboutUs };
