"use client";

import { useState } from "react";
import { use } from "react";
import { Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/i18n";
import Navigation from "@/components/Navigation";

interface SupportPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export default function SupportPage({ params }: SupportPageProps) {
  const { locale } = use(params);
  const [currentLocale, setCurrentLocale] = useState<Locale>(locale);

  return (
    <>
      <Navigation
        currentLocale={currentLocale}
        onLocaleChange={setCurrentLocale}
        activePage="support"
      />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">고객지원</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Code King Builder를 더욱 효과적으로 활용할 수 있도록 도와드립니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 고객 가이드 (FAQ) */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-purple-600 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                고객 가이드
              </h3>
              <p className="text-gray-600 mb-4">
                자주 묻는 질문과 답변을 확인하세요.
              </p>
              <a
                href={`/${currentLocale}/support/faq`}
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                자세히 보기 →
              </a>
            </div>

            {/* 교육 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-purple-600 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">교육</h3>
              <p className="text-gray-600 mb-4">
                튜토리얼과 가이드를 통해 학습하세요.
              </p>
              <a
                href={`/${currentLocale}/support/education`}
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                자세히 보기 →
              </a>
            </div>

            {/* 소식 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-purple-600 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">소식</h3>
              <p className="text-gray-600 mb-4">
                최신 업데이트와 소식을 확인하세요.
              </p>
              <a
                href={`/${currentLocale}/support/news`}
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                자세히 보기 →
              </a>
            </div>

            {/* 개발자 센터 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-purple-600 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                개발자 센터
              </h3>
              <p className="text-gray-600 mb-4">
                API 문서와 개발 가이드를 제공합니다.
              </p>
              <a
                href={`/${currentLocale}/support/developer`}
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                자세히 보기 →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
