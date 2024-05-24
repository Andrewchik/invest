import { useTranslations } from "next-intl";

import { HeaderSection } from "@/sections";

import * as Components from "./components";

import classes from "./registration-address.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface RegistrationAddressProps {
  className?: string;
}

const RegistrationAddress = (props: RegistrationAddressProps) => {
  const _className = useClassName(props.className, classes.container);

  const t = useTranslations("pages.registration-address");

  return (
    <div className={_className}>
      <HeaderSection
        image="/images/registration-address/header.webp"
        title={t("title")}
        subtitle={t("subtitle")}
        href="/trading"
      />

      <Components.About className={classes.section} />
    </div>
  );
};

export default RegistrationAddress;
