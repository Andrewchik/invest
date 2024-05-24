import { useTranslations } from "next-intl";

import { HeaderSection } from "@/sections";

import * as Components from "./components";

import classes from "./web-trader.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface WebTraderProps {
  className?: string;
}

const WebTrader = (props: WebTraderProps) => {
  const _className = useClassName(props.className, classes.container);

  const t = useTranslations("pages.web-trader");

  return (
    <div className={_className}>
      <HeaderSection
        classNames={{ title: classes.header__title }}
        variant="second"
        title={t("header.title")}
        subtitle={t("header.subtitle")}
        href="/trading"
      />

      <Components.Access className={classes.section} />

      <Components.Use className={classes.section} />

      <Components.Start className={classes.section} />
    </div>
  );
};
export default WebTrader;
