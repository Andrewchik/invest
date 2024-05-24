import { useTranslations } from "next-intl";

import { Section, Button } from "@/components";

import classes from "./web-trader-start.module.scss";

export interface WebTraderStartProps {
  className?: string;
}

const WebTraderStart = (props: WebTraderStartProps) => {
  const t = useTranslations("pages.web-trader.start");

  return (
    <Section
      classNames={{
        container: props.className,
        description: classes.description,
      }}
      title={t("title")}
      description={t("description")}
    >
      <Button className={classes.action} title={t("action")} size="large" />
    </Section>
  );
};

export default WebTraderStart;
