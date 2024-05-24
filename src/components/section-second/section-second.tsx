import classes from "./section-second.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

import { clsx } from "clsx";

export interface SectionSecondProps {
  className?: string;
  classNames?: SectionSecondClasseNames;
  children?: React.ReactNode;
  title: string;
  description?: React.ReactNode;
  reverse?: boolean;
  ImageComponent?: React.ReactNode;
  LeftComponent?: React.ReactNode;
}

export interface SectionSecondClasseNames {
  container?: string;
  content?: string;
  info?: string;
  description?: string;
}

const SectionSecond = (props: SectionSecondProps) => {
  const _className = useClassName(
    props.className,
    props.classNames?.container,
    classes.container
  );

  const _classNameContent = useClassName(
    props.classNames?.content,
    classes.content
  );

  const _classNameInfo = useClassName(props.classNames?.info, classes.info);

  return (
    <div className={_className} data-reverse={props.reverse}>
      <div className={classes.image} data-aos="zoom-in">
        {props.ImageComponent || props.LeftComponent}
      </div>

      <div className={_classNameContent}>
        <div className={_classNameInfo}>
          <h2 className={classes.title} data-aos="fade" data-aos-delay="300">
            {props.title}
          </h2>

          {!!props.description && (
            <p
              className={props.classNames?.description}
              data-aos="fade"
              data-aos-delay="300"
            >
              {props.description}
            </p>
          )}
        </div>

        {!!props.children && (
          <div className={clsx(classes.children, "d-none ", "d-flex-md")}>
            {props.children}
          </div>
        )}
      </div>

      {!!props.children && (
        <div className={clsx(classes.children, "d-flex", "d-none-md")}>
          {props.children}
        </div>
      )}
    </div>
  );
};

export default SectionSecond;
