import NextAuth from "next-auth";

interface IUser {
  id: string;
  email: string;
  username: string | null;
  token?: accessToken;
}

declare module "next-auth" {
  interface User extends IUser {}
}

declare module "@auth/core/jwt" {
  interface JWT extends IUser {}
}
