import { useTranslations } from "next-intl";

import { HeaderSection } from "@/sections";

import * as Components from "./components";

import classes from "./account-types.module.scss";

export interface AccountTypesProps {
  className?: string;
}

const AccountTypes = (props: AccountTypesProps) => {
  const t = useTranslations("pages.account-types");

  return (
    <div className={props.className}>
      <HeaderSection
        classNames={{ title: classes["header__title"] }}
        image="/images/account-types/header.webp"
        title={t("header.title")}
        subtitle={t("header.subtitle")}
        href="/trading"
      />

      <Components.Content className={classes.section} />
    </div>
  );
};

export default AccountTypes;
