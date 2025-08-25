const nextConfig = {
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
  // ESLint 에러를 무시하고 빌드
  eslint: {
    ignoreDuringBuilds: true,
  },
  // TypeScript 에러를 무시하고 빌드
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
