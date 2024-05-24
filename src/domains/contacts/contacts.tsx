import NextLink from "next/link";
import { useTranslations } from "next-intl";

import {
  FormInput,
  FormTextarea,
  FormRow,
  FormCheckbox,
} from "@/components/form";

import { Button } from "@/components";

import * as Components from "./components";

import classes from "./contacts.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface ContactsProps {
  className?: string;
}

const Contacts = (props: ContactsProps) => {
  const _className = useClassName(props.className, classes.container);

  const tRoot = useTranslations("root");
  const t = useTranslations("pages.contacts");

  return (
    <div className={_className}>
      <div className={classes.info}>
        <h1 className={classes.title}>{t("title")}</h1>

        <p className={classes.description}>{t("description")}</p>

        <Components.Address className={classes.address} />
      </div>

      <form className={classes.form}>
        <div>
          <FormRow>
            <FormInput required placeholder={`${tRoot("form.name")}*`} />
          </FormRow>

          <FormRow>
            <FormInput required placeholder={`${tRoot("form.email")}*`} />

            <FormInput required placeholder={`${tRoot("form.phone")}*`} />
          </FormRow>

          <FormRow>
            <FormInput required placeholder={`${tRoot("form.subject")}*`} />
          </FormRow>

          <FormRow>
            <FormTextarea required placeholder={`${tRoot("form.message")}*`} />
          </FormRow>
        </div>

        <FormCheckbox
          className={classes.checkbox}
          label={
            <>
              {tRoot.rich("agree", {
                privacyPolicy: (chunks) => (
                  <NextLink href="/privacy-policy">{chunks}</NextLink>
                ),
                termsConditions: (chunks) => (
                  <NextLink href="/terms-conditions">{chunks}</NextLink>
                ),
              })}
            </>
          }
        />

        <Button title={tRoot("send")} size="large" />
      </form>
    </div>
  );
};

export default Contacts;
