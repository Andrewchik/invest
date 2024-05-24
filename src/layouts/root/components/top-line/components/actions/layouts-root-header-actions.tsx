"use client";

import { useTranslations } from "next-intl";
import { useSession } from "next-auth/react";

import { NextLink } from "@/navigation";

import { logout } from "@/requests/auth";

// import { Button } from "@/components";

import * as LocalImages from "./images";

import classes from "./layouts-root-header-actions.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface LayoutsRootHeaderActionsProps {
  className?: string;
}

const LayoutsRootHeaderActions = (props: LayoutsRootHeaderActionsProps) => {
  const _className = useClassName(props.className, classes.container);

  const { data: session, status } = useSession();

  const t = useTranslations("layouts.root.topline");

  return (
    <div className={_className}>
      {status === "unauthenticated" && (
        <>
          <NextLink className={classes.action} href="/login">
            <LocalImages.Login />
            {t("login")}
          </NextLink>
        </>
      )}

      {status === "authenticated" && (
        <>
          <div className={classes.action} onClick={() => logout()}>
            <LocalImages.Login
              style={{
                transform: `rotate(180deg)`,
              }}
            />
            {t("loguot")}
          </div>
        </>
      )}
    </div>
  );
};

export default LayoutsRootHeaderActions;
