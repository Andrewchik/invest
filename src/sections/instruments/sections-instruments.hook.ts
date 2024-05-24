import { useMemo } from "react";
import { useTranslations } from "next-intl";

import type { SectionsInstrumentsProps } from "./sections-instruments";

const useSectionsInstruments = (props: SectionsInstrumentsProps) => {
  const t = useTranslations("sections.instruments.menu");

  const items = useMemo(() => {
    const res = [
      {
        key: "forex",
        icon: "/images/home/instruments/forex.svg",
        title: t("forex"),
        href: "/forex",
      },
      {
        key: "crypto",
        icon: "/images/home/instruments/crypto.svg",
        title: t("crypto"),
        href: "/crypto",
      },
      {
        key: "indices",
        icon: "/images/home/instruments/indices.svg",
        title: t("indices"),
        href: "/indices",
      },
      {
        key: "shares",
        icon: "/images/home/instruments/shares.svg",
        title: t("shares"),
        href: "/shares",
      },
    ];

    return res;
  }, []);

  return { items };
};

export { useSectionsInstruments };
