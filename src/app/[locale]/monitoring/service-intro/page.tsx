"use client";

import { useState } from "react";
import { use } from "react";
import { motion } from "framer-motion";
import {
  ChartBarIcon,
  CpuChipIcon,
  CloudIcon,
  ShieldCheckIcon,
  BoltIcon,
  GlobeAltIcon,
  EyeIcon,
  CogIcon,
  ChartPieIcon,
  TableCellsIcon,
  ArrowTrendingUpIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/i18n";
import Navigation from "@/components/Navigation";
import Banner from "@/components/Banner";

interface ServiceIntroPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export default function ServiceIntroPage({ params }: ServiceIntroPageProps) {
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
        title="데이터 모니터링 솔루션"
        subtitle="실시간 데이터 분석과 시각화로 비즈니스 인사이트를 얻으세요"
        params={params}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Key Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: ChartBarIcon,
                title: "실시간 모니터링",
                description: "24/7 실시간 데이터 수집 및 모니터링",
                color: "text-blue-600",
                bgColor: "bg-blue-100",
              },
              {
                icon: CpuChipIcon,
                title: "AI 분석",
                description: "머신러닝 기반 예측 분석 및 인사이트",
                color: "text-purple-600",
                bgColor: "bg-purple-100",
              },
              {
                icon: CloudIcon,
                title: "클라우드 기반",
                description: "확장 가능한 클라우드 인프라",
                color: "text-green-600",
                bgColor: "bg-green-100",
              },
              {
                icon: ShieldCheckIcon,
                title: "보안 강화",
                description: "엔터프라이즈급 보안 및 암호화",
                color: "text-red-600",
                bgColor: "bg-red-100",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div
                  className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              서비스 개요
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              데이터 모니터링 솔루션은 다양한 산업 분야에서 활용할 수 있는
              종합적인 데이터 분석 플랫폼입니다.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                왜 데이터 모니터링이 필요한가요?
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: EyeIcon,
                    title: "실시간 가시성",
                    description:
                      "비즈니스 지표를 실시간으로 모니터링하여 즉각적인 대응이 가능합니다.",
                  },
                  {
                    icon: ArrowTrendingUpIcon,
                    title: "성과 최적화",
                    description:
                      "데이터 기반 의사결정으로 비즈니스 성과를 지속적으로 개선할 수 있습니다.",
                  },
                  {
                    icon: ClockIcon,
                    title: "시간 절약",
                    description:
                      "자동화된 리포트와 알림으로 수동 작업 시간을 대폭 단축합니다.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">주요 기능</h3>
              <div className="space-y-4">
                {[
                  "실시간 데이터 수집 및 처리",
                  "대화형 대시보드 구축",
                  "3D 시각화 및 분석",
                  "다양한 데이터 소스 통합",
                  "자동화된 알림 시스템",
                  "예측 분석 및 머신러닝",
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              활용 분야
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              다양한 산업 분야에서 데이터 모니터링 솔루션을 활용할 수 있습니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🏢",
                title: "기업 관리",
                description: "매출, 고객, 운영 지표 모니터링",
                features: [
                  "KPI 대시보드",
                  "실시간 매출 분석",
                  "고객 행동 분석",
                ],
              },
              {
                icon: "🏭",
                title: "제조업",
                description: "생산라인 및 품질 관리",
                features: ["설비 모니터링", "품질 지표 추적", "예방 정비"],
              },
              {
                icon: "🏥",
                title: "의료",
                description: "환자 데이터 및 의료 장비 모니터링",
                features: ["환자 상태 추적", "의료 장비 관리", "감염 모니터링"],
              },
              {
                icon: "🏪",
                title: "리테일",
                description: "재고 및 고객 행동 분석",
                features: ["재고 최적화", "고객 흐름 분석", "매출 예측"],
              },
              {
                icon: "🏦",
                title: "금융",
                description: "리스크 관리 및 거래 모니터링",
                features: ["실시간 거래 모니터링", "리스크 분석", "규정 준수"],
              },
              {
                icon: "🌐",
                title: "IT/기술",
                description: "시스템 성능 및 보안 모니터링",
                features: ["서버 모니터링", "보안 이벤트 추적", "성능 최적화"],
              },
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
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
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              기술 스택
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              최신 기술을 활용하여 안정적이고 확장 가능한 솔루션을 제공합니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: "프론트엔드",
                technologies: ["React", "TypeScript", "D3.js", "Three.js"],
                color: "blue",
              },
              {
                category: "백엔드",
                technologies: ["Node.js", "Python", "FastAPI", "PostgreSQL"],
                color: "green",
              },
              {
                category: "데이터 처리",
                technologies: [
                  "Apache Kafka",
                  "Redis",
                  "Elasticsearch",
                  "Apache Spark",
                ],
                color: "purple",
              },
              {
                category: "인프라",
                technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
                color: "gray",
              },
            ].map((stack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {stack.category}
                </h3>
                <div className="space-y-2">
                  {stack.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className={`px-3 py-2 bg-${stack.color}-100 text-${stack.color}-800 rounded-md text-sm font-medium`}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
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
              지금 시작하세요
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              데이터 모니터링 솔루션으로 비즈니스 인사이트를 얻고 경쟁 우위를
              확보하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
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
