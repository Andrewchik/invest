import * as Components from "./components";

import classes from "./layouts-auth-account.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface LayoutsAuthAccountProps {
  className?: string;
  children: React.ReactNode;
}

const LayoutsAuthAccount = (props: LayoutsAuthAccountProps) => {
  const _className = useClassName(props.className, classes.container);

  return (
    <div className={_className}>
      <Components.Confirm className={classes.confirm} />

      <h1 className={classes.title}>Select an Account</h1>

      {props.children}
    </div>
  );
};

export default LayoutsAuthAccount;
