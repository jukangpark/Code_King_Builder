"use client";

import { useState } from "react";
import { use } from "react";
import { Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/i18n";
import Navigation from "@/components/Navigation";

interface AboutPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export default function AboutPage({ params }: AboutPageProps) {
  const { locale } = use(params);
  const [currentLocale, setCurrentLocale] = useState<Locale>(locale);

  return (
    <>
      <Navigation
        currentLocale={currentLocale}
        onLocaleChange={setCurrentLocale}
        activePage="about"
      />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">기업 소개</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI 기술로 웹사이트 제작의 혁신을 이끄는 Code King Builder입니다.
            </p>
          </div>

          {/* 회사 소개 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  혁신적인 AI 웹사이트 빌더
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Code King Builder는 최첨단 AI 기술을 활용하여 누구나 쉽고
                  빠르게 전문적인 웹사이트를 만들 수 있도록 도와주는
                  플랫폼입니다. 복잡한 코딩 지식 없이도 비즈니스, 포트폴리오,
                  블로그 등 다양한 목적의 웹사이트를 구축할 수 있습니다.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">
                      10,000+
                    </div>
                    <div className="text-sm text-gray-600">생성된 웹사이트</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">
                      5,000+
                    </div>
                    <div className="text-sm text-gray-600">만족한 고객</div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg p-8 text-white">
                <h3 className="text-xl font-semibold mb-4">우리의 미션</h3>
                <p className="mb-4">
                  기술의 장벽을 허물고 모든 사람이 디지털 세계에서 자신의
                  아이디어를 표현할 수 있도록 돕는 것입니다.
                </p>
                <h3 className="text-xl font-semibold mb-4">우리의 비전</h3>
                <p>
                  AI 기술을 통해 웹사이트 제작의 민주화를 실현하고, 더 많은
                  사람들이 온라인에서 성공할 수 있도록 지원합니다.
                </p>
              </div>
            </div>
          </div>

          {/* 메뉴 그리드 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 팀 */}
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">팀</h3>
              <p className="text-gray-600 mb-4">
                Code King Builder를 만드는 열정적인 팀을 소개합니다.
              </p>
              <a
                href={`/${currentLocale}/about/team`}
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                팀 소개 보기 →
              </a>
            </div>

            {/* 특허 - 인증서 */}
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                특허 - 인증서
              </h3>
              <p className="text-gray-600 mb-4">
                우리의 혁신적인 기술과 인증서를 확인하세요.
              </p>
              <a
                href={`/${currentLocale}/about/patents`}
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                특허 보기 →
              </a>
            </div>

            {/* 채용 */}
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
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">채용</h3>
              <p className="text-gray-600 mb-4">
                함께 성장할 인재를 찾고 있습니다.
              </p>
              <a
                href={`/${currentLocale}/about/careers`}
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                채용 정보 보기 →
              </a>
            </div>

            {/* 뉴스룸 */}
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                뉴스룸
              </h3>
              <p className="text-gray-600 mb-4">
                회사 소식과 보도자료를 확인하세요.
              </p>
              <a
                href={`/${currentLocale}/about/newsroom`}
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                뉴스 보기 →
              </a>
            </div>

            {/* 디자인 리소스 센터 */}
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
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4M15 7l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                디자인 리소스 센터
              </h3>
              <p className="text-gray-600 mb-4">
                로고, 이미지 등 브랜드 리소스를 다운로드하세요.
              </p>
              <a
                href={`/${currentLocale}/about/resources`}
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                리소스 보기 →
              </a>
            </div>

            {/* IR 공고 */}
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                IR 공고
              </h3>
              <p className="text-gray-600 mb-4">
                투자자 관계 정보와 재무 공고를 확인하세요.
              </p>
              <a
                href={`/${currentLocale}/about/ir`}
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                IR 정보 보기 →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
