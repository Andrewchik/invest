import Image from "next/image";
import { useTranslations } from "next-intl";

import { SectionSecond } from "@/components";

import classes from "./forex-unlock.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface ForexUnlockProps {
  className?: string;
}

const ForexUnlock = (props: ForexUnlockProps) => {
  const _className = useClassName(props.className, classes.container);

  const t = useTranslations("pages.forex.unlocking");

  return (
    <SectionSecond
      reverse
      className={_className}
      classNames={{ content: classes.content }}
      title={t("title")}
      description={t("description")}
      ImageComponent={
        <Image
          className={classes.image}
          src="/images/forex/unlock.webp"
          width={1124}
          height={710}
          priority={true}
          alt="backgound image"
        />
      }
    />
  );
};

export default ForexUnlock;
