import { useTranslations } from "next-intl";

import { SectionSecond } from "@/components";

import * as Components from "./components";

import classes from "./careers-business.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface CareersBusinessProps {
  className?: string;
}

const CareersBusiness = (props: CareersBusinessProps) => {
  const _className = useClassName(props.className, classes.container);

  const t = useTranslations("pages.careers.business");

  return (
    <SectionSecond
      reverse
      className={_className}
      classNames={{ content: classes.content }}
      title={t("title")}
      LeftComponent={<Components.Youtube />}
    >
      <p>{t("description")}</p>
    </SectionSecond>
  );
};

export default CareersBusiness;
