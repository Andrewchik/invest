import Image from "next/image";
import { useTranslations } from "next-intl";

import { SectionSecond } from "@/components";

import classes from "./crypto-empower.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface CryptoEmpowerProps {
  className?: string;
}

const CryptoEmpower = (props: CryptoEmpowerProps) => {
  const _className = useClassName(props.className, classes.container);

  const t = useTranslations("pages.crypto.empower");

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
          src="/images/crypto/empower.webp"
          width={994}
          height={676}
          priority={true}
          alt="backgound image"
        />
      }
    />
  );
};

export default CryptoEmpower;
