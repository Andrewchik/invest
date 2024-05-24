"use client";

import { forwardRef } from "react";
import type { Ref, ComponentProps } from "react";

import { EyeIcon } from "@/icons";

import classes from "./form-input.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

import { useFormInput } from "./form-input.hook";

export interface FormInputProps extends ComponentProps<"input"> {
  className?: string;
  error?: string;
  required?: boolean;
  hidden?: boolean;
}

export default forwardRef(function FormInputView(
  props: FormInputProps,
  ref?: Ref<HTMLInputElement>
) {
  const _className = useClassName(props.className, classes.container);

  const { type, hidden, setHidden } = useFormInput(props);

  return (
    <div
      className={_className}
      data-with-right={props.type === "password"}
      data-is-error={!!props.error}
    >
      <input {...props} ref={ref} className={classes.inner} type={type} />

      {props.type === "password" && (
        <EyeIcon className={classes.icon} onClick={() => setHidden(!hidden)} />
      )}
    </div>
  );
});
