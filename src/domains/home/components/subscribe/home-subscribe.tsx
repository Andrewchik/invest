import { useTranslations } from "next-intl";

import { Section, Button } from "@/components";

import { FormInput } from "@/components/form";

import classes from "./home-subscribe.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface HomeSubscribeProps {
  className?: string;
}

const HomeSubscribe = (props: HomeSubscribeProps) => {
  const _className = useClassName(props.className, classes.container);

  const t = useTranslations("pages.home.subscribe");

  return (
    <Section
      className={_className}
      classNames={{ description: classes["header__description"] }}
      title={t("title")}
      description={t("description")}
    >
      <form className={classes.form}>
        <FormInput className={classes.input} placeholder={t("form.email")} />

        <Button
          className={classes.action}
          size="large"
          title={t("form.action")}
        />

        <p className={classes.policy}>{t("form.policy")}</p>
      </form>
    </Section>
  );
};

export default HomeSubscribe;
