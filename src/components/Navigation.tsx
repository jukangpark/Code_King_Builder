"use client";

import { useState } from "react";
import Link from "next/link";
import {
  XMarkIcon,
  UserIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/i18n";
import LanguageSelector from "./LanguageSelector";
import Image from "next/image";
import { useAuth } from "@/app/contexts/AuthContext";
import LoginModal from "./auth/LoginModal";
import SignUpModal from "./auth/SignUpModal";

interface NavigationProps {
  currentLocale: Locale;
  onLocaleChange: (locale: Locale) => void;
  activePage?:
    | "home"
    | "templates"
    | "deploy"
    | "contact"
    | "portfolio"
    | "builder"
    | "support"
    | "about";
}

export default function Navigation({
  currentLocale,
  onLocaleChange,
  activePage = "home",
}: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const { user, signOut, loading } = useAuth();

  const handleLocaleChange = (locale: Locale) => {
    onLocaleChange(locale);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogin = () => {
    setIsLoginModalOpen(true);
  };

  const handleSignUp = () => {
    setIsSignUpModalOpen(true);
  };

  const handleLogout = async () => {
    await signOut();
    window.alert("정상적으로 로그아웃 되었습니다.");
  };

  const switchToSignUp = () => {
    setIsLoginModalOpen(false);
    setIsSignUpModalOpen(true);
  };

  const switchToLogin = () => {
    setIsSignUpModalOpen(false);
    setIsLoginModalOpen(true);
  };

  // 드롭다운 메뉴 데이터
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

  return (
    <nav className="bg-white shadow-sm border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 왼쪽: 로고 + 페이지 메뉴 */}
          <div className="flex items-center space-x-8">
            {/* 로고 */}
            <Link href={`/${currentLocale}`} className="flex items-center">
              <Image
                src="/codekingbuilder.png"
                alt="Code King Builder"
                width={40}
                height={40}
              />
              <span className="ml-2 text-xl font-bold text-gray-900">
                Code King Builder
              </span>
            </Link>

            {/* 기업소개 드롭다운 */}
            <div
              className="hidden md:flex relative"
              onMouseEnter={() => setHoveredMenu("about")}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <button
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1 ${
                  activePage === "about"
                    ? "text-purple-600 bg-purple-50"
                    : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                }`}
              >
                <span>{getTranslation(currentLocale, "nav.about")}</span>
                <ChevronDownIcon className="w-4 h-4" />
              </button>
              {hoveredMenu === "about" && (
                <div className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                  <div className="py-1">
                    {aboutSubmenu.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 페이지 메뉴 */}
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
                href={`/${currentLocale}/portfolio`}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activePage === "portfolio"
                    ? "text-purple-600 bg-purple-50"
                    : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                }`}
              >
                포트폴리오
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

              {/* 고객지원 드롭다운 */}
              <div
                className="relative"
                onMouseEnter={() => setHoveredMenu("support")}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <button
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1 ${
                    activePage === "support"
                      ? "text-purple-600 bg-purple-50"
                      : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                  }`}
                >
                  <span>{getTranslation(currentLocale, "nav.support")}</span>
                  <ChevronDownIcon className="w-4 h-4" />
                </button>
                {hoveredMenu === "support" && (
                  <div className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                    <div className="py-1">
                      {supportSubmenu.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
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

          {/* 오른쪽: 사용자 정보 + 언어 선택 */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Auth Buttons */}
            <div className="flex items-center space-x-3">
              {loading ? (
                // 로딩 스켈레톤
                <div className="flex items-center space-x-3">
                  {/* 프로필 아이콘 스켈레톤 */}
                  <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>

                  {/* 사용자 정보 스켈레톤 */}
                  <div className="flex flex-col space-y-1">
                    <div className="w-16 h-3 bg-gray-200 rounded animate-pulse"></div>
                    <div className="w-24 h-2 bg-gray-200 rounded animate-pulse"></div>
                  </div>

                  {/* 로그아웃 버튼 스켈레톤 */}
                  <div className="w-12 h-6 bg-gray-200 rounded animate-pulse"></div>
                </div>
              ) : user ? (
                <>
                  {/* 프로필 아이콘 */}
                  <Link href={`/${currentLocale}/profile/${user.id}`}>
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-700 transition-colors">
                      {user.user_metadata?.avatar_url ? (
                        <img
                          src={user.user_metadata.avatar_url}
                          alt="Profile"
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      ) : (
                        <UserIcon className="w-5 h-5 text-white" />
                      )}
                    </div>
                  </Link>

                  {/* 사용자 정보 */}
                  <Link href={`/${currentLocale}/profile/${user.id}`}>
                    <div className="flex flex-col cursor-pointer hover:text-purple-600 transition-colors">
                      <span className="text-sm font-medium text-gray-900">
                        {user.user_metadata?.name || "사용자"}
                      </span>
                    </div>
                  </Link>

                  {/* 로그아웃 버튼 */}
                  <button
                    onClick={handleLogout}
                    className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    로그아웃
                  </button>
                </>
              ) : (
                <button
                  onClick={handleLogin}
                  className="text-sm text-gray-700 hover:text-purple-600 transition-colors"
                >
                  로그인
                </button>
              )}
            </div>

            {/* Language Selector */}
            <div className="pl-4 border-l border-gray-200">
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
            {/* User Profile Section */}
            {loading ? (
              <div className="px-3 py-4 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded animate-pulse mb-1"></div>
                    <div className="h-3 bg-gray-200 rounded animate-pulse w-2/3"></div>
                  </div>
                </div>
              </div>
            ) : user ? (
              <div className="px-3 py-4 border-b border-gray-200">
                <div className="flex items-center space-x-3 mb-3">
                  <Link
                    href={`/${currentLocale}/profile/${user.id}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                      {user.user_metadata?.avatar_url ? (
                        <img
                          src={user.user_metadata.avatar_url}
                          alt="Profile"
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      ) : (
                        <UserIcon className="w-6 h-6 text-white" />
                      )}
                    </div>
                  </Link>
                  <div className="flex-1">
                    <Link
                      href={`/${currentLocale}/profile/${user.id}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <p className="font-medium text-gray-900 hover:text-purple-600 transition-colors">
                        {user.user_metadata?.name || "사용자"}
                      </p>
                    </Link>
                    <p className="text-sm text-gray-600">{user.email}</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
                >
                  로그아웃
                </button>
              </div>
            ) : (
              <div className="px-3 py-4 border-b border-gray-200">
                <div className="text-center mb-3">
                  <p className="text-sm text-gray-600 mb-3">
                    로그인하여 더 많은 기능을 이용하세요
                  </p>
                </div>
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      handleLogin();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors font-medium"
                  >
                    로그인
                  </button>
                  <button
                    onClick={() => {
                      handleSignUp();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full border border-purple-600 text-purple-600 py-2 px-4 rounded-md hover:bg-purple-50 transition-colors font-medium"
                  >
                    회원가입
                  </button>
                </div>
              </div>
            )}

            {/* Navigation Links */}
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
              href={`/${currentLocale}/portfolio`}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                activePage === "portfolio"
                  ? "text-purple-600 bg-purple-50"
                  : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
              }`}
            >
              포트폴리오
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

            {/* 고객지원 섹션 */}
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

            {/* 기업소개 섹션 */}
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

      {/* Auth Modals */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSwitchToSignUp={switchToSignUp}
      />
      <SignUpModal
        isOpen={isSignUpModalOpen}
        onClose={() => setIsSignUpModalOpen(false)}
        onSwitchToLogin={switchToLogin}
      />
    </nav>
  );
}
