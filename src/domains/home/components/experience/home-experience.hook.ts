import { useMemo } from "react";
import { useTranslations } from "next-intl";

import type { HomeExperienceProps } from "./home-experience";

const useHomeExperience = (props: HomeExperienceProps) => {
  const t = useTranslations("pages.home.experience");

  const items = useMemo(() => {
    const res: string[] = t.raw("items");

    return res;

    // return res.map(item => {

    // });
  }, []);

  return { items };
};

export { useHomeExperience };
