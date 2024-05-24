import NextLink from "next/link";
import Image from "next/image";

import { LangSelect } from "@/components";

import classes from "./layouts-auth-header.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface LayoutsAuthHeaderProps {
  className?: string;
}

const LayoutsAuthHeader = (props: LayoutsAuthHeaderProps) => {
  const _className = useClassName(props.className, classes.container);

  return (
    <div className={_className}>
      <div className={classes.content}>
        <NextLink className={classes.logo} href="/">
          <Image
            src="/images/logo-dark.svg"
            width={225}
            height={30}
            priority={true}
            alt="Global Investment"
          />
        </NextLink>

        <LangSelect />
      </div>
    </div>
  );
};

export default LayoutsAuthHeader;
