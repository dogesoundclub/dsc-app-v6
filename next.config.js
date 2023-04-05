/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["hashconnect"]);
const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
};

module.exports = withTM(nextConfig);
