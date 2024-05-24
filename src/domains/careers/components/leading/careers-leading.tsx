import { useTranslations } from "next-intl";

import { Section } from "@/components";

import * as Components from "./components";

import classes from "./careers-leading.module.scss";

import { useCareersLeading } from "./careers-leading.hook";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface CareersLeadingProps {
  className?: string;
}

const CareersLeading = (props: CareersLeadingProps) => {
  const _className = useClassName(props.className, classes.container);

  const t = useTranslations("pages.careers.leading");

  const { items } = useCareersLeading(props);

  return (
    <Section
      className={_className}
      classNames={{ description: classes["header__description"] }}
      title={t("title")}
      description={t("description")}
    >
      <div className={classes.content}>
        {items.map((item) => (
          <Components.Item data={item} key={item.number} />
        ))}
      </div>
    </Section>
  );
};

export default CareersLeading;
