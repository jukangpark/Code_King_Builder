"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Monaco Editor를 동적으로 import
const JsonEditor = dynamic(() => import("../../components/JsonEditor"), {
  ssr: false,
  loading: () => (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 h-96 flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
    </div>
  ),
});

interface AIResponse {
  success: boolean;
  data?: any;
  message?: string;
  error?: string;
  aiResponse?: {
    data: any;
    message: string;
  };
  test?: {
    prompt: string;
    template: string;
    timestamp: string;
  };
}

export default function TestAIGeneratorPage() {
  const [userPrompt, setUserPrompt] = useState<string>("");
  const [selectedTemplate, setSelectedTemplate] = useState<string>("startup");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<AIResponse | null>(null);

  // 웹사이트 템플릿 옵션
  const templateOptions = [
    {
      value: "startup",
      label: "스타트업",
      description: "AI, SaaS, 기술 스타트업용",
    },
    {
      value: "restaurant",
      label: "레스토랑",
      description: "음식점, 카페, 호텔용",
    },
    {
      value: "portfolio",
      label: "포트폴리오",
      description: "디자이너, 개발자, 크리에이터용",
    },
    {
      value: "ecommerce",
      label: "이커머스",
      description: "온라인 쇼핑몰, 브랜드 스토어용",
    },
    {
      value: "corporate",
      label: "기업",
      description: "대기업, 중소기업, 서비스업용",
    },
    {
      value: "blog",
      label: "블로그",
      description: "개인 블로그, 뉴스, 콘텐츠용",
    },
  ];

  const handleTest = async () => {
    if (!userPrompt.trim()) return;

    setIsLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/test/ai-generator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userPrompt: userPrompt,
          templateSlug: selectedTemplate,
        }),
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
        message: "테스트 실행 실패",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Website Builder 테스트
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Architecture 문서 기반으로 템플릿을 선택하고 웹사이트 요구사항을
            입력하면 SiteSpec JSON 스키마를 생성합니다
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* 왼쪽: 입력 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              빌더 설정
            </h2>

            {/* 템플릿 선택 */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                웹사이트 템플릿 선택
              </label>
              <div className="grid grid-cols-1 gap-3">
                {templateOptions.map((template) => (
                  <button
                    key={template.value}
                    onClick={() => setSelectedTemplate(template.value)}
                    className={`p-4 text-left rounded-lg border transition-all text-gray-800 ${
                      selectedTemplate === template.value
                        ? "border-purple-500 bg-purple-50 text-purple-700 shadow-md"
                        : "border-gray-200 hover:border-purple-300 hover:bg-purple-25"
                    }`}
                  >
                    <div className="font-medium text-lg">{template.label}</div>
                    <div className="text-sm text-gray-600 mt-1">
                      {template.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 요구사항 입력 */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                웹사이트 요구사항 설명
              </label>
              <textarea
                value={userPrompt}
                onChange={(e) => setUserPrompt(e.target.value)}
                placeholder="예시: AI 기술을 활용한 스타트업을 위한 모던한 랜딩페이지를 만들어주세요. 투자 유치를 목표로 하고, 기술의 혁신성을 강조하고 싶습니다. 브랜드명은 'TechCorp'이고, 주요 서비스는 AI 솔루션입니다..."
                className="w-full h-40 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none text-gray-800 placeholder-gray-700"
              />
              <div className="text-sm text-gray-500 mt-2">
                최소 25자 이상으로 구체적으로 설명해주세요
              </div>
            </div>

            {/* 테스트 실행 버튼 */}
            <button
              onClick={handleTest}
              disabled={isLoading || !userPrompt.trim()}
              className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? "AI 스키마 생성 중..." : "SiteSpec JSON 생성"}
            </button>
          </motion.div>

          {/* 오른쪽: 결과 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              생성된 SiteSpec JSON
            </h2>

            {isLoading && (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
                <p className="text-gray-600">
                  Claude AI가 웹사이트 JSON 스키마를 생성하고 있습니다...
                </p>
              </div>
            )}

            {result && !isLoading && (
              <div className="space-y-4">
                {result.success ? (
                  <>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center">
                        <span className="text-green-600 text-2xl mr-2">✅</span>
                        <div>
                          <h3 className="font-medium text-green-800">성공!</h3>
                          <p className="text-green-600 text-sm">
                            {result.message}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 테스트 정보 */}
                    {result.test && (
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h4 className="font-medium text-blue-800 mb-2">
                          테스트 정보
                        </h4>
                        <div className="text-sm text-blue-700">
                          <p>
                            <strong>템플릿:</strong> {result.test.template}
                          </p>
                          <p>
                            <strong>요구사항:</strong> {result.test.prompt}
                          </p>
                          <p>
                            <strong>생성 시간:</strong>{" "}
                            {new Date(result.test.timestamp).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* 생성된 JSON 스키마 */}
                    {result.aiResponse?.data && (
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">
                          생성된 SiteSpec JSON:
                        </h4>

                        {/* Monaco Editor로 JSON 표시 */}
                        <JsonEditor
                          value={JSON.stringify(
                            result.aiResponse.data,
                            null,
                            2
                          )}
                          language="json"
                          height="400px"
                          readOnly={true}
                        />

                        {/* 추가 정보 및 복사 버튼 */}
                        <div className="mt-3 text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
                          <div className="flex items-center justify-between">
                            <div className="space-y-1">
                              <p>
                                JSON 크기:{" "}
                                {result.aiResponse?.data
                                  ? JSON.stringify(result.aiResponse.data)
                                      .length
                                  : 0}{" "}
                                문자
                              </p>
                              <p>
                                섹션 수:{" "}
                                {result.aiResponse?.data?.pages?.[0]?.sections
                                  ?.length || 0}
                                개
                              </p>
                            </div>
                            <button
                              onClick={() => {
                                if (result.aiResponse?.data) {
                                  navigator.clipboard.writeText(
                                    JSON.stringify(
                                      result.aiResponse.data,
                                      null,
                                      2
                                    )
                                  );
                                }
                              }}
                              className="bg-purple-600 text-white px-3 py-1 rounded text-xs hover:bg-purple-700 transition-colors"
                            >
                              복사하기
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <span className="text-red-600 text-2xl mr-2">❌</span>
                      <div>
                        <h3 className="font-medium text-red-800">오류 발생</h3>
                        <p className="text-red-600 text-sm">{result.message}</p>
                        {result.error && (
                          <p className="text-red-500 text-xs mt-1">
                            {result.error}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {!result && !isLoading && (
              <div className="text-center py-12 text-gray-500">
                <p>템플릿을 선택하고 요구사항을 입력한 후</p>
                <p>테스트를 실행하면 SiteSpec JSON이 여기에 표시됩니다</p>
              </div>
            )}
          </motion.div>
        </div>

        {/* API 정보 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 bg-white rounded-xl shadow-lg p-6 text-gray-800"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            API 정보
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-3">
                AI Generate API
              </h3>
              <div className="space-y-2 text-sm">
                <div>
                  <strong>Endpoint:</strong>{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    /api/ai/generate
                  </code>
                </div>
                <div>
                  <strong>Method:</strong> POST
                </div>
                <div>
                  <strong>Required:</strong> userPrompt, templateSlug
                </div>
                <div>
                  <strong>Output:</strong> SiteSpec JSON Schema
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-3">Test API</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <strong>Endpoint:</strong>{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    /api/test/ai-generator
                  </code>
                </div>
                <div>
                  <strong>Method:</strong> POST
                </div>
                <div>
                  <strong>Usage:</strong> 웹사이트 빌더 테스트 실행
                </div>
              </div>
            </div>
          </div>

          {/* SiteSpec 스키마 정보 */}
          <div className="mt-6 p-4 bg-purple-50 border border-purple-200 rounded-lg">
            <h4 className="font-medium text-purple-800 mb-2">
              SiteSpec JSON 스키마 구조
            </h4>
            <div className="text-sm text-purple-700 space-y-1">
              <p>
                <strong>templateSlug:</strong> 선택된 템플릿 타입
              </p>
              <p>
                <strong>brand:</strong> 브랜드명, 설명, 색상 팔레트
              </p>
              <p>
                <strong>pages:</strong> 페이지 배열 (slug, title, sections)
              </p>
              <p>
                <strong>sections:</strong> 섹션 배열 (id, kind, props)
              </p>
              <p>
                <strong>허용 섹션:</strong> hero, features, cta, pricing,
                testimonials, contact, footer
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
