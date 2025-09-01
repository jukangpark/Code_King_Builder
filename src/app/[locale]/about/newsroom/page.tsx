"use client";

import { useState } from "react";
import { use } from "react";
import { Locale } from "@/lib/i18n";
import Navigation from "@/components/Navigation";
import Banner from "@/components/Banner";

interface NewsroomPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export default function NewsroomPage({ params }: NewsroomPageProps) {
  const { locale } = use(params);
  const [currentLocale, setCurrentLocale] = useState<Locale>(locale);

  const pressReleases = [
    {
      title: "Code King Builder, 시리즈 A 투자 100억 원 유치",
      date: "2024-01-15",
      summary:
        "AI 기반 웹사이트 빌더 스타트업 Code King Builder가 시리즈 A 투자 100억 원을 유치했습니다.",
      category: "투자",
    },
    {
      title: "새로운 AI 템플릿 생성 기능 출시",
      date: "2024-01-10",
      summary:
        "사용자 요구사항에 맞는 맞춤형 템플릿을 AI가 자동으로 생성하는 기능을 출시했습니다.",
      category: "제품",
    },
    {
      title: "글로벌 시장 진출 계획 발표",
      date: "2024-01-05",
      summary: "북미, 유럽 시장 진출을 위한 글로벌 확장 계획을 발표했습니다.",
      category: "비즈니스",
    },
  ];

  return (
    <>
      <Navigation
        currentLocale={currentLocale}
        onLocaleChange={setCurrentLocale}
        activePage="about"
      />
      <Banner
        title="뉴스룸"
        subtitle="Code King Builder의 최신 소식과 보도자료를 확인하세요."
        params={params}
      />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {pressReleases.map((release, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {release.title}
                    </h3>
                    <p className="text-gray-600 mb-3">{release.summary}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{release.date}</span>
                      <span>•</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full">
                        {release.category}
                      </span>
                    </div>
                  </div>
                  <button className="ml-6 text-purple-600 hover:text-purple-700 font-medium">
                    자세히 보기 →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
