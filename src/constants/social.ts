export const SOCIAL_PLATFORMS = [
  {
    name: "YouTube",
    description: "@CodeKingAcademy",
    icon: "/images/yt_icon_white_digital.png",
    width: 125.5 / 1.2,
    height: 107.5 / 1.2,
    color: "hover:bg-red-600",
    link: "https://www.youtube.com/@CodeKingAcademy",
  },
  {
    name: "Discord",
    description: "개발자 커뮤니티",
    icon: "/images/Discord-Symbol-White.png",
    width: 52.8,
    height: 40,
    color: "hover:bg-indigo-600",
    link: "https://discord.gg/UYfMphnPBU",
  },
  {
    name: "Instagram",
    description: "@code_king_builder",
    icon: "/images/Instagram_Glyph_White.png",
    width: 48,
    height: 48,
    color: "hover:bg-pink-600",
    link: "https://www.instagram.com/code_king_builder/",
  },
  {
    name: "Devlog",
    description: "기술 블로그",
    icon: "/images/github-mark-white.png",
    width: 230 / 5,
    height: 225 / 5,
    color: "hover:bg-black",
    link: "https://jkng-96.gitbook.io/devlog",
  },
] as const;

export type SocialPlatform = (typeof SOCIAL_PLATFORMS)[number];
