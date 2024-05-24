import classes from "./news-grid-categories.module.scss";

import { useNewsGridCategories } from "./news-grid-categories.hook";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface NewsGridCategoriesProps {
  className?: string;
  value: string;
  onChange: (value: string) => void;
}

const NewsGridCategories = (props: NewsGridCategoriesProps) => {
  const _className = useClassName(props.className, classes.container);

  const { items } = useNewsGridCategories(props);

  return (
    <div className={_className}>
      {items.map((item) => (
        <div
          className={classes.item}
          data-active={props.value === item.value}
          key={item.value}
          onClick={() => props.onChange(item.value)}
        >
          <span className={classes.label}>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default NewsGridCategories;
