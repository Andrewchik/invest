"use client";

import NextLink from "next/link";
import { useTranslations } from "next-intl";

import AuthFormLayout, { AuthFormLayoutLink } from "@/layouts/auth-form";

import { Button } from "@/components";

import { FormInput, FormRow } from "@/components/form";

import classes from "./login.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";
import { useLogin } from "./login.hook";

export interface LoginProps {
  className?: string;
}

const Login = (props: LoginProps) => {
  const _className = useClassName(props.className, classes.container);

  const tRoot = useTranslations("root.form");
  const t = useTranslations("pages.login");

  const { control, register, errors, submitted, loading, getValues, onSubmit } =
    useLogin(props);

  return (
    <AuthFormLayout className={_className} title={t("title")}>
      <div className={classes.content}>
        <FormRow>
          <FormInput
            {...register("email")}
            placeholder={tRoot("account")}
            error={errors.email?.message}
            type="email"
          />
        </FormRow>

        <FormRow>
          <FormInput
            {...register("password")}
            placeholder={tRoot("password")}
            error={errors.password?.message}
            type="password"
          />
        </FormRow>
      </div>

      <NextLink className={classes.forgot} href="/forgot">
        {t("forgot")}
      </NextLink>

      <Button title={t("action")} size="large" onClick={onSubmit} />

      <AuthFormLayoutLink
        description={t("other.description")}
        link={t("other.link")}
        href="/singup"
      />
    </AuthFormLayout>
  );
};

export default Login;
