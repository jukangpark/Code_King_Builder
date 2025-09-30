"use client";

import { use, useState } from "react";
import { motion } from "framer-motion";
import { Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/i18n";
import Navigation from "@/components/Navigation";
import Banner from "@/components/Banner";

export default function ProcessPage({
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
        title="서비스 제공 절차"
        subtitle="체계적인 프로세스로 고품질 웹사이트를 제공합니다"
        params={params}
      />

      {/* Process Section */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {[
              {
                step: "1",
                icon: "💬",
                title: "상담 및 요구사항 분석",
                description:
                  "고객의 비즈니스 목표와 요구사항을 상세히 분석하여 최적의 솔루션을 제안합니다.",
              },
              {
                step: "2",
                icon: "💳",
                title: "견적서 및 계약",
                description:
                  "상담 내용을 바탕으로 정확한 견적서를 제공하고 계약을 체결합니다.",
              },
              {
                step: "3",
                icon: "🎨",
                title: "기획 및 디자인",
                description:
                  "사용자 경험을 고려한 웹사이트 구조 설계와 브랜드에 맞는 디자인을 제작합니다.",
              },
              {
                step: "4",
                icon: "⚒️",
                title: "개발 및 구현",
                description:
                  "최신 기술을 활용하여 반응형이고 최적화된 웹사이트를 개발합니다.",
              },
              {
                step: "5",
                icon: "🌐",
                title: "테스트 및 배포",
                description:
                  "다양한 환경에서 테스트를 진행하고 도메인 연결 및 호스팅 설정을 완료합니다.",
              },
              {
                step: "6",
                icon: "🧐",
                title: "최종 검수 및 납품",
                description:
                  "고객의 최종 검수를 거쳐 완성된 웹사이트를 납품하고 운영 가이드를 제공합니다.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Process Section */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              상세 프로세스
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              각 단계별로 상세한 작업 내용과 소요 기간을 안내해드립니다
            </p>
          </motion.div>

          <div className="space-y-12">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8"
            >
              <div className="w-full lg:w-1/3">
                <div className="bg-white rounded-lg p-4 lg:p-6 text-center shadow-lg">
                  <div className="text-4xl mb-4">💬</div>
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">
                    1단계: 상담 및 요구사항 분석
                  </h3>
                  <p className="text-gray-600">소요 기간: 1-2일</p>
                </div>
              </div>
              <div className="w-full lg:w-2/3">
                <div className="space-y-3 lg:space-y-4 text-left">
                  <h4 className="text-base lg:text-lg font-semibold text-gray-900">
                    주요 작업 내용
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      비즈니스 목표 및 타겟 고객 분석
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      웹사이트 기능 요구사항 수집
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      디자인 선호도 및 브랜드 가이드라인 파악
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      예산 및 일정 조율
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8"
            >
              <div className="w-full lg:w-1/3">
                <div className="bg-white rounded-lg p-4 lg:p-6 text-center shadow-lg">
                  <div className="text-4xl mb-4">💳</div>
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">
                    2단계: 견적서 및 계약
                  </h3>
                  <p className="text-gray-600">소요 기간: 1일</p>
                </div>
              </div>
              <div className="w-full lg:w-2/3">
                <div className="space-y-3 lg:space-y-4 text-left">
                  <h4 className="text-base lg:text-lg font-semibold text-gray-900">
                    주요 작업 내용
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      상세 견적서 작성 및 제출
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      계약서 작성 및 서명
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      프로젝트 킥오프 미팅
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      작업 일정 및 마일스톤 설정
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8"
            >
              <div className="w-full lg:w-1/3">
                <div className="bg-white rounded-lg p-4 lg:p-6 text-center shadow-lg">
                  <div className="text-4xl mb-4">🎨</div>
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">
                    3단계: 기획 및 디자인
                  </h3>
                  <p className="text-gray-600">소요 기간: 3-5일</p>
                </div>
              </div>
              <div className="w-full lg:w-2/3">
                <div className="space-y-3 lg:space-y-4 text-left">
                  <h4 className="text-base lg:text-lg font-semibold text-gray-900">
                    주요 작업 내용
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      사이트맵 및 정보구조 설계
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      와이어프레임 제작
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      UI/UX 디자인 컨셉 제안
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      디자인 시안 제작 및 피드백 반영
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8"
            >
              <div className="w-full lg:w-1/3">
                <div className="bg-white rounded-lg p-4 lg:p-6 text-center shadow-lg">
                  <div className="text-4xl mb-4">⚒️</div>
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">
                    4단계: 개발 및 구현
                  </h3>
                  <p className="text-gray-600">소요 기간: 7-14일</p>
                </div>
              </div>
              <div className="w-full lg:w-2/3">
                <div className="space-y-3 lg:space-y-4 text-left">
                  <h4 className="text-base lg:text-lg font-semibold text-gray-900">
                    주요 작업 내용
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      프론트엔드 개발 (HTML, CSS, JavaScript)
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      반응형 디자인 구현
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      백엔드 기능 개발 (필요시)
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      SEO 최적화 및 성능 튜닝
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Step 5 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8"
            >
              <div className="w-full lg:w-1/3">
                <div className="bg-white rounded-lg p-4 lg:p-6 text-center shadow-lg">
                  <div className="text-4xl mb-4">🌐</div>
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">
                    5단계: 테스트 및 배포
                  </h3>
                  <p className="text-gray-600">소요 기간: 2-3일</p>
                </div>
              </div>
              <div className="w-full lg:w-2/3">
                <div className="space-y-3 lg:space-y-4 text-left">
                  <h4 className="text-base lg:text-lg font-semibold text-gray-900">
                    주요 작업 내용
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      크로스 브라우저 테스트
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      모바일 반응형 테스트
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      도메인 연결 및 호스팅 설정
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      SSL 인증서 설치 및 보안 설정
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Step 6 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8"
            >
              <div className="w-full lg:w-1/3">
                <div className="bg-white rounded-lg p-4 lg:p-6 text-center shadow-lg">
                  <div className="text-4xl mb-4">🧐</div>
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">
                    6단계: 최종 검수 및 납품
                  </h3>
                  <p className="text-gray-600">소요 기간: 1-2일</p>
                </div>
              </div>
              <div className="w-full lg:w-2/3">
                <div className="space-y-3 lg:space-y-4 text-left">
                  <h4 className="text-base lg:text-lg font-semibold text-gray-900">
                    주요 작업 내용
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      고객 최종 검수 및 피드백 반영
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      소스코드 및 문서 전달
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      운영 가이드 및 관리 방법 안내
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      유지보수 서비스 안내
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              체계적인 프로세스로 시작하세요
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              전문적인 프로세스를 통해 고품질 웹사이트를 제공합니다
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-lg"
              onClick={() =>
                (window.location.href = `/${currentLocale}/contact`)
              }
            >
              프로젝트 시작하기
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
