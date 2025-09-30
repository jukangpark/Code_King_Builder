"use client";

import { use, useState } from "react";
import { motion } from "framer-motion";
import { Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/i18n";
import Navigation from "@/components/Navigation";
import Banner from "@/components/Banner";

export default function FAQPage({
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
        title="자주 묻는 질문"
        subtitle="웹사이트 제작 과정에서 궁금한 점들을 미리 확인해보세요"
        params={params}
      />

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 font-bold text-sm">
                        Q
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 flex-1">
                      제작 완료 후 유지보수도 해주시나요?
                    </h3>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold text-sm">
                        A
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed flex-1">
                      기본적으로 7일간 오류 수정 기간을 드리며, 지속적인
                      유지보수가 필요하신 경우 별도 계약으로 진행 가능합니다.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 font-bold text-sm">
                        Q
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 flex-1">
                      도메인과 호스팅도 알아봐주시나요?
                    </h3>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold text-sm">
                        A
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed flex-1">
                      원하시면 도메인 구매, 호스팅 세팅까지 전반적인 컨설팅을
                      도와드립니다.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 font-bold text-sm">
                        Q
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 flex-1">
                      텍스트나 이미지가 아직 준비 안됐어요.
                    </h3>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold text-sm">
                        A
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed flex-1">
                      준비가 안된 부분은 임시 컨텐츠로 먼저 작업하고, 나중에
                      교체하는 방식으로도 가능합니다.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 font-bold text-sm">
                        Q
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 flex-1">
                      저희 업체만의 특별히 원하는 기능도 개발해주시나요?
                    </h3>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold text-sm">
                        A
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed flex-1">
                      네, 맞습니다. 예약 시스템, 결제 연동, 회원 관리,
                      데이터베이스 연동 등 업체별 맞춤 기능 개발이 가능합니다.
                      상담 시 구체적인 요구사항을 말씀해 주시면 기술적 검토 후
                      개발 가능 여부와 소요 기간을 안내해드립니다.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 font-bold text-sm">
                        Q
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 flex-1">
                      웹사이트 제작 기간은 얼마나 걸리나요?
                    </h3>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold text-sm">
                        A
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed flex-1">
                      패키지에 따라 다르지만, STANDARD는 7-10일, DELUXE는
                      14-21일, PREMIUM은 21-30일 정도 소요됩니다. 복잡한 기능이
                      포함된 경우 추가 기간이 필요할 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 font-bold text-sm">
                        Q
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 flex-1">
                      소스코드는 제공해주시나요?
                    </h3>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold text-sm">
                        A
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed flex-1">
                      네, 모든 패키지에서 완성된 웹사이트의 소스코드를
                      제공합니다. 추후 직접 수정하거나 다른 개발자에게 이관하실
                      때 활용하실 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 mb-6">
              더 궁금한 점이 있으시다면 언제든 문의해주세요
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              onClick={() =>
                (window.location.href = `/${currentLocale}/contact`)
              }
            >
              추가 문의하기
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
