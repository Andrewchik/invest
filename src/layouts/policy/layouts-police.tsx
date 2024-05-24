import Markdown from "markdown-to-jsx";

import classes from "./layouts-police.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface LayoutsPoliceProps {
  className?: string;
  content: string;
}

const LayoutsPolice = (props: LayoutsPoliceProps) => {
  const _className = useClassName(props.className, classes.container);

  return (
    <Markdown
      className={_className}
      options={{
        forceBlock: true,
        forceWrapper: true,
      }}
    >
      {props.content}
    </Markdown>
  );
};

export default LayoutsPolice;
