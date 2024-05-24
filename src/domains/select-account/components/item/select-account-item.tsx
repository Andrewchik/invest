import classes from "./select-account-item.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface SelectAccountItemProps {
  className?: string;
}

const SelectAccountItem = (props: SelectAccountItemProps) => {
  const _className = useClassName(props.className, classes.container);

  return (
    <div className={_className}>
      <h2 className={classes.title}>Individual brokerage accounts</h2>

      <p className={classes.description}>
        This is a general list of accounts the IB Group offers. Certain account
        types may not be available to you depending on local requirements. Enter
        your location and the account type you want to open and we will confirm
        it is offered in your area. Select one or more account types you wish to
        open. Some account types cannot be opened at the same time.
      </p>
    </div>
  );
};

export default SelectAccountItem;
