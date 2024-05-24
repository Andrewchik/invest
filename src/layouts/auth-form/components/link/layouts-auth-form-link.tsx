import NextLink from "next/link";

import classes from "./layouts-auth-form-link.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface LayoutsAuthFormLinkProps {
  className?: string;
  description: string;
  link: string;
  href: string;
}

const LayoutsAuthFormLink = (props: LayoutsAuthFormLinkProps) => {
  const _className = useClassName(props.className, classes.container);

  return (
    <p className={_className}>
      {props.description}{" "}
      <NextLink className={classes.link} href={props.href}>
        {props.link}
      </NextLink>
    </p>
  );
};

export default LayoutsAuthFormLink;
