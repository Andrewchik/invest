"use client";

import { useLocale } from "next-intl";
import { useMemo, ChangeEvent, useTransition } from "react";

import { usePathname, useRouter } from "@/navigation";

import type { LangSelectViewProps } from "./lang-select.view";

const useLangSelect = (props: LangSelectViewProps) => {
  const currentLocale = useLocale();

  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const label = useMemo(() => {
    let labels = {
      en: "English",
      pl: "Polski",
    };

    return labels[currentLocale as "en" | "pl"];
  }, [currentLocale]);

  function handleChangeLocale(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;

    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return { currentLocale, label, onChangeLocale: handleChangeLocale };
};

export { useLangSelect };
