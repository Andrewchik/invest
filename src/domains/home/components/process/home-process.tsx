import { Section } from "@/components";

import * as Components from "./components";

import { useHomeProcess } from "./home-process.hook";

import classes from "./home-process.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

import { useTranslations } from "next-intl";

export interface HomeProcessProps {
  className?: string;
}

const HomeProcess = (props: HomeProcessProps) => {
  const _className = useClassName(props.className, classes.container);

  const t = useTranslations("pages.home.process");

  const { items } = useHomeProcess(props);

  return (
    <Section
      className={_className}
      title={t("title")}
      description={t("description")}
    >
      <div className={classes.content}>
        {items.map((item) => (
          <Components.Item
            className={classes.item}
            data={item}
            key={item.key}
          />
        ))}
      </div>
    </Section>
  );
};

export default HomeProcess;
