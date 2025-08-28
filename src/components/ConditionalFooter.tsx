"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import { Locale } from "@/lib/i18n";

interface ConditionalFooterProps {
  currentLocale: Locale;
}

export default function ConditionalFooter({
  currentLocale,
}: ConditionalFooterProps) {
  const pathname = usePathname();

  // builder 페이지에서는 Footer를 렌더링하지 않음
  const isBuilderPage = pathname?.includes("/builder");

  if (isBuilderPage) {
    return null;
  }

  return <Footer currentLocale={currentLocale} />;
}
