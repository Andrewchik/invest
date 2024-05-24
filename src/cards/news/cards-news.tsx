import Image from "next/image";
import { NextLink } from "@/navigation";
import { useTranslations, useFormatter } from "next-intl";

import classes from "./cards-news.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface CardsNewsProps {
  className?: string;
}

const CardsNews = (props: CardsNewsProps) => {
  const _className = useClassName(props.className, classes.container);

  const format = useFormatter();

  const t = useTranslations("cards.news");

  return (
    <div className={_className}>
      <NextLink className={classes.preview} href={`/news/1`}>
        <Image
          className={classes.image}
          src="/images/generated/news1.webp"
          width={422}
          height={568}
          priority={true}
          alt="backgound image"
        />
      </NextLink>

      <div className={classes.info}>
        <div className={classes.category}>
          <span>{t("trends")}</span>
        </div>

        <span className={classes.meta}>
          {format.dateTime(new Date(), {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </span>

        <span className={classes.meta}>{t("to_read", { minutes: 5 })}</span>
      </div>

      <h4 className={classes.title}>
        <NextLink href={`/news/1`}>
          Market Trends Unveiled: Dive into the Latest Insights & Analysis
        </NextLink>
      </h4>
    </div>
  );
};

export default CardsNews;
