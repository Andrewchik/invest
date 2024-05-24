"use client";

import { useTranslations } from "next-intl";

import { NewsCard } from "@/cards";

import { Button } from "@/components";

import * as Components from "./components";

import classes from "./news-grid.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

import { useNewsGrid } from "./news-grid.hook";

export interface NewsGridProps {
  className?: string;
}

const NewsGrid = (props: NewsGridProps) => {
  const _className = useClassName(props.className, classes.container);

  const tRoot = useTranslations("root");

  const { category, setCategory } = useNewsGrid(props);

  return (
    <div className={_className}>
      <Components.Categories
        className={classes.categories}
        value={category}
        onChange={setCategory}
      />

      <div className={classes.content}>
        {items.map((item) => (
          <NewsCard key={item.id} />
        ))}
      </div>

      <footer className={classes.footer}>
        <Button
          className={classes.action}
          theme="outline"
          size="large"
          title={tRoot("load_more")}
        />
      </footer>
    </div>
  );
};

export default NewsGrid;

const items = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
