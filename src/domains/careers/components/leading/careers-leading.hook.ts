import { useMemo } from "react";
import { useTranslations } from "next-intl";

import type { CareersLeadingProps } from "./careers-leading";

const useCareersLeading = (props: CareersLeadingProps) => {
  const t = useTranslations("pages.careers.leading");

  const items = useMemo(() => {
    const res = [
      {
        number: "01",
        title: t("items.1.title"),
        description: t("items.1.description"),
      },
      {
        number: "02",
        title: t("items.2.title"),
        description: t("items.2.description"),
      },
      {
        number: "03",
        title: t("items.3.title"),
        description: t("items.3.description"),
      },
    ];

    return res;
  }, []);

  return { items };
};

export { useCareersLeading };
