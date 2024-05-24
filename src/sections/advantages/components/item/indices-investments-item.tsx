import Image from "next/image";

import classes from "./indices-investments-item.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface IndicesInvestmentsItemProps {
  className?: string;
  title: string;
  description: string;
  icon: string;
}

const IndicesInvestmentsItem = (props: IndicesInvestmentsItemProps) => {
  const _className = useClassName(props.className, classes.container);

  return (
    <div className={_className}>
      <Image
        className={classes.icon}
        src={props.icon}
        width={40}
        height={40}
        alt="icon"
      />

      <div className={classes.content}>
        <h4 className={classes.title}>{props.title}</h4>

        <p className={classes.description}>{props.description}</p>
      </div>
    </div>
  );
};

export default IndicesInvestmentsItem;
