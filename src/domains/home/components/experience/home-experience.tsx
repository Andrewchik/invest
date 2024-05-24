import Image from "next/image";
import { useTranslations } from "next-intl";

import { SectionSecond } from "@/components";

import * as LocalImagas from "./images";

import { useHomeExperience } from "./home-experience.hook";

import classes from "./home-experience.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface HomeExperienceProps {
  className?: string;
}

const HomeExperience = (props: HomeExperienceProps) => {
  const _className = useClassName(props.className, classes.container);

  const t = useTranslations("pages.home.experience");

  const { items } = useHomeExperience(props);

  return (
    <SectionSecond
      className={_className}
      classNames={{ content: classes.content }}
      title={t("title")}
      description={t("description")}
      ImageComponent={
        <Image
          className={classes.image}
          src="/images/home/experience.webp"
          width={1136}
          height={864}
          priority={true}
          alt="backgound image"
        />
      }
    >
      <ul className={classes.list}>
        {items?.map((item, index) => (
          <li className={classes.item} key={index}>
            <LocalImagas.Check />

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </SectionSecond>
  );
};

export default HomeExperience;
