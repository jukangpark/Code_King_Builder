"use client";

import { useState } from "react";
import { use } from "react";
import { motion } from "framer-motion";
import {
  EyeIcon,
  HeartIcon,
  ShareIcon,
  ArrowDownTrayIcon,
  StarIcon,
  TagIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  Squares2X2Icon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";
import { Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/i18n";
import Navigation from "@/components/Navigation";
import Banner from "@/components/Banner";

interface DashboardGalleryPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export default function DashboardGalleryPage({
  params,
}: DashboardGalleryPageProps) {
  const { locale } = use(params);
  const [currentLocale, setCurrentLocale] = useState<Locale>(locale);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "전체", count: 24 },
    { id: "business", name: "비즈니스", count: 8 },
    { id: "marketing", name: "마케팅", count: 6 },
    { id: "finance", name: "재무", count: 4 },
    { id: "analytics", name: "분석", count: 6 },
  ];

  const dashboards = [
    {
      id: 1,
      title: "비즈니스 KPI 대시보드",
      description: "매출, 고객, 운영 지표를 한눈에 볼 수 있는 종합 대시보드",
      category: "business",
      thumbnail: "/api/placeholder/400/300",
      author: "Code King Builder",
      likes: 124,
      views: 2340,
      tags: ["KPI", "매출", "고객", "운영"],
      featured: true,
    },
    {
      id: 2,
      title: "마케팅 캠페인 분석",
      description: "디지털 마케팅 캠페인의 성과를 실시간으로 추적하는 대시보드",
      category: "marketing",
      thumbnail: "/api/placeholder/400/300",
      author: "Marketing Team",
      likes: 89,
      views: 1890,
      tags: ["마케팅", "캠페인", "ROI", "전환율"],
      featured: false,
    },
    {
      id: 3,
      title: "재무 현황 모니터링",
      description: "수익성, 현금흐름, 예산 집행 현황을 모니터링하는 대시보드",
      category: "finance",
      thumbnail: "/api/placeholder/400/300",
      author: "Finance Team",
      likes: 156,
      views: 3120,
      tags: ["재무", "수익", "예산", "현금흐름"],
      featured: true,
    },
    {
      id: 4,
      title: "고객 분석 대시보드",
      description: "고객 세분화, 행동 패턴, 생애 가치를 분석하는 대시보드",
      category: "analytics",
      thumbnail: "/api/placeholder/400/300",
      author: "Analytics Team",
      likes: 203,
      views: 4560,
      tags: ["고객", "분석", "세분화", "행동"],
      featured: false,
    },
    {
      id: 5,
      title: "운영 효율성 대시보드",
      description: "생산성, 리소스 활용률, 프로세스 효율성을 추적하는 대시보드",
      category: "business",
      thumbnail: "/api/placeholder/400/300",
      author: "Operations Team",
      likes: 78,
      views: 1670,
      tags: ["운영", "효율성", "생산성", "리소스"],
      featured: false,
    },
    {
      id: 6,
      title: "소셜미디어 분석",
      description: "소셜미디어 성과, 참여도, 브랜드 인지도를 분석하는 대시보드",
      category: "marketing",
      thumbnail: "/api/placeholder/400/300",
      author: "Social Media Team",
      likes: 134,
      views: 2890,
      tags: ["소셜미디어", "참여도", "브랜드", "인지도"],
      featured: false,
    },
    {
      id: 7,
      title: "웹사이트 성과 분석",
      description: "트래픽, 전환율, 사용자 행동을 분석하는 웹 분석 대시보드",
      category: "analytics",
      thumbnail: "/api/placeholder/400/300",
      author: "Web Analytics Team",
      likes: 167,
      views: 3450,
      tags: ["웹사이트", "트래픽", "전환율", "사용자"],
      featured: true,
    },
    {
      id: 8,
      title: "인사 관리 대시보드",
      description: "직원 현황, 성과 평가, 교육 이수를 관리하는 HR 대시보드",
      category: "business",
      thumbnail: "/api/placeholder/400/300",
      author: "HR Team",
      likes: 92,
      views: 1980,
      tags: ["인사", "직원", "성과", "교육"],
      featured: false,
    },
  ];

  const filteredDashboards =
    selectedCategory === "all"
      ? dashboards
      : dashboards.filter(
          (dashboard) => dashboard.category === selectedCategory
        );

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation
        currentLocale={currentLocale}
        onLocaleChange={setCurrentLocale}
        activePage="monitoring"
      />

      <Banner
        title="대시보드 갤러리"
        subtitle="다양한 업종과 용도에 맞는 대시보드 템플릿을 만나보세요"
        params={params}
      />

      {/* Gallery Header */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="대시보드 검색..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <FunnelIcon className="w-5 h-5 text-gray-400" />
                <span className="text-gray-700">필터</span>
              </button>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "grid"
                    ? "bg-purple-100 text-purple-600"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <Squares2X2Icon className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "list"
                    ? "bg-purple-100 text-purple-600"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <ListBulletIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredDashboards.map((dashboard, index) => (
                <motion.div
                  key={dashboard.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                >
                  {/* Thumbnail */}
                  <div className="relative h-48 bg-gradient-to-br from-purple-100 to-blue-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <EyeIcon className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-sm text-gray-600">
                          대시보드 미리보기
                        </p>
                      </div>
                    </div>
                    {dashboard.featured && (
                      <div className="absolute top-3 left-3">
                        <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          추천
                        </span>
                      </div>
                    )}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors">
                        <HeartIcon className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {dashboard.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {dashboard.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {dashboard.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-purple-100 text-purple-800"
                        >
                          <TagIcon className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                      {dashboard.tags.length > 2 && (
                        <span className="text-xs text-gray-500">
                          +{dashboard.tags.length - 2}
                        </span>
                      )}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <EyeIcon className="w-4 h-4" />
                          <span>{dashboard.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <HeartIcon className="w-4 h-4" />
                          <span>{dashboard.likes}</span>
                        </div>
                      </div>
                      <span className="text-xs">by {dashboard.author}</span>
                    </div>

                    {/* Actions */}
                    <div className="mt-4 flex space-x-2">
                      <button className="flex-1 bg-purple-600 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
                        사용하기
                      </button>
                      <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <ShareIcon className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <ArrowDownTrayIcon className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredDashboards.map((dashboard, index) => (
                <motion.div
                  key={dashboard.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-24 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <EyeIcon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {dashboard.title}
                          </h3>
                          <p className="text-gray-600 mb-2">
                            {dashboard.description}
                          </p>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {dashboard.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-purple-100 text-purple-800"
                              >
                                <TagIcon className="w-3 h-3 mr-1" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 ml-4">
                          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                            <HeartIcon className="w-4 h-4 text-gray-600" />
                          </button>
                          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                            <ShareIcon className="w-4 h-4 text-gray-600" />
                          </button>
                          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                            <ArrowDownTrayIcon className="w-4 h-4 text-gray-600" />
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <EyeIcon className="w-4 h-4" />
                            <span>
                              {dashboard.views.toLocaleString()} views
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <HeartIcon className="w-4 h-4" />
                            <span>{dashboard.likes} likes</span>
                          </div>
                          <span>by {dashboard.author}</span>
                        </div>
                        <button className="bg-purple-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
                          사용하기
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              추천 대시보드
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              전문가들이 선별한 인기 대시보드 템플릿을 만나보세요.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dashboards
              .filter((d) => d.featured)
              .map((dashboard, index) => (
                <motion.div
                  key={dashboard.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <StarIcon className="w-5 h-5 text-yellow-500" />
                      <span className="text-sm font-semibold text-purple-600">
                        추천
                      </span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <HeartIcon className="w-4 h-4" />
                      <span>{dashboard.likes}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {dashboard.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{dashboard.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {dashboard.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                    지금 사용하기
                  </button>
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
              나만의 대시보드를 만들어보세요
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              갤러리의 템플릿을 활용하거나 처음부터 새로 만들어 완벽한
              대시보드를 제작하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                대시보드 만들기
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              >
                템플릿 더 보기
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
