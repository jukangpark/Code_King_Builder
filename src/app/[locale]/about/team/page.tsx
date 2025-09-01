"use client";

import { useState } from "react";
import { use } from "react";
import { Locale } from "@/lib/i18n";
import Navigation from "@/components/Navigation";
import Image from "next/image";

interface TeamPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export default function TeamPage({ params }: TeamPageProps) {
  const { locale } = use(params);
  const [currentLocale, setCurrentLocale] = useState<Locale>(locale);

  const companyValues = [
    {
      title: "혁신 (Innovation)",
      description:
        "AI 기술을 활용한 웹사이트 제작의 새로운 패러다임을 만들어갑니다",
      icon: "🚀",
    },
    {
      title: "접근성 (Accessibility)",
      description:
        "누구나 쉽게 전문적인 웹사이트를 만들 수 있도록 기술의 장벽을 낮춥니다",
      icon: "🌍",
    },
    {
      title: "품질 (Quality)",
      description: "프로덕션 레벨의 코드 품질과 사용자 경험을 보장합니다",
      icon: "✨",
    },
    {
      title: "협업 (Collaboration)",
      description: "AI와 인간의 창의적 협업을 통해 더 나은 결과를 만들어갑니다",
      icon: "🤝",
    },
  ];

  const careerHistory = [
    {
      title: "3D 데이터 센터 시각화 솔루션(DOMS) 기획 및 개발",
      period: "2022.06 - 2022.12",
      role: "첫 주요 프로젝트로 DOMS 기획 및 개발 주도",
      contributions: [
        "좌표계 구조 및 데이터 스키마 설계",
        "3D 대시보드 제작을 위한 노코드 툴 개발",
        "43개 API 연동 (85%)",
        "JWT Token 자동 재발행 시스템 개발",
        "React Three Fiber 기반의 3D 랙 모델링 구현",
      ],
      achievements: [
        "6개월 내 솔루션 출시로 팀 KPI 달성",
        "새로운 사업을 제품화 수준으로 발전",
      ],
    },
    {
      title: "DOMS 구축 프로젝트 (효성, KLID, LG-CNS)",
      period: "2022.12 - 2023.02",
      role: "여러 대규모 데이터 센터에 맞춘 DOMS 솔루션 설계 및 개발 주도",
      contributions: [
        "사내 EMS팀과 협력하여 안정적인 솔루션 구축",
        "그래픽 옵션 최적화로 FPS 25% 향상 및 GPU 사용량 15% 감소",
        "현장 시스템 구축 및 데이터 연동 수행",
        "첫 사업에서 버그 발생률 0% 달성 및 성공적인 납품",
        "고객사 요구사항 맞춤형 기능 개발",
      ],
      achievements: [
        "성공적 납품으로 신뢰 확보 및 추가 프로젝트 레퍼런스 확보",
        "대규모 데이터 센터 시장에서 신뢰성 입증 및 추가 사업 기회 창출",
      ],
    },
    {
      title: "Builder R3(실시간 협업 대시보드 노코드 제작 툴) 기획 및 개발",
      period: "2023.07 - 현재",
      role: "Builder R3 UI 리더로서 기획 및 개발",
      contributions: [
        "jest 코드 커버리지 80% 달성 (706개의 테스트)",
        "사내 최초 E2E 테스트(playwright 도입)로 결함률 사내 최저 기록",
        "확장성과 유지보수성을 고려한 프론트엔드 아키텍처 설계 및 모듈화",
        "코드 리뷰 문화를 주도하여 팀의 코드 품질 및 사내 최저 결함률 달성",
        "모듈 번들링 최적화를 통해 FCP 시간 0.6s → 0.3s로 단축",
      ],
      achievements: [
        "결함률 최저 수준의 통합 신제품 출시",
        "6개월 내 운영 가능한 수준으로 개발 완료",
        "팀 KPI 성공적 달성",
      ],
    },
    {
      title: "통합신제품 폴스타 10 - 위젯 대시보드 빌더 개발",
      period: "2025.5 - 현재",
      role: "베트남 외주 개발 인력들(NTQ)과 같이 원격으로 협업",
      contributions: ["새로운 프로젝트에서 위젯 컴포넌트 개발"],
      achievements: ["통합 신제품에 위젯 컴포넌트 개발"],
    },
  ];

  const achievements = [
    {
      title: "AI 기반 웹사이트 빌더 개발",
      description:
        "자연어 처리와 MCP를 활용한 혁신적인 웹사이트 생성 시스템 구축",
      year: "2024-2025",
    },
    {
      title: "다국어 지원 플랫폼",
      description: "한국어, 영어, 일본어, 중국어를 지원하는 글로벌 서비스 제공",
      year: "2024-2025",
    },
    {
      title: "템플릿 라이브러리 구축",
      description:
        "다양한 업종과 용도에 맞는 전문적인 웹사이트 템플릿 50+개 개발",
      year: "2024-2025",
    },
    {
      title: "보안 및 인증 시스템",
      description:
        "Supabase 기반의 안전하고 확장 가능한 사용자 인증 시스템 구현",
      year: "2024-2025",
    },
  ];

