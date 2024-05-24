import { useRef, useState } from "react";

import type { LayoutsRootHeaderMenuProps } from "./layouts-root-header-menu";

const useLayoutsRootHeaderMenu = (props: LayoutsRootHeaderMenuProps) => {
  const [open, setOpen] = useState(false);

  const nodeRef = useRef(null);

  return { nodeRef, open, setOpen };
};

export { useLayoutsRootHeaderMenu };
