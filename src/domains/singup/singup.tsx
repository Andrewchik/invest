"use client";

import NextLink from "next/link";
import { useTranslations } from "next-intl";
import { Controller } from "react-hook-form";

import AuthFormLayout, { AuthFormLayoutLink } from "@/layouts/auth-form";

import { Button } from "@/components";

import { FormInput, FormRow, FormCheckbox } from "@/components/form";

import classes from "./singup.module.scss";

import { useClassName } from "@/hooks/use-class-name.hook";

import { useSingUp } from "./singup.hook";

export interface SingupProps {
  className?: string;
}

const Singup = (props: SingupProps) => {
  const _className = useClassName(props.className, classes.container);

  const tRoot = useTranslations("root");
  const t = useTranslations("pages.singup");

  const { control, register, errors, submitted, loading, getValues, onSubmit } =
    useSingUp(props);

  return (
    <AuthFormLayout className={_className} title={t("title")}>
      <div className={classes.content}>
        <FormRow>
          <FormInput
            {...register("username")}
            placeholder={`${tRoot("form.name")}*`}
            error={errors.username?.message}
          />
        </FormRow>

        <FormRow>
          <FormInput
            {...register("email")}
            placeholder={`${tRoot("form.email")}*`}
            type="email"
            error={errors.email?.message}
          />

          <FormInput
            {...register("phone")}
            placeholder={`${tRoot("form.phone")}*`}
            error={errors.phone?.message}
          />
        </FormRow>

        <FormRow>
          <FormInput
            {...register("country")}
            placeholder={`${tRoot("form.country")}*`}
            error={errors.country?.message}
          />
        </FormRow>

        <FormRow>
          <FormInput
            {...register("password")}
            placeholder={`${tRoot("form.password")}*`}
            type="password"
            error={errors.password?.message}
          />
        </FormRow>

        <FormRow>
          <FormInput
            {...register("confirm_password")}
            placeholder={`${tRoot("form.confirm_password")}*`}
            type="password"
            error={errors.confirm_password?.message}
          />
        </FormRow>
      </div>

      <Controller
        name="agree"
        control={control}
        render={({ field }) => (
          <>
            <FormCheckbox
              className={classes.checkbox}
              // {...register("agree")}
              value={field.value}
              onChage={field.onChange}
              error={errors.agree?.message}
              label={tRoot.rich("agree", {
                privacyPolicy: (chunks) => (
                  <NextLink href="/privacy-policy">{chunks}</NextLink>
                ),
                termsConditions: (chunks) => (
                  <NextLink href="/terms-conditions">{chunks}</NextLink>
                ),
              })}
            />
            {/* <FormSelect
                    {...field}
                    className={styles.channel}
                    required
                    label="Contact channel"
                    options={channelOptions}
                    error={errors.channel?.message}
                  /> */}
          </>
        )}
      />

      <Button title={t("action")} size="large" onClick={onSubmit} />

      <AuthFormLayoutLink
        description={t("other.description")}
        link={t("other.link")}
        href="/login"
      />
    </AuthFormLayout>
  );
};

export default Singup;
