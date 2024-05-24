"use client";

import { useTranslations } from "next-intl";
import { useSession } from "next-auth/react";

import { Button } from "@/components";

import classes from "./layouts-root-header-actions.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface LayoutsRootHeaderActionsProps {
  className?: string;
}

const LayoutsRootHeaderActions = (props: LayoutsRootHeaderActionsProps) => {
  const _className = useClassName(props.className, classes.container);

  const { data: session, status } = useSession();

  const t = useTranslations("layouts.root.header.actions");

  return (
    <div className={_className}>
      {status === "unauthenticated" && (
        <>
          <Button theme="outline" title={t("sign_up")} href="/singup" />

          <Button title={t("open_account")} href="/login" />
        </>
      )}

      {status === "authenticated" && (
        <>
          <Button theme="outline" title={"Profile"} href="/trading" />
        </>
      )}
    </div>
  );
};

export default LayoutsRootHeaderActions;
