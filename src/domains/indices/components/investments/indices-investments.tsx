import Image from "next/image";
import { useTranslations } from "next-intl";

import { useIndicesInvestments } from "./indices-investments.hook";

import { SectionSecond } from "@/components";

import { AdvantagesGridSection } from "@/sections";

import classes from "./indices-investments.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface IndicesInvestmentsProps {
  className?: string;
}

const IndicesInvestments = (props: IndicesInvestmentsProps) => {
  const _className = useClassName(props.className, classes.container);

  const t = useTranslations("pages.indices.investments");

  const { items } = useIndicesInvestments(props);

  return (
    <SectionSecond
      reverse
      className={_className}
      classNames={{ content: classes.content, info: classes.info }}
      title={t("title")}
      description={t("description")}
      ImageComponent={
        <Image
          className={classes.image}
          src="/images/indices/investments.webp"
          width={624}
          height={1256}
          priority={true}
          alt="backgound image"
        />
      }
    >
      <AdvantagesGridSection items={items} />
    </SectionSecond>
  );
};

export default IndicesInvestments;
