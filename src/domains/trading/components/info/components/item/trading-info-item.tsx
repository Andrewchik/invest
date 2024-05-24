import classes from "./trading-info-item.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface TradingInfoItemProps {
  className?: string;
  label: String;
  value: String;
  theme?: "base" | "green";
}

export const TradingInfoItem = (props: TradingInfoItemProps) => {
  const _className = useClassName(props.className, classes.container);

  return (
    <div className={_className} data-theme={props.theme}>
      <span className={classes.label}>{props.label}:</span>{" "}
      <span className={classes.value}>{props.value}</span>
    </div>
  );
};
