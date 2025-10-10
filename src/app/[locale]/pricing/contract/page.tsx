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
                제2조 (프로젝트 범위 및 명세)
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
                <p>
                  <strong>2.1 서비스 내용</strong>
                </p>
                <div className="ml-4 space-y-2">
                  <p>• 웹사이트 기획 및 디자인 (UI/UX 디자인 포함)</p>
                  <p>• 웹사이트 개발 및 구현 (반응형 디자인 적용)</p>
                  <p>• SEO 기본 최적화 (메타태그, 사이트맵 등)</p>
                  <p>• 소스코드 제공 (HTML, CSS, JavaScript)</p>
                  <p>• 기본 사용법 안내 및 교육</p>
                  <p>• 납품 후 7일간 기본 오류 수정 서비스</p>
                </div>
                <p>
                  <strong>2.2 기술 스택</strong>
                </p>
                <div className="ml-4 space-y-2">
                  <p>• Frontend: React.js, Next.js, TypeScript</p>
                  <p>• Backend: Node.js, Express.js (필요시)</p>
                  <p>• Database: PostgreSQL, MongoDB (필요시)</p>
                  <p>• Hosting: Vercel, AWS, 또는 고객 선호 플랫폼</p>
                </div>
                <p>
                  <strong>2.3 호환성 요구사항</strong>
                </p>
                <div className="ml-4 space-y-2">
                  <p>• Chrome, Firefox, Safari, Edge 최신 버전 지원</p>
                  <p>• 모바일 반응형 디자인 (iOS, Android)</p>
                  <p>• 웹 접근성 가이드라인 준수</p>
                </div>
                <p>
                  <strong>2.4 제외 사항</strong>
                </p>
                <div className="ml-4 space-y-2">
                  <p>• 도메인 등록 및 연장 (별도 비용)</p>
                  <p>• 호스팅 서비스 (별도 비용)</p>
                  <p>• 외부 API 연동 (별도 비용)</p>
                  <p>• 고급 SEO 마케팅 서비스</p>
                  <p>• 장기 유지보수 서비스 (별도 계약)</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                제3조 (개발 일정 및 마일스톤)
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
                <p>
                  <strong>3.1 개발 단계별 일정</strong>
                </p>
                <div className="ml-4 space-y-2">
                  <p>• 1단계: 기획 및 요구사항 분석 (계약 후 3일)</p>
                  <p>• 2단계: 디자인 시안 제작 (1단계 완료 후 5일)</p>
                  <p>• 3단계: 개발 및 구현 (2단계 승인 후 10일)</p>
                  <p>• 4단계: 테스트 및 수정 (3단계 완료 후 3일)</p>
                  <p>• 5단계: 최종 납품 및 인수인계 (4단계 완료 후 1일)</p>
                </div>
                <p>
                  <strong>3.2 중간 검수 시점</strong>
                </p>
                <div className="ml-4 space-y-2">
                  <p>• 디자인 시안 검수: 2단계 완료 후 2일 이내</p>
                  <p>• 개발 중간 검수: 3단계 진행 중 1회</p>
                  <p>• 최종 검수: 4단계 완료 후 2일 이내</p>
                </div>
                <p>
                  <strong>3.3 일정 지연 시 책임</strong>
                </p>
                <div className="ml-4 space-y-2">
                  <p>• 을의 사유로 인한 지연: 일정 연장 및 추가 비용 없음</p>
                  <p>• 갑의 사유로 인한 지연: 일정 연장 및 손해배상 의무</p>
                  <p>• 불가항력적 사유: 상호 협의하여 일정 조정</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                제4조 (계약 금액 및 지급 조건)
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
                <p>
                  <strong>4.1 계약 금액</strong>
                </p>
                <div className="ml-4 space-y-2">
                  <p>• 기본 패키지: 1,500,000원 (VAT 별도)</p>
                  <p>• 프리미엄 패키지: 3,000,000원 (VAT 별도)</p>
                  <p>• 엔터프라이즈 패키지: 5,000,000원 (VAT 별도)</p>
                  <p>• 맞춤형 견적: 별도 협의</p>
                </div>
                <p>
                  <strong>4.2 지급 방법 및 일정</strong>
                </p>
                <div className="ml-4 space-y-2">
                  <p>• 계약 체결 시: 50% (선금)</p>
                  <p>• 디자인 시안 승인 시: 30% (중간금)</p>
                  <p>• 최종 납품 완료 시: 20% (잔금)</p>
                </div>
                <p>
                  <strong>4.3 추가 비용</strong>
                </p>
                <div className="ml-4 space-y-2">
                  <p>• 도메인 등록: 연간 15,000원 ~ 50,000원</p>
                  <p>• 호스팅 서비스: 월 10,000원 ~ 100,000원</p>
                  <p>• 외부 API 연동: 건당 100,000원 ~ 500,000원</p>
                  <p>• 범위 변경 시: 별도 견적</p>
                </div>
                <p>
                  <strong>4.4 환불 정책</strong>
                </p>
                <div className="ml-4 space-y-2">
                  <p>• 계약 해지 시 진행된 작업 비용 차감 후 환불</p>
                  <p>• 을의 사유로 인한 해지: 진행률에 따른 비용 차감</p>
                  <p>• 갑의 사유로 인한 해지: 전액 환불</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                제5조 (갑의 의무)
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
                <p>
                  <strong>5.1 서비스 제공 의무</strong>
                </p>
                <div className="ml-4 space-y-2">
                  <p>• 계약서에 명시된 서비스를 성실히 제공</p>
                  <p>• 을의 요구사항에 대한 적절한 조언 및 제안</p>
                  <p>• 프로젝트 진행 상황에 대한 정기적인 보고 (주 1회)</p>
                  <p>• 기술적 문제 발생 시 신속한 해결</p>
                </div>
                <p>
                  <strong>5.2 품질 보증</strong>
                </p>
                <div className="ml-4 space-y-2">
                  <p>• 웹 표준 및 접근성 가이드라인 준수</p>
                  <p>• 크로스 브라우저 호환성 보장</p>
                  <p>• 모바일 반응형 디자인 적용</p>
                  <p>• 보안 취약점 점검 및 해결</p>
                </div>
                <p>
                  <strong>5.3 기밀 유지</strong>
                </p>
                <div className="ml-4 space-y-2">
                  <p>• 을의 비즈니스 정보 및 개인정보 보호</p>
                  <p>• 프로젝트 관련 정보의 제3자 제공 금지</p>
                  <p>• 계약 종료 후에도 기밀 유지 의무</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                제6조 (을의 의무)
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
                <p>
                  <strong>6.1 협력 의무</strong>
                </p>
                <div className="ml-4 space-y-2">
                  <p>• 계약 금액의 정확한 지급</p>
                  <p>• 프로젝트 진행에 필요한 자료 및 정보의 적시 제공</p>
                  <p>• 중간 검수 시 적절한 피드백 제공 (2일 이내)</p>
                  <p>• 최종 검수 및 승인 (2일 이내)</p>
                </div>
                <p>
                  <strong>6.2 제공 자료</strong>
                </p>
                <div className="ml-4 space-y-2">
                  <p>• 회사 로고 및 브랜드 가이드라인</p>
                  <p>• 웹사이트 콘텐츠 (텍스트, 이미지, 동영상)</p>
                  <p>• 회사 정보 (연락처, 주소, 사업자등록번호 등)</p>
                  <p>• 기존 웹사이트 정보 (도메인, 호스팅 등)</p>
                </div>
                <p>
                  <strong>6.3 승인 및 피드백</strong>
                </p>
                <div className="ml-4 space-y-2">
                  <p>• 각 단계별 승인 시 2일 이내 응답</p>
                  <p>• 구체적이고 명확한 피드백 제공</p>
                  <p>• 요구사항 변경 시 사전 협의</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                제7조 (지적재산권 및 소유권)
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
                <p>
                  <strong>7.1 소스코드 소유권</strong>
                </p>
                <div className="ml-4 space-y-2">
                  <p>• 완성된 웹사이트의 소스코드는 을에게 양도</p>
                  <p>
                    • 갑은 을의 동의 없이 동일한 코드를 타 프로젝트에 사용 금지
                  </p>
                  <p>• 을은 소스코드를 자유롭게 수정 및 배포 가능</p>
                </div>
                <p>
                  <strong>7.2 디자인 저작권</strong>
                </p>
                <div className="ml-4 space-y-2">
                  <p>• 웹사이트 디자인의 저작권은 을에게 양도</p>
                  <p>• 갑이 제공한 템플릿, 플러그인은 해당 라이선스 준수</p>
                  <p>• 을이 제공한 콘텐츠의 저작권은 을에게 귀속</p>
                </div>
                <p>
                  <strong>7.3 라이선스</strong>
                </p>
                <div className="ml-4 space-y-2">
                  <p>• 사용할 외부 라이브러리/플러그인의 라이선스 정보 제공</p>
                  <p>• 상업적 이용 가능한 오픈소스 라이선스 우선 사용</p>
                  <p>• 유료 라이선스 필요 시 별도 비용 안내</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                제8조 (보안 및 개인정보보호)
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
                <p>
                  <strong>8.1 데이터 보안</strong>
                </p>
                <div className="ml-4 space-y-2">
                  <p>• 클라이언트 데이터 보호를 위한 보안 조치</p>
                  <p>• SSL 인증서 설치 및 HTTPS 적용</p>
                  <p>• 정기적인 보안 취약점 점검</p>
                  <p>• 데이터 백업 및 복구 방안 수립</p>
                </div>
                <p>
                  <strong>8.2 개인정보보호</strong>
                </p>
                <div className="ml-4 space-y-2">
                  <p>• 개인정보처리방침 수립 및 게시</p>
                  <p>• 개인정보 수집/처리 최소화 원칙</p>
                  <p>• 개인정보 제3자 제공 시 사전 동의</p>
                  <p>• 개인정보 보유기간 준수</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                제9조 (유지보수 및 지원)
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
                <p>
                  <strong>9.1 보증 기간</strong>
                </p>
                <div className="ml-4 space-y-2">
                  <p>• 납품 완료 후 7일간 무상 오류 수정</p>
                  <p>• 기능적 오류 및 버그 수정 무료</p>
                  <p>• 브라우저 호환성 문제 해결</p>
                </div>
                <p>
                  <strong>9.2 유지보수 서비스</strong>
                </p>
                <div className="ml-4 space-y-2">
                  <p>• 별도 유지보수 계약 시 연간 360,000원 ~ 1,500,000원</p>
                  <p>• 보안 패치 및 업데이트</p>
                  <p>• 기능 추가 및 수정</p>
                  <p>• 기술 지원 및 상담</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                제10조 (계약 해지 및 분쟁 해결)
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
                <p>
                  <strong>10.1 계약 해지</strong>
                </p>
                <div className="ml-4 space-y-2">
                  <p>• 양 당사자 합의에 의한 해지</p>
                  <p>• 일방의 귀책사유로 인한 해지 시 손해배상 의무</p>
                  <p>• 해지 시 진행된 작업에 대한 비용 정산</p>
                  <p>• 해지 통지 후 7일 이내 정산 완료</p>
                </div>
                <p>
                  <strong>10.2 분쟁 해결</strong>
                </p>
                <div className="ml-4 space-y-2">
                  <p>• 분쟁 발생 시 상호 협의를 통한 해결 우선</p>
                  <p>• 협의 불가 시 중재 또는 소송</p>
                  <p>• 관할법원: 서울중앙지방법원</p>
                  <p>• 준거법: 대한민국 법률</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                제11조 (손해배상 및 면책)
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
                <p>
                  <strong>11.1 손해배상</strong>
                </p>
                <div className="ml-4 space-y-2">
                  <p>• 계약 위반으로 인한 손해 발생 시 손해배상 의무</p>
                  <p>• 손해배상 범위: 직접적이고 예견 가능한 손해</p>
                  <p>• 간접손해, 특별손해, 결과적 손해는 제외</p>
                </div>
                <p>
                  <strong>11.2 면책 사유</strong>
                </p>
                <div className="ml-4 space-y-2">
                  <p>• 천재지변, 전쟁, 파업 등 불가항력적 사유</p>
                  <p>• 을의 귀책사유로 인한 손해</p>
                  <p>• 제3자의 행위로 인한 손해</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                제12조 (기타)
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
                <p>
                  <strong>12.1 계약서 수정</strong>
                </p>
                <div className="ml-4 space-y-2">
                  <p>• 계약서 변경 시 양 당사자 서면 합의 필요</p>
                  <p>• 구두 합의는 효력 없음</p>
                </div>
                <p>
                  <strong>12.2 계약서 보관</strong>
                </p>
                <div className="ml-4 space-y-2">
                  <p>• 계약서는 2부 작성하여 각각 1부씩 보관</p>
                  <p>• 계약 종료 후 3년간 보관</p>
                </div>
                <p>
                  <strong>12.3 기타 사항</strong>
                </p>
                <div className="ml-4 space-y-2">
                  <p>• 이 계약서에 명시되지 않은 사항은 상호 협의하여 결정</p>
                  <p>• 계약서의 일부 조항이 무효여도 나머지 조항은 유효</p>
                </div>
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
