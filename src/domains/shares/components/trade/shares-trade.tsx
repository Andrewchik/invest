import Image from "next/image";

import { SectionSecond } from "@/components";

import classes from "./shares-trade.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface SharesTradeProps {
  className?: string;
}

const SharesTrade = (props: SharesTradeProps) => {
  const _className = useClassName(props.className, classes.container);

  return (
    <SectionSecond
      reverse
      className={_className}
      classNames={{ content: classes.content }}
      title="Trade Shares: Seize Investment Opportunities"
      description="Dive into the world of share trading and seize investment opportunities like never before. Our platform offers seamless access to a wide range of shares, allowing you to capitalize on market movements and grow your portfolio with confidence. Join us today to start trading shares & take control of your financial future."
      ImageComponent={
        <Image
          className={classes.image}
          src="/images/shares/trade.webp"
          width={1060}
          height={512}
          priority={true}
          alt="backgound image"
        />
      }
    />
  );
};

export default SharesTrade;
