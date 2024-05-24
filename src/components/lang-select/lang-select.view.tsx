"use client";

import { CurretIcon } from "@/icons";

import classes from "./lang-select.module.scss";

import { useLangSelect } from "./lang-select.hook";
import { useClassName } from "@/hooks/use-class-name.hook";

export interface LangSelectViewProps {
  className?: string;
}

export default function LangSelectView(props: LangSelectViewProps) {
  const _className = useClassName(props.className, classes.container);

  const { currentLocale, label, onChangeLocale } = useLangSelect(props);

  return (
    <div className={_className}>
      <span className={classes.value}>{label}</span>

      <CurretIcon className={classes.icon} />

      <select
        className={classes.select}
        value={currentLocale}
        onChange={onChangeLocale}
      >
        <option value="en">English</option>
        <option value="pl">Polski</option>
      </select>
    </div>
  );
}
