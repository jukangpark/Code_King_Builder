"use client";

import { use, useState } from "react";
import { motion } from "framer-motion";
import { Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/i18n";
import Navigation from "@/components/Navigation";
import Banner from "@/components/Banner";

export default function MaintenancePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = use(params);
  const [currentLocale, setCurrentLocale] = useState<Locale>(locale);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation
        currentLocale={currentLocale}
        onLocaleChange={setCurrentLocale}
        activePage="pricing"
      />

      <Banner
        title="유지보수 서비스"
        subtitle="웹사이트의 안정적인 운영을 위한 전문적인 유지보수 서비스"
        params={params}
      />

      {/* Maintenance Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Service Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                기술적 유지보수
              </h3>
              <p className="text-gray-600">
                서버 관리, 보안 업데이트, 성능 최적화 등 기술적 유지보수
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                보안 관리
              </h3>
              <p className="text-gray-600">
                보안 취약점 점검, SSL 인증서 관리, 해킹 방지 시스템 운영
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                성능 모니터링
              </h3>
              <p className="text-gray-600">
                24/7 성능 모니터링, 장애 대응, 백업 관리
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                콘텐츠 업데이트
              </h3>
              <p className="text-gray-600">
                텍스트, 이미지, 뉴스 등 콘텐츠 업데이트 및 관리
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                SEO 관리
              </h3>
              <p className="text-gray-600">
                검색엔진 최적화, 키워드 분석, 순위 모니터링
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                고객 지원
              </h3>
              <p className="text-gray-600">
                기술 지원, 사용법 안내, 문제 해결 지원
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Maintenance Plans Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              정기 유지보수 계약 비용안내
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              웹사이트의 규모와 요구사항에 맞는 유지보수 플랜을 선택하세요
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                id: "basic",
                name: "Basic",
                subtitle: "기본형",
                price: "₩360,000",
                period: "1년",
                description: "제작 이후 관리 비중이 낮을때 추천",
                features: [
                  "수정 요청 횟수: 월 2회",
                  "기본 기술 점검",
                  "보안 업데이트",
                  "기본 백업",
                  "이메일 지원",
                ],
                popular: false,
                delay: 0.1,
              },
              {
                id: "common",
                name: "Common",
                subtitle: "일반형",
                price: "₩600,000",
                period: "1년",
                description:
                  "회사, 기업, 연구실등에 적절하며 대부분의 경우 추천",
                features: [
                  "수정 요청 횟수: 월 5회",
                  "주 1회 기술 점검",
                  "실시간 보안 모니터링",
                  "자동 백업",
                  "전화 + 이메일 지원",
                  "SEO 기본 관리",
                ],
                popular: true,
                delay: 0.2,
              },
              {
                id: "management",
                name: "Management",
                subtitle: "관리형",
                price: "₩1,500,000",
                period: "1년",
                description:
                  "홈페이지를 통한 영업이나 실적 업데이트가 빈번한 경우 추천",
                features: [
                  "수정 요청 횟수: 무제한",
                  "24/7 모니터링",
                  "고급 보안 관리",
                  "실시간 백업",
                  "우선 지원",
                  "전문 SEO 관리",
                  "성능 최적화",
                  "전용 담당자 배정",
                ],
                popular: false,
                delay: 0.3,
              },
            ].map((plan) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: plan.delay }}
                className={`bg-white rounded-lg shadow-lg p-8 relative ${
                  plan.popular
                    ? "border-2 border-purple-500 transform scale-105"
                    : "border border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      인기
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <h4 className="text-lg font-semibold text-purple-600 mb-4">
                    {plan.subtitle}
                  </h4>
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    {plan.price}
                  </div>
                  <div className="text-sm text-gray-500 mb-2">
                    원 (VAT 별도)
                  </div>
                  <div className="text-sm text-gray-500 mb-6">
                    {plan.period}
                  </div>
                  <p className="text-gray-600 mb-8">{plan.description}</p>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center text-gray-600"
                      >
                        <svg
                          className="h-5 w-5 text-green-500 mr-3 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? "bg-purple-600 text-white hover:bg-purple-700"
                        : "bg-gray-600 text-white hover:bg-gray-700"
                    }`}
                  >
                    플랜 선택하기
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Maintenance Scope Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              정기 유지보수 무료 수정 범위
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              정기 유지보수 계약에 포함된 무료 수정 서비스 범위입니다
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                기본정보
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 하단 주소</li>
                <li>• 이메일</li>
                <li>• 전화번호</li>
                <li>• 운영시간</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="text-3xl mb-4">📄</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                일반페이지
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 1:1 부분 교체</li>
                <li>• 텍스트 수정</li>
                <li>• 이미지 교체</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="text-3xl mb-4">🖼️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                메인비주얼
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 1:1 부분 교체</li>
                <li>• 텍스트 수정</li>
                <li>• 이미지 교체</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                서브비주얼
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 1:1 부분 교체</li>
                <li>• 텍스트 수정</li>
                <li>• 이미지 교체</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="text-3xl mb-4">🧭</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">메뉴</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 단순 메뉴명 변경</li>
                <li>• 텍스트 수정</li>
                <li>• 링크 변경</li>
                <li>• 메뉴위치 조정</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Paid Maintenance Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              유상 유지보수 비용안내
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              정기 유지보수 범위를 초과하는 추가 작업에 대한 비용 안내입니다
            </p>
          </motion.div>

          {/* Menu Addition Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              메뉴 추가
            </h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">
                        작업명
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">
                        작업내용
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">
                        작업단가
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">
                        비고
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-700">
                        메뉴(페이지) 추가
                        <br />
                        (모바일 포함)
                      </td>
                      <td className="py-3 px-4 text-gray-600">일반페이지</td>
                      <td className="py-3 px-4 font-semibold text-purple-600">
                        90,000원
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-500">
                        ※자료 제공시 참고※
                        <br />1 페이지 높이 1000px 기준,
                        <br />
                        PPT, PDF, MS-Word 1 페이지 기준
                        <br />
                        (1 메뉴당 최대 1~3 페이지 분량 합침 가능)
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-700">게시판 추가</td>
                      <td className="py-3 px-4 text-gray-600">
                        게시판 일반, 갤러리
                      </td>
                      <td className="py-3 px-4 font-semibold text-purple-600">
                        90,000원
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-500">-</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-700">
                        인트로 페이지 추가
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        디스플레이 한 화면 100% 높이 1컷
                      </td>
                      <td className="py-3 px-4 font-semibold text-purple-600">
                        150,000원
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-500">
                        (홈페이지 접속시 대문 페이지)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Content Addition Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              컨텐츠 추가 및 변경
            </h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">
                        작업명
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">
                        작업내용
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">
                        작업단가
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">
                        비고
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-700">
                        컨텐츠 추가/변경
                        <br />
                        (모바일 포함)
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        메인페이지 1 파트
                      </td>
                      <td className="py-3 px-4 font-semibold text-purple-600">
                        150,000원
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-500">
                        ※자료 제공시 참고※
                        <br />
                        컨텐츠 높이 1000px 기준,
                        <br />
                        PPT, PDF, MS-Word 1페이지 기준
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-700">
                        컨텐츠 추가/변경
                        <br />
                        (모바일 포함)
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        서브페이지 1 파트
                      </td>
                      <td className="py-3 px-4 font-semibold text-purple-600">
                        90,000원
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-500">
                        ※자료 제공시 참고※
                        <br />
                        컨텐츠 높이 1000px 기준,
                        <br />
                        PPT, PDF, MS-Word 1페이지 기준
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-700">
                        기존 페이지내 새로운 요소 추가 / 변경
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        디자인 버튼, 기존 파트를 분할하여 새로운 항목 추가,
                        페이지내 특정 부분을 새로운 디자인과 내용으로 변경, 기타
                        디자인 후 코딩작업이 필요한 모든 요소
                      </td>
                      <td className="py-3 px-4 font-semibold text-purple-600">
                        50,000원
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-500">
                        1회 작업당 최소
                        <br />
                        (전체 작업양을 산정하여 묶어서 회수 측정)
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-700">로고 변경</td>
                      <td className="py-3 px-4 text-gray-600">
                        상단 헤더 로고, 회사소개 페이지내 로고 or Ci, OG img
                        수정 (카카오톡 URL 전달시 보이는 로고), 기타 로고 이미지
                        변경 및 코딩작업이 필요한 모든 요소
                      </td>
                      <td className="py-3 px-4 font-semibold text-purple-600">
                        50,000원
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-500">
                        1회 작업당 최소
                        <br />
                        (전체 작업양을 산정하여 묶어서 회수 측정)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Dynamic Design Elements Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              동적 디자인요소 제작
            </h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">
                        작업명
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">
                        작업내용
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">
                        작업단가
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">
                        비고
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-700">메인비주얼</td>
                      <td className="py-3 px-4 text-gray-600">
                        간단한 효과 및 텍스트 효과
                      </td>
                      <td className="py-3 px-4 font-semibold text-purple-600">
                        150,000원
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-500">-</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-700">메인비주얼</td>
                      <td className="py-3 px-4 text-gray-600">
                        복잡한 효과 및 난이도 중이상
                      </td>
                      <td className="py-3 px-4 font-semibold text-purple-600">
                        (별도견적)
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-500">-</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-700">서브비주얼</td>
                      <td className="py-3 px-4 text-gray-600">
                        간단한 효과 및 텍스트 효과
                      </td>
                      <td className="py-3 px-4 font-semibold text-purple-600">
                        100,000원
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-500">-</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-700">서브비주얼</td>
                      <td className="py-3 px-4 text-gray-600">
                        복잡한 효과 및 난이도 중이상
                      </td>
                      <td className="py-3 px-4 font-semibold text-purple-600">
                        (별도견적)
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-500">-</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-700">
                        동영상으로 변경
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        메인 or 서브 비주얼 이미지에서 영상으로 변경
                      </td>
                      <td className="py-3 px-4 font-semibold text-purple-600">
                        150,000원
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-500">
                        (영상 10mb 이내로 제한)
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-700">
                        메뉴 네비게이션
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        네비게이션 디자인 변경 (메인 + 서브)
                      </td>
                      <td className="py-3 px-4 font-semibold text-purple-600">
                        150,000원
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-500">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Program Modification Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              프로그램 수정 변경
            </h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">
                        작업명
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">
                        작업내용
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">
                        작업단가
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">
                        비고
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-700">
                        게시판 항목 수정
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        조회수, 글쓴이, 작성일 등 원하시는 명칭의 항목 삭제 혹은
                        추가
                      </td>
                      <td className="py-3 px-4 font-semibold text-purple-600">
                        50,000원
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-500">-</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-700">
                        로그인기능 추가
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        비회원제에서 회원제 서비스로 전환
                      </td>
                      <td className="py-3 px-4 font-semibold text-purple-600">
                        300,000원
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-500">-</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-700">
                        기타 게시판 기능 수정
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        로그인 항목, 게시판 기능 추가 및 변경 등
                      </td>
                      <td className="py-3 px-4 font-semibold text-purple-600">
                        (별도견적)
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-500">-</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-700">
                        게시판 스킨변경
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        설정된 게시판의 디자인 변경 (개당)
                      </td>
                      <td className="py-3 px-4 font-semibold text-purple-600">
                        100,000원 ~
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-500">-</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-700">메인탭 추출</td>
                      <td className="py-3 px-4 text-gray-600">
                        메인에 추출되는 게시판을 탭형식으로 추출
                      </td>
                      <td className="py-3 px-4 font-semibold text-purple-600">
                        100,000원
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-500">-</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-700">
                        빠른 문의폼 추가
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        메인, 하단 고정, 따라다니는 문의 폼 개발
                      </td>
                      <td className="py-3 px-4 font-semibold text-purple-600">
                        200,000원 ~
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-500">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Important Notes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-yellow-50 border border-yellow-200 rounded-lg p-6"
          >
            <h4 className="text-lg font-semibold text-yellow-800 mb-4">
              참고사항
            </h4>
            <ul className="text-yellow-700 space-y-2">
              <li>
                • 프로그램 추가 및 변경, 고난이도 디자인 작업시 비용이 추가될 수
                있습니다.
              </li>
              <li>
                • 프로그램이 많거나 수익기반의 사이트는 별도 협의에 의해서
                결정됩니다.
              </li>
              <li>
                • VAT 별도 가격이며, 유지보수는 선납을 원칙으로 하고 입금 확인
                후 작업에 들어갑니다.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              유지보수 서비스 문의
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              웹사이트의 안정적인 운영을 위한 유지보수 서비스를 시작하세요
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-lg"
              onClick={() =>
                (window.location.href = `/${currentLocale}/contact`)
              }
            >
              유지보수 서비스 문의하기
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
