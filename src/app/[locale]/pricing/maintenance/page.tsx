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
              유지보수 플랜
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              웹사이트의 규모와 요구사항에 맞는 유지보수 플랜을 선택하세요
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                id: "basic",
                name: "베이직 플랜",
                price: "월 50,000원",
                description: "기본적인 유지보수 서비스",
                features: [
                  "월 1회 기술 점검",
                  "보안 업데이트",
                  "기본 백업",
                  "이메일 지원",
                  "월 2시간 콘텐츠 수정",
                ],
                popular: false,
                delay: 0.1,
              },
              {
                id: "standard",
                name: "스탠다드 플랜",
                price: "월 100,000원",
                description: "포괄적인 유지보수 서비스",
                features: [
                  "주 1회 기술 점검",
                  "실시간 보안 모니터링",
                  "자동 백업",
                  "전화 + 이메일 지원",
                  "월 5시간 콘텐츠 수정",
                  "SEO 기본 관리",
                ],
                popular: true,
                delay: 0.2,
              },
              {
                id: "premium",
                name: "프리미엄 플랜",
                price: "월 200,000원",
                description: "전문적인 유지보수 서비스",
                features: [
                  "24/7 모니터링",
                  "고급 보안 관리",
                  "실시간 백업",
                  "우선 지원",
                  "무제한 콘텐츠 수정",
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {plan.name}
                  </h3>
                  <div className="text-4xl font-bold text-purple-600 mb-6">
                    {plan.price}
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

      {/* Additional Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              추가 서비스
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              필요에 따라 추가로 제공하는 서비스들입니다
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                디자인 수정
              </h3>
              <p className="text-gray-600 mb-4">
                기존 디자인의 색상, 레이아웃, 폰트 등을 수정합니다.
              </p>
              <div className="text-2xl font-bold text-purple-600">
                시간당 30,000원
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                기능 추가
              </h3>
              <p className="text-gray-600 mb-4">
                새로운 기능이나 페이지를 추가로 개발합니다.
              </p>
              <div className="text-2xl font-bold text-purple-600">
                기능별 견적
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                모바일 최적화
              </h3>
              <p className="text-gray-600 mb-4">
                모바일 환경에서의 사용성을 개선합니다.
              </p>
              <div className="text-2xl font-bold text-purple-600">
                ￦100,000부터
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                SEO 최적화
              </h3>
              <p className="text-gray-600 mb-4">
                검색엔진 최적화를 통한 노출도 향상 서비스입니다.
              </p>
              <div className="text-2xl font-bold text-purple-600">
                ￦150,000부터
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                보안 강화
              </h3>
              <p className="text-gray-600 mb-4">
                웹사이트 보안을 강화하고 취약점을 점검합니다.
              </p>
              <div className="text-2xl font-bold text-purple-600">
                ￦200,000부터
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                분석 도구 설치
              </h3>
              <p className="text-gray-600 mb-4">
                Google Analytics, Search Console 등 분석 도구를 설치합니다.
              </p>
              <div className="text-2xl font-bold text-purple-600">
                ￦50,000부터
              </div>
            </motion.div>
          </div>
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
