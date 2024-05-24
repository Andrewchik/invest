import { useMemo } from "react";
import { useTranslations } from "next-intl";

import type { AboutUsLeadingProps } from "./about-us-leading";

const useAboutUsLeading = (props: AboutUsLeadingProps) => {
  const t = useTranslations("pages.about-us.leading");

  const items = useMemo(() => {
    const res: AboutUsLeading[] = [
      {
        id: 1,
        image: "/images/about-us/leading/1.webp",
        items: [
          {
            id: 1,
            title: t("items.expertise.title"),
            description: t("items.expertise.description"),
          },
          {
            id: 2,
            title: t("items.transparency.title"),
            description: t("items.transparency.description"),
          },
        ],
      },
      {
        id: 1,
        image: "/images/about-us/leading/2.webp",
        items: [
          {
            id: 1,
            title: t("items.expertise.title"),
            description: t("items.expertise.description"),
          },
          {
            id: 2,
            title: t("items.transparency.title"),
            description: t("items.transparency.description"),
          },
        ],
      },
    ];

    return res;
  }, []);

  return { items };
};

export { useAboutUsLeading };
