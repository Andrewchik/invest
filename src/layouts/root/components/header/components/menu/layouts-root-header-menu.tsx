"use client";

import NextLink from "next/link";

import { CSSTransition } from "react-transition-group";

import classes from "./layouts-root-header-menu.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

import { useLayoutsRootHeaderMenu } from "./layouts-root-header-menu.hook";

export interface LayoutsRootHeaderMenuProps {
  className?: string;
  children: React.ReactNode;
  items: Menu[];
}

const LayoutsRootHeaderMenu = (props: LayoutsRootHeaderMenuProps) => {
  const _className = useClassName(props.className, classes.container);

  const { nodeRef, open, setOpen } = useLayoutsRootHeaderMenu(props);

  return (
    <div
      className={_className}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {props.children}

      <CSSTransition
        in={open}
        nodeRef={nodeRef}
        timeout={400}
        classNames={{
          enterActive: classes["overlay-enter-active"],
          enterDone: classes["overlay-enter-active"],
          exitActive: classes["overlay-exit-active"],
          exitDone: classes["overlay-exit-active"],
        }}
        unmountOnExit
        onExited={() => setOpen(false)}
      >
        <div ref={nodeRef} className={classes.wrapper}>
          <ul className={classes.content}>
            {props.items.map((item) => (
              <li className={classes.item} key={item.key}>
                <NextLink href={item.href}>
                  <span className={classes.title}>{item.label}</span>
                </NextLink>
              </li>
            ))}
          </ul>
        </div>
      </CSSTransition>
    </div>
  );
};

export default LayoutsRootHeaderMenu;
