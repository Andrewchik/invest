import Image from "next/image";
import { useTranslations } from "next-intl";

import { SectionSecond } from "@/components";

import classes from "./home-about.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface HomeAboutProps {
  className?: string;
}

const HomeAbout = (props: HomeAboutProps) => {
  const _className = useClassName(props.className, classes.container);

  const t = useTranslations("pages.registration-address.about");

  return (
    <SectionSecond
      className={_className}
      classNames={{ content: classes.content }}
      title={t("title")}
      description={t("description")}
      ImageComponent={
        <Image
          className={classes.image}
          src="/images/registration-address/about.webp"
          width={876}
          height={1000}
          priority={true}
          alt="backgound image"
        />
      }
    >
      <h3 className={classes.subtitle}>{t("risk-arning.title")}</h3>

      <p>{t("risk-arning.description")}</p>
    </SectionSecond>
  );
};

export default HomeAbout;
