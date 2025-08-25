"use client";

import { use, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  ArrowLeftIcon,
  MagnifyingGlassIcon,
  StarIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import { Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/i18n";
import Navigation from "@/components/Navigation";

const templates = [
  {
    id: 1,
    name: "Modern Portfolio",
    category: "Portfolio",
    description:
      "Clean and modern portfolio template for creative professionals",
    image: "/api/placeholder/400/300",
    rating: 4.8,
    views: 1240,
    tags: ["Portfolio", "Creative", "Modern"],
  },
  {
    id: 2,
    name: "E-commerce Store",
    category: "E-commerce",
    description:
      "Complete e-commerce solution with product catalog and checkout",
    image: "/api/placeholder/400/300",
    rating: 4.9,
    views: 2156,
    tags: ["E-commerce", "Shop", "Products"],
  },
  {
    id: 3,
    name: "Restaurant Website",
    category: "Food & Dining",
    description: "Elegant restaurant website with menu and reservation system",
    image: "/api/placeholder/400/300",
    rating: 4.7,
    views: 892,
    tags: ["Restaurant", "Food", "Menu"],
  },
  {
    id: 4,
    name: "Tech Startup",
    category: "Business",
    description:
      "Professional landing page for tech startups and SaaS companies",
    image: "/api/placeholder/400/300",
    rating: 4.6,
    views: 1567,
    tags: ["Startup", "Tech", "SaaS"],
  },
  {
    id: 5,
    name: "Blog Platform",
    category: "Blog",
    description: "Modern blog template with rich content management features",
    image: "/api/placeholder/400/300",
    rating: 4.5,
    views: 743,
    tags: ["Blog", "Content", "CMS"],
  },
  {
    id: 6,
    name: "Agency Website",
    category: "Business",
    description: "Professional agency website with services and case studies",
    image: "/api/placeholder/400/300",
    rating: 4.8,
    views: 1123,
    tags: ["Agency", "Services", "Professional"],
  },
];

const categories = [
  "All",
  "Portfolio",
  "E-commerce",
  "Business",
  "Blog",
  "Food & Dining",
];

export default function TemplatesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = use(params);
  const [currentLocale, setCurrentLocale] = useState<Locale>(locale);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTemplates = templates.filter((template) => {
    const matchesCategory =
      selectedCategory === "All" || template.category === selectedCategory;
    const matchesSearch =
      template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation
        currentLocale={currentLocale}
        onLocaleChange={setCurrentLocale}
        activePage="templates"
      />

      {/* Header */}
      <section className="bg-gradient-to-br from-purple-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link
              href={`/${currentLocale}`}
              className="flex items-center text-purple-600 hover:text-purple-700"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              {getTranslation(currentLocale, "templates.backToHome")}
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {getTranslation(currentLocale, "templates.title")}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {getTranslation(currentLocale, "templates.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder={getTranslation(currentLocale, "templates.search")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
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
                  {getTranslation(
                    currentLocale,
                    `templates.categories.${category
                      .toLowerCase()
                      .replace(/\s+/g, "")}`
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Template Image */}
                <div className="relative h-48 bg-gradient-to-br from-purple-100 to-purple-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <CodeBracketIcon className="h-16 w-16 text-purple-600" />
                  </div>
                  <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 text-xs font-medium text-gray-700">
                    {template.category}
                  </div>
                </div>

                {/* Template Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {template.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{template.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {template.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-600">
                        {template.rating}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <EyeIcon className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-600">
                        {template.views}
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link href={`/builder?template=${template.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                    >
                      {getTranslation(currentLocale, "templates.useTemplate")}
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredTemplates.length === 0 && (
            <div className="text-center py-12">
              <CodeBracketIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {getTranslation(currentLocale, "templates.noResults")}
              </h3>
              <p className="text-gray-600">
                {getTranslation(currentLocale, "templates.noResultsSubtitle")}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
