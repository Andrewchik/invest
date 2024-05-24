import classes from "./careers-leading-item.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface CareersLeadingItemProps {
  className?: string;
  data: CareersLeading;
}

const CareersLeadingItem = (props: CareersLeadingItemProps) => {
  const _className = useClassName(props.className, classes.container);

  return (
    <div className={_className}>
      <span className={classes.number}>{props.data.number}</span>

      <h4 className={classes.title}>{props.data.title}</h4>

      <p className={classes.description}>{props.data.description}</p>
    </div>
  );
};

export default CareersLeadingItem;
