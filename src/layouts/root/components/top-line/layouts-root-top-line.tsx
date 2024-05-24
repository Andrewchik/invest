import { NextLink } from "@/navigation";
import { useTranslations } from "next-intl";

import { LangSelect } from "@/components";

// import * as LocalImages from "./images";

import * as Components from "./components";

import classes from "./layouts-root-top-line.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface LayoutsRootTopLineProps {
  className?: string;
}

const LayoutsRootTopLine = (props: LayoutsRootTopLineProps) => {
  const _className = useClassName(props.className, classes.container);

  // const _classNameAction = useClassName(classes.item, classes.action);

  const tRoot = useTranslations("root.pages");
  const t = useTranslations("layouts.root.topline");

  return (
    <div className={_className}>
      <div className={classes.section}>
        <nav>
          <ul className={classes.list}>
            <li className={classes.item}>
              <NextLink href="/about-us">{tRoot("about_us")}</NextLink>
            </li>

            <li className={classes.item}>
              <NextLink href="/careers">{tRoot("careers")}</NextLink>
            </li>
          </ul>
        </nav>

        <Components.Action className={classes.item} />

        {/* <NextLink className={_classNameAction} href="/login">
          <LocalImages.Login />
          {t("login")}
        </NextLink> */}

        <LangSelect />
      </div>
    </div>
  );
};
export default LayoutsRootTopLine;