  return (
    <>
      <Navigation
        currentLocale={currentLocale}
        onLocaleChange={setCurrentLocale}
        activePage="about"
      />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 헤더 섹션 */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-8">
              <Image
                src="/codekingbuilder.png"
                alt="Code King Builder"
                width={120}
                height={120}
                className="rounded-full bg-black p-3"
              />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">박주강</h1>
            <h2 className="text-3xl font-semibold text-purple-600 mb-4">
              대표이사
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              누구나 쉽게 전문적인 웹사이트를 만들 수 있는 세상을 만들어갑니다
            </p>
          </div>

          {/* 핵심 가치/비전 섹션 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              핵심 가치 & 비전
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  회사 미션
                </h3>
                <p className="text-xl text-purple-700 font-semibold">
                  "누구나 쉽게 만드는 웹사이트"
                </p>
                <p className="text-gray-600 mt-3">
                  기술적 지식 없이도 전문적인 웹사이트를 만들 수 있도록 AI
                  기술을 활용하여 웹 제작의 장벽을 낮추고, 창의적인 아이디어를
                  현실로 구현할 수 있는 플랫폼을 제공합니다.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  미래 비전
                </h3>
                <p className="text-xl text-green-700 font-semibold">
                  "웹 제작 기술의 대중화를 통한 디지털 혁신"
                </p>
                <p className="text-gray-600 mt-3">
                  AI와 인간의 창의적 협업을 통해 웹사이트 제작의 새로운 시대를
                  열고, 개인과 기업이 디지털 세계에서 자신만의 독특한 가치를
                  표현할 수 있도록 지원합니다.
                </p>
              </div>
            </div>

            {/* 핵심 가치 그리드 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {companyValues.map((value, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl mb-3">{value.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 경력 및 전문성 섹션 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              경력 및 전문성
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  주요 경력
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Code King Builder 대표이사
                      </p>
                      <p className="text-gray-600">2024 - 현재</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        프론트엔드 개발 전문가
                      </p>
                      <p className="text-gray-600">
                        React, Next.js, TypeScript 5년+
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        AI 기술 통합 전문가
                      </p>
                      <p className="text-gray-600">
                        MCP, 자연어 처리, AI 웹 빌더
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  전문 분야
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-purple-600 mr-2">•</span>
                    <span className="text-gray-700">프론트엔드 개발</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-purple-600 mr-2">•</span>
                    <span className="text-gray-700">웹 빌더 플랫폼 개발</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-purple-600 mr-2">•</span>
                    <span className="text-gray-700">AI 기술 통합</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-purple-600 mr-2">•</span>
                    <span className="text-gray-700">SaaS 플랫폼 설계</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-purple-600 mr-2">•</span>
                    <span className="text-gray-700">클라우드 인프라 구축</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 주요 성과 */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                주요 성과
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-4 border border-purple-200"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900">
                        {achievement.title}
                      </h4>
                      <span className="text-sm text-purple-600 font-medium">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {achievement.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 커리어 히스토리 섹션 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              커리어 히스토리
            </h2>

            <div className="space-y-8">
              {careerHistory.map((career, index) => (
                <div
                  key={index}
                  className="border-l-4 border-purple-500 pl-6 relative"
                >
                  {/* 타임라인 점 */}
                  <div className="absolute -left-3 w-6 h-6 bg-purple-500 rounded-full border-4 border-white shadow-md"></div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {career.title}
                      </h3>
                      <p className="text-purple-600 font-medium mb-2">
                        {career.period}
                      </p>
                      <p className="text-gray-700 font-medium">{career.role}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                          핵심 기여
                        </h4>
                        <ul className="space-y-2">
                          {career.contributions.map((contribution, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-purple-600 mr-2">•</span>
                              <span className="text-gray-700">
                                {contribution}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                          성과
                        </h4>
                        <ul className="space-y-2">
                          {career.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-green-600 mr-2">✓</span>
                              <span className="text-gray-700">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 개인 철학 섹션 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              개인 철학
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8">
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  "기술은 사람을 위한 것이어야 합니다. 복잡한 기술을 단순하게
                  만들어 누구나 쉽게 사용할 수 있도록 하는 것이 제가 추구하는
                  방향입니다. AI 기술을 활용해 웹사이트 제작의 장벽을 낮추고,
                  창의적인 아이디어를 가진 모든 사람이 자신만의 디지털 공간을
                  만들 수 있도록 돕겠습니다."
                </p>
              </div>
            </div>
          </div>

          {/* 링크 섹션 */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              연결하기
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="https://jkng-96.gitbook.io/devlog"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
              >
                <svg
                  className="w-12 h-12 text-purple-600 mb-3"
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
                <span className="font-semibold text-gray-900">기술 블로그</span>
              </a>
              <a
                href="https://www.youtube.com/@CodeKingAcademy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
              >
                <svg
                  className="w-12 h-12 text-red-600 mb-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <span className="font-semibold text-gray-900">YouTube</span>
              </a>
              <a
                href="https://www.instagram.com/code_king_academy/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors"
              >
                <svg
                  className="w-12 h-12 text-pink-600 mb-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="font-semibold text-gray-900">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
