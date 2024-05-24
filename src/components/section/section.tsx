import classes from "./section.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface SectionProps {
  className?: string;
  classNames?: SectionSecondClasseNames;
  children?: React.ReactNode;
  title: string;
  description?: React.ReactNode;
}

export interface SectionSecondClasseNames {
  container?: string;
  description?: string;
}

const Section = (props: SectionProps) => {
  const _className = useClassName(
    props.className,
    props.classNames?.container,
    classes.container
  );

  const _classNameDescription = useClassName(
    props.classNames?.description,
    classes.description
  );

  return (
    <div className={_className}>
      <h2 className={classes.title} data-aos="fade" data-aos-delay="300">
        {props.title}
      </h2>

      {!!props.description && (
        <p
          className={_classNameDescription}
          data-with-children={!!props.children}
          data-aos="fade"
          data-aos-delay="300"
        >
          {props.description}
        </p>
      )}

      {props.children}
    </div>
  );
};

export default Section;
