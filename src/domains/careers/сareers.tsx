import { useTranslations } from "next-intl";

import { HeaderSection, StatisticSection } from "@/sections";

import * as Components from "./components";

import classes from "./сareers.module.scss";

import { useCareers } from "./сareers.hook";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface CareersProps {
  className?: string;
}

const сareers = (props: CareersProps) => {
  const _className = useClassName(props.className, classes.container);

  const t = useTranslations("pages.careers");

  const { statistic } = useCareers(props);

  return (
    <div className={_className}>
      <HeaderSection
        classNames={{ title: classes["header__title"] }}
        variant="second"
        subtitle={t("header.subtitle")}
        title={t("header.title")}
        href="/trading"
      />

      <Components.Photos className={classes.photos} />

      <Components.Innovators className={classes.section} />

      <Components.Business className={classes.section} />

      <Components.Leading className={classes.section} />

      <Components.Advantages className={classes.section} />

      <StatisticSection className={classes.section} data={statistic} />

      <Components.FAQs className={classes.section} />
    </div>
  );
};

export default сareers;
