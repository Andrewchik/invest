import classes from "./about-us-statistic.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface AboutUsStatisticProps {
  className?: string;
  data: Statistic[];
}

const AboutUsStatistic = (props: AboutUsStatisticProps) => {
  const _className = useClassName(props.className, classes.container);

  return (
    <div className={_className}>
      {props.data.map((item) => (
        <div className={classes.item} key={item.key}>
          <span className={classes.value}>{item.value}</span>

          <span className={classes.description}>{item.description}</span>
        </div>
      ))}
    </div>
  );
};

export default AboutUsStatistic;
