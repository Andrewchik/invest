import { Button } from "@/components";

import { ArrowRight } from "@/icons";

import classes from "./layouts-auth-account-confirm.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface LayoutsAuthAccountConfirmProps {
  className?: string;
}

const LayoutsAuthAccountConfirm = (props: LayoutsAuthAccountConfirmProps) => {
  const _className = useClassName(props.className, classes.container);

  return (
    <div className={_className}>
      <div className={classes.content}>
        <h3 className={classes.title}>
          Check your email and confirm your email address
        </h3>

        <p className={classes.description}>
          Note that verifying your email address is mandatory before we can
          approve your account. globalinvestment@gmail.com
        </p>

        <div className={classes.action}>
          <span>Change email address</span>

          <ArrowRight />
        </div>
      </div>

      <Button size="large" title="Confirm" />
    </div>
  );
};

export default LayoutsAuthAccountConfirm;
