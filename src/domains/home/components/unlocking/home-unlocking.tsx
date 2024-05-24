import Image from "next/image";
import { useTranslations } from "next-intl";

import { SectionSecond } from "@/components";

import { useHomeUnlocking } from "./home-unlocking.hook";

import classes from "./home-unlocking.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface HomeUnlockingProps {
  className?: string;
}

const HomeUnlocking = (props: HomeUnlockingProps) => {
  const _className = useClassName(props.className, classes.container);

  const t = useTranslations("pages.home.unlocking");

  const { items } = useHomeUnlocking(props);

  return (
    <SectionSecond
      reverse
      className={_className}
      classNames={{ content: classes.content }}
      title={t("title")}
      description={t("description")}
      ImageComponent={
        <Image
          className={classes.image}
          src="/images/home/unlocking.webp"
          width={617}
          height={1260}
          priority={true}
          alt="backgound image"
        />
      }
    >
      <div className={classes.list}>
        {items?.map((item, index) => (
          <div className={classes.item} key={index}>
            <div className={classes["item__header"]}>
              <Image
                className={classes.icon}
                src={item.icon}
                width={36}
                height={36}
                alt="icon"
              />

              <h4 className={classes.title}>{item.title}</h4>
            </div>

            <p className={classes.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </SectionSecond>
  );
};

export default HomeUnlocking;
