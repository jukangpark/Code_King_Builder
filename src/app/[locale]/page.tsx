"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  RocketLaunchIcon,
  CodeBracketIcon,
  ChatBubbleLeftRightIcon,
  StarIcon,
  UserGroupIcon,
  HeartIcon,
  CommandLineIcon,
} from "@heroicons/react/24/outline";
import { Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/i18n";
import Navigation from "@/components/Navigation";
import LogoSlider from "@/components/LogoSlider";
import { SOCIAL_PLATFORMS } from "@/constants/social";
import techLogos from "@/constants/techLogos";

export default function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = use(params);
  const [currentLocale, setCurrentLocale] = useState<Locale>(locale);

  // Rotating phrases for hero banner
  const phrases = [
    `"쇼핑몰"을 만들어보세요`,
    `"비즈니스"를 만들어보세요`,
    `"브랜드"를 만들어보세요`,
    `"아이디어"를 현실로 만드세요`,
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % phrases.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation
        currentLocale={currentLocale}
        onLocaleChange={setCurrentLocale}
        activePage="home"
      />

      {/* Hero Section - Full banner, white background */}
      <section className="relative bg-white min-h-[calc(100vh-4rem)] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center">
                <Image
                  src="/codekingbuilder.png"
                  alt="Code King Builder"
                  width={80}
                  height={80}
                />
              </div>

              <h1 className="text-2xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                당신의 웹사이트<div>Code King Builder AI</div> 와 함께
              </h1>
              <div className="h-14 md:h-20 lg:h-24 mb-10 flex items-center justify-center overflow-hidden">
                <motion.div
                  key={phraseIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-purple-600"
                >
                  {phrases[phraseIndex]}
                </motion.div>
              </div>

              {/* Chat-like input box */}
              <div className="max-w-3xl mx-auto">
                <div className="rounded-2xl  shadow-md overflow-hidden bg-white">
                  <div className="flex items-center gap-3 p-4 bg-white">
                    <div className="relative w-7 h-7">
                      <Image
                        src="/codekingbuilder.png"
                        alt="Code King Builder"
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-gray-800 font-semibold">
                      Code King Builder AI
                    </span>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <textarea
                        placeholder="최소 25자 이상으로 필요한 웹사이트 컨셉을 구체적으로 알려주세요. 참고 URL 도 첨부가능해요. AI 로 당신의 웹사이트를 만드세요!"
                        className="flex-1 px-4 py-3 md:py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-700 placeholder:text-gray-400 h-50 resize-none"
                      />
                      <button
                        className="px-4 py-3 md:py-4 bg-white-600 text-white rounded-xl"
                        aria-label="시작"
                      >
                        <ChatBubbleLeftRightIcon
                          className="w-5 h-5"
                          color="gray"
                        />
                      </button>
                    </div>
                  </div>
                </div>
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
            <Link href={`/${currentLocale}/builder`}>
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

      {/* 사용자 후기/리뷰 Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              고객들의 생생한 후기
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              실제 사용자들이 경험한 Code King Builder의 놀라운 결과를
              확인해보세요
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "김민수",
                company: "스타트업 CEO",
                rating: 5,
                review:
                  "정말 놀라운 경험이었습니다. AI가 내 아이디어를 완벽하게 이해하고 멋진 웹사이트를 만들어줬어요. 시간도 절약되고 결과물도 만족스럽습니다!",
                avatar: "👨‍💼",
              },
              {
                name: "이지영",
                company: "프리랜서 디자이너",
                rating: 5,
                review:
                  "코딩을 전혀 모르는데도 전문적인 웹사이트를 만들 수 있었어요. 템플릿도 다양하고 커스터마이징도 자유롭게 할 수 있어서 좋았습니다.",
                avatar: "👩‍🎨",
              },
              {
                name: "박준호",
                company: "소규모 사업자",
                rating: 5,
                review:
                  "비용 대비 정말 훌륭한 결과물을 받았습니다. 고객 문의도 빠르게 답변해주시고, 배포까지 완벽하게 도와주셨어요.",
                avatar: "👨‍💻",
              },
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{review.avatar}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {review.name}
                    </h3>
                    <p className="text-sm text-gray-600">{review.company}</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed">
                  "{review.review}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 회사 소개 Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                혁신적인 웹 개발을 이끄는 팀
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Code King Builder는 최신 AI 기술과 웹 개발 노하우를 결합하여
                누구나 쉽게 전문적인 웹사이트를 만들 수 있도록 도와드립니다.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 rounded-full p-2">
                    <UserGroupIcon className="h-6 w-6 text-purple-600" />
                  </div>
                  <span className="text-gray-700">전문 개발팀과 디자이너</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 rounded-full p-2">
                    <HeartIcon className="h-6 w-6 text-purple-600" />
                  </div>
                  <span className="text-gray-700">고객 중심의 서비스</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 rounded-full p-2">
                    <CommandLineIcon className="h-6 w-6 text-purple-600" />
                  </div>
                  <span className="text-gray-700">최신 기술 스택 활용</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  우리의 미션
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  기술의 장벽을 허물고, 모든 사람이 자신만의 멋진 웹사이트를
                  만들 수 있는 세상을 만들어갑니다.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 기술 스택 로고 슬라이더 */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              최신 기술 스택으로 구축
            </h2>
            <p className="text-gray-600">
              검증된 기술들을 활용하여 안정적이고 확장 가능한 웹사이트를
              제공합니다
            </p>
          </motion.div>

          <LogoSlider logos={techLogos} speed={30} />
        </div>
      </section>

      {/* 소셜 미디어/커뮤니티 Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              커뮤니티와 함께 성장하세요
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              개발자 커뮤니티와 소셜 미디어에서 최신 업데이트와 팁을 확인하세요
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {SOCIAL_PLATFORMS.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gray-800 rounded-lg p-6 text-center cursor-pointer transition-colors ${platform.color}`}
                onClick={() => window.open(platform.link, "_blank")}
              >
                <div className="flex justify-center items-center mb-4 h-16">
                  <Image
                    src={platform.icon}
                    alt={platform.name}
                    width={platform.width}
                    height={platform.height}
                    className="max-h-12 w-auto object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 min-h-[28px] flex items-center justify-center">
                  {platform.name}
                </h3>
                <p className="text-gray-400 min-h-[20px] flex items-center justify-center text-sm">
                  {platform.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 mb-6">
              더 많은 개발자들과 소통하고 최신 정보를 받아보세요
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
