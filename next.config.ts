import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
// next.config.js
module.exports = {
  images: {
    domains: ['i.postimg.cc'],
  },
}