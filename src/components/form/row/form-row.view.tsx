import type { ReactNode } from "react";

import styles from "./form-row.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface FormRowViewProps {
  className?: string;
  full?: boolean;
  children: ReactNode;
}

export default function FormRowView(props: FormRowViewProps) {
  const _className = useClassName(props.className, styles.container);

  return (
    <div className={_className} data-full={props.full}>
      {props.children}
    </div>
  );
}
