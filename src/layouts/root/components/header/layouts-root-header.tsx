import { NextLink } from "@/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { Button } from "@/components";

import * as Components from "./components";

import classes from "./layouts-root-header.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface LayoutsRootHeaderProps {
  className?: string;
}

const LayoutsRootHeader = (props: LayoutsRootHeaderProps) => {
  const _className = useClassName(props.className, classes.container);

  const tRoot = useTranslations("root.pages");
  const t = useTranslations("layouts.root.header");

  return (
    <header className={_className}>
      <div className={classes.content}>
        <NextLink className={classes.logo} href="/">
          <Image
            src="/images/logo.svg"
            width={225}
            height={30}
            priority={true}
            alt="Global Investment"
          />
        </NextLink>

        <ul className={classes.menu}>
          <Components.Item title={tRoot("home")} href="/" />

          <Components.Menu items={tradingOptions}>
            <Components.Item title={t("menu.trading")} type="modal" />
          </Components.Menu>

          <Components.Menu items={platformOptions}>
            <Components.Item title={t("menu.platforms")} type="modal" />
          </Components.Menu>

          <Components.Item title={tRoot("news")} href="news" />

          <Components.Item title={tRoot("contacts")} href="/contacts" />
        </ul>

        <Components.Actions className={classes.actions} />

        {/* <div className={classes.actions}>
          <Button theme="outline" title={t("actions.sign_up")} href="/singup" />

          <Button title={t("actions.open_account")} href="/login" />
        </div> */}
      </div>
    </header>
  );
};

export default LayoutsRootHeader;

const tradingOptions: Menu[] = [
  { key: "crypto", label: "Crypto", href: "/crypto" },
  { key: "forex", label: "Forex", href: "/forex" },
  { key: "indices", label: "Indices", href: "/indices" },
  { key: "shares", label: "Shares", href: "/shares" },
];

const platformOptions: Menu[] = [
  { key: "about-us", label: "About us", href: "/about-us" },
  { key: "careers", label: "Сareers", href: "/careers" },
  { key: "news", label: "News", href: "/news" },
  { key: "contacts", label: "Contacts", href: "/contacts" },
  { key: "account-types", label: "Account Types", href: "/account-types" },
];
