"use client";

import { Collapse } from "react-collapse";

import * as Components from "./images";

import classes from "./careers-faqs-item.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface CareersFaqsItemProps {
  className?: string;
  data: Faq;
  active: boolean;
  onChange: (value: number) => void;
}

const CareersFaqsItem = (props: CareersFaqsItemProps) => {
  const _className = useClassName(props.className, classes.container);

  return (
    <div className={_className} data-active={props.active}>
      <div
        className={classes.header}
        onClick={() => props.onChange(props.data.id)}
      >
        <h4 className={classes.question}>{props.data.name}</h4>

        <Components.Arrow className={classes.arrow} />
      </div>

      <Collapse isOpened={props.active}>
        <p className={classes.answer}>{props.data.answer}</p>
      </Collapse>
    </div>
  );
};

export default CareersFaqsItem;
