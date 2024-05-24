import { useTranslations } from "next-intl";

import {
  HeaderSection,
  InstrumentsSection,
  AdvantagesSection,
  TradingTableSection,
} from "@/sections";

import { useForex } from "./forex.hook";

import * as Components from "./components";

import classes from "./forex.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface ForexProps {
  className?: string;
}

const Forex = (props: ForexProps) => {
  const _className = useClassName(props.className, classes.container);

  const t = useTranslations("pages.forex");

  const { advantages } = useForex(props);

  return (
    <div className={_className}>
      <HeaderSection
        image="/images/forex/header.webp"
        title={t("header.title")}
        subtitle={t("header.subtitle")}
        href="/trading"
      />

      <InstrumentsSection className={classes.section} />

      <Components.Embark className={classes.section} />

      <Components.Unlock className={classes.section} />

      <AdvantagesSection className={classes.section} items={advantages} />

      <TradingTableSection
        className={classes.section}
        title={t("trade.title")}
        description={t("trade.subtitle")}
      />
    </div>
  );
};

export default Forex;
