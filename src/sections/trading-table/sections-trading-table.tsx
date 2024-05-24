"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";

import { Section, Table } from "@/components";

import classes from "./sections-trading-table.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper<Trading>();

export interface SectionsTradingTableProps {
  className?: string;
  title: string;
  description: string;
}

const SectionsTradingTable = (props: SectionsTradingTableProps) => {
  const _className = useClassName(props.className, classes.container);

  const t = useTranslations("sections.trading-table");

  const columns = useMemo(
    () => [
      columnHelper.accessor((row) => row.symbol, {
        id: "symbol",
        header: t("symbol"),
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor((row) => row.digits, {
        id: "digits",
        header: t("digits"),
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor((row) => row.contractSize, {
        id: "contractSize",
        header: t("contract_size"),
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor((row) => row.spread, {
        id: "spread",
        header: t("spread"),
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor((row) => row.swapLong, {
        id: "swapLong",
        header: t("swap_long"),
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor((row) => row.swapShort, {
        id: "swapShort",
        header: t("swap_short"),
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor((row) => row.tradingHours, {
        id: "tradingHours",
        header: t("trading_hours"),
        cell: (info) => info.getValue(),
      }),
    ],
    []
  );

  return (
    <Section
      className={_className}
      classNames={{ description: classes["header__description"] }}
      title={props.title}
      description={props.description}
    >
      <div className={classes.content}>
        <Table columns={columns} data={data} />
      </div>
    </Section>
  );
};

export default SectionsTradingTable;

const data: Trading[] = [
  {
    id: 1,
    symbol: "EURUSD",
    digits: 5,
    contractSize: "100,000",
    spread: "2",
    swapLong: "-7.64",
    swapShort: "2.08",
    tradingHours: "00:00-24:00",
  },
  {
    id: 2,
    symbol: "GBPUSD",
    digits: 5,
    contractSize: "100,000",
    spread: "4",
    swapLong: "-6.25",
    swapShort: "0.69",
    tradingHours: "00:00-24:00",
  },
  {
    id: 3,
    symbol: "USDJPY",
    digits: 3,
    contractSize: "100,000",
    spread: "2",
    swapLong: "2.36",
    swapShort: "-7.92",
    tradingHours: "00:00-24:00",
  },
  {
    id: 4,
    symbol: "AUDUSD",
    digits: 5,
    contractSize: "100,000",
    spread: "3",
    swapLong: "-3.47",
    swapShort: "-2.08",
    tradingHours: "00:00-24:00",
  },
  {
    id: 5,
    symbol: "EURCHF",
    digits: 5,
    contractSize: "100,000",
    spread: "5",
    swapLong: "-3.47",
    swapShort: "-7.64",
    tradingHours: "00:00-24:00",
  },
  {
    id: 6,
    symbol: "EURGBP",
    digits: 5,
    contractSize: "100,000",
    spread: "2",
    swapLong: "-4.17",
    swapShort: "-1.39",
    tradingHours: "00:00-24:00",
  },
  {
    id: 7,
    symbol: "NZDUSD",
    digits: 5,
    contractSize: "100,000",
    spread: "4",
    swapLong: "-2.78",
    swapShort: "-2.78",
    tradingHours: "00:00-24:00",
  },
  {
    id: 8,
    symbol: "EURJPY",
    digits: 3,
    contractSize: "100,000",
    spread: "3",
    swapLong: "-2.5",
    swapShort: "-3.06",
    tradingHours: "00:00-24:00",
  },
  {
    id: 9,
    symbol: "USDCAD",
    digits: 5,
    contractSize: "100,000",
    spread: "8",
    swapLong: "-0.69",
    swapShort: "-4.86",
    tradingHours: "00:00-24:00",
  },
];
