"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  SparklesIcon,
  RocketLaunchIcon,
  CodeBracketIcon,
  ChatBubbleLeftRightIcon,
  GlobeAltIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/i18n";
import Navigation from "@/components/Navigation";

export default function HomePage() {
  const [currentLocale, setCurrentLocale] = useState<Locale>("ko");

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation
        currentLocale={currentLocale}
        onLocaleChange={setCurrentLocale}
        activePage="home"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <SparklesIcon className="h-12 w-12 text-purple-600" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                {getTranslation(currentLocale, "home.hero.title")}
                <span className="text-purple-600">
                  {getTranslation(currentLocale, "home.hero.titleHighlight")}
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                {getTranslation(currentLocale, "home.hero.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/builder">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center"
                  >
                    {getTranslation(currentLocale, "home.hero.startBuilding")}
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </motion.button>
                </Link>
                <Link href="/templates">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
                  >
                    {getTranslation(currentLocale, "home.hero.browseTemplates")}
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {getTranslation(currentLocale, "home.features.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {getTranslation(currentLocale, "home.features.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center p-6 rounded-lg bg-purple-50"
            >
              <ChatBubbleLeftRightIcon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {getTranslation(
                  currentLocale,
                  "home.features.aiConversations.title"
                )}
              </h3>
              <p className="text-gray-600">
                {getTranslation(
                  currentLocale,
                  "home.features.aiConversations.description"
                )}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6 rounded-lg bg-purple-50"
            >
              <CodeBracketIcon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {getTranslation(currentLocale, "home.features.templates.title")}
              </h3>
              <p className="text-gray-600">
                {getTranslation(
                  currentLocale,
                  "home.features.templates.description"
                )}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center p-6 rounded-lg bg-purple-50"
            >
              <RocketLaunchIcon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {getTranslation(
                  currentLocale,
                  "home.features.deployment.title"
                )}
              </h3>
              <p className="text-gray-600">
                {getTranslation(
                  currentLocale,
                  "home.features.deployment.description"
                )}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {getTranslation(currentLocale, "home.cta.title")}
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              {getTranslation(currentLocale, "home.cta.subtitle")}
            </p>
            <Link href="/builder">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                {getTranslation(currentLocale, "home.cta.button")}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <CodeBracketIcon className="h-8 w-8 text-purple-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">
                  Code King Builder
                </span>
              </div>
              <p className="text-gray-600">
                {getTranslation(currentLocale, "footer.description")}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {getTranslation(currentLocale, "footer.product")}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/templates"
                    className="text-gray-600 hover:text-purple-600"
                  >
                    {getTranslation(currentLocale, "nav.templates")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/builder"
                    className="text-gray-600 hover:text-purple-600"
                  >
                    {getTranslation(currentLocale, "nav.builder")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/deploy"
                    className="text-gray-600 hover:text-purple-600"
                  >
                    {getTranslation(currentLocale, "nav.deploy")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {getTranslation(currentLocale, "footer.resources")}
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-purple-600">
                    {getTranslation(currentLocale, "footer.documentation")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-purple-600">
                    {getTranslation(currentLocale, "footer.apiReference")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-purple-600">
                    {getTranslation(currentLocale, "footer.community")}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {getTranslation(currentLocale, "footer.company")}
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-purple-600">
                    {getTranslation(currentLocale, "footer.about")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-purple-600">
                    {getTranslation(currentLocale, "footer.blog")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-purple-600">
                    {getTranslation(currentLocale, "footer.contact")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-gray-600">
              {getTranslation(currentLocale, "footer.copyright")}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
