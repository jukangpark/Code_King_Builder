"use client";

import { use, useState } from "react";
import { motion } from "framer-motion";
import { Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/i18n";
import Navigation from "@/components/Navigation";
import Banner from "@/components/Banner";

export default function CustomDevelopmentPage({
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
        title="맞춤형 웹사이트 개발"
        subtitle="고객의 비즈니스에 최적화된 맞춤형 웹사이트 개발 서비스"
        params={params}
      />

      {/* Service Introduction Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              맞춤형 웹사이트 개발 서비스
            </h2>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto">
              고객의 비즈니스 목표와 요구사항에 맞춘 완전히 개별화된 웹사이트를
              제공합니다
            </p>
          </motion.div>

          {/* Service Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
            >
              <div className="text-4xl mb-4">👷🏾‍♂️</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                전략적 기획
              </h3>
              <p className="text-purple-100">
                비즈니스 목표 분석부터 사용자 경험 설계까지 체계적인 기획
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
            >
              <div className="text-4xl mb-4">✏️</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                전문 카피라이팅
              </h3>
              <p className="text-purple-100">
                브랜드 톤앤매너에 맞는 전문적인 콘텐츠 작성
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
            >
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                브랜드 디자인
              </h3>
              <p className="text-purple-100">
                브랜드 아이덴티티에 맞는 일관된 디자인 시스템 구축
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
            >
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                SEO 최적화
              </h3>
              <p className="text-purple-100">
                검색엔진 최적화를 통한 온라인 가시성 향상
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
            >
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                반응형 디자인
              </h3>
              <p className="text-purple-100">
                모든 디바이스에서 완벽한 사용자 경험 제공
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
            >
              <div className="text-4xl mb-4">🏎️</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                고성능 최적화
              </h3>
              <p className="text-purple-100">
                빠른 로딩 속도와 최적의 성능을 위한 기술적 최적화
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
            >
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                AI 어시스턴트
              </h3>
              <p className="text-purple-100">
                지능형 AI 어시스턴트를 통한 고객 지원 자동화
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
            >
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Google Workspace 연동
              </h3>
              <p className="text-purple-100">
                Google Workspace와의 완벽한 연동으로 업무 효율성 극대화
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
            >
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                도메인 & 호스팅
              </h3>
              <p className="text-purple-100">
                도메인 등록부터 호스팅 설정까지 원스톱 서비스
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              맞춤형 개발 패키지
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              고객의 요구사항에 맞는 맞춤형 개발 패키지를 제공합니다
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                id: "standard",
                delay: 0.1,
                className: "bg-white rounded-lg shadow-lg p-8 relative",
                buttonClass:
                  "w-full bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-700 transition-colors",
                popular: false,
                additionalFeatures: "0개",
              },
              {
                id: "deluxe",
                delay: 0.2,
                className:
                  "bg-white rounded-lg shadow-xl p-8 relative border-2 border-purple-500 transform scale-105",
                buttonClass:
                  "w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors",
                popular: true,
                additionalFeatures: "5개",
              },
              {
                id: "premium",
                delay: 0.3,
                className: "bg-white rounded-lg shadow-lg p-8 relative",
                buttonClass:
                  "w-full bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-700 transition-colors",
                popular: false,
                additionalFeatures: "10개",
              },
            ].map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: pkg.delay }}
                className={pkg.className}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      인기
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {pkg.id === "standard" && "STANDARD"}
                    {pkg.id === "deluxe" && "DELUXE"}
                    {pkg.id === "premium" && "PREMIUM"}
                  </h3>
                  <div className="text-4xl font-bold text-purple-600 mb-6">
                    {pkg.id === "standard" && "99,000원"}
                    {pkg.id === "deluxe" && "399,000원"}
                    {pkg.id === "premium" && "990,000원"}
                  </div>
                  <p className="text-gray-600 mb-6">
                    {pkg.id === "standard" && "기본적인 웹사이트 개발"}
                    {pkg.id === "deluxe" && "고급 기능이 포함된 웹사이트"}
                    {pkg.id === "premium" && "완전 맞춤형 프리미엄 웹사이트"}
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-gray-600">
                      <svg
                        className="h-5 w-5 text-green-500 mr-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      기본 웹사이트 개발
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">제작 기간</span>
                      <span className="font-semibold text-gray-900">
                        {pkg.id === "standard" && "7-10일"}
                        {pkg.id === "deluxe" && "14-21일"}
                        {pkg.id === "premium" && "21-30일"}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">수정 횟수</span>
                      <span className="font-semibold text-gray-900">
                        {pkg.id === "standard" && "2회"}
                        {pkg.id === "deluxe" && "3회"}
                        {pkg.id === "premium" && "무제한"}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">페이지 수</span>
                      <span className="font-semibold text-gray-900">
                        {pkg.id === "standard" && "5페이지"}
                        {pkg.id === "deluxe" && "10페이지"}
                        {pkg.id === "premium" && "무제한"}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">반응형 디자인</span>
                      <span className="text-green-500">✓</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">크로스 브라우저</span>
                      <span className="text-green-500">✓</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">추가 기능</span>
                      <span className="font-semibold text-gray-900">
                        {pkg.additionalFeatures}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">소스코드 제공</span>
                      <span className="text-green-500">✓</span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={pkg.buttonClass}
                  >
                    패키지 선택하기
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              맞춤형 웹사이트 개발 문의
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              고객의 비즈니스에 최적화된 맞춤형 웹사이트 개발 서비스를
              제공합니다
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-lg"
              onClick={() =>
                (window.location.href = `/${currentLocale}/contact`)
              }
            >
              맞춤형 개발 문의하기
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
