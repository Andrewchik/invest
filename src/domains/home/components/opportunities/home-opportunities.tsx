import Image from "next/image";
import { useTranslations } from "next-intl";

import { SectionSecond, Button } from "@/components";

import { ArrowRight } from "@/icons";

import classes from "./home-opportunities.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface HomeOpportunitiesProps {
  className?: string;
}

const HomeOpportunities = (props: HomeOpportunitiesProps) => {
  const _className = useClassName(props.className, classes.container);

  const t = useTranslations("pages.home.opportunities");

  return (
    <SectionSecond
      reverse
      className={_className}
      classNames={{ content: classes.content }}
      title={t("title")}
      description={t("description")}
      ImageComponent={
        <Image
          className={classes.image}
          src="/images/home/chart.svg"
          width={530}
          height={314}
          priority={true}
          alt="backgound image"
        />
      }
    >
      <Button
        className={classes.action}
        theme="transparent"
        title={t("action")}
        RightComponent={<ArrowRight />}
      />
    </SectionSecond>
  );
};

export default HomeOpportunities;
