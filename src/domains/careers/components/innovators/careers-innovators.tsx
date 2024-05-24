import Image from "next/image";
import { useTranslations } from "next-intl";

import * as Components from "./components";

import classes from "./careers-innovators.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface CareersInnovatorsProps {
  className?: string;
}

const CareersInnovators = (props: CareersInnovatorsProps) => {
  const _className = useClassName(props.className, classes.container);

  const t = useTranslations("pages.careers.innovators");

  return (
    <div className={_className}>
      <div className={classes.row}>
        <h2 className={classes.title}>{t("title")}</h2>

        <p className={classes.description}>{t("description")}</p>
      </div>

      <div className={classes.row}>
        <Image
          className={classes.image}
          src="/images/careers/innovators/1.webp"
          width={876}
          height={1140}
          priority={true}
          alt="backgound image"
        />

        <div className={classes.column}>
          <Image
            className={classes.image}
            src="/images/careers/innovators/2.webp"
            width={1244}
            height={560}
            priority={true}
            alt="backgound image"
          />

          <Components.Banner className={classes.banner} />
        </div>
      </div>
    </div>
  );
};

export default CareersInnovators;
