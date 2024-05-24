import AuthAccount from "@/layouts/auth-account";

import * as Components from "./components";

import classes from "./select-account.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface SelectAccountProps {
  className?: string;
}

const SelectAccount = (props: SelectAccountProps) => {
  const _className = useClassName(props.className, classes.container);

  return (
    <AuthAccount>
      <div className={_className}>
        <Components.Item />

        <Components.Item />
      </div>
    </AuthAccount>
  );
};

export default SelectAccount;
