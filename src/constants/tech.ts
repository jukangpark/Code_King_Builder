export const TECH_LOGOS = [
  {
    src: "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white",
    alt: "Next.js",
  },
  {
    src: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
    alt: "React",
  },
  {
    src: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
    alt: "TypeScript",
  },
  {
    src: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
    alt: "Tailwind CSS",
  },
  {
    src: "https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white",
    alt: "Supabase",
  },
  {
    src: "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white",
    alt: "Node.js",
  },
  {
    src: "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white",
    alt: "PostgreSQL",
  },
  {
    src: "https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white",
    alt: "Vercel",
  },
] as const;

export type TechLogo = (typeof TECH_LOGOS)[number];
