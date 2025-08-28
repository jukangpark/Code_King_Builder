// 모든 상수를 한 곳에서 export
export * from "./social";
export * from "./tech";

// 앱 전체 설정
export const APP_CONFIG = {
  name: "Code King Builder",
  version: "1.0.0",
  description: "AI 기반 웹사이트 빌더",
  author: "Code King",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
} as const;

// 지원 언어 설정
export const SUPPORTED_LOCALES = ["ko", "en", "ja", "zh"] as const;
export const DEFAULT_LOCALE = "ko" as const;

// UI 관련 상수
export const UI_CONFIG = {
  maxWidth: "max-w-7xl",
  containerPadding: "px-4 sm:px-6 lg:px-8",
  animationDuration: 0.6,
  hoverScale: 1.05,
} as const;
