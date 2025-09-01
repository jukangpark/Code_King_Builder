"use client";

import { useState } from "react";
import { use } from "react";
import { Locale } from "@/lib/i18n";
import Navigation from "@/components/Navigation";
import Banner from "@/components/Banner";

interface PatentsPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export default function PatentsPage({ params }: PatentsPageProps) {
  const { locale } = use(params);
  const [currentLocale, setCurrentLocale] = useState<Locale>(locale);

  const patents = [
    {
      title: "AI 기반 웹사이트 자동 생성 시스템",
      number: "KR-10-2023-0123456",
      date: "2023-12-15",
      status: "등록완료",
      description:
        "사용자 입력을 바탕으로 AI가 자동으로 웹사이트를 생성하는 혁신적인 시스템",
    },
    {
      title: "실시간 템플릿 커스터마이징 방법",
      number: "KR-10-2023-0123457",
      date: "2023-11-20",
      status: "등록완료",
      description:
        "사용자가 실시간으로 템플릿을 수정하고 미리보기할 수 있는 기술",
    },
    {
      title: "반응형 웹사이트 최적화 알고리즘",
      number: "KR-10-2023-0123458",
      date: "2023-10-10",
      status: "심사중",
      description:
        "다양한 디바이스에서 최적의 성능을 제공하는 반응형 웹사이트 생성 알고리즘",
    },
  ];

  const certifications = [
    {
      name: "ISO 27001 정보보안관리체계",
      issuer: "한국정보통신기술협회",
      date: "2023-12-01",
      validUntil: "2026-12-01",
      description: "정보보안 관리체계 국제표준 인증",
    },
    {
      name: "클라우드 보안 인증",
      issuer: "클라우드 보안 연합",
      date: "2023-11-15",
      validUntil: "2025-11-15",
      description: "클라우드 환경에서의 보안 표준 준수 인증",
    },
    {
      name: "웹 접근성 품질인증",
      issuer: "한국웹접근성평가센터",
      date: "2023-10-20",
      validUntil: "2025-10-20",
      description: "모든 사용자를 위한 웹 접근성 보장 인증",
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
        title="특허 & 인증서"
        subtitle="Code King Builder의 혁신적인 기술과 품질을 인정받은 특허와 인증서를 소개합니다."
        params={params}
      />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 특허 섹션 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">특허</h2>
            <div className="space-y-6">
              {patents.map((patent, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {patent.title}
                      </h3>
                      <p className="text-gray-600 mb-3">{patent.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>특허번호: {patent.number}</span>
                        <span>출원일: {patent.date}</span>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 text-sm font-medium rounded-full ${
                        patent.status === "등록완료"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {patent.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 인증서 섹션 */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">인증서</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {cert.description}
                  </p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div>발급기관: {cert.issuer}</div>
                    <div>발급일: {cert.date}</div>
                    <div>유효기간: {cert.validUntil}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
