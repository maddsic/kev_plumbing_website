/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
   images: {
      domains: ["cdn.sanity.io"],
   },
   sassOptions: {
      includePaths: [path.join(__dirname, "styles")],
   },
};

module.exports = nextConfig;
