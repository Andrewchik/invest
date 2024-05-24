import { useMemo } from "react";
import { useTranslations } from "next-intl";

import type { HomeProcessProps } from "./home-process";

const useHomeProcess = (props: HomeProcessProps) => {
  const t = useTranslations("pages.home.process");

  const items = useMemo(() => {
    const res = [
      {
        key: "application",
        icon: "/images/home/process/application.svg",
        title: t("items.application.title"),
        description: t("items.application.description"),
      },
      {
        key: "account",
        icon: "/images/home/process/account.svg",
        title: t("items.account.title"),
        description: t("items.account.description"),
      },
      {
        key: "get-started",
        icon: "/images/home/process/get-started.svg",
        title: t("items.get_started.title"),
        description: t("items.get_started.description"),
      },
    ];

    return res;
  }, []);

  return { items };
};

export { useHomeProcess };
