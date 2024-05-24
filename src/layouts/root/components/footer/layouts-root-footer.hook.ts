import { useMemo } from "react";
import { useTranslations } from "next-intl";

import type { LayoutsRootFooterProps } from "./layouts-root-footer";

const useLayoutsRootFooter = (props: LayoutsRootFooterProps) => {
  const t = useTranslations("layouts.root.footer.menu");

  const tradingItems = useMemo(() => {
    const res: IOption[] = [
      { label: t("trading.items.crypto"), value: "/crypto" },
      { label: t("trading.items.forex"), value: "/forex" },
      { label: t("trading.items.indices"), value: "/indices" },
      { label: t("trading.items.shares"), value: "/shares" },
      { label: t("trading.items.web_trader"), value: "/web-trader" },
    ];

    return res;
  }, []);

  const usefulLinksItems = useMemo(() => {
    const res: IOption[] = [
      { label: t("links.items.terms_conditions"), value: "/terms-conditions" },
      { label: t("links.items.privacy_policy"), value: "/privacy-policy" },
      { label: t("links.items.risk_disclosure"), value: "/risk-disclosure" },
      { label: t("links.items.aml_kyc"), value: "/aml-kyc" },
      {
        label: t("links.items.order_execution_policy"),
        value: "/order-execution-policy",
      },
      {
        label: t("links.items.client_categorization"),
        value: "/client-categorization",
      },
    ];

    return res;
  }, []);

  const companyItems = useMemo(() => {
    const res: IOption[] = [
      { label: t("company.items.about_us"), value: "/about-us" },
      { label: t("company.items.careers"), value: "/careers" },
      { label: t("company.items.news"), value: "/news" },
      { label: t("company.items.contacts"), value: "/contacts" },
      { label: t("company.items.account_types"), value: "/account-types" },
      {
        label: t("company.items.registration_address"),
        value: "/registration-address",
      },
    ];

    return res;
  }, []);

  return { tradingItems, usefulLinksItems, companyItems };
};

export { useLayoutsRootFooter };
