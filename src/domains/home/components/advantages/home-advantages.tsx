import classes from "./home-advantages.module.scss";

import { useHomeAdvantages } from "./home-advantages.hook";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface HomeAdvantagesProps {
  className?: string;
}

const HomeAdvantages = (props: HomeAdvantagesProps) => {
  const _className = useClassName(props.className, classes.container);

  const { items } = useHomeAdvantages(props);

  return (
    <div className={_className}>
      {items.map((item) => (
        <div className={classes.item} key={item.label}>
          <span className={classes.value}>{item.value}</span>

          <span className={classes.label}>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default HomeAdvantages;
