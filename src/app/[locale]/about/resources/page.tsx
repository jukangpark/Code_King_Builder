"use client";

import { useState } from "react";
import { use } from "react";
import { Locale } from "@/lib/i18n";
import Navigation from "@/components/Navigation";
import Banner from "@/components/Banner";

interface ResourcesPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export default function ResourcesPage({ params }: ResourcesPageProps) {
  const { locale } = use(params);
  const [currentLocale, setCurrentLocale] = useState<Locale>(locale);

  const resources = [
    {
      name: "Code King Builder 로고",
      type: "PNG",
      size: "2.3 MB",
      description: "고해상도 로고 파일 (투명 배경 포함)",
    },
    {
      name: "브랜드 가이드라인",
      type: "PDF",
      size: "5.1 MB",
      description: "브랜드 사용 가이드라인 및 디자인 규칙",
    },
    {
      name: "아이콘 세트",
      type: "SVG",
      size: "1.8 MB",
      description: "다양한 크기의 아이콘 파일",
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
        title="디자인 리소스 센터"
        subtitle="Code King Builder의 브랜드 리소스를 다운로드하세요."
        params={params}
      />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
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
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {resource.name}
                </h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{resource.type}</span>
                  <span>{resource.size}</span>
                </div>
                <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors font-medium">
                  다운로드
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
