import Image from "next/image";
import { useTranslations } from "next-intl";

import { SectionSecond } from "@/components";

import classes from "./forex-embark.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface ForexEmbarkProps {
  className?: string;
}

const ForexEmbark = (props: ForexEmbarkProps) => {
  const _className = useClassName(props.className, classes.container);

  const t = useTranslations("pages.forex.embark");

  return (
    <SectionSecond
      className={_className}
      classNames={{ content: classes.content }}
      title={t("title")}
      description={t("description")}
      ImageComponent={
        <Image
          className={classes.image}
          src="/images/forex/embark.webp"
          width={840}
          height={1084}
          priority={true}
          alt="backgound image"
        />
      }
    />
  );
};

export default ForexEmbark;
