import { useTranslations } from "next-intl";

import {
  HeaderSection,
  InstrumentsSection,
  AdvantagesSection,
  TradingTableSection,
} from "@/sections";

import { useShares } from "./shares.hook";

import * as Components from "./components";

import classes from "./shares.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface SharesProps {
  className?: string;
}

const Shares = (props: SharesProps) => {
  const _className = useClassName(props.className, classes.container);

  const t = useTranslations("pages.shares");

  const { advantages } = useShares(props);

  return (
    <div className={_className}>
      <HeaderSection
        image="/images/shares/header.webp"
        title={t("header.title")}
        subtitle={t("header.subtitle")}
        href="/trading"
      />

      <InstrumentsSection className={classes.section} />

      <Components.Invest className={classes.section} />

      <Components.Trade className={classes.section} />

      <AdvantagesSection className={classes.section} items={advantages} />

      <TradingTableSection
        className={classes.section}
        title={t("trade.title")}
        description={t("trade.description")}
      />
    </div>
  );
};
export default Shares;
