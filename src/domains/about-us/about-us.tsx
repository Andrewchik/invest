import { StatisticSection } from "@/sections";

import { useAboutUs } from "./about-us.hook";

import * as Components from "./components";

import classes from "./about-us.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface AboutUsProps {
  className?: string;
}

const AboutUs = (props: AboutUsProps) => {
  const _className = useClassName(props.className, classes.container);

  const { statistic } = useAboutUs(props);

  return (
    <div className={_className}>
      <Components.Header />

      <StatisticSection className={classes.section} data={statistic} />

      <Components.Investments className={classes.section} />

      <Components.Leading className={classes.section} />

      <Components.Team className={classes.section} />
    </div>
  );
};

export default AboutUs;
