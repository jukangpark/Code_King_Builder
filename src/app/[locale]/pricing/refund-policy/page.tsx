"use client";

import { use, useState } from "react";
import { motion } from "framer-motion";
import { Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/i18n";
import Navigation from "@/components/Navigation";
import Banner from "@/components/Banner";

export default function RefundPolicyPage({
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
        title="취소 및 환불 규정"
        subtitle="[IT·프로그래밍 > 홈페이지 신규 제작] 취소 및 환불 규정"
        params={params}
      />

      {/* Refund Policy Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* 기본 규정 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-8 border-b border-gray-700 pb-4">
                  기본 규정
                </h3>
                <div className="space-y-8">
                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="font-bold text-white mb-3 text-lg">
                      1. 용역 제공이 개시되기 전
                    </h4>
                    <p className="text-gray-300 text-base leading-relaxed">
                      취소 및 환불 가능
                    </p>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-6">
                    <h4 className="font-bold text-white mb-3 text-lg">
                      2. 용역 제공이 개시된 후
                    </h4>
                    <div className="space-y-3 text-gray-300 text-base leading-relaxed">
                      <p>
                        <span className="font-semibold text-yellow-400">
                          가분적 용역:
                        </span>{" "}
                        개시되지 않은 범위에 대한 취소 및 환불 가능
                      </p>
                      <p>
                        <span className="font-semibold text-yellow-400">
                          불가분적 용역:
                        </span>{" "}
                        취소 및 환불 불가
                      </p>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="font-bold text-white mb-3 text-lg">
                      3. 제공된 용역이 구매 확정된 경우
                    </h4>
                    <p className="text-gray-300 text-base leading-relaxed">
                      거래 금액을 정산 받은 전문가와 직접 취소 및 환불 협의
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 참고 사항 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-8 border-b border-gray-700 pb-4">
                  참고 사항
                </h3>
                <p className="text-gray-300 mb-8 text-base leading-relaxed">
                  다음의 경우에는 해당 기준을 따릅니다.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-gray-300 font-bold text-sm">1</span>
                    </div>
                    <p className="text-gray-300 text-base leading-relaxed">
                      전문가가 제시한 취소 조건이 기본 규정보다 의뢰인에게
                      유리한 경우
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-gray-300 font-bold text-sm">2</span>
                    </div>
                    <p className="text-gray-300 text-base leading-relaxed">
                      전문가가 별도로 명시한 사전 준비 사항(상담, 출장, 예약
                      등)과 이에 대한 취소 조건이 있는 경우
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-gray-300 font-bold text-sm">3</span>
                    </div>
                    <p className="text-gray-300 text-base leading-relaxed">
                      제공받은 용역이 표시·광고의 내용과 다르거나 계약 내용과
                      다르게 이행된 경우 용역을 공급받은 날부터 3개월 이내 또는
                      그 사실을 안 날 또는 알 수 있었던 날부터 30일 이내에 취소
                      및 환불이 가능합니다.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Policy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              상세 환불 정책
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              웹사이트 제작 서비스의 구체적인 환불 기준을 안내해드립니다
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* 환불 가능한 경우 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-green-50 border border-green-200 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">
                  ✓
                </span>
                환불 가능한 경우
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold">1.</span>
                  <p className="text-gray-700">
                    <strong>프로젝트 시작 전:</strong> 계약 체결 후 작업이
                    시작되기 전까지는 100% 환불 가능
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold">2.</span>
                  <p className="text-gray-700">
                    <strong>기획 단계 중:</strong> 디자인 작업이 시작되기
                    전까지는 90% 환불 가능
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold">3.</span>
                  <p className="text-gray-700">
                    <strong>디자인 단계 중:</strong> 개발 작업이 시작되기
                    전까지는 70% 환불 가능
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold">4.</span>
                  <p className="text-gray-700">
                    <strong>계약 위반 시:</strong> 서비스 제공자가 계약 조건을
                    위반한 경우 100% 환불
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 환불 불가능한 경우 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-red-50 border border-red-200 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-red-800 mb-6 flex items-center">
                <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">
                  ✗
                </span>
                환불 불가능한 경우
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-red-600 font-bold">1.</span>
                  <p className="text-gray-700">
                    <strong>개발 완료 후:</strong> 웹사이트 개발이 완료되고
                    납품된 경우
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-red-600 font-bold">2.</span>
                  <p className="text-gray-700">
                    <strong>고객 요구사항 변경:</strong> 계약 후 고객이
                    요구사항을 크게 변경한 경우
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-red-600 font-bold">3.</span>
                  <p className="text-gray-700">
                    <strong>고객 귀책사유:</strong> 고객의 귀책사유로 인한
                    프로젝트 지연 또는 중단
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-red-600 font-bold">4.</span>
                  <p className="text-gray-700">
                    <strong>도메인/호스팅 비용:</strong> 도메인 등록 및 호스팅
                    비용은 환불 불가
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 환불 절차 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-blue-50 border border-blue-200 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">
                  📋
                </span>
                환불 절차
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                    1
                  </span>
                  <p className="text-gray-700">
                    <strong>환불 신청:</strong> 고객센터 또는 이메일로 환불 신청
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                    2
                  </span>
                  <p className="text-gray-700">
                    <strong>사유 확인:</strong> 환불 사유 및 진행 상황 검토
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                    3
                  </span>
                  <p className="text-gray-700">
                    <strong>환불 처리:</strong> 환불 승인 시 3-5영업일 내 환불
                    처리
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                    4
                  </span>
                  <p className="text-gray-700">
                    <strong>완료 통보:</strong> 환불 완료 후 고객에게 통보
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              환불 관련 문의
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              환불 관련 문의사항이 있으시면 언제든 연락해주세요
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-lg"
              onClick={() =>
                (window.location.href = `/${currentLocale}/contact`)
              }
            >
              환불 문의하기
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
