import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["ko", "en", "ja", "zh"],
    defaultLocale: "ko",
    localeDetection: true,
  },
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
};

export default nextConfig;
