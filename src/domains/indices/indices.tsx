import { useTranslations } from "next-intl";

import {
  HeaderSection,
  InstrumentsSection,
  TradingTableSection,
} from "@/sections";

import * as Components from "./components";

import classes from "./indices.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface IndicesProps {
  className?: string;
}

const Indices = (props: IndicesProps) => {
  const _className = useClassName(props.className, classes.container);

  const t = useTranslations("pages.indices");

  return (
    <div className={_className}>
      <HeaderSection
        image="/images/indices/header.webp"
        title={t("header.title")}
        subtitle={t("header.subtitle")}
        href="/trading"
      />

      <InstrumentsSection className={classes.section} />

      <Components.Unlock className={classes.section} />

      <Components.Investments className={classes.section} />

      <TradingTableSection
        className={classes.section}
        title="Indices Trading"
        description="Trade on the price of the sum of a collective group of exchanges through each index. Choose Global Investment to trade the biggest indices which host global stocks with a regulated & safe broker."
      />
    </div>
  );
};
export default Indices;
