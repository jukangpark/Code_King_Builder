"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { Locale, localeNames, localeFlags } from "@/lib/i18n";

interface LanguageSelectorProps {
  currentLocale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

export default function LanguageSelector({
  currentLocale,
  onLocaleChange,
}: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLocaleChange = (locale: Locale) => {
    onLocaleChange(locale);
    setIsOpen(false);

    // 현재 경로에서 locale 부분만 변경
    const currentPath = window.location.pathname;
    const pathSegments = currentPath.split("/");

    // 첫 번째 세그먼트가 locale인 경우 (예: /ko/builder -> /en/builder)
    if (
      pathSegments.length > 1 &&
      ["ko", "en", "ja", "zh"].includes(pathSegments[1])
    ) {
      pathSegments[1] = locale;
    } else {
      // locale이 없는 경우 루트 경로로 이동
      pathSegments.splice(1, 0, locale);
    }

    const newPath = pathSegments.join("/");
    router.push(newPath);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 rounded-lg hover:bg-purple-50 transition-colors"
      >
        <span className="text-lg">{localeFlags[currentLocale]}</span>
        <span className="hidden sm:inline">{localeNames[currentLocale]}</span>
        <ChevronDownIcon
          className={`h-4 w-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50"
          >
            {Object.entries(localeNames).map(([locale, name]) => (
              <button
                key={locale}
                onClick={() => handleLocaleChange(locale as Locale)}
                className={`w-full flex items-center space-x-3 px-4 py-2 text-sm hover:bg-purple-50 transition-colors ${
                  currentLocale === locale
                    ? "text-purple-600 bg-purple-50"
                    : "text-gray-700"
                }`}
              >
                <span className="text-lg">{localeFlags[locale as Locale]}</span>
                <span>{name}</span>
                {currentLocale === locale && (
                  <div className="ml-auto w-2 h-2 bg-purple-600 rounded-full" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
