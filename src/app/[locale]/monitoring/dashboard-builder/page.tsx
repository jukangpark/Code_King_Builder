"use client";

import { useState } from "react";
import { use } from "react";
import { motion } from "framer-motion";
import {
  ChartBarIcon,
  ChartPieIcon,
  TableCellsIcon,
  CursorArrowRaysIcon,
  CogIcon,
  EyeIcon,
  ShareIcon,
  ArrowDownTrayIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/react/24/outline";
import { Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/i18n";
import Navigation from "@/components/Navigation";
import Banner from "@/components/Banner";

interface DashboardBuilderPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export default function DashboardBuilderPage({
  params,
}: DashboardBuilderPageProps) {
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
        title="대시보드 빌더"
        subtitle="드래그 앤 드롭으로 쉽고 빠르게 대시보드를 만들어보세요"
        params={params}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              코딩 지식 없이도 드래그 앤 드롭으로 전문적인 대시보드를 만들 수
              있습니다. 다양한 차트와 위젯을 자유롭게 배치하여 비즈니스 데이터를
              시각화하세요.
            </p>
          </motion.div>

          {/* Demo Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl p-8 mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Sample Charts */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">매출 현황</h3>
                  <ChartBarIcon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold mb-2">₩2.4M</div>
                <div className="text-blue-100 text-sm">+12% 이번 달</div>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">고객 수</h3>
                  <ChartPieIcon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold mb-2">1,247</div>
                <div className="text-green-100 text-sm">+8% 이번 주</div>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">전환율</h3>
                  <ArrowsPointingOutIcon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold mb-2">3.2%</div>
                <div className="text-purple-100 text-sm">+0.5% 이번 달</div>
              </div>

              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">평균 주문</h3>
                  <TableCellsIcon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold mb-2">₩89K</div>
                <div className="text-orange-100 text-sm">+15% 이번 달</div>
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
              주요 기능
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              직관적인 인터페이스로 누구나 쉽게 대시보드를 만들 수 있습니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: CursorArrowRaysIcon,
                title: "드래그 앤 드롭",
                description:
                  "마우스로 간단하게 차트와 위젯을 배치하고 크기를 조정할 수 있습니다.",
                color: "text-blue-600",
                bgColor: "bg-blue-100",
              },
              {
                icon: ChartBarIcon,
                title: "다양한 차트",
                description:
                  "막대, 선, 원형, 테이블 등 20가지 이상의 차트 타입을 제공합니다.",
                color: "text-green-600",
                bgColor: "bg-green-100",
              },
              {
                icon: CogIcon,
                title: "실시간 설정",
                description:
                  "차트 속성, 색상, 데이터 소스를 실시간으로 변경할 수 있습니다.",
                color: "text-purple-600",
                bgColor: "bg-purple-100",
              },
              {
                icon: EyeIcon,
                title: "미리보기",
                description:
                  "실제 데이터로 대시보드를 미리보기하고 즉시 수정할 수 있습니다.",
                color: "text-orange-600",
                bgColor: "bg-orange-100",
              },
              {
                icon: ShareIcon,
                title: "공유 및 협업",
                description:
                  "팀원들과 대시보드를 공유하고 함께 편집할 수 있습니다.",
                color: "text-red-600",
                bgColor: "bg-red-100",
              },
              {
                icon: ArrowDownTrayIcon,
                title: "내보내기",
                description:
                  "PDF, 이미지, Excel 등 다양한 형식으로 대시보드를 내보낼 수 있습니다.",
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

      {/* Chart Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              제공되는 차트 타입
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              다양한 데이터 시각화 옵션으로 완벽한 대시보드를 구성하세요.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "막대 차트",
                icon: "📊",
                description: "카테고리별 데이터 비교",
              },
              {
                name: "선 차트",
                icon: "📈",
                description: "시간별 트렌드 분석",
              },
              {
                name: "원형 차트",
                icon: "🥧",
                description: "비율 및 구성 분석",
              },
              {
                name: "영역 차트",
                icon: "📉",
                description: "누적 데이터 시각화",
              },
              { name: "산점도", icon: "🔵", description: "상관관계 분석" },
              { name: "히트맵", icon: "🔥", description: "데이터 밀도 시각화" },
              { name: "게이지", icon: "⏱️", description: "KPI 및 목표 추적" },
              { name: "테이블", icon: "📋", description: "상세 데이터 표시" },
            ].map((chart, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-3">{chart.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {chart.name}
                </h3>
                <p className="text-gray-600 text-sm">{chart.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              사용 방법
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              3단계로 간단하게 대시보드를 만들어보세요.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "데이터 연결",
                description:
                  "데이터베이스, API, CSV 파일 등 다양한 소스에서 데이터를 연결합니다.",
                icon: "🔗",
                color: "bg-blue-500",
              },
              {
                step: "2",
                title: "차트 생성",
                description:
                  "드래그 앤 드롭으로 원하는 차트를 선택하고 데이터를 매핑합니다.",
                icon: "📊",
                color: "bg-green-500",
              },
              {
                step: "3",
                title: "배치 및 공유",
                description:
                  "차트를 원하는 위치에 배치하고 팀원들과 공유합니다.",
                icon: "🎯",
                color: "bg-purple-500",
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

      {/* Templates */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              대시보드 템플릿
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              다양한 업종과 용도에 맞는 대시보드 템플릿을 제공합니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "비즈니스 대시보드",
                description: "매출, 고객, 운영 지표를 한눈에",
                features: ["매출 분석", "고객 현황", "운영 지표"],
                color: "from-blue-500 to-blue-600",
              },
              {
                title: "마케팅 대시보드",
                description: "캠페인 성과와 마케팅 지표 추적",
                features: ["캠페인 성과", "트래픽 분석", "전환율"],
                color: "from-green-500 to-green-600",
              },
              {
                title: "재무 대시보드",
                description: "수익성과 재무 건전성 모니터링",
                features: ["수익 분석", "비용 추적", "예산 관리"],
                color: "from-purple-500 to-purple-600",
              },
            ].map((template, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div
                  className={`h-32 bg-gradient-to-r ${template.color}`}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {template.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{template.description}</p>
                  <ul className="space-y-2">
                    {template.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
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
              지금 대시보드를 만들어보세요
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              무료로 시작하여 전문적인 대시보드를 만들어보세요. 코딩 지식 없이도
              몇 분 만에 완성할 수 있습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                무료로 시작하기
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              >
                데모 보기
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
