const nextConfig = {
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
  // 이미지 최적화 설정
  images: {
    unoptimized: true,
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
