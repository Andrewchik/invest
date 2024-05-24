import { useMemo } from "react";

import { clsx, ClassArray } from "clsx";

export const useClassName = (...args: ClassArray) => {
  // const className = useMemo(() => {
  //   return clsx(args);
  // }, [args]);

  return clsx(args);
};
