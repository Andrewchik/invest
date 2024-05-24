"use client";

import { useTranslations, useLocale } from "next-intl";

import { Table } from "@/components";

import classes from "./account-types-content.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper<AccountType>();

interface AccountType {
  name: string;
  bronze: string;
  silver: string;
  gold: string;
  diamond: string;
  platinum: string;
  crystal: string;
  club: string;
}

export interface AccountTypesContentProps {
  className?: string;
}

const AccountTypesContent = (props: AccountTypesContentProps) => {
  const _className = useClassName(props.className, classes.container);

  const currentLocale = useLocale();

  const t = useTranslations("pages.account-types.table");

  const columns = [
    columnHelper.accessor((row) => row.name, {
      id: "name",
      header: "",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor((row) => row.bronze, {
      id: "bronze",
      header: t("headers.bronze"),
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor((row) => row.silver, {
      id: "silver",
      header: t("headers.silver"),
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor((row) => row.gold, {
      id: "gold",
      header: t("headers.gold"),
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor((row) => row.diamond, {
      id: "diamond",
      header: t("headers.diamond"),
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor((row) => row.platinum, {
      id: "platinum",
      header: t("headers.platinum"),
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor((row) => row.crystal, {
      id: "crystal",
      header: t("headers.crystal"),
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor((row) => row.club, {
      id: "club",
      header: t("headers.exclusive"),
      cell: (info) => info.getValue(),
    }),
  ];

  return (
    <Table
      className={_className}
      data={currentLocale === "en" ? dataEn : dataPL}
      columns={columns}
    />
  );
};

export default AccountTypesContent;

const dataEn: AccountType[] = [
  {
    name: "One on one tutoring",
    bronze: "$2,500",
    silver: "$5,000",
    gold: "$25,000",
    diamond: "$50,000",
    platinum: "$100,000+",
    crystal: "$250,000+",
    club: "$500,000+",
  },
  {
    name: "Spread",
    bronze: "Standard spreads\n(EUR/USD 1.7)",
    silver: "Standard spreads\n(EUR/USD 1.7)",
    gold: "Standard spreads\n(EUR/USD 1.2)",
    diamond: "Platinum spreads\n(EUR/USD 0.9)",
    platinum: "VIP spreads\n(EUR/USD 0.7)",
    crystal: "VIP spreads\n(EUR/USD 0.3)",
    club: "VIP spreads\n(EUR/USD 0.3)",
  },
  {
    name: "Webinars",
    bronze: "-",
    silver: "Access to webinars",
    gold: "Access to webinars",
    diamond: "Access to webinars",
    platinum: "Access to webinars",
    crystal: "Access to webinars",
    club: "Access to webinars",
  },
  {
    name: "One on one tutoring",
    bronze: "-",
    silver: "2 Per month",
    gold: "4 Per month",
    diamond: "8 Per month",
    platinum: "Unlimited",
    crystal: "Unlimited",
    club: "Unlimited",
  },
  {
    name: "Signals research",
    bronze: "Daily trading signals",
    silver: "Daily trading 10 signals",
    gold: "Daily trading 20 signals",
    diamond: "Daily trading 25 signals",
    platinum: "Daily trading 30 signals",
    crystal: "Unlimited signals",
    club: "Unlimited signals",
  },
  {
    name: "Commission reduction",
    bronze: "Reduced commission on stock CFDs (0,20%)",
    silver: "Reduced commission on stock CFDs (0,20%)",
    gold: "Reduced commission on stock CFDs (0,10%)",
    diamond: "Reduced commission on stock CFDs (0,10%)",
    platinum: "Reduced commission on stock CFDs (0,10%)",
    crystal: "Reduced commission on stock CFDs (0,10%)",
    club: "Reduced commission on stock CFDs (0,10%)",
  },
  {
    name: "Withdrawal fees",
    bronze: "$4",
    silver: "$3",
    gold: "$2",
    diamond: "$1",
    platinum: "$0",
    crystal: "$0",
    club: "Expedited withdrawals",
  },
  {
    name: "Ebooks",
    bronze: "Yes",
    silver: "Yes",
    gold: "Yes",
    diamond: "Yes",
    platinum: "Premium ebooks",
    crystal: "Premium ebooks",
    club: "Premium ebooks",
  },
  {
    name: "Access to premium contests",
    bronze: "-",
    silver: "-",
    gold: "Partial",
    diamond: "Yes",
    platinum: "VIP events",
    crystal: "Elite VIP events",
    club: "Access to corporate level trade events",
  },
  {
    name: "Margin booster",
    bronze: "10%",
    silver: "15%",
    gold: "25%",
    diamond: "50%",
    platinum: "65%",
    crystal: "75%",
    club: "75%",
  },
  {
    name: "Profile awareness boost",
    bronze: "-",
    silver: "-",
    gold: "-",
    diamond: "-",
    platinum: "Yes",
    crystal: "Yes",
    club: "Yes",
  },
];

const dataPL: AccountType[] = [
  {
    name: "Indywidualne korepetycje",
    bronze: "$2,500",
    silver: "$5,000",
    gold: "$25,000",
    diamond: "$50,000",
    platinum: "$100,000+",
    crystal: "$250,000+",
    club: "$500,000+",
  },
  {
    name: "Rozprzestrzenianie się",
    bronze: "Standardowe rozprzestrzenianie się\n(EUR/USD 1.7)",
    silver: "Standardowe rozprzestrzenianie się\n(EUR/USD 1.7)",
    gold: "Standardowe rozprzestrzenianie się\n(EUR/USD 1.2)",
    diamond: "Platynowe rozprzestrzenianie się\n(EUR/USD 0.9)",
    platinum: "VIP rozprzestrzenianie się\n(EUR/USD 0.7)",
    crystal: "VIP rozprzestrzenianie się\n(EUR/USD 0.3)",
    club: "VIP rozprzestrzenianie się\n(EUR/USD 0.3)",
  },
  {
    name: "Webinary",
    bronze: "-",
    silver: "Dostęp do webinariów",
    gold: "Dostęp do webinariów",
    diamond: "Dostęp do webinariów",
    platinum: "Dostęp do webinariów",
    crystal: "Dostęp do webinariów",
    club: "Dostęp do webinariów",
  },
  {
    name: "Indywidualne korepetycje",
    bronze: "-",
    silver: "2 miesięcznie",
    gold: "4 miesięcznie",
    diamond: "8 miesięcznie",
    platinum: "Bez ograniczeń",
    crystal: "Bez ograniczeń",
    club: "Bez ograniczeń",
  },
  {
    name: "Badania sygnałów",
    bronze: "Codzienne sygnały handlowe",
    silver: "Dziennie 10 sygnałów handlowych",
    gold: "Dziennie 20 sygnałów handlowych",
    diamond: "Dziennie 25 sygnałów handlowych",
    platinum: "Dziennie 30 sygnałów handlowych",
    crystal: "Nieograniczone sygnały",
    club: "Nieograniczone sygnały",
  },
  {
    name: "Redukcja prowizji",
    bronze: "Zredukowana prowizja na kontrakty CFD na akcje (0,20%)",
    silver: "Zredukowana prowizja na kontrakty CFD na akcje (0,20%)",
    gold: "Zredukowana prowizja na kontrakty CFD na akcje (0,10%)",
    diamond: "Zredukowana prowizja na kontrakty CFD na akcje (0,10%)",
    platinum: "Zredukowana prowizja na kontrakty CFD na akcje (0,10%)",
    crystal: "Zredukowana prowizja na kontrakty CFD na akcje (0,10%)",
    club: "Zredukowana prowizja na kontrakty CFD na akcje (0,10%)",
  },
  {
    name: "Opłaty za wypłatę",
    bronze: "$4",
    silver: "$3",
    gold: "$2",
    diamond: "$1",
    platinum: "$0",
    crystal: "$0",
    club: "Ekspresowe wypłaty",
  },
  {
    name: "Ebooki",
    bronze: "Tak",
    silver: "Tak",
    gold: "Tak",
    diamond: "Tak",
    platinum: "Ebooki premium",
    crystal: "Ebooki premium",
    club: "Ebooki premium",
  },
  {
    name: "Dostęp do premium konkursów",
    bronze: "-",
    silver: "-",
    gold: "Częściowy",
    diamond: "Tak",
    platinum: "Wydarzenia VIP",
    crystal: "Elitarne wydarzenia VIP",
    club: "Dostęp do wydarzeń handlowych na poziomie korporacyjnym",
  },
  {
    name: "Podniesienie marży",
    bronze: "10%",
    silver: "15%",
    gold: "25%",
    diamond: "50%",
    platinum: "65%",
    crystal: "75%",
    club: "75%",
  },
  {
    name: "Zwiększenie świadomości profilu",
    bronze: "-",
    silver: "-",
    gold: "-",
    diamond: "-",
    platinum: "Tak",
    crystal: "Tak",
    club: "Tak",
  },
];
