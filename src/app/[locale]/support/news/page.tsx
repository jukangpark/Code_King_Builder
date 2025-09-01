"use client";

import { useState } from "react";
import { use } from "react";
import { Locale } from "@/lib/i18n";
import Navigation from "@/components/Navigation";
import Banner from "@/components/Banner";

interface NewsPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export default function NewsPage({ params }: NewsPageProps) {
  const { locale } = use(params);
  const [currentLocale, setCurrentLocale] = useState<Locale>(locale);

  const news = [
    {
      title: "Code King Builder 2.0 출시",
      description:
        "AI 기반 웹사이트 빌더의 새로운 버전이 출시되었습니다. 더욱 강력한 AI 기능과 개선된 사용자 경험을 제공합니다.",
      date: "2024-01-15",
      category: "업데이트",
      image: "/images/news-1.jpg",
    },
    {
      title: "새로운 템플릿 50개 추가",
      description:
        "비즈니스, 포트폴리오, 블로그 등 다양한 용도에 맞는 새로운 템플릿 50개가 추가되었습니다.",
      date: "2024-01-10",
      category: "새로운 기능",
      image: "/images/news-2.jpg",
    },
    {
      title: "모바일 앱 베타 테스트 시작",
      description:
        "Code King Builder 모바일 앱의 베타 테스트가 시작되었습니다. 언제 어디서나 웹사이트를 편집할 수 있습니다.",
      date: "2024-01-05",
      category: "앱",
      image: "/images/news-3.jpg",
    },
    {
      title: "SEO 최적화 기능 강화",
      description:
        "검색 엔진 최적화 기능이 대폭 강화되어 더욱 효과적인 웹사이트 마케팅이 가능합니다.",
      date: "2023-12-28",
      category: "기능 개선",
      image: "/images/news-4.jpg",
    },
    {
      title: "2024년 로드맵 공개",
      description:
        "2024년 Code King Builder의 개발 계획과 새로운 기능들을 미리 확인해보세요.",
      date: "2023-12-20",
      category: "회사 소식",
      image: "/images/news-5.jpg",
    },
    {
      title: "사용자 커뮤니티 오픈",
      description:
        "Code King Builder 사용자들을 위한 커뮤니티가 오픈되었습니다. 경험을 공유하고 질문하세요.",
      date: "2023-12-15",
      category: "커뮤니티",
      image: "/images/news-6.jpg",
    },
  ];

  const categories = [
    "전체",
    "업데이트",
    "새로운 기능",
    "앱",
    "기능 개선",
    "회사 소식",
    "커뮤니티",
  ];

  return (
    <>
      <Navigation
        currentLocale={currentLocale}
        onLocaleChange={setCurrentLocale}
        activePage="support"
      />
      <Banner
        title="소식"
        subtitle="Code King Builder의 최신 소식과 업데이트를 확인하세요."
        params={params}
      />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 카테고리 필터 */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "전체"
                    ? "bg-purple-600 text-white"
                    : "bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* 뉴스 그리드 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-white"
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
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  <button className="text-purple-600 hover:text-purple-700 font-medium">
                    자세히 보기 →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* 페이지네이션 */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                이전
              </button>
              <button className="px-3 py-2 text-sm font-medium text-white bg-purple-600 border border-purple-600 rounded-md">
                1
              </button>
              <button className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                2
              </button>
              <button className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                3
              </button>
              <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                다음
              </button>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
