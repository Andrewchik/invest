import { useTranslations } from "next-intl";

import { HeaderSection } from "@/sections";

import * as Components from "./components";

import classes from "./news.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface NewsProps {
  className?: string;
}

const News = (props: NewsProps) => {
  const _className = useClassName(props.className, classes.container);

  const t = useTranslations("pages.news");

  return (
    <div className={_className}>
      <HeaderSection
        className={_className}
        variant="second"
        subtitle={t("header.subtitle")}
        title={t("header.title")}
        href="/trading"
      />

      <Components.Grid className={classes.section} />
    </div>
  );
};

export default News;
