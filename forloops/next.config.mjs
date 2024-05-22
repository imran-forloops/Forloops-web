// /** @type {import('next').NextConfig} */
// const nextConfig = {};
// // const path = require("path");

// // module.exports = {
// //   sassOptions: {
// //     includePaths: [path.join(__dirname, "styles")],
// //   },
// // };

// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["43.204.193.109.nip.io"], // Add your image host here
  },
};

export default nextConfig;
