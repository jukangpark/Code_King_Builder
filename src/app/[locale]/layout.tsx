import { Locale } from "@/lib/i18n";
import { use } from "react";
import ConditionalFooter from "@/components/ConditionalFooter";
import SimpleChatBot from "@/components/SimpleChatBot";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<any> {
  return {
    title: "Code King Builder",
    description:
      "An AI-driven website builder SaaS that enables users to build and deploy websites through natural language",
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = use(params);

  return (
    <div lang={locale}>
      {children}
      <ConditionalFooter currentLocale={locale} />
      <SimpleChatBot />
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { locale: "ko" },
    { locale: "en" },
    { locale: "ja" },
    { locale: "zh" },
  ];
}
