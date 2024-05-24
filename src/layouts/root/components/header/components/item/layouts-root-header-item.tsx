// "use client";

import { NextLink } from "@/navigation";
import Image from "next/image";

// import { useModalNavigation } from "@/hooks/use-modal-nativation.hooks";

import styles from "./layouts-root-header-item.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface LayoutsRootHeaderItemViewProps {
  className?: string;
  title: string;
  href?: string;
  type?: "link" | "modal";
}

export default function LayoutsRootHeaderItemView({
  type = "link",
  ...props
}: LayoutsRootHeaderItemViewProps) {
  // const modalNavigation = useModalNavigation("menu");

  const _className = useClassName(props.className, styles.container);

  return type === "link" ? (
    <li className={_className}>
      <NextLink className={styles.content} href={props.href!}>
        <span className={styles.text}>{props.title}</span>
        <span className={styles.text}>{props.title}</span>
      </NextLink>
    </li>
  ) : (
    <li
      className={_className}
      // data-active={props.activeKey === modalNavigation.activeKey}
      // onClick={() => modalNavigation.onOpenModal(props.activeKey || "")}
    >
      <div className={styles.content}>
        <span className={styles.text}>
          {props.title}
          {type == "modal" && (
            <Image
              className={styles.icon}
              src="/images/icons/arrow-down.svg"
              width={10}
              height={7}
              alt="arrow"
            />
          )}
        </span>
        <span className={styles.text}>
          {props.title}

          {type == "modal" && (
            <Image
              className={styles.icon}
              src="/images/icons/arrow-down.svg"
              width={10}
              height={7}
              alt="arrow"
            />
          )}
        </span>
      </div>
    </li>
  );
}
