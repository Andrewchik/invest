import { NextLink } from "@/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { Section } from "@/components";

import { useSectionsInstruments } from "./sections-instruments.hook";

import classes from "./sections-instruments.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface SectionsInstrumentsProps {
  className?: string;
}

const SectionsInstruments = (props: SectionsInstrumentsProps) => {
  const _className = useClassName(props.className, classes.container);

  const t = useTranslations("sections.instruments");

  const { items } = useSectionsInstruments(props);

  return (
    <Section
      className={_className}
      title={t("title")}
      description={t("description")}
    >
      <div className={classes.content}>
        {items.map((item) => (
          <NextLink className={classes.item} href={item.href} key={item.key}>
            <Image
              className={classes.icon}
              src={item.icon}
              width={40}
              height={40}
              priority={true}
              alt="icon"
            />

            <h4 className={classes.title}>{item.title}</h4>
          </NextLink>
        ))}
      </div>
    </Section>
  );
};

export default SectionsInstruments;
