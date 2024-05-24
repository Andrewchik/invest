import { Scroll } from "@/components";

import * as Components from "./components";

import classes from "./layouts-root.module.scss";

export interface LayoutsRootProps {
  children: React.ReactNode;
}

const LayoutsRoot = (props: LayoutsRootProps) => {
  return (
    <Scroll className={classes.container}>
      <Components.TopLine />

      <Components.Header />

      <main>{props.children}</main>

      <Components.Footer />
    </Scroll>
  );
};
export default LayoutsRoot;
