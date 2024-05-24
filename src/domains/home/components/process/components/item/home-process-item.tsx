import Image from "next/image";

import classes from "./home-process-item.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface HomeProcessItemProps {
  className?: string;
  data: any;
}

const HomeProcessItem = (props: HomeProcessItemProps) => {
  const _className = useClassName(props.className, classes.container);

  return (
    <div className={_className}>
      <Image
        className={classes.icon}
        src={props.data.icon}
        width={60}
        height={60}
        priority={true}
        alt="icon"
      />

      <div className={classes.content}>
        <h4 className={classes.title}>{props.data.title}</h4>

        <p className={classes.description}>{props.data.description}</p>
      </div>
    </div>
  );
};

export default HomeProcessItem;
