"use client";

import { useState } from "react";
import { use } from "react";
import { Locale } from "@/lib/i18n";
import Navigation from "@/components/Navigation";
import Banner from "@/components/Banner";

interface IRPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export default function IRPage({ params }: IRPageProps) {
  const { locale } = use(params);
  const [currentLocale, setCurrentLocale] = useState<Locale>(locale);

  const announcements = [
    {
      title: "2024년 1분기 실적 발표",
      date: "2024-04-15",
      type: "실적",
      summary: "2024년 1분기 매출 및 영업이익 실적을 발표합니다.",
    },
    {
      title: "주주총회 소집 공고",
      date: "2024-03-20",
      type: "주주총회",
      summary: "2024년 정기주주총회 소집을 공고합니다.",
    },
    {
      title: "신규 투자 유치 공고",
      date: "2024-01-15",
      type: "투자",
      summary: "시리즈 A 투자 100억 원 유치를 공고합니다.",
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
        title="IR 공고"
        subtitle="투자자 관계 정보와 재무 공고를 확인하세요."
        params={params}
      />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {announcements.map((announcement, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {announcement.title}
                    </h3>
                    <p className="text-gray-600 mb-3">{announcement.summary}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{announcement.date}</span>
                      <span>•</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full">
                        {announcement.type}
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
