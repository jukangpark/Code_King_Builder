"use client";

import Link from "next/link";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/i18n";
import LanguageSelector from "./LanguageSelector";

interface NavigationProps {
  currentLocale: Locale;
  onLocaleChange: (locale: Locale) => void;
  activePage?: "home" | "templates" | "deploy";
}

export default function Navigation({
  currentLocale,
  onLocaleChange,
  activePage = "home",
}: NavigationProps) {
  const handleLocaleChange = (locale: Locale) => {
    onLocaleChange(locale);
    // For now, just update the locale state
    // In a real app, you might want to update the URL or use a more sophisticated routing solution
  };

  return (
    <nav className="bg-white shadow-sm border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <CodeBracketIcon className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                Code King Builder
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/templates"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activePage === "templates"
                  ? "text-purple-600 bg-purple-50"
                  : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
              }`}
            >
              {getTranslation(currentLocale, "nav.templates")}
            </Link>
            <Link
              href="/deploy"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activePage === "deploy"
                  ? "text-purple-600 bg-purple-50"
                  : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
              }`}
            >
              {getTranslation(currentLocale, "nav.deploy")}
            </Link>

            {/* Language Selector */}
            <div className="ml-4 pl-4 border-l border-gray-200">
              <LanguageSelector
                currentLocale={currentLocale}
                onLocaleChange={handleLocaleChange}
              />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSelector
              currentLocale={currentLocale}
              onLocaleChange={handleLocaleChange}
            />
            <button className="text-gray-700 hover:text-purple-600">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
