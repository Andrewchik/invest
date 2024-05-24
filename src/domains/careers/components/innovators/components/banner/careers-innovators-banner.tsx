import Image from "next/image";
import { useTranslations } from "next-intl";

import classes from "./careers-innovators-banner.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface CareersInnovatorsBannerProps {
  className?: string;
}

const CareersInnovatorsBanner = (props: CareersInnovatorsBannerProps) => {
  const _className = useClassName(props.className, classes.container);

  const t = useTranslations("pages.careers.innovators.banner");

  return (
    <div className={_className}>
      <div className={classes.header}>
        <h3 className={classes.title}>{t("title")}</h3>

        <Image
          className={classes.logo}
          src="/images/logo-short.svg"
          width={40}
          height={40}
          priority={true}
          alt="logo"
        />
      </div>

      <p className={classes.description}>{t("description")}</p>
    </div>
  );
};

export default CareersInnovatorsBanner;
