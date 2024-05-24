import { forwardRef } from "react";
import type { Ref, ComponentProps } from "react";

import classes from "./form-textarea.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface FormTextareaViewProps extends ComponentProps<"textarea"> {
  className?: string;
  required?: boolean;
}

export default forwardRef(function FormTextareaView(
  props: FormTextareaViewProps,
  ref?: Ref<HTMLTextAreaElement>
) {
  const _className = useClassName(props.className, classes.inner);

  return <textarea {...props} className={_className} ref={ref} />;
});
