import Image from "next/image";
import { useTranslations } from "next-intl";

import { SectionSecond } from "@/components";

import classes from "./web-trader-access.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface WebTraderAccessProps {
  className?: string;
}

const WebTraderAccess = (props: WebTraderAccessProps) => {
  const _className = useClassName(props.className, classes.container);

  const t = useTranslations("pages.web-trader.access");

  return (
    <SectionSecond
      className={_className}
      classNames={{ content: classes.content }}
      title={t("title")}
      description={t("description")}
      ImageComponent={
        <Image
          className={classes.image}
          src="/images/web-trader/access.webp"
          width={1060}
          height={676}
          priority={true}
          alt="backgound image"
        />
      }
    />
  );
};

export default WebTraderAccess;
