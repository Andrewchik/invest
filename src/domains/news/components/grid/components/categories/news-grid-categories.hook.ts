import { useMemo } from "react";
import { useTranslations } from "next-intl";

import type { NewsGridCategoriesProps } from "./news-grid-categories";

const useNewsGridCategories = (props: NewsGridCategoriesProps) => {
  const t = useTranslations("pages.news.categories");

  const items = useMemo(() => {
    const res = [
      { label: t("all"), value: "all" },
      { label: t("business"), value: "business" },
      { label: t("trends"), value: "trends" },
      { label: t("insights"), value: "insights" },
      { label: t("shares"), value: "shares" },
    ];

    return res;
  }, []);

  return { items };
};

export { useNewsGridCategories };
