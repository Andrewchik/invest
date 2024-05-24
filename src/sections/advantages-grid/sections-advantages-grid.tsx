import * as Components from "./components";

import classes from "./sections-advantages-grid.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface SectionsAdvantagesGridProps {
  className?: string;
  items: any[];
}

const SectionsAdvantagesGrid = (props: SectionsAdvantagesGridProps) => {
  const _className = useClassName(props.className, classes.container);

  return (
    <div className={_className}>
      {props.items.map((item) => (
        <Components.Item
          title={item.title}
          description={item.description}
          icon={item.icon}
          key={item.key}
        />
      ))}
    </div>
  );
};

export default SectionsAdvantagesGrid;
