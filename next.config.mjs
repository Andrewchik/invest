import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    scrollRestoration: true,
  },
  sassOptions: {
    additionalData: `@import "src/styles/mixins.scss"; @import "src/styles/media.scss"; @import "src/styles/foundation/common.scss";`,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "strapi.aurum.law",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
