import Image from "next/image";

import { SectionSecond } from "@/components";

import classes from "./shares-invest.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface SharesInvestProps {
  className?: string;
}

const SharesInvest = (props: SharesInvestProps) => {
  const _className = useClassName(props.className, classes.container);

  return (
    <SectionSecond
      className={_className}
      classNames={{ content: classes.content }}
      title="Invest in Shares: Navigate the Stock Market with Confidence"
      description="Gain access to a world of investment opportunities through share trading. With our platform, you can invest in a diverse range of companies, from established market leaders to promising startups. Take advantage of market trends, manage risk effectively, and build a portfolio tailored to your financial goals. Start your journey towards financial growth and stability by trading shares with us today."
      ImageComponent={
        <Image
          className={classes.image}
          src="/images/shares/invest.webp"
          width={1060}
          height={512}
          priority={true}
          alt="backgound image"
        />
      }
    />
  );
};

export default SharesInvest;
