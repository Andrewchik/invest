import Image from "next/image";
import { useTranslations } from "next-intl";

import { SectionSecond, Button } from "@/components";

import { ArrowRight } from "@/icons";

import classes from "./home-platforms.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface HomePlatformsProps {
  className?: string;
}

const HomePlatforms = (props: HomePlatformsProps) => {
  const _className = useClassName(props.className, classes.container);

  const t = useTranslations("pages.home.platforms");

  return (
    <SectionSecond
      className={_className}
      classNames={{ content: classes.content }}
      title={t("title")}
      description={t("description")}
      ImageComponent={
        <Image
          className={classes.image}
          src="/images/home/platforms.webp"
          width={1216}
          height={636}
          priority={true}
          alt="backgound image"
        />
      }
    >
      <Button
        className={classes.action}
        theme="transparent"
        title={t("action")}
        RightComponent={<ArrowRight />}
      />
    </SectionSecond>
  );
};

export default HomePlatforms;
