"use client";

import { useTranslations } from "next-intl";

import { SectionSecond } from "@/components";

import * as Components from "./components";

import classes from "./careers-faqs.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

import { useCareersFaqs } from "./сareers-faqs.hook";

export interface CareersFaqsProps {
  className?: string;
}

const CareersFaqs = (props: CareersFaqsProps) => {
  const _className = useClassName(props.className, classes.container);

  const t = useTranslations("pages.careers.faqs");

  const { items, activeId, onChangeActiveId } = useCareersFaqs(props);

  return (
    <SectionSecond
      reverse
      className={_className}
      classNames={{ description: classes.description }}
      title={t("title")}
      description={t("description")}
      LeftComponent={
        <div className={classes.content}>
          {items.map((item) => (
            <Components.Item
              data={item}
              active={activeId === item.id}
              key={item.id}
              onChange={(value) => onChangeActiveId(value)}
            />
          ))}
        </div>
      }
    />
  );
};

export default CareersFaqs;

// const items: Faq[] = [
//   {
//     id: 1,
//     name: "What benefits does our company offer to new employees?",
//     answer:
//       "We provide ample opportunities for career development and advancement, helping employees achieve their career goals in our company.",
//   },
//   {
//     id: 2,
//     name: "What are the core values of our company?",
//     answer:
//       "We provide ample opportunities for career development and advancement, helping employees achieve their career goals in our company.",
//   },
//   {
//     id: 3,
//     name: "What are the prospects for career growth in our company?",
//     answer:
//       "We provide ample opportunities for career development and advancement, helping employees achieve their career goals in our company.",
//   },
//   {
//     id: 4,
//     name: "What social events does our company organize?",
//     answer:
//       "We provide ample opportunities for career development and advancement, helping employees achieve their career goals in our company.",
//   },
//   {
//     id: 5,
//     name: "Is it possible to work remotely?",
//     answer:
//       "We provide ample opportunities for career development and advancement, helping employees achieve their career goals in our company.",
//   },
//   {
//     id: 6,
//     name: "What are the opportunities for growth in the company?",
//     answer:
//       "We provide ample opportunities for career development and advancement, helping employees achieve their career goals in our company.",
//   },
// ];
