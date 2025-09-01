"use client";

import { useState } from "react";
import { use } from "react";
import { Locale } from "@/lib/i18n";
import Navigation from "@/components/Navigation";
import Banner from "@/components/Banner";

interface FAQPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export default function FAQPage({ params }: FAQPageProps) {
  const { locale } = use(params);
  const [currentLocale, setCurrentLocale] = useState<Locale>(locale);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("질문 TOP");

  const categories = [
    "질문 TOP",
    "주문관리 v2",
    "도메인/SSL",
    "계정/결제",
    "디자인",
    "부가서비스",
    "전자결제",
    "관리자 페이지",
    "광고/마케팅",
    "기타",
  ];

  const faqs = [
    {
      question: "Code King Builder는 어떤 서비스인가요?",
      answer:
        "Code King Builder는 AI 기반의 웹사이트 빌더로, 사용자가 쉽고 빠르게 전문적인 웹사이트를 만들 수 있도록 도와주는 서비스입니다.",
      category: "질문 TOP",
    },
    {
      question: "무료로 사용할 수 있나요?",
      answer:
        "네, 기본 기능은 무료로 사용할 수 있습니다. 고급 기능과 추가 서비스는 유료 플랜을 통해 이용하실 수 있습니다.",
      category: "계정/결제",
    },
    {
      question: "만든 웹사이트는 어디에 호스팅되나요?",
      answer:
        "생성된 웹사이트는 안전하고 빠른 클라우드 서버에 자동으로 호스팅되며, 도메인 연결도 지원합니다.",
      category: "도메인/SSL",
    },
    {
      question: "모바일 반응형을 지원하나요?",
      answer:
        "네, 모든 템플릿과 생성된 웹사이트는 모바일, 태블릿, 데스크톱 등 모든 디바이스에서 최적화되어 표시됩니다.",
      category: "디자인",
    },
    {
      question: "고객지원은 어떻게 받을 수 있나요?",
      answer:
        "이메일, 실시간 채팅, 전화를 통해 전문 고객지원팀의 도움을 받으실 수 있습니다.",
      category: "기타",
    },
    {
      question: "결제 방법은 어떤 것들이 있나요?",
      answer:
        "신용카드, 계좌이체, 간편결제 등 다양한 결제 방법을 지원합니다. 안전한 결제 시스템으로 보안을 보장합니다.",
      category: "계정/결제",
    },
    {
      question: "도메인을 변경할 수 있나요?",
      answer:
        "네, 언제든지 도메인을 변경할 수 있습니다. 기존 콘텐츠는 그대로 유지되며, 새로운 도메인으로 연결됩니다.",
      category: "도메인/SSL",
    },
    {
      question: "템플릿을 커스터마이징할 수 있나요?",
      answer:
        "모든 템플릿은 색상, 폰트, 레이아웃 등을 자유롭게 수정할 수 있습니다. 드래그 앤 드롭으로 쉽게 편집 가능합니다.",
      category: "디자인",
    },
  ];

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "질문 TOP" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navigation
        currentLocale={currentLocale}
        onLocaleChange={setCurrentLocale}
        activePage="support"
      />
      <Banner
        title="자주 묻는 질문"
        subtitle="Code King Builder에 대한 궁금한 점들을 확인해보세요. 빠르고 정확한 답변을 찾아보세요."
        params={params}
      />

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 검색 입력창 */}
          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="궁금한 점을 찾아보세요"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-6">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* 카테고리 탭 */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-purple-600 text-white"
                      : "bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600 border border-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ 목록 */}
          <div className="space-y-6 mb-12">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">
                          {faq.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  검색 결과가 없습니다
                </h3>
                <p className="text-gray-600">
                  다른 키워드로 검색하거나 카테고리를 변경해보세요.
                </p>
              </div>
            )}
          </div>

          {/* 문의내역 버튼 */}
          <div className="text-center mb-12">
            <button className="inline-flex items-center px-8 py-4 border border-purple-600 text-lg font-medium rounded-lg text-purple-600 bg-white hover:bg-purple-50 transition-colors">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              나의 문의내역
            </button>
          </div>

          {/* 추가 문의 안내 */}
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              더 궁금한 점이 있으시다면 언제든 문의해주세요.
            </p>
            <a
              href={`/${currentLocale}/contact`}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors"
            >
              문의하기
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
