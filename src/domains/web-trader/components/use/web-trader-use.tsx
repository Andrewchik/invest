import Image from "next/image";

import { useWebTraderUse } from "./web-trader-use.hook";

import { SectionSecond } from "@/components";

import { AdvantagesGridSection } from "@/sections";

import classes from "./web-trader-use.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface WebTraderUseProps {
  className?: string;
}

const WebTraderUse = (props: WebTraderUseProps) => {
  const _className = useClassName(props.className, classes.container);

  const { items } = useWebTraderUse(props);

  return (
    <SectionSecond
      reverse
      className={_className}
      classNames={{ content: classes.content, info: classes.info }}
      title="Why use Web trader?"
      description="Web Trader simplifies trading with its secure, user-friendly platform accessible from any web browser. Benefit from real-time data and convenient tools, whether you're a seasoned trader or just starting out."
      ImageComponent={
        <Image
          className={classes.image}
          src="/images/web-trader/use.webp"
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

export default WebTraderUse;
