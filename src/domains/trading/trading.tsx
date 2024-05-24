"use client";

import { useState } from "react";

import dynamic from "next/dynamic";
import Script from "next/script";

import { TradingAside, TradingInfo } from "./components";

import classes from "./trading.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

import {
  ChartingLibraryWidgetOptions,
  ResolutionString,
} from "../../../public/static/charting_library/charting_library";

const defaultWidgetProps: Partial<ChartingLibraryWidgetOptions> = {
  symbol: "AAPL",
  interval: "D" as ResolutionString,
  library_path: "/static/charting_library/",
  locale: "en",
  charts_storage_url: "https://saveload.tradingview.com",
  charts_storage_api_version: "1.1",
  client_id: "tradingview.com",
  user_id: "public_user_id",
  fullscreen: false,
  autosize: true,
};

const TVChart = dynamic(
  () => import("@/components/tradingview/tv-chart").then((mod) => mod.default),
  { ssr: false }
);

export interface TradingProps {
  className?: string;
}

const Trading = (props: TradingProps) => {
  const [isScriptReady, setIsScriptReady] = useState(false);

  const _className = useClassName(props.className, classes.container);

  return (
    <div className={_className}>
      <TradingAside />

      <div className={classes.content}>
        <TradingInfo />

        <div className={classes.chart}>
          <Script
            src="/static/datafeeds/udf/dist/bundle.js"
            strategy="lazyOnload"
            onReady={() => {
              setIsScriptReady(true);
            }}
          />
          {isScriptReady && <TVChart {...defaultWidgetProps} />}
        </div>

        {/* <Image
          className={classes.image}
          src="/images/trading/test.svg"
          width={1336}
          height={820}
          priority={true}
          alt="backgound image"
        /> */}
      </div>
    </div>
  );
};

export default Trading;
