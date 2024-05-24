import Image from "next/image";
import { useTranslations } from "next-intl";

import { ControlPrevIcon, ControlNextIcon } from "@/icons";

import classes from "./careers-advantages.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface CareersAdvantagesProps {
  className?: string;
}

const CareersAdvantages = (props: CareersAdvantagesProps) => {
  const _className = useClassName(props.className, classes.container);

  const t = useTranslations("pages.careers.advantages");

  return (
    <div className={_className}>
      <header className={classes.header}>
        <p className={classes.description}>{t("description")}</p>
      </header>

      <div className={classes.content}>
        <Image
          className={classes.image}
          src="/images/careers/advantages/1.webp"
          width={1440}
          height={1332}
          priority={true}
          alt="backgound image"
        />

        <div className={classes.info}>
          <h3 className={classes["info__title"]}>
            Advantages of working with us
          </h3>

          <p className={classes["info__description"]}>
            {`You'll find a blend of social projects, love for animals, holidays, relaxation, and delightful treats within our office environment.`}
          </p>

          <div className={classes.control}>
            <ControlPrevIcon className={classes.arrow} />

            <ControlNextIcon className={classes.arrow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersAdvantages;
