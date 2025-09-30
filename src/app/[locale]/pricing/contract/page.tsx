"use client";

import { use, useState } from "react";
import { motion } from "framer-motion";
import { Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/i18n";
import Navigation from "@/components/Navigation";
import Banner from "@/components/Banner";

export default function ContractPage({
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
        title="계약서"
        subtitle="웹사이트 제작 서비스 계약서 및 약관"
        params={params}
      />

      {/* Contract Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              웹사이트 제작 서비스 계약서
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              웹사이트 제작 서비스에 대한 계약서 및 약관을 확인하세요
            </p>
          </motion.div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="prose max-w-none">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                제1조 (목적)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                이 계약서는 Code King Builder(이하 "갑")과 고객(이하 "을") 간의
                웹사이트 제작 서비스 제공에 관한 권리와 의무를 명확히 하기
                위하여 작성됩니다.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                제2조 (서비스 내용)
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
                <p>1. 웹사이트 기획 및 디자인</p>
                <p>2. 웹사이트 개발 및 구현</p>
                <p>3. 반응형 디자인 적용</p>
                <p>4. SEO 기본 최적화</p>
                <p>5. 도메인 연결 및 호스팅 설정 (별도 비용)</p>
                <p>6. 소스코드 제공</p>
                <p>7. 기본 사용법 안내</p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                제3조 (계약 기간)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                계약 체결일로부터 웹사이트 납품 완료 시까지로 하며, 구체적인
                일정은 별도 협의를 통해 결정합니다.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                제4조 (계약 금액 및 지급)
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
                <p>1. 계약 금액: [패키지별 금액]</p>
                <p>
                  2. 지급 방법: 계약 체결 시 50%, 중간 검수 시 30%, 납품 완료 시
                  20%
                </p>
                <p>
                  3. 추가 비용: 도메인, 호스팅, 외부 서비스 연동 등은 별도 비용
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                제5조 (갑의 의무)
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
                <p>1. 계약서에 명시된 서비스를 성실히 제공할 의무</p>
                <p>2. 을의 요구사항에 대한 적절한 조언 및 제안</p>
                <p>3. 프로젝트 진행 상황에 대한 정기적인 보고</p>
                <p>4. 납품 후 7일간 기본 오류 수정 서비스 제공</p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                제6조 (을의 의무)
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
                <p>1. 계약 금액의 정확한 지급</p>
                <p>2. 프로젝트 진행에 필요한 자료 및 정보의 적시 제공</p>
                <p>3. 중간 검수 시 적절한 피드백 제공</p>
                <p>4. 최종 검수 및 승인</p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                제7조 (지적재산권)
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
                <p>1. 완성된 웹사이트의 소스코드는 을에게 양도됩니다.</p>
                <p>
                  2. 갑이 제공한 템플릿, 플러그인 등은 해당 라이선스에 따릅니다.
                </p>
                <p>3. 을이 제공한 콘텐츠의 저작권은 을에게 있습니다.</p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                제8조 (계약 해지)
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
                <p>1. 양 당사자 합의에 의한 해지</p>
                <p>2. 일방의 귀책사유로 인한 해지 시 손해배상 의무</p>
                <p>3. 해지 시 진행된 작업에 대한 비용 정산</p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                제9조 (손해배상)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                계약 위반으로 인한 손해가 발생한 경우, 해당 당사자는 상대방에게
                손해배상을 청구할 수 있습니다.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                제10조 (기타)
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
                <p>
                  1. 이 계약서에 명시되지 않은 사항은 상호 협의하여 결정합니다.
                </p>
                <p>2. 분쟁 발생 시 서울중앙지방법원을 관할법원으로 합니다.</p>
                <p>3. 이 계약서는 2부를 작성하여 각각 1부씩 보관합니다.</p>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      갑 (Code King Builder)
                    </h4>
                    <div className="space-y-2 text-gray-600">
                      <p>대표: [대표자명]</p>
                      <p>사업자등록번호: [사업자등록번호]</p>
                      <p>주소: 경기도 성남시 분당구 판교동</p>
                      <p>연락처: 010-4292-9339</p>
                      <p>이메일: codeking@codekingbuilder.com</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      을 (고객)
                    </h4>
                    <div className="space-y-2 text-gray-600">
                      <p>성명/회사명: [고객명]</p>
                      <p>연락처: [고객 연락처]</p>
                      <p>이메일: [고객 이메일]</p>
                      <p>주소: [고객 주소]</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-gray-600">계약 체결일: [계약 체결일]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms and Conditions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              서비스 이용약관
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              웹사이트 제작 서비스 이용에 관한 약관입니다
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                서비스 이용 조건
              </h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <p>
                    서비스 이용 시 제공되는 모든 콘텐츠는 저작권법에 의해
                    보호됩니다.
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <p>고객은 서비스 이용 시 관련 법규를 준수해야 합니다.</p>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <p>
                    서비스 이용 중 발생하는 문제에 대해 신속한 지원을
                    제공합니다.
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <p>서비스 품질 향상을 위해 지속적인 업데이트를 제공합니다.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                고객 의무사항
              </h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <p>프로젝트 진행에 필요한 자료를 적시에 제공해야 합니다.</p>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <p>중간 검수 시 적절한 피드백을 제공해야 합니다.</p>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <p>계약서에 명시된 지급 조건을 준수해야 합니다.</p>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <p>서비스 이용 중 발생하는 문제를 신속히 보고해야 합니다.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              개인정보 처리방침
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              고객의 개인정보 보호를 위한 처리방침입니다
            </p>
          </motion.div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose max-w-none">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                1. 개인정보 수집 및 이용 목적
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                웹사이트 제작 서비스 제공, 고객 상담, 프로젝트 진행을 위해
                필요한 최소한의 개인정보를 수집합니다.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                2. 수집하는 개인정보 항목
              </h3>
              <div className="space-y-2 text-gray-700 leading-relaxed mb-6">
                <p>• 필수항목: 성명, 연락처, 이메일, 회사명</p>
                <p>• 선택항목: 주소, 사업자등록번호, 프로젝트 관련 정보</p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                3. 개인정보 보유 및 이용 기간
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                서비스 제공 완료 후 3년간 보관하며, 고객의 요청 시 즉시
                삭제합니다.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                4. 개인정보 제3자 제공
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                고객의 동의 없이 개인정보를 제3자에게 제공하지 않습니다. 단,
                법령에 의해 요구되는 경우는 예외로 합니다.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                5. 개인정보 보호를 위한 기술적/관리적 대책
              </h3>
              <div className="space-y-2 text-gray-700 leading-relaxed mb-6">
                <p>• 개인정보 암호화</p>
                <p>• 접근 권한 관리</p>
                <p>• 정기적인 보안 점검</p>
                <p>• 직원 교육 및 관리</p>
              </div>
            </div>
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
              계약 및 서비스 문의
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              계약서 및 서비스에 대한 자세한 내용은 언제든 문의해주세요
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-lg"
              onClick={() =>
                (window.location.href = `/${currentLocale}/contact`)
              }
            >
              계약 문의하기
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
