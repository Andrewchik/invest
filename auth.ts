import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { login } from "@/requests/auth";

import type { NextAuthConfig } from "next-auth";

// export const {
//   handlers: { GET, POST },
//   auth,
// } = NextAuth({
//   providers: [Credentials],
// });

export const config = {
  // theme: {
  //   logo: "https://next-auth.js.org/img/logo/logo-sm.png",
  // },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        // username: { label: "Username", type: "text", placeholder: "jsmith" },
        // password: { label: "Password", type: "password" },
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log("credentials", credentials);

        // if (typeof credentials !== "undefined" && !!credentials) {
        const res = await login({
          email: credentials.email as string,
          password: credentials.password as string,
        });

        console.log("res", res);

        // const res = await authenticate(credentials.email, credentials.password)
        if (!!res && typeof res !== "undefined") {
          return { ...res?.user, accessToken: res.jwt };
        } else {
          return null;
        }
        // } else {
        //   return null;
        // }
      },
    }),
  ],
  trustHost: true,
  basePath: "/api/auth",
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async jwt({ token, user, trigger, session, account }) {
      console.log("user", user);

      if (trigger === "signIn" && user) {
        // token.user = user;
        token = {
          ...token,
          ...user,
        };
      } else {
        console.log("token", token);
        // const data = await getUserInfo({
        //   accessToken: token.accessToken as string,
        // });

        // token.user = data;

        // token = {
        //   ...token,
        //   // ...data,
        // };
      }
      // if (trigger === "update") {
      //   console.log("trigger");
      //   // Note, that `session` can be any arbitrary object, remember to validate it!
      //   token.name = session.name;
      // }
      return token;
    },
    async session({ session, token }) {
      console.log("session", session);

      if (token && session.user) {
        // session.userId = token.id;
        // session.user.id = token.id;
        session.user.email = token.email!;
        // session.user.license_key = token.license_key;
        session.user.username = token.username;
        // session.user.locale = token.locale;
        // session.user.paddle_customer_id = token.paddle_customer_id;
        // session.user.subscription = token.subscription;
      }

      session.user = {
        ...session.user,
        ...(token as any),
      };

      return session;
    },
  },
  session: { strategy: "jwt" },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
