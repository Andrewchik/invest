import { useTranslations } from "next-intl";

import { Section } from "@/components";

import { NewsCard } from "@/cards";

import classes from "./news-item-also.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface NewsItemAlsoProps {
  className?: string;
}

const NewsItemAlso = (props: NewsItemAlsoProps) => {
  const _className = useClassName(props.className, classes.container);

  const t = useTranslations("pages.news-item");

  return (
    <Section className={_className} title={t("read_also")}>
      <div className={classes.grid}>
        <NewsCard />

        <NewsCard />
      </div>
    </Section>
  );
};

export default NewsItemAlso;
