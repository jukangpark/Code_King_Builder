"use client";

import { useState } from "react";
import Link from "next/link";
import { CodeBracketIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/i18n";
import LanguageSelector from "./LanguageSelector";
import Image from "next/image";

interface NavigationProps {
  currentLocale: Locale;
  onLocaleChange: (locale: Locale) => void;
  activePage?: "home" | "templates" | "deploy" | "contact";
}

export default function Navigation({
  currentLocale,
  onLocaleChange,
  activePage = "home",
}: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLocaleChange = (locale: Locale) => {
    onLocaleChange(locale);
    // For now, just update the locale state
    // In a real app, you might want to update the URL or use a more sophisticated routing solution
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href={`/${currentLocale}`} className="flex items-center">
              <Image
                src="/codekingbuilder.png"
                alt="Code King Builder"
                width={32}
                height={32}
              />
              <span className="ml-2 text-xl font-bold text-gray-900">
                Code King Builder
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href={`/${currentLocale}/templates`}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activePage === "templates"
                  ? "text-purple-600 bg-purple-50"
                  : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
              }`}
            >
              {getTranslation(currentLocale, "nav.templates")}
            </Link>
            <Link
              href={`/${currentLocale}/deploy`}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activePage === "deploy"
                  ? "text-purple-600 bg-purple-50"
                  : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
              }`}
            >
              {getTranslation(currentLocale, "nav.deploy")}
            </Link>
            <Link
              href={`/${currentLocale}/contact`}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activePage === "contact"
                  ? "text-purple-600 bg-purple-50"
                  : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
              }`}
            >
              {getTranslation(currentLocale, "nav.contact")}
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
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-purple-600 p-2"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
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
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href={`/${currentLocale}/templates`}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                activePage === "templates"
                  ? "text-purple-600 bg-purple-50"
                  : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
              }`}
            >
              {getTranslation(currentLocale, "nav.templates")}
            </Link>
            <Link
              href={`/${currentLocale}/deploy`}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                activePage === "deploy"
                  ? "text-purple-600 bg-purple-50"
                  : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
              }`}
            >
              {getTranslation(currentLocale, "nav.deploy")}
            </Link>
            <Link
              href={`/${currentLocale}/contact`}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                activePage === "contact"
                  ? "text-purple-600 bg-purple-50"
                  : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
              }`}
            >
              {getTranslation(currentLocale, "nav.contact")}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
