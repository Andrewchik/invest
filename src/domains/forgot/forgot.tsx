import { useTranslations } from "next-intl";

import AuthFormLayout, { AuthFormLayoutLink } from "@/layouts/auth-form";

import { Button } from "@/components";

import { FormInput, FormRow } from "@/components/form";

import classes from "./forgot.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

export interface ForgotProps {
  className?: string;
}

const Forgot = (props: ForgotProps) => {
  const _className = useClassName(props.className, classes.container);

  const tRoot = useTranslations("root");
  const t = useTranslations("pages.forgot");

  return (
    <AuthFormLayout
      className={_className}
      title={t("title")}
      description={t("description")}
    >
      <div className={classes.content}>
        <FormRow>
          <FormInput placeholder={`${tRoot("form.email")}*`} />
        </FormRow>
      </div>

      <Button title={t("action")} size="large" />

      <AuthFormLayoutLink
        description={t("other.description")}
        link={t("other.link")}
        href="/login"
      />
    </AuthFormLayout>
  );
};

export default Forgot;
