import { useTranslations } from "next-intl";

import { HeaderSection } from "@/sections";

import classes from "./about-us-header.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface AboutUsHeaderProps {
  className?: string;
}

const AboutUsHeader = (props: AboutUsHeaderProps) => {
  const _className = useClassName(props.className, classes.container);

  const t = useTranslations("pages.about-us.header");

  return (
    <HeaderSection
      className={_className}
      classNames={{ title: classes.title, description: classes.description }}
      variant="second"
      subtitle={t("subtitle")}
      title={t("title")}
      description={t("description")}
      href="/trading"
    />
  );
};

export default AboutUsHeader;
