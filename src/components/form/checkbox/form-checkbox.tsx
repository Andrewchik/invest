"use client";

import * as LocalImages from "./images";

import classes from "./form-checkbox.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface FormCheckboxProps {
  className?: string;
  label: React.ReactNode;
  value?: boolean;
  error?: string;
  onChage?: (value: boolean) => void;
}

const FormCheckbox = (props: FormCheckboxProps) => {
  const _className = useClassName(props.className, classes.container);

  return (
    <div className={_className}>
      <div
        className={classes.inner}
        data-is-error={!!props.error}
        onClick={() => !!props.onChage && props.onChage(!props.value)}
      >
        {props.value ? <LocalImages.InnerActive /> : <LocalImages.Inner />}
      </div>

      {!!props.label && <span className={classes.label}>{props.label}</span>}
    </div>
  );
};

export default FormCheckbox;
