import * as LocalImages from "./images";

import classes from "./trading-aside.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface TradingAsideProps {
  className?: string;
}

export const TradingAside = (props: TradingAsideProps) => {
  const _className = useClassName(props.className, classes.container);

  return (
    <aside className={_className}>
      <h2 className={classes.title}>Menu</h2>

      <div className={classes.group}>
        <div className={classes.item}>
          <LocalImages.User />
        </div>

        <div className={classes.item}>
          <LocalImages.Book />
        </div>

        <div className={classes.item}>
          <LocalImages.Sms />
        </div>

        <div className={classes.item}>
          <LocalImages.Card />
        </div>
      </div>

      <div className={classes.group}>
        <div className={classes.item}>
          <LocalImages.Gift />
        </div>

        <div className={classes.item}>
          <LocalImages.Calendar />
        </div>

        <div className={classes.item}>
          <LocalImages.Clock />
        </div>
      </div>

      <div className={classes.group}>
        <div className={classes.item}>
          <LocalImages.Notification />
        </div>

        <div className={classes.item}>
          <LocalImages.Settings />
        </div>
      </div>
    </aside>
  );
};
