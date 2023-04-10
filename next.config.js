/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["hashconnect"]);
const nextConfig = {
  //reactStrictMode: true,// useEffect 2번 실행
  reactStrictMode: false,// useEffect 1번 실행
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
};

module.exports = withTM(nextConfig);
