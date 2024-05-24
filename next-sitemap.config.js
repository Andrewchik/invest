/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_URL,
  changefreq: "weekly",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  // additionalPaths: async (config) => {
  //   let res = [
  //     await config.transform({
  //       ...config,
  //       priority: 1
  //     }, "/"),
  //     await config.transform(config, "/clients"),
  //     await config.transform(config, "/newsroom"),
  //     await config.transform(config, "/people"),
  //   ]

  //   return res;
  // },
  robotsTxtOptions: {
    policies: [{ userAgent: '*', disallow: '/' }]
  }
  // additionalPaths: [
  //   "/clients",
  //   "/newsroom",
  //   "/people"
  // ]
}