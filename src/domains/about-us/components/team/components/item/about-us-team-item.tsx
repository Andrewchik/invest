import Image from "next/image";

import classes from "./about-us-team-item.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface AboutUsTeamItemProps {
  className?: string;
  data: Team;
}

const AboutUsTeamItem = (props: AboutUsTeamItemProps) => {
  const _className = useClassName(props.className, classes.container);

  return (
    <div className={_className}>
      <Image
        className={classes.preview}
        src={props.data.image}
        width={510}
        height={640}
        priority={true}
        alt="backgound image"
      />

      <h4 className={classes.name}>{props.data.title}</h4>

      <p className={classes.position}>{props.data.position}</p>
    </div>
  );
};

export default AboutUsTeamItem;
