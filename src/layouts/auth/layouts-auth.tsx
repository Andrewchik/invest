import * as Components from "./components";

import classes from "./layouts-auth.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface LayoutsAuthProps {
  children: React.ReactNode;
  className?: string;
}

const LayoutsAuth = (props: LayoutsAuthProps) => {
  const _className = useClassName(props.className, classes.container);

  return (
    <div className={_className}>
      <Components.Header />

      {props.children}
    </div>
  );
};

export default LayoutsAuth;
