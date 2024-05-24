import Image from "next/image";
import { useTranslations, useFormatter } from "next-intl";

import Markdown from "markdown-to-jsx";

import * as Components from "./components";

import classes from "./news-item.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface NewsItemProps {
  className?: string;
}

const NewsItem = (props: NewsItemProps) => {
  const _className = useClassName(props.className, classes.container);

  const format = useFormatter();

  const t = useTranslations("cards.news");

  return (
    <div className={_className}>
      <div className={classes.content}>
        <h1 className={classes.title}>
          Breaking Financial News: Stay Ahead of the Curve with Our Latest
          Updates
        </h1>

        <Image
          className={classes.image}
          src="/images/generated/news2.webp"
          width={1060}
          height={702}
          priority={true}
          alt="preview"
        />

        <div className={classes.info}>
          <div className={classes.category}>
            <span>{t("trends")}</span>
          </div>

          <span className={classes.meta}>
            {format.dateTime(new Date(), {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>

          <span className={classes.meta}>{t("to_read", { minutes: 5 })}</span>
        </div>

        <Markdown
          className={classes.markdown}
          options={{
            forceBlock: true,
            forceWrapper: true,
          }}
        >
          {content}
        </Markdown>
      </div>

      <Components.Also className={classes.also} />
    </div>
  );
};

export default NewsItem;

const content = `## Are you ready to stay ahead of the curve in the fast-paced world of finance?

In today's fast-paced financial landscape, staying informed is essential for making sound investment decisions and navigating market uncertainties. With our commitment to delivering timely and relevant updates, we ensure that you remain ahead of the curve in the ever-evolving world of finance. Here's why our latest updates are your key to staying informed:

- Our team of expert analysts diligently monitors market movements and trends, providing you with timely insights to help you make informed decisions.
- Gain access to exclusive interviews with industry leaders, offering valuable perspectives and insights into the latest developments shaping the financial landscape.
- Receive real-time updates on breaking news and market movements, ensuring that you are always up to date with the latest developments.

![news1.webp](/images/generated/news1.webp)

Stay ahead of the curve with our latest updates and insights. Subscribe to the Global Investment blog today and empower yourself with the knowledge needed to navigate today's dynamic financial landscape with confidence and conviction.

## Market Analysis

Our team of financial experts provides in-depth analysis of market movements, helping you understand the underlying factors driving price fluctuations and volatility. With our insights, you can gain a deeper understanding of market dynamics and identify potential opportunities or risks. Additionally, we offer:
1) Trend Identification: **Our analysts** specialize in identifying trends within the market, whether it's a bullish rally or a bearish downturn. By recognizing these trends early on, you can capitalize on market momentum and make strategic investment decisions.
2) Risk Management Strategies: Beyond identifying opportunities, our market analysis includes proactive risk management strategies. We provide guidance on minimizing downside risk through diversification, hedging techniques, and position sizing, ensuring that your investment portfolio is well-protected in turbulent market conditions.

### Corporate News

Stay updated on earnings reports, mergers and acquisitions, and other corporate news that can impact stock prices and market sentiment. Our breaking financial news keeps you in the loop about the latest developments in the corporate world, allowing you to react quickly to changing market conditions.

>"As an investor, staying informed is not just an option—it's a necessity. The ability to react swiftly to market developments can make all the difference in achieving investment success."
>
>John Smith, Chief Investment Officer at Global Investment

I’ve been able to turn my skills to the interiors industry, luxury and affordability is something I truly believe in as a buyer. We are currently investing in making our website more visible through both organic and paid channels, and this is a huge priority for us as a business.

## Expert Commentary

Our team of financial analysts provides expert commentary and actionable insights to help you interpret breaking financial news and make informed decisions. Whether it's market analysis, investment strategies, or economic outlooks, our experts are here to guide you every step of the way.

In conclusion, staying ahead of the curve in today's fast-paced financial landscape requires access to timely and reliable information. With our breaking financial news updates, you can stay informed, make better investment decisions, and ultimately, achieve your financial goals. Stay tuned to our blog for the latest updates and insights that can help you navigate the complexities of the financial markets.
`;
