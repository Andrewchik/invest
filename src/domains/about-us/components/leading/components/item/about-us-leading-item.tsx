import classes from "./about-us-leading-item.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface AboutUsLeadingItemProps {
  className?: string;
  data: AboutUsLeadingItem;
  number: number;
}

const AboutUsLeadingItem = (props: AboutUsLeadingItemProps) => {
  const _className = useClassName(props.className, classes.container);

  return (
    <div className={_className}>
      <header className={classes.header}>
        <span className={classes.number}>0{props.number}</span>

        <h4>{props.data.title}</h4>
      </header>

      <p className={classes.description}>{props.data.description}</p>
    </div>
  );
};

export default AboutUsLeadingItem;
