import { TradingInfoItem } from "./components";

import classes from "./trading-info.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface TradingInfoProps {
  className?: string;
}

export const TradingInfo = (props: TradingInfoProps) => {
  const _className = useClassName(props.className, classes.container);

  return (
    <div className={_className}>
      <TradingInfoItem theme="green" label="Balance" value="635 USD" />

      <TradingInfoItem label="Credit" value="635 USD" />

      <TradingInfoItem label="Equity" value="0" />

      <TradingInfoItem label="Margin" value="0" />

      <TradingInfoItem label="Free Margin" value="0%" />

      <TradingInfoItem label="Profit/Loss" value="0" />
    </div>
  );
};
