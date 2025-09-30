"use client";

import { use, useState } from "react";
import { motion } from "framer-motion";
import { Locale } from "@/lib/i18n";
import Navigation from "@/components/Navigation";
import Banner from "@/components/Banner";

export default function EducationPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = use(params);
  const [currentLocale, setCurrentLocale] = useState<Locale>(locale);

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        currentLocale={currentLocale}
        onLocaleChange={setCurrentLocale}
        activePage="pricing"
      />

      <Banner
        title="교육 프로그램"
        subtitle="직접 개발할 수 있는 능력을 키워보세요!"
        params={params}
      />

      {/* 교육 프로그램 소개 섹션 */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Code King Builder 교육 프로그램
            </h2>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto">
              유지보수 요청이 번거로우시다면? 이제 직접 개발할 수 있는 능력을
              키워보세요!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* 가격 및 신청 (왼쪽) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-8 h-full flex flex-col"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden flex-1">
                <div className="absolute top-0 right-0 bg-gradient-to-l from-purple-500 to-blue-500 text-white px-6 py-2 rounded-bl-2xl">
                  <span className="text-sm font-bold">HOT</span>
                </div>

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    맞춤형 1:1 교육
                  </h3>
                  <div className="text-5xl font-bold text-purple-600 mb-2">
                    시간당 20,000원
                  </div>
                  <p className="text-gray-600">최소 10시간부터 시작 가능</p>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">
                      기본 패키지 (10시간)
                    </span>
                    <span className="text-2xl font-bold text-purple-600">
                      200,000원
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">
                      표준 패키지 (20시간)
                    </span>
                    <span className="text-2xl font-bold text-purple-600">
                      380,000원
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-gray-700 font-medium">
                      프리미엄 패키지 (40시간)
                    </span>
                    <span className="text-2xl font-bold text-purple-600">
                      720,000원
                    </span>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-6 mb-8">
                  <h4 className="font-bold text-gray-900 mb-3">🎁 특별 혜택</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      교육용 개발 환경 무료 제공
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      실습용 도메인 1개 무료 제공
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      교육 자료 및 템플릿 무료 제공
                    </li>
                  </ul>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  🎓 지금 교육 신청하기
                </motion.button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h4 className="text-white font-bold mb-4">📞 교육 문의</h4>
                <div className="space-y-3 text-purple-100">
                  <p className="flex items-center">
                    <span className="mr-3">📧</span>
                    codeking@codekingbuilder.com
                  </p>
                  <p className="flex items-center">
                    <span className="mr-3">📱</span>
                    010-4292-9339
                  </p>
                  <p className="text-sm">
                    * 교육 일정은 개인별 맞춤 조율 가능합니다
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 교육 내용 (오른쪽) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8 h-full flex flex-col"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 flex-1">
                <h3 className="text-2xl font-bold text-white mb-6">
                  🚀 자신만의 웹사이트를 직접 개발할 수 있도록
                </h3>
                <div className="h-full flex flex-col space-y-4">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-2">
                        기초부터 실전까지
                      </h4>
                      <p className="text-purple-100 text-sm">
                        HTML, CSS, JavaScript부터 React, Next.js까지 단계별 학습
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-2">
                        실무 프로젝트 중심
                      </h4>
                      <p className="text-purple-100 text-sm">
                        실제 비즈니스 웹사이트를 만들며 실무 경험 쌓기
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-2">
                        1:1 맞춤형 지도
                      </h4>
                      <p className="text-purple-100 text-sm">
                        개인 수준에 맞는 커리큘럼으로 효율적인 학습
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-2">
                        기술 지원
                      </h4>
                      <p className="text-purple-100 text-sm">
                        교육 완료 후에도 3개월간 지속적인 기술 지원 및 멘토링
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">
                  💡 이런 분들께 추천합니다
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">👨‍💼</div>
                    <p className="text-white text-sm font-medium">사업자</p>
                    <p className="text-purple-100 text-xs">
                      직접 웹사이트 관리
                    </p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">🎓</div>
                    <p className="text-white text-sm font-medium">학생</p>
                    <p className="text-purple-100 text-xs">취업 준비</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">💼</div>
                    <p className="text-white text-sm font-medium">직장인</p>
                    <p className="text-purple-100 text-xs">부업/전환</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">🚀</div>
                    <p className="text-white text-sm font-medium">창업자</p>
                    <p className="text-purple-100 text-xs">MVP 개발</p>
                  </div>
                </div>
              </div>
            </motion.div>
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
              나만의 웹사이트, 직접 만들어보세요!
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Code King Builder의 맞춤형 교육으로 당신의 아이디어를 현실로
              만들어드립니다.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-lg"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              지금 교육 신청하기
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
