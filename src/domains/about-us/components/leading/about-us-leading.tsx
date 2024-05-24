import NextImage from "next/image";
import { useTranslations } from "next-intl";

import { useAboutUsLeading } from "./about-us-leading.hook";

import { Section } from "@/components";

import * as Components from "./components";

import classes from "./about-us-leading.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface AboutUsLeadingProps {
  className?: string;
}

const AboutUsLeading = (props: AboutUsLeadingProps) => {
  const _className = useClassName(props.className, classes.container);

  const t = useTranslations("pages.about-us.leading");

  const { items } = useAboutUsLeading(props);

  return (
    <Section
      className={_className}
      classNames={{ description: classes.description }}
      title={t("title")}
      description={t("description")}
    >
      <div className={classes.content}>
        {items.map((group, groupIndex) => (
          <div
            className={classes.group}
            data-reverse={groupIndex % 2 !== 0}
            key={group.id}
          >
            {group.items.map((item, index) => (
              <Components.Item
                className={classes.item}
                data={item}
                number={index + 1}
                key={item.id}
              />
            ))}

            <NextImage
              className={classes.item}
              src={group.image}
              width={510}
              height={510}
              alt="preview"
            />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default AboutUsLeading;
