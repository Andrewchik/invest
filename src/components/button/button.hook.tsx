import type { MouseEvent as ReactMouseEvent } from "react";

import { useCallback } from "react";

import { useRouter } from "next/navigation";

import type { ButtonProps } from "./button";

const useButton = (props: ButtonProps) => {
  const router = useRouter();

  const onClick = useCallback(
    (event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (props.disabled) {
        return;
      }

      if (props.href) {
        if (props.target === "_blank") {
          window.open(props.href, "_blank");
        } else {
          router.push(props.href);
        }
      } else if (props.onClick) {
        props.onClick(event);
      }
    },
    [props.disabled, props.href, props.onClick, props.target]
  );

  return { onClick };
};

export { useButton };
