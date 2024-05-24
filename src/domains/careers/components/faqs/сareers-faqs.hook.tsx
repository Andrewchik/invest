import { useState, useCallback, useMemo } from "react";
import { useTranslations } from "next-intl";

import type { CareersFaqsProps } from "./careers-faqs";

const useCareersFaqs = (props: CareersFaqsProps) => {
  const t = useTranslations("pages.careers.faqs");

  const [activeId, setActiveId] = useState<number | null>(null);

  const items = useMemo(() => {
    const res: Faq[] = t.raw("items");

    return res.map((item, index) => ({
      id: index,
      name: item.name,
      answer: item.answer,
    }));
  }, []);

  const onChangeActiveId = useCallback(
    (value: number) => {
      setActiveId(activeId === value ? null : value);
    },
    [activeId]
  );

  return { items, activeId, onChangeActiveId };
};

export { useCareersFaqs };
