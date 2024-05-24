import Image from "next/image";
import { useTranslations } from "next-intl";

import { SectionSecond } from "@/components";

import classes from "./crypto-gateway.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface CryptoGatewayProps {
  className?: string;
}

const CryptoGateway = (props: CryptoGatewayProps) => {
  const _className = useClassName(props.className, classes.container);

  const t = useTranslations("pages.crypto.gateway");

  return (
    <SectionSecond
      className={_className}
      classNames={{ content: classes.content }}
      title={t("title")}
      description={t("description")}
      ImageComponent={
        <Image
          className={classes.image}
          src="/images/crypto/financial.webp"
          width={876}
          height={1000}
          priority={true}
          alt="backgound image"
        />
      }
    />
  );
};

export default CryptoGateway;
