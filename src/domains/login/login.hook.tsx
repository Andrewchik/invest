import { useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { StringSchema } from "yup";
import "yup-phone-lite";
import toast from "react-hot-toast";

import validation from "@/configs/validation";

import { authenticate } from "@/requests/auth";

import { useRouter } from "@/navigation";

import type { LoginProps } from "./login";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

type FormData = yup.InferType<typeof schema>;

const useLogin = (props: LoginProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const {
    control,
    register,
    getValues,
    handleSubmit,
    formState: { errors },
    // watch,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {},
  });

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);

    // console.log("data", data);

    try {
      let res = await authenticate(data);

      // console.log("res", res);

      if (!res?.status) {
        if (!!res?.error)
          toast.error(res.error, {
            duration: 3000,
          });
      }

      // router.push("/");

      // router.replace("/trading");
      // router.refresh();

      // if (res.success) {
      setSubmitted(true);
      // }

      setLoading(false);
    } catch (error) {
      console.log("error", error);

      toast.error(error as string, {
        duration: 3000,
      });

      setLoading(false);
    }
  });

  return {
    control,
    register,
    errors,
    submitted,
    loading,
    getValues,
    onSubmit,
  };
};

export { useLogin };
