"use client";

import { use, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  GlobeAltIcon,
  EyeIcon,
  CodeBracketIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { Locale } from "@/lib/i18n";
import Navigation from "@/components/Navigation";
import Banner from "@/components/Banner";
import portfolioProjects from "@/constants/portfolioProjects";

const categories = [
  "All",
  "소셜 네트워킹",
  "음식 & 다이닝",
  "교육",
  "종교 & 교회",
];

export default function PortfolioPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = use(params);
  const [currentLocale, setCurrentLocale] = useState<Locale>(locale);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = portfolioProjects.filter((project) => {
    return selectedCategory === "All" || project.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation
        currentLocale={currentLocale}
        onLocaleChange={setCurrentLocale}
        activePage="portfolio"
      />

      <Banner
        title="포트폴리오"
        subtitle="Code King Builder로 제작된 다양한 웹사이트들을 확인해보세요"
        params={params}
      />

      {/* Category Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Project Image */}
                <div className="relative h-64 bg-gradient-to-br from-purple-100 to-purple-200 overflow-hidden flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={`${project.name} 스크린샷`}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 text-xs font-medium text-gray-700">
                    {project.category}
                  </div>
                  {!project.isCompleted && (
                    <div className="absolute top-4 left-4 bg-black text-white rounded-full px-3 py-1 text-xs font-medium animate-pulse">
                      진행중...
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">
                      주요 기능
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {project.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-md"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">
                      기술 스택
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-600">
                        {project.rating}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <EyeIcon className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-600">
                        {project.views}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors text-center"
                    >
                      사이트 방문
                    </a>
                    <button className="px-4 py-2 border border-purple-600 text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition-colors">
                      <CodeBracketIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <GlobeAltIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                해당 카테고리의 프로젝트가 없습니다
              </h3>
              <p className="text-gray-600">다른 카테고리를 선택해보세요</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              당신의 프로젝트도 만들어보세요
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Code King Builder와 함께 멋진 웹사이트를 만들어보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${currentLocale}/templates`}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  템플릿 둘러보기
                </motion.button>
              </Link>
              <Link href={`/${currentLocale}/contact`}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  상담 문의하기
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
