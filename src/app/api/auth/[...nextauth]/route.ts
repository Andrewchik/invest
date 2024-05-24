// import NextAuth from "next-auth";
// import { authOptions } from "@/utils/authoptions.util";

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };

// // import { handlers } from "_auth";
// // export const { GET, POST } = handlers;

import { handlers } from "../../../../../auth";
export const { GET, POST } = handlers;
