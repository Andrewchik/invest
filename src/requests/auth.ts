"use server";

import { signIn, signOut, auth } from "../../auth";
import { AuthError } from "next-auth";

export async function authenticate(
  // prevState: string | undefined,
  formData: any
) {
  try {
    await signIn("credentials", {
      ...formData,
      // redirect: false,
      redirectTo: "/trading",
      callbackUrl: "/",
    });

    return { status: true };
  } catch (error) {
    if (error instanceof AuthError) {
      let message = "";

      console.log("error.type", error.type);

      if (error.type === "CredentialsSignin") {
        message = "Invalid credentials.";
      } else {
        message = "Something went wrong.";
      }

      // switch (error.type) {
      //   case "CredentialsSignin":
      //     message = "Invalid credentials.";
      //   default:
      //     message = "Something went wrong.";
      // }

      return { status: false, error: message };
    }

    throw error;
  }
}

export async function logout() {
  await signOut({
    redirectTo: "/login",
  });
}

// export async function getSession() {
//   // return await auth();
//   const url = `${process.env.NEXT_PUBLIC_URL_BASE}/api/session`;

//   // console.log("url", url);

//   const res = await fetch(url, {
//     method: "GET",
//   });

//   // if (!res.ok) {
//   //   console.log("error", res);
//   //   // This will activate the closest `error.js` Error Boundary
//   //   // throw new Error("Failed to fetch data");
//   //   return undefined;
//   // }

//   // return await res.json();
//   let session = await res.json();

//   return session;
// }

export async function singup(formData: {
  username: string;
  email: string;
  phone: string;
  country: string;
  password: string;
}) {
  console.log("register", formData);

  try {
    const url = `${process.env.NEXT_PUBLIC_API_BACKEND}/auth/local/register`;

    console.log("url", url);

    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      console.log("error", res);
      // This will activate the closest `error.js` Error Boundary
      // throw new Error("Failed to fetch data");
      return { status: false, error: "This user already exists" };
    }

    // return await res.json()
    let data = await res.json();

    console.log("data", data);

    return { status: true };
  } catch (error) {
    console.log("error", error);

    return { status: false, error: "This user already exists" };
  }

  // return undefined;
}

export const login = async (body: { email: string; password: string }) => {
  const url = `${process.env.NEXT_PUBLIC_API_BACKEND}/auth/local`;

  console.log("body", body);

  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      identifier: body.email,
      password: body.password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    console.log("error", res);
    // This will activate the closest `error.js` Error Boundary
    // throw new Error("Failed to fetch data");
    return undefined;
  }

  // return await res.json()
  let data = await res.json();

  return data;
};

// export const getUserInfo = async ({ accessToken }: { accessToken: string }) => {
//   const url = `${process.env.NEXT_PUBLIC_API_BACKEND}/users/my`;

//   const res = await fetch(url, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${accessToken}`,
//     },
//   });

//   if (!res.ok) {
//     console.log("error", res);
//     // This will activate the closest `error.js` Error Boundary
//     // throw new Error("Failed to fetch data");
//     return undefined;
//   }

//   // return await res.json()
//   let data = await res.json();

//   return data;
// };
