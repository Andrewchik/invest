import Image from "next/image";
import { useTranslations } from "next-intl";

import { SectionSecond } from "@/components";

import classes from "./indices-unlock.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface IndicesUnlockProps {
  className?: string;
}

const IndicesUnlock = (props: IndicesUnlockProps) => {
  const _className = useClassName(props.className, classes.container);

  const t = useTranslations("pages.indices.unlock");

  return (
    <SectionSecond
      className={_className}
      classNames={{ content: classes.content }}
      title={t("title")}
      description={t("description")}
      ImageComponent={
        <Image
          className={classes.image}
          src="/images/indices/unlock.svg"
          width={430}
          height={448}
          priority={true}
          alt="backgound image"
        />
      }
    />
  );
};

export default IndicesUnlock;
