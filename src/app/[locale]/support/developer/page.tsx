"use client";

import { useState } from "react";
import { use } from "react";
import { Locale } from "@/lib/i18n";
import Navigation from "@/components/Navigation";
import Banner from "@/components/Banner";

interface DeveloperPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export default function DeveloperPage({ params }: DeveloperPageProps) {
  const { locale } = use(params);
  const [currentLocale, setCurrentLocale] = useState<Locale>(locale);

  const apiDocs = [
    {
      title: "REST API",
      description:
        "Code King Builder의 REST API를 사용하여 웹사이트를 프로그래밍 방식으로 관리하세요.",
      version: "v2.0",
      status: "안정",
    },
    {
      title: "Webhook API",
      description: "실시간 이벤트 알림을 받고 외부 시스템과 연동하세요.",
      version: "v1.5",
      status: "베타",
    },
    {
      title: "GraphQL API",
      description: "GraphQL을 사용하여 효율적인 데이터 쿼리를 수행하세요.",
      version: "v1.0",
      status: "알파",
    },
  ];

  const sdks = [
    {
      name: "JavaScript SDK",
      description: "Node.js와 브라우저 환경에서 사용할 수 있는 JavaScript SDK",
      version: "2.1.0",
      language: "JavaScript",
    },
    {
      name: "Python SDK",
      description:
        "Python 애플리케이션에서 Code King Builder API를 쉽게 사용하세요",
      version: "1.8.0",
      language: "Python",
    },
    {
      name: "React SDK",
      description: "React 애플리케이션에 최적화된 SDK",
      version: "1.5.0",
      language: "React",
    },
  ];

  return (
    <>
      <Navigation
        currentLocale={currentLocale}
        onLocaleChange={setCurrentLocale}
        activePage="support"
      />
      <Banner
        title="개발자 센터"
        subtitle="Code King Builder API와 SDK를 사용하여 강력한 애플리케이션을 구축하세요."
        params={params}
      />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* API 문서 섹션 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">API 문서</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {apiDocs.map((doc, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {doc.title}
                    </h3>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        doc.status === "안정"
                          ? "bg-green-100 text-green-800"
                          : doc.status === "베타"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {doc.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{doc.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      버전: {doc.version}
                    </span>
                    <button className="text-purple-600 hover:text-purple-700 font-medium">
                      문서 보기 →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SDK 섹션 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              SDK & 라이브러리
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {sdks.map((sdk, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {sdk.name}
                    </h3>
                    <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">
                      {sdk.language}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{sdk.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      v{sdk.version}
                    </span>
                    <button className="text-purple-600 hover:text-purple-700 font-medium">
                      다운로드 →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 코드 예제 섹션 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">코드 예제</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                웹사이트 생성 예제
              </h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre className="text-green-400 text-sm">
                  {`// JavaScript SDK를 사용한 웹사이트 생성
import { CodeKingBuilder } from '@codekingbuilder/sdk';

const client = new CodeKingBuilder({
  apiKey: 'your-api-key'
});

const website = await client.websites.create({
  name: 'My Business Website',
  template: 'business-template-1',
  customizations: {
    colors: {
      primary: '#6366f1',
      secondary: '#8b5cf6'
    },
    content: {
      title: 'Welcome to My Business',
      description: 'Professional business solutions'
    }
  }
});

console.log('Website created:', website.id);`}
                </pre>
              </div>
            </div>
          </div>

          {/* 추가 리소스 */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                GitHub 저장소
              </h3>
              <p className="text-gray-600 mb-4">
                오픈소스 예제와 라이브러리를 GitHub에서 확인하세요.
              </p>
              <a
                href="https://github.com/codekingbuilder"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
              >
                GitHub 방문하기 →
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                개발자 포럼
              </h3>
              <p className="text-gray-600 mb-4">
                다른 개발자들과 경험을 공유하고 질문하세요.
              </p>
              <a
                href={`/${currentLocale}/support/community`}
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
              >
                포럼 방문하기 →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
