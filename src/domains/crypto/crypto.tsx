import { useTranslations } from "next-intl";

import {
  HeaderSection,
  InstrumentsSection,
  AdvantagesSection,
  TradingTableSection,
} from "@/sections";

import { useCrypto } from "./crypto.hook";

import * as Components from "./components";

import classes from "./crypto.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface CryptoProps {
  className?: string;
}

const Crypto = (props: CryptoProps) => {
  const _className = useClassName(props.className, classes.container);

  const t = useTranslations("pages.crypto");

  const { advantages } = useCrypto(props);

  return (
    <div className={_className}>
      <HeaderSection
        image="/images/crypto/header.webp"
        title={t("header.title")}
        subtitle={t("header.subtitle")}
        href="/trading"
      />

      <InstrumentsSection className={classes.section} />

      <Components.Empower className={classes.section} />

      <Components.Gateway className={classes.section} />

      <AdvantagesSection className={classes.section} items={advantages} />

      <TradingTableSection
        className={classes.section}
        title={t("trade.title")}
        description={t("trade.description")}
      />
    </div>
  );
};
export default Crypto;
