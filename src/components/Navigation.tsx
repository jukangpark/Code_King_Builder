"use client";

import { useState } from "react";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Locale, getTranslation } from "@/lib/i18n";
import LanguageSelector from "./LanguageSelector";
import Image from "next/image";
import NavButton from "./navigation/NavButton";
import DropdownButton from "./navigation/DropdownButton";

interface NavigationProps {
  currentLocale: Locale;
  onLocaleChange: (locale: Locale) => void;
  activePage?:
    | "home"
    | "templates"
    | "contact"
    | "portfolio"
    | "builder"
    | "support"
    | "about"
    | "monitoring"
    | "pricing";
}

export default function Navigation({
  currentLocale,
  onLocaleChange,
  activePage = "home",
}: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const monitoringSubmenu = [
    { name: "서비스 소개", href: `/${currentLocale}/monitoring/service-intro` },
    {
      name: "대시보드 빌더",
      href: `/${currentLocale}/monitoring/dashboard-builder`,
    },
    {
      name: "3D 대시보드 빌더",
      href: `/${currentLocale}/monitoring/3d-dashboard-builder`,
    },
    {
      name: "데이터 통합 솔루션",
      href: `/${currentLocale}/monitoring/data-integration`,
    },
    {
      name: "대시보드 갤러리",
      href: `/${currentLocale}/monitoring/dashboard-gallery`,
    },
  ];

  const supportSubmenu = [
    { name: "고객 가이드 (FAQ)", href: `/${currentLocale}/support/faq` },
    { name: "교육", href: `/${currentLocale}/support/education` },
    { name: "소식", href: `/${currentLocale}/support/news` },
    { name: "개발자 센터", href: `/${currentLocale}/support/developer` },
  ];

  const aboutSubmenu = [
    { name: "팀", href: `/${currentLocale}/about/team` },
    { name: "특허 - 인증서", href: `/${currentLocale}/about/patents` },
    { name: "채용", href: `/${currentLocale}/about/careers` },
    { name: "뉴스룸", href: `/${currentLocale}/about/newsroom` },
    { name: "디자인 리소스 센터", href: `/${currentLocale}/about/resources` },
    { name: "IR 공고", href: `/${currentLocale}/about/ir` },
  ];

  const pricingSubmenu = [
    {
      name: "맞춤형 웹사이트 개발",
      href: `/${currentLocale}/pricing/custom-development`,
    },
    { name: "자주 묻는 질문", href: `/${currentLocale}/pricing/faq` },
    { name: "서비스 제공 절차", href: `/${currentLocale}/pricing/process` },
    {
      name: "취소 및 환불 규정",
      href: `/${currentLocale}/pricing/refund-policy`,
    },
    { name: "유지보수", href: `/${currentLocale}/pricing/maintenance` },
    { name: "계약서", href: `/${currentLocale}/pricing/contract` },
    { name: "교육", href: `/${currentLocale}/pricing/education` },
  ];

  const mainMenuItems = [
    {
      name: getTranslation(currentLocale, "nav.templates"),
      href: `/${currentLocale}/templates`,
      activePage: "templates",
    },
    { name: "포트폴리오", href: `/${currentLocale}/portfolio`, activePage: "portfolio" },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link href={`/${currentLocale}`} className="flex items-center">
              <Image
                src="/codekingbuilder.png"
                alt="Code King Builder"
                width={40}
                height={40}
              />
              <span className="ml-2 text-xl font-bold text-gray-900 whitespace-nowrap">
                Code King Builder
              </span>
            </Link>

            <div className="hidden md:flex items-center whitespace-nowrap">
              <div
                className="hidden md:flex relative"
                onMouseEnter={() => setHoveredMenu("about")}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <DropdownButton
                  isActive={activePage === "about"}
                  onMouseEnter={() => setHoveredMenu("about")}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  {getTranslation(currentLocale, "nav.about")}
                </DropdownButton>
                {hoveredMenu === "about" && (
                  <div
                    className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50"
                    onMouseEnter={() => setHoveredMenu("about")}
                    onMouseLeave={() => setHoveredMenu(null)}
                  >
                    <div className="py-1">
                      {aboutSubmenu.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:text-purple-600 transition-colors text-left"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {mainMenuItems.map((item, index) => (
                <NavButton
                  key={index}
                  href={item.href}
                  isActive={activePage === item.activePage}
                >
                  {item.name}
                </NavButton>
              ))}

              <div
                className="relative"
                onMouseEnter={() => setHoveredMenu("monitoring")}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <DropdownButton
                  isActive={activePage === "monitoring"}
                  onMouseEnter={() => setHoveredMenu("monitoring")}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  데이터 모니터링
                </DropdownButton>
                {hoveredMenu === "monitoring" && (
                  <div
                    className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50"
                    onMouseEnter={() => setHoveredMenu("monitoring")}
                    onMouseLeave={() => setHoveredMenu(null)}
                  >
                    <div className="py-1">
                      {monitoringSubmenu.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:text-purple-600 transition-colors text-left"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => setHoveredMenu("pricing")}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <DropdownButton
                  isActive={activePage === "pricing"}
                  onMouseEnter={() => setHoveredMenu("pricing")}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  비용정책
                </DropdownButton>
                {hoveredMenu === "pricing" && (
                  <div
                    className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50"
                    onMouseEnter={() => setHoveredMenu("pricing")}
                    onMouseLeave={() => setHoveredMenu(null)}
                  >
                    <div className="py-1">
                      {pricingSubmenu.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:text-purple-600 transition-colors text-left"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => setHoveredMenu("support")}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <DropdownButton
                  isActive={activePage === "support"}
                  onMouseEnter={() => setHoveredMenu("support")}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  {getTranslation(currentLocale, "nav.support")}
                </DropdownButton>
                {hoveredMenu === "support" && (
                  <div
                    className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50"
                    onMouseEnter={() => setHoveredMenu("support")}
                    onMouseLeave={() => setHoveredMenu(null)}
                  >
                    <div className="py-1">
                      {supportSubmenu.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:text-purple-600 transition-colors text-left"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="pl-4 border-l border-gray-200">
              <LanguageSelector
                currentLocale={currentLocale}
                onLocaleChange={onLocaleChange}
              />
            </div>

            <Link
              href={`/${currentLocale}/contact`}
              className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition-colors whitespace-nowrap ml-4"
            >
              상담 문의
            </Link>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <LanguageSelector
              currentLocale={currentLocale}
              onLocaleChange={onLocaleChange}
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

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {mainMenuItems.map((item, index) => (
              <NavButton
                key={index}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                isActive={activePage === item.activePage}
                className="block text-base"
              >
                {item.name}
              </NavButton>
            ))}

            <div className="border-t border-gray-200 pt-4">
              <div className="px-3 py-2 text-sm font-medium text-gray-500 uppercase tracking-wider">
                데이터 모니터링
              </div>
              {monitoringSubmenu.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="px-3 py-2 text-sm font-medium text-gray-500 uppercase tracking-wider">
                비용정책
              </div>
              {pricingSubmenu.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="px-3 py-2 text-sm font-medium text-gray-500 uppercase tracking-wider">
                {getTranslation(currentLocale, "nav.support")}
              </div>
              {supportSubmenu.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="px-3 py-2 text-sm font-medium text-gray-500 uppercase tracking-wider">
                {getTranslation(currentLocale, "nav.about")}
              </div>
              {aboutSubmenu.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
