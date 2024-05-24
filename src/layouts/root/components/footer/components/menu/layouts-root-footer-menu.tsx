import { NextLink } from "@/navigation";

import styles from "./layouts-root-footer-menu.module.scss";

export default function LayoutsRootFooterMenu({
  className,
  title,
  items,
  onClick,
}: {
  className?: string;
  title: string;
  items: IOption[];
  onClick?: (value: string) => void;
}) {
  return (
    <div className={className}>
      <h4 className={styles.title}>{title}</h4>

      <menu className={styles.menu}>
        {items?.map((item) => (
          <li key={item.value}>
            <NextLink className={styles.link} href={item.value}>
              <span>{item.label}</span>
            </NextLink>
          </li>
        ))}
      </menu>
    </div>
  );
}
