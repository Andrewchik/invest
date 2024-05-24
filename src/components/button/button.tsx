"use client";

import type { ComponentProps, ReactNode, MouseEventHandler } from "react";

import classes from "./button.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

import { useButton } from "./button.hook";

export interface ButtonProps extends ComponentProps<"button"> {
  className?: string;
  title: string;
  theme?: "base" | "outline" | "transparent";
  animation?: "base" | "opacity" | "scale" | "background";
  size?: "base" | "large";
  href?: string;
  target?: string;
  LeftComponent?: ReactNode;
  RightComponent?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button(_props: ButtonProps) {
  const {
    className,
    title,
    theme = "base",
    animation = "base",
    size,
    LeftComponent,
    RightComponent,
    ...props
  } = _props;

  const { onClick } = useButton(_props);

  const _className = useClassName(className, classes.container);

  return (
    <button
      {...props}
      className={_className}
      data-size={size}
      data-theme={theme}
      data-animation={animation}
      onClick={onClick}
    >
      <div className={classes.background} />

      {!!LeftComponent && <span className={classes.left}>{LeftComponent}</span>}

      {title}

      {!!RightComponent && (
        <span className={classes.right}>{RightComponent}</span>
      )}
    </button>
  );
}
