import Image from "next/image";
import { useTranslations } from "next-intl";

import { SectionSecond } from "@/components";

import classes from "./about-us-investments.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface AboutUsInvestmentsProps {
  className?: string;
}

const AboutUsInvestments = (props: AboutUsInvestmentsProps) => {
  const _className = useClassName(props.className, classes.container);

  const t = useTranslations("pages.about-us.investments");

  return (
    <SectionSecond
      reverse
      className={_className}
      classNames={{ content: classes.content, info: classes.info }}
      title={t("title")}
      ImageComponent={
        <div className={classes.images}>
          <Image
            className={classes.image}
            src="/images/about-us/investments-1.webp"
            width={422}
            height={568}
            priority={true}
            alt="backgound image"
          />

          <Image
            className={classes.image}
            src="/images/about-us/investments-2.webp"
            width={422}
            height={568}
            priority={true}
            alt="backgound image"
          />
        </div>
      }
    >
      <p>{t("description")}</p>
    </SectionSecond>
  );
};

export default AboutUsInvestments;
