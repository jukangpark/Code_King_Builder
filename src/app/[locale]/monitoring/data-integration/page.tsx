"use client";

import { useState } from "react";
import { use } from "react";
import { motion } from "framer-motion";
import {
  CloudIcon,
  ServerIcon,
  CpuChipIcon,
  ArrowPathIcon,
  ShieldCheckIcon,
  ClockIcon,
  ChartBarIcon,
  CogIcon,
  LinkIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/i18n";
import Navigation from "@/components/Navigation";
import Banner from "@/components/Banner";

interface DataIntegrationPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export default function DataIntegrationPage({
  params,
}: DataIntegrationPageProps) {
  const { locale } = use(params);
  const [currentLocale, setCurrentLocale] = useState<Locale>(locale);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation
        currentLocale={currentLocale}
        onLocaleChange={setCurrentLocale}
        activePage="monitoring"
      />

      <Banner
        title="데이터 통합 솔루션"
        subtitle="다양한 데이터 소스를 하나의 플랫폼으로 통합하여 통합된 인사이트를 얻으세요"
        params={params}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              분산된 데이터 소스를 하나의 통합된 플랫폼으로 연결하여 실시간
              데이터 처리, 변환, 분석을 통해 비즈니스 인사이트를 제공합니다.
            </p>
          </motion.div>

          {/* Data Flow Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl p-8 mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
              {/* Data Sources */}
              <div className="text-center">
                <div className="bg-blue-100 rounded-lg p-4 mb-3">
                  {/* < className="w-8 h-8 text-blue-600 mx-auto" /> */}
                  <ServerIcon className="w-8 h-8 text-blue-600 mx-auto" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  데이터베이스
                </h3>
                <p className="text-sm text-gray-600">
                  MySQL, PostgreSQL, MongoDB
                </p>
              </div>

              <div className="flex justify-center">
                <ArrowPathIcon className="w-6 h-6 text-gray-400" />
              </div>

              {/* Processing Engine */}
              <div className="text-center">
                <div className="bg-green-100 rounded-lg p-4 mb-3">
                  <CpuChipIcon className="w-8 h-8 text-green-600 mx-auto" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">처리 엔진</h3>
                <p className="text-sm text-gray-600">실시간 변환 및 분석</p>
              </div>

              <div className="flex justify-center">
                <ArrowPathIcon className="w-6 h-6 text-gray-400" />
              </div>

              {/* Output */}
              <div className="text-center">
                <div className="bg-purple-100 rounded-lg p-4 mb-3">
                  <ChartBarIcon className="w-8 h-8 text-purple-600 mx-auto" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">대시보드</h3>
                <p className="text-sm text-gray-600">통합된 인사이트</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              핵심 기능
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              다양한 데이터 소스를 안전하고 효율적으로 통합하는 강력한 기능들을
              제공합니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: LinkIcon,
                title: "다양한 커넥터",
                description:
                  "200개 이상의 데이터 소스와 API를 지원하는 사전 구축된 커넥터",
                color: "text-blue-600",
                bgColor: "bg-blue-100",
              },
              {
                icon: ArrowPathIcon,
                title: "실시간 동기화",
                description:
                  "데이터 변경사항을 실시간으로 감지하고 자동으로 동기화",
                color: "text-green-600",
                bgColor: "bg-green-100",
              },
              {
                icon: CpuChipIcon,
                title: "데이터 변환",
                description: "ETL/ELT 파이프라인으로 데이터를 정제하고 변환",
                color: "text-purple-600",
                bgColor: "bg-purple-100",
              },
              {
                icon: ShieldCheckIcon,
                title: "보안 및 암호화",
                description: "엔터프라이즈급 보안으로 데이터를 안전하게 보호",
                color: "text-red-600",
                bgColor: "bg-red-100",
              },
              {
                icon: ClockIcon,
                title: "스케줄링",
                description: "유연한 스케줄링으로 데이터 동기화 주기를 자동화",
                color: "text-orange-600",
                bgColor: "bg-orange-100",
              },
              {
                icon: ExclamationTriangleIcon,
                title: "모니터링",
                description: "데이터 파이프라인 상태를 실시간으로 모니터링",
                color: "text-indigo-600",
                bgColor: "bg-indigo-100",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div
                  className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              지원 데이터 소스
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              다양한 데이터 소스와 플랫폼을 지원하여 모든 데이터를 통합할 수
              있습니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: "데이터베이스",
                sources: [
                  "MySQL",
                  "PostgreSQL",
                  "MongoDB",
                  "Oracle",
                  "SQL Server",
                  "Redis",
                ],
                icon: "🗄️",
                color: "from-blue-500 to-blue-600",
              },
              {
                category: "클라우드",
                sources: [
                  "AWS",
                  "Google Cloud",
                  "Azure",
                  "Salesforce",
                  "HubSpot",
                  "Slack",
                ],
                icon: "☁️",
                color: "from-green-500 to-green-600",
              },
              {
                category: "파일 형식",
                sources: ["CSV", "JSON", "XML", "Excel", "Parquet", "Avro"],
                icon: "📁",
                color: "from-purple-500 to-purple-600",
              },
              {
                category: "API",
                sources: [
                  "REST API",
                  "GraphQL",
                  "Webhook",
                  "SOAP",
                  "OAuth",
                  "JWT",
                ],
                icon: "🔗",
                color: "from-orange-500 to-orange-600",
              },
            ].map((source, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${source.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <span className="text-2xl">{source.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                  {source.category}
                </h3>
                <div className="space-y-2">
                  {source.sources.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="px-3 py-2 bg-gray-100 rounded-md text-sm font-medium text-gray-700 text-center"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              통합 프로세스
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              4단계로 간단하게 데이터를 통합하고 분석할 수 있습니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "연결 설정",
                description: "데이터 소스에 연결하고 인증 정보를 설정합니다.",
                icon: "🔌",
                color: "bg-blue-500",
              },
              {
                step: "2",
                title: "데이터 매핑",
                description: "필요한 데이터 필드를 선택하고 매핑합니다.",
                icon: "🗺️",
                color: "bg-green-500",
              },
              {
                step: "3",
                title: "변환 및 정제",
                description:
                  "데이터를 정제하고 비즈니스 로직에 맞게 변환합니다.",
                icon: "⚙️",
                color: "bg-purple-500",
              },
              {
                step: "4",
                title: "통합 및 분석",
                description: "통합된 데이터를 분석하고 대시보드에 표시합니다.",
                icon: "📊",
                color: "bg-orange-500",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div
                  className={`w-16 h-16 ${step.color} text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6`}
                >
                  {step.step}
                </div>
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              데이터 통합의 이점
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              통합된 데이터 플랫폼으로 비즈니스 성과를 향상시키세요.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                비즈니스 가치
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: CheckCircleIcon,
                    title: "통합된 시각",
                    description:
                      "분산된 데이터를 하나의 통합된 뷰로 제공하여 전체적인 비즈니스 상황을 파악할 수 있습니다.",
                  },
                  {
                    icon: CheckCircleIcon,
                    title: "빠른 의사결정",
                    description:
                      "실시간 데이터로 즉각적인 의사결정이 가능하여 시장 변화에 빠르게 대응할 수 있습니다.",
                  },
                  {
                    icon: CheckCircleIcon,
                    title: "비용 절감",
                    description:
                      "수동 데이터 처리 작업을 자동화하여 인력 비용과 시간을 절약할 수 있습니다.",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <benefit.icon className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">기술적 이점</h3>
              <div className="space-y-4">
                {[
                  "확장 가능한 아키텍처",
                  "실시간 데이터 처리",
                  "자동화된 데이터 품질 관리",
                  "클라우드 네이티브 설계",
                  "마이크로서비스 기반",
                  "API 우선 접근 방식",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              활용 사례
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              다양한 산업 분야에서 데이터 통합 솔루션을 활용할 수 있습니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🏢",
                title: "기업 데이터 웨어하우스",
                description:
                  "여러 부서의 데이터를 통합하여 기업 전체의 성과를 분석",
                features: ["ERP 통합", "CRM 연동", "재무 데이터 통합"],
              },
              {
                icon: "🛒",
                title: "이커머스 분석",
                description:
                  "온라인 쇼핑몰의 모든 데이터를 통합하여 고객 행동 분석",
                features: ["주문 데이터", "고객 행동", "재고 관리"],
              },
              {
                icon: "🏥",
                title: "의료 데이터 통합",
                description:
                  "환자 데이터, 의료 장비, 처방전 정보를 통합하여 종합 분석",
                features: ["환자 기록", "의료 장비", "처방전 데이터"],
              },
              {
                icon: "🏭",
                title: "제조업 IoT",
                description:
                  "생산라인, 센서, 품질 관리 데이터를 실시간으로 통합",
                features: ["센서 데이터", "생산 현황", "품질 지표"],
              },
              {
                icon: "🏦",
                title: "금융 리스크 관리",
                description:
                  "거래, 신용, 시장 데이터를 통합하여 리스크를 실시간 모니터링",
                features: ["거래 데이터", "신용 정보", "시장 데이터"],
              },
              {
                icon: "📱",
                title: "모바일 앱 분석",
                description:
                  "앱 사용자 행동, 성능, 수익 데이터를 통합하여 분석",
                features: ["사용자 행동", "앱 성능", "수익 분석"],
              },
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
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
              데이터 통합을 시작하세요
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              분산된 데이터를 통합하여 새로운 비즈니스 인사이트를 발견하고 경쟁
              우위를 확보하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                무료 체험하기
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              >
                상담 문의하기
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
