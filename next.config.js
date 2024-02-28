/** @type {import("next").NextConfig} */
module.exports = {
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === "production" ? "/authjs" : undefined,
  basePath: "/authjs",
  experimental: {
    serverActions: {
      allowedOrigins: ["https://authjs-with-proxy-example.netlify.app"],
    },
  },
};
