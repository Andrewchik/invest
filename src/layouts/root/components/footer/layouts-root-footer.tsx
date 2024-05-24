import { NextLink } from "@/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";

import * as Components from "./components";

import { useLayoutsRootFooter } from "./layouts-root-footer.hook";

import classes from "./layouts-root-footer.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface LayoutsRootFooterProps {
  className?: string;
}

const LayoutsRootHeader = (props: LayoutsRootFooterProps) => {
  const _className = useClassName(props.className, classes.container);

  const t = useTranslations("layouts.root.footer");

  const { tradingItems, usefulLinksItems, companyItems } =
    useLayoutsRootFooter(props);

  return (
    <footer className={_className}>
      <div className={classes.section}>
        <div className={classes.body}>
          <div className={classes.info}>
            <NextLink className={classes.logo} href="/">
              <Image
                src="/images/logo.svg"
                width={225}
                height={30}
                priority={true}
                alt="Global Investment"
              />
            </NextLink>

            <p className={classes.description}>
              {`${t("info.address.label")}: ${t("info.address.value")}`}
            </p>

            <p className={classes.description}>
              {t("info.email.label")}: support@gl-investment.pl
            </p>
          </div>

          <div className={classes.content}>
            <Components.Menu
              className={classes.menu}
              title={t("menu.trading.label")}
              items={tradingItems}
            />

            <Components.Menu
              className={classes.menu}
              title={t("menu.links.label")}
              items={usefulLinksItems}
            />

            <Components.Menu
              className={classes.menu}
              title={t("menu.company.label")}
              items={companyItems}
            />
          </div>
        </div>

        <Components.BottomLine />
      </div>
    </footer>
  );
};

export default LayoutsRootHeader;
