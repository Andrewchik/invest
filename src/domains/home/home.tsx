import { useTranslations } from "next-intl";

import { HeaderSection, InstrumentsSection } from "@/sections";

import * as Components from "./components";

import classes from "./home.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface HomeProps {
  className?: string;
}

const Home = (props: HomeProps) => {
  const _className = useClassName(props.className, classes.container);

  const t = useTranslations("pages.home");

  return (
    <div className={_className}>
      <HeaderSection
        title={t("header.title")}
        subtitle={t("header.subtitle")}
        image="/images/home/header.webp"
        href="/singup"
      />

      <Components.Advantages className={classes.advantages} />

      <InstrumentsSection className={classes.section} />

      <Components.Platforms className={classes.section} />

      <Components.Opportunities className={classes.section} />

      <Components.Experience className={classes.section} />

      <Components.Unlocking className={classes.section} />

      <Components.Process className={classes.section} />

      <Components.Subscribe className={classes.section} />
    </div>
  );
};
export default Home;
