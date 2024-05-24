import Image from "next/image";
import { useTranslations } from "next-intl";

import { Button } from "@/components";

import { ArrowScroll } from "@/icons";

import * as Components from "./components";

import classes from "./sections-header.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface SectionSecondClasseNames {
  container?: string;
  title?: string;
  description?: string;
}

export interface SectionsHeaderProps {
  className?: string;
  classNames?: SectionSecondClasseNames;
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  href?: string;
  variant?: "base" | "second";
  BottomComponent?: React.ReactNode;
}

const SectionsHeader = ({
  variant = "base",
  ...props
}: SectionsHeaderProps) => {
  const _className = useClassName(
    props.className,
    props.classNames?.container,
    classes.container
  );

  const _classNameTitle = useClassName(props.classNames?.title, classes.title);

  const _classNameDescription = useClassName(
    props.classNames?.description,
    classes.description
  );

  const t = useTranslations("sections.header");

  return (
    <section className={_className} data-variant={variant}>
      <div className={classes.content}>
        {!!props.subtitle && (
          <h3 className={classes.subtitle}>{props.subtitle}</h3>
        )}

        <h1
          className={_classNameTitle}
          // data-aos="fade"
        >
          {props.title}
        </h1>

        {!!props.description && (
          <p
            className={_classNameDescription}
            // data-aos="fade"
            // data-aos-delay={300}
          >
            {props.description}
          </p>
        )}

        {!!props.href && (
          <Button
            className={classes.action}
            title={t("action")}
            size="large"
            animation="scale"
            href={props.href}
          />
        )}

        {!!props.image && <ArrowScroll className={classes.arrow} />}
      </div>

      {!!props.image && (
        <Components.Preview className={classes.background}>
          <Image
            src={props.image}
            width={2880}
            height={1140}
            priority={true}
            alt="backgound image"
          />
        </Components.Preview>
      )}
    </section>
  );
};
export default SectionsHeader;
