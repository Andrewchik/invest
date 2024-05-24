import { useTranslations } from "next-intl";

import { Section } from "@/components";

import * as Components from "./components";

import classes from "./about-us-team.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface AboutUsTeamProps {
  className?: string;
}

const AboutUsTeam = (props: AboutUsTeamProps) => {
  const _className = useClassName(props.className, classes.container);

  const t = useTranslations("pages.about-us.team");

  return (
    <Section
      className={_className}
      classNames={{ description: classes.description }}
      title={t("title")}
      description={t("description")}
    >
      <div className={classes.content}>
        {items.map((item) => (
          <Components.Item data={item} key={item.id} />
        ))}
      </div>
    </Section>
  );
};

export default AboutUsTeam;

const items: Team[] = [
  {
    id: "1",
    title: "Emily Johnson",
    position: "Chief Executive Officer",
    image: "/images/generated/teams/sophia-chen.webp",
  },
  {
    id: "2",
    title: "Sophia Chen",
    position: "Client Relations Manager",
    image: "/images/generated/teams/emily-johnson.webp",
  },
  {
    id: "3",
    title: "Alexander Smith",
    position: "Senior Investment Consultant",
    image: "/images/generated/teams/alexander-smith.webp",
  },
  {
    id: "4",
    title: "Maximilian Lin",
    position: "Business Development Director",
    image: "/images/generated/teams/maximilian-lin.webp",
  },
];
