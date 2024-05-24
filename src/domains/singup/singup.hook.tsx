import { useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { StringSchema } from "yup";
import "yup-phone-lite";
import toast from "react-hot-toast";

import { useRouter } from "@/navigation";

import validation from "@/configs/validation";

import { singup } from "@/requests/auth";

import type { SingupProps } from "./singup";

const schema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  country: yup.string().required(),
  password: yup.string().required(),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match"),
  agree: yup.bool().oneOf([true], "Field must be checked"),
});

type FormData = yup.InferType<typeof schema>;

const useSingUp = (props: SingupProps) => {
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
    defaultValues: {
      agree: false,
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);

    // console.log("data", data);

    try {
      let res = await singup(data);

      console.log("res", res);

      // if (!!res?.user) {
      //   setSubmitted(true);

      //   router.replace("/login");
      // }

      if (!res?.status) {
        if (!!res?.error)
          toast.error(res.error, {
            duration: 3000,
          });
      } else {
        setSubmitted(true);

        router.replace("/login");
      }

      setLoading(false);
    } catch (error) {
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

export { useSingUp };
