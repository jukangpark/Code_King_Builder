"use client";

import { useState } from "react";
import { use } from "react";
import { motion } from "framer-motion";
import {
  CubeIcon,
  EyeIcon,
  ArrowsPointingOutIcon,
  CursorArrowRaysIcon,
  CogIcon,
  ShareIcon,
  ArrowDownTrayIcon,
  PlayIcon,
  PauseIcon,
  ArrowPathIcon,
  ViewfinderCircleIcon,
} from "@heroicons/react/24/outline";
import { Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/i18n";
import Navigation from "@/components/Navigation";
import Banner from "@/components/Banner";

interface ThreeDDashboardBuilderPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export default function ThreeDDashboardBuilderPage({
  params,
}: ThreeDDashboardBuilderPageProps) {
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
        title="3D 대시보드 빌더"
        subtitle="혁신적인 3D 시각화로 데이터를 입체적으로 탐색하세요"
        params={params}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              차원이 다른 데이터 시각화 경험을 제공합니다. 3D 공간에서 데이터를
              탐색하고 인터랙티브한 대시보드를 만들어 복잡한 데이터 관계를
              직관적으로 이해하세요.
            </p>
          </motion.div>

          {/* 3D Demo Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-900 to-purple-900 rounded-2xl shadow-2xl p-8 mb-16 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
            <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* 3D Chart Examples */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">
                      3D 막대 차트
                    </h3>
                    <CubeIcon className="w-6 h-6 text-purple-300" />
                  </div>
                  <div className="h-32 bg-gradient-to-t from-purple-500/30 to-blue-500/30 rounded-lg flex items-end justify-center">
                    <div className="text-white text-sm">3D 시각화</div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">
                      3D 산점도
                    </h3>
                    <EyeIcon className="w-6 h-6 text-green-300" />
                  </div>
                  <div className="h-32 bg-gradient-to-t from-green-500/30 to-cyan-500/30 rounded-lg flex items-center justify-center">
                    <div className="text-white text-sm">다차원 분석</div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">
                      3D 네트워크
                    </h3>
                    <ArrowsPointingOutIcon className="w-6 h-6 text-orange-300" />
                  </div>
                  <div className="h-32 bg-gradient-to-t from-orange-500/30 to-red-500/30 rounded-lg flex items-center justify-center">
                    <div className="text-white text-sm">관계 시각화</div>
                  </div>
                </div>
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
              3D 시각화의 강력한 기능
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              기존 2D 차트로는 표현하기 어려운 복잡한 데이터를 3D로
              시각화하세요.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: CubeIcon,
                title: "3D 차트 생성",
                description:
                  "막대, 원형, 산점도 등 다양한 3D 차트를 쉽게 생성할 수 있습니다.",
                color: "text-purple-600",
                bgColor: "bg-purple-100",
              },
              {
                icon: CursorArrowRaysIcon,
                title: "인터랙티브 조작",
                description:
                  "마우스로 3D 공간을 회전, 확대, 이동하여 데이터를 탐색하세요.",
                color: "text-blue-600",
                bgColor: "bg-blue-100",
              },
              {
                icon: EyeIcon,
                title: "다각도 시점",
                description:
                  "데이터를 다양한 각도에서 관찰하여 숨겨진 패턴을 발견하세요.",
                color: "text-green-600",
                bgColor: "bg-green-100",
              },
              {
                icon: ViewfinderCircleIcon,
                title: "애니메이션",
                description:
                  "시간에 따른 데이터 변화를 부드러운 애니메이션으로 표현합니다.",
                color: "text-orange-600",
                bgColor: "bg-orange-100",
              },
              {
                icon: CogIcon,
                title: "실시간 렌더링",
                description:
                  "WebGL 기술로 부드럽고 빠른 3D 렌더링을 제공합니다.",
                color: "text-red-600",
                bgColor: "bg-red-100",
              },
              {
                icon: ShareIcon,
                title: "VR/AR 지원",
                description:
                  "가상현실과 증강현실 환경에서도 3D 대시보드를 경험할 수 있습니다.",
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

      {/* 3D Chart Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              3D 차트 타입
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              다양한 3D 시각화 옵션으로 데이터를 입체적으로 표현하세요.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "3D 막대 차트",
                icon: "📊",
                description: "3차원 막대로 데이터 비교",
              },
              {
                name: "3D 원형 차트",
                icon: "🥧",
                description: "입체적인 비율 시각화",
              },
              {
                name: "3D 산점도",
                icon: "🔵",
                description: "다차원 데이터 분포",
              },
              {
                name: "3D 표면 차트",
                icon: "🌊",
                description: "연속 데이터의 표면",
              },
              {
                name: "3D 네트워크",
                icon: "🕸️",
                description: "관계와 연결 구조",
              },
              {
                name: "3D 히트맵",
                icon: "🔥",
                description: "3차원 데이터 밀도",
              },
              {
                name: "3D 트리맵",
                icon: "🌳",
                description: "계층적 데이터 구조",
              },
              {
                name: "3D 스캐터",
                icon: "⭐",
                description: "다변량 데이터 분석",
              },
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
              3D 대시보드 활용 사례
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              복잡한 데이터를 3D로 시각화하여 새로운 인사이트를 발견하세요.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                과학적 데이터 분석
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: "🧬",
                    title: "생물정보학",
                    description: "단백질 구조, DNA 서열 분석을 3D로 시각화",
                  },
                  {
                    icon: "🌍",
                    title: "지리정보시스템",
                    description: "지형, 인구, 경제 데이터의 3차원 표현",
                  },
                  {
                    icon: "⚗️",
                    title: "화학 분석",
                    description: "분자 구조, 반응 메커니즘의 3D 모델링",
                  },
                ].map((useCase, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-3xl">{useCase.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {useCase.title}
                      </h4>
                      <p className="text-gray-600">{useCase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">비즈니스 인텔리전스</h3>
              <div className="space-y-4">
                {[
                  "다차원 매출 분석",
                  "고객 세분화 시각화",
                  "공급망 네트워크 분석",
                  "리스크 관리 모델링",
                  "시장 트렌드 예측",
                  "경쟁사 분석 비교",
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

      {/* Technology */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              3D 렌더링 기술
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              최신 3D 그래픽 기술을 활용하여 부드럽고 빠른 시각화를 제공합니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "WebGL",
                description: "하드웨어 가속 3D 렌더링",
                icon: "🎮",
                color: "from-blue-500 to-blue-600",
              },
              {
                name: "Three.js",
                description: "JavaScript 3D 라이브러리",
                icon: "🔺",
                color: "from-green-500 to-green-600",
              },
              {
                name: "D3.js",
                description: "데이터 기반 3D 시각화",
                icon: "📊",
                color: "from-purple-500 to-purple-600",
              },
              {
                name: "GLSL",
                description: "고성능 셰이더 프로그래밍",
                icon: "⚡",
                color: "from-orange-500 to-orange-600",
              },
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <span className="text-2xl">{tech.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {tech.name}
                </h3>
                <p className="text-gray-600 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              인터랙티브 3D 체험
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              실제 3D 대시보드를 체험해보고 데이터를 탐색해보세요.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-gray-900 to-purple-900 rounded-2xl shadow-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  3D 데이터 탐색기
                </h3>
                <p className="text-gray-300">
                  마우스로 회전하고, 휠로 확대/축소하며 데이터를 탐색해보세요
                </p>
              </div>

              <div className="bg-black/50 rounded-lg p-8 mb-6">
                <div className="h-64 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <CubeIcon className="w-16 h-16 mx-auto mb-4 text-purple-300" />
                    <p className="text-lg font-semibold">
                      3D 대시보드 미리보기
                    </p>
                    <p className="text-sm text-gray-300">
                      실제 3D 환경에서 데이터를 탐색하세요
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2">
                  <PlayIcon className="w-5 h-5" />
                  <span>3D 체험하기</span>
                </button>
                <button className="bg-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-colors flex items-center space-x-2">
                  <ArrowDownTrayIcon className="w-5 h-5" />
                  <span>샘플 다운로드</span>
                </button>
              </div>
            </div>
          </motion.div>
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
              3D 대시보드의 미래를 경험하세요
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              차원이 다른 데이터 시각화로 새로운 인사이트를 발견하고 혁신적인
              의사결정을 내려보세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                3D 대시보드 시작하기
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              >
                무료 체험하기
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
