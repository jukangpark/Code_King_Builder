"use client";

import { use, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  LightBulbIcon,
  SwatchIcon,
  Bars3Icon,
  GlobeAltIcon,
  ComputerDesktopIcon,
  DocumentTextIcon,
  CogIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import { Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/i18n";
import Navigation from "@/components/Navigation";
import Banner from "@/components/Banner";
// EmailJS 관련 import 제거 - Nodemailer로 대체됨

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  phoneCountry: string;
  package: string;
  message: string;
}

export default function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = use(params);
  const [currentLocale, setCurrentLocale] = useState<Locale>(locale);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // EmailJS 초기화 제거 - Nodemailer로 대체됨

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<ContactForm>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      phoneCountry: "+82",
      package: "STANDARD",
      message: "",
    },
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Nodemailer API 호출
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        reset();
        console.log("✅ 상담문의 성공:", result.message);
      } else {
        setSubmitStatus("error");
        console.error("❌ 상담문의 실패:", result.message);
      }
    } catch (error) {
      console.error("❌ 상담문의 처리 중 오류:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation
        currentLocale={currentLocale}
        onLocaleChange={setCurrentLocale}
        activePage="contact"
      />

      <Banner
        title={getTranslation(currentLocale, "contact.title")}
        subtitle={getTranslation(currentLocale, "contact.subtitle")}
        params={params}
      />

      {/* Contact Form and Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {getTranslation(currentLocale, "contact.form.name")}
              </h2>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
                >
                  <div className="flex items-center mb-2">
                    <CheckCircleIcon className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-green-800 font-semibold">
                      상담문의가 성공적으로 접수되었습니다!
                    </span>
                  </div>
                  <div className="text-green-700 text-sm space-y-1">
                    <p>
                      ✓ 이메일이 codeking@codekingbuilder.com으로 전송되었습니다
                    </p>
                    <p>✓ Discord 알림이 전송되었습니다</p>
                    <p>✓ Google Sheets에 문의 내용이 저장되었습니다</p>
                    <p>✓ 빠른 시일 내에 연락드리겠습니다</p>
                  </div>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center"
                >
                  <ExclamationTriangleIcon className="h-5 w-5 text-red-600 mr-3" />
                  <span className="text-red-800">
                    {getTranslation(currentLocale, "contact.form.error")}
                  </span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {getTranslation(currentLocale, "contact.form.name")} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register("name", { required: "이름을 입력해주세요" })}
                      placeholder={getTranslation(
                        currentLocale,
                        "contact.form.namePlaceholder"
                      )}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors placeholder-gray-500 text-gray-900"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {getTranslation(currentLocale, "contact.form.email")} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register("email", {
                        required: "이메일을 입력해주세요",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "올바른 이메일 형식을 입력해주세요",
                        },
                      })}
                      placeholder={getTranslation(
                        currentLocale,
                        "contact.form.emailPlaceholder"
                      )}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors placeholder-gray-500 text-gray-900"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {getTranslation(currentLocale, "contact.form.phone")} *
                  </label>

                  {/* 국가 선택 */}
                  <div className="mb-3">
                    <select
                      {...register("phoneCountry")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors text-gray-900"
                    >
                      <option value="+82">🇰🇷 한국 (+82)</option>
                      <option value="+1">🇺🇸 미국 (+1)</option>
                      <option value="+81">🇯🇵 일본 (+81)</option>
                      <option value="+86">🇨🇳 중국 (+86)</option>
                      <option value="+44">🇬🇧 영국 (+44)</option>
                      <option value="+49">🇩🇪 독일 (+49)</option>
                      <option value="+33">🇫🇷 프랑스 (+33)</option>
                      <option value="+39">🇮🇹 이탈리아 (+39)</option>
                      <option value="+34">🇪🇸 스페인 (+34)</option>
                      <option value="+31">🇳🇱 네덜란드 (+31)</option>
                      <option value="+61">🇦🇺 호주 (+61)</option>
                      <option value="+91">🇮🇳 인도 (+91)</option>
                      <option value="+55">🇧🇷 브라질 (+55)</option>
                      <option value="+52">🇲🇽 멕시코 (+52)</option>
                      <option value="+971">🇦🇪 UAE (+971)</option>
                    </select>
                  </div>

                  {/* 전화번호 입력 (하나의 필드) */}
                  <input
                    type="tel"
                    id="phone"
                    {...register("phone", {
                      required: "전화번호를 입력해주세요",
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "숫자만 입력 가능합니다",
                      },
                      validate: (value) => {
                        // 숫자 길이 검증
                        if (value.length < 10 || value.length > 11) {
                          return "전화번호는 10-11자리여야 합니다";
                        }

                        // 010으로 시작하는지 검증
                        if (!value.startsWith("010")) {
                          return "010으로 시작하는 전화번호를 입력해주세요";
                        }

                        return true;
                      },
                    })}
                    onChange={(e) => {
                      // 숫자만 입력 가능하도록 필터링
                      const value = e.target.value.replace(/[^\d]/g, "");
                      setValue("phone", value);
                    }}
                    placeholder="01012345678"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors placeholder-gray-500 text-gray-900"
                    maxLength={11}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="package"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    패키지 선택 *
                  </label>
                  <select
                    id="package"
                    {...register("package", {
                      required: "패키지를 선택해주세요",
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors text-gray-900"
                  >
                    <option value="STANDARD">STANDARD - (99,000원)</option>
                    <option value="DELUXE">DELUXE - (399,000원)</option>
                    <option value="PREMIUM">PREMIUM - (990,000원)</option>
                  </select>
                  {errors.package && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.package.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {getTranslation(currentLocale, "contact.form.message")} *
                  </label>
                  <textarea
                    id="message"
                    {...register("message", {
                      required: "메시지를 입력해주세요",
                    })}
                    placeholder={getTranslation(
                      currentLocale,
                      "contact.form.messagePlaceholder"
                    )}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none placeholder-gray-500 text-gray-900"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting
                    ? getTranslation(currentLocale, "contact.form.submitting")
                    : getTranslation(currentLocale, "contact.form.submit")}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Company Info with Logo */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mr-4">
                    <img
                      src="/codekingbuilder.png"
                      alt="Code King Builder Logo"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Code King Builder
                    </h2>
                    <p className="text-purple-600 font-medium">
                      혁신적인 웹 개발 솔루션
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <EnvelopeIcon className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {getTranslation(currentLocale, "contact.info.email")}
                      </h3>
                      <p className="text-gray-600 hover:text-purple-600 transition-colors">
                        codeking@codekingbuilder.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <PhoneIcon className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {getTranslation(currentLocale, "contact.info.phone")}
                      </h3>
                      <p className="text-gray-600 hover:text-purple-600 transition-colors">
                        010-4292-9339
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPinIcon className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {getTranslation(currentLocale, "contact.info.address")}
                      </h3>
                      <p className="text-gray-600 hover:text-purple-600 transition-colors">
                        경기도 성남시 분당구 판교동
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ClockIcon className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {getTranslation(
                          currentLocale,
                          "contact.info.businessHours"
                        )}
                      </h3>
                      <p className="text-gray-600 hover:text-purple-600 transition-colors">
                        {getTranslation(
                          currentLocale,
                          "contact.info.businessHoursValue"
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {getTranslation(currentLocale, "contact.tips.title")}
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    •{" "}
                    {getTranslation(currentLocale, "contact.tips.requirement")}
                  </li>
                  <li>
                    • {getTranslation(currentLocale, "contact.tips.budget")}
                  </li>
                  <li>
                    • {getTranslation(currentLocale, "contact.tips.schedule")}
                  </li>
                  <li>
                    • {getTranslation(currentLocale, "contact.tips.existing")}
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Introduction Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {getTranslation(currentLocale, "service.title")}
            </h2>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto">
              {getTranslation(currentLocale, "service.subtitle")}
            </p>
          </motion.div>

          {/* Service Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
            >
              <div className="text-4xl mb-4">👷🏾‍♂️</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {getTranslation(
                  currentLocale,
                  "service.features.strategy.title"
                )}
              </h3>
              <p className="text-purple-100">
                {getTranslation(
                  currentLocale,
                  "service.features.strategy.description"
                )}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
            >
              <div className="text-4xl mb-4">✏️</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {getTranslation(
                  currentLocale,
                  "service.features.copywriting.title"
                )}
              </h3>
              <p className="text-purple-100">
                {getTranslation(
                  currentLocale,
                  "service.features.copywriting.description"
                )}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
            >
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {getTranslation(currentLocale, "service.features.design.title")}
              </h3>
              <p className="text-purple-100">
                {getTranslation(
                  currentLocale,
                  "service.features.design.description"
                )}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
            >
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {getTranslation(currentLocale, "service.features.seo.title")}
              </h3>
              <p className="text-purple-100">
                {getTranslation(
                  currentLocale,
                  "service.features.seo.description"
                )}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
            >
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {getTranslation(
                  currentLocale,
                  "service.features.responsive.title"
                )}
              </h3>
              <p className="text-purple-100">
                {getTranslation(
                  currentLocale,
                  "service.features.responsive.description"
                )}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
            >
              <div className="text-4xl mb-4">🏎️</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {getTranslation(
                  currentLocale,
                  "service.features.performance.title"
                )}
              </h3>
              <p className="text-purple-100">
                {getTranslation(
                  currentLocale,
                  "service.features.performance.description"
                )}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
            >
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {getTranslation(
                  currentLocale,
                  "service.features.aiAssistant.title"
                )}
              </h3>
              <p className="text-purple-100">
                {getTranslation(
                  currentLocale,
                  "service.features.aiAssistant.description"
                )}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
            >
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {getTranslation(
                  currentLocale,
                  "service.features.googleWorkspace.title"
                )}
              </h3>
              <p className="text-purple-100">
                {getTranslation(
                  currentLocale,
                  "service.features.googleWorkspace.description"
                )}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
            >
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {getTranslation(currentLocale, "service.features.domain.title")}
              </h3>
              <p className="text-purple-100">
                {getTranslation(
                  currentLocale,
                  "service.features.domain.description"
                )}
              </p>
            </motion.div>
          </div>

          {/* Service Types */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              {getTranslation(currentLocale, "service.websiteTypes.title")}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white/20 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🏢</div>
                <p className="text-white font-medium">
                  {getTranslation(
                    currentLocale,
                    "service.websiteTypes.corporate"
                  )}
                </p>
              </div>
              <div className="bg-white/20 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🎯</div>
                <p className="text-white font-medium">
                  {getTranslation(currentLocale, "service.websiteTypes.brand")}
                </p>
              </div>
              <div className="bg-white/20 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">📁</div>
                <p className="text-white font-medium">
                  {getTranslation(
                    currentLocale,
                    "service.websiteTypes.portfolio"
                  )}
                </p>
              </div>
              <div className="bg-white/20 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🎉</div>
                <p className="text-white font-medium">
                  {getTranslation(currentLocale, "service.websiteTypes.event")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {getTranslation(currentLocale, "service.process.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {getTranslation(currentLocale, "service.process.subtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-6 gap-6">
            {[
              {
                step: "1",
                icon: "💬",
                title: getTranslation(
                  currentLocale,
                  "service.process.steps.consultation.title"
                ),
                description: getTranslation(
                  currentLocale,
                  "service.process.steps.consultation.description"
                ),
              },
              {
                step: "2",
                icon: "💳",
                title: getTranslation(
                  currentLocale,
                  "service.process.steps.quote.title"
                ),
                description: getTranslation(
                  currentLocale,
                  "service.process.steps.quote.description"
                ),
              },
              {
                step: "3",
                icon: "🎨",
                title: getTranslation(
                  currentLocale,
                  "service.process.steps.planning.title"
                ),
                description: getTranslation(
                  currentLocale,
                  "service.process.steps.planning.description"
                ),
              },
              {
                step: "4",
                icon: "⚒️",
                title: getTranslation(
                  currentLocale,
                  "service.process.steps.development.title"
                ),
                description: getTranslation(
                  currentLocale,
                  "service.process.steps.development.description"
                ),
              },
              {
                step: "5",
                icon: "🌐",
                title: getTranslation(
                  currentLocale,
                  "service.process.steps.integration.title"
                ),
                description: getTranslation(
                  currentLocale,
                  "service.process.steps.integration.description"
                ),
              },
              {
                step: "6",
                icon: "🧐",
                title: getTranslation(
                  currentLocale,
                  "service.process.steps.delivery.title"
                ),
                description: getTranslation(
                  currentLocale,
                  "service.process.steps.delivery.description"
                ),
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {getTranslation(currentLocale, "pricing.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {getTranslation(currentLocale, "pricing.subtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                id: "standard",
                delay: 0.1,
                className: "bg-white rounded-lg shadow-lg p-8 relative",
                buttonClass:
                  "w-full bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-700 transition-colors",
                popular: false,
                additionalFeatures: "0개",
              },
              {
                id: "deluxe",
                delay: 0.2,
                className:
                  "bg-white rounded-lg shadow-xl p-8 relative border-2 border-purple-500 transform scale-105",
                buttonClass:
                  "w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors",
                popular: true,
                additionalFeatures: "5개",
              },
              {
                id: "premium",
                delay: 0.3,
                className: "bg-white rounded-lg shadow-lg p-8 relative",
                buttonClass:
                  "w-full bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-700 transition-colors",
                popular: false,
                additionalFeatures: "10개",
              },
            ].map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: pkg.delay }}
                className={pkg.className}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      인기
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {getTranslation(
                      currentLocale,
                      `pricing.packages.${pkg.id}.name`
                    )}
                  </h3>
                  <div className="text-4xl font-bold text-purple-600 mb-6">
                    {getTranslation(
                      currentLocale,
                      `pricing.packages.${pkg.id}.price`
                    )}
                  </div>
                  <p className="text-gray-600 mb-6">
                    {getTranslation(
                      currentLocale,
                      `pricing.packages.${pkg.id}.description`
                    )}
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-gray-600">
                      <svg
                        className="h-5 w-5 text-green-500 mr-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {getTranslation(
                        currentLocale,
                        `pricing.packages.${pkg.id}.features`
                      )}
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">
                        {getTranslation(
                          currentLocale,
                          "pricing.features.duration"
                        )}
                      </span>
                      <span className="font-semibold text-gray-900">
                        {getTranslation(
                          currentLocale,
                          `pricing.packages.${pkg.id}.duration`
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">
                        {getTranslation(
                          currentLocale,
                          "pricing.features.revisions"
                        )}
                      </span>
                      <span className="font-semibold text-gray-900">
                        {getTranslation(
                          currentLocale,
                          `pricing.packages.${pkg.id}.revisions`
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">
                        {getTranslation(
                          currentLocale,
                          "pricing.features.pages"
                        )}
                      </span>
                      <span className="font-semibold text-gray-900">
                        {getTranslation(
                          currentLocale,
                          `pricing.packages.${pkg.id}.pages`
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">
                        {getTranslation(
                          currentLocale,
                          "pricing.features.responsive"
                        )}
                      </span>
                      <span className="text-green-500">✓</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">
                        {getTranslation(
                          currentLocale,
                          "pricing.features.crossBrowser"
                        )}
                      </span>
                      <span className="text-green-500">✓</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">
                        {getTranslation(
                          currentLocale,
                          "pricing.features.additionalFeatures"
                        )}
                      </span>
                      <span className="font-semibold text-gray-900">
                        {pkg.additionalFeatures}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">
                        {getTranslation(
                          currentLocale,
                          "pricing.features.sourceCode"
                        )}
                      </span>
                      <span className="text-green-500">✓</span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={pkg.buttonClass}
                  >
                    {getTranslation(
                      currentLocale,
                      `pricing.packages.${pkg.id}.button`
                    )}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {getTranslation(currentLocale, "service.cta.title")}
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {getTranslation(currentLocale, "service.cta.subtitle")}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-lg"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {getTranslation(currentLocale, "service.cta.button")}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* 의뢰인 준비사항 Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              의뢰인 준비사항
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              웹사이트 제작을 위해 미리 준비해주시면 더욱 정확하고 만족스러운
              결과물을 제공해드릴 수 있습니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 rounded-full p-3 mr-4">
                    <LightBulbIcon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    사이트 제작 목적 및 운영 방향
                  </h3>
                </div>
                <p className="text-gray-600">
                  어떤 목적으로 웹사이트를 만들고, 어떻게 운영하고 싶으신지
                  알려주세요. 비즈니스 목표와 타겟 고객층을 파악하는 데 도움이
                  됩니다.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 rounded-full p-3 mr-4">
                    <SwatchIcon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    원하시는 컬러, 톤
                  </h3>
                </div>
                <p className="text-gray-600">
                  브랜드 컬러나 선호하는 색상, 전체적인 톤앤매너를 알려주세요.
                  기존 브랜드 가이드라인이 있다면 함께 공유해주세요.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 rounded-full p-3 mr-4">
                    <Bars3Icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    메뉴 구성
                  </h3>
                </div>
                <p className="text-gray-600">
                  필요한 메뉴 항목들을 정리해주세요. (예: 공지사항, 회사 소개,
                  서비스 소개, 문의하기, 갤러리 등)
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 rounded-full p-3 mr-4">
                    <GlobeAltIcon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    레퍼런스 또는 참고 사이트
                  </h3>
                </div>
                <p className="text-gray-600">
                  마음에 드는 웹사이트나 참고하고 싶은 사이트의 URL을
                  알려주세요. 디자인 방향을 파악하는 데 큰 도움이 됩니다.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 rounded-full p-3 mr-4">
                    <ComputerDesktopIcon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    사용하고 싶은 도메인
                  </h3>
                </div>
                <p className="text-gray-600">
                  사용하고 싶은 도메인이 있으시다면 알려주세요. 보유 여부와 함께
                  도메인 등록 서비스도 함께 안내해드립니다.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 rounded-full p-3 mr-4">
                    <DocumentTextIcon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    콘텐츠 자료
                  </h3>
                </div>
                <p className="text-gray-600">
                  텍스트, 이미지, 영상 등 웹사이트에 사용할 콘텐츠 자료가 있다면
                  미리 준비해주세요. (보유 시)
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 rounded-full p-3 mr-4">
                    <CogIcon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    특별히 원하는 기능이나 디자인 요소
                  </h3>
                </div>
                <p className="text-gray-600">
                  예약 시스템, 문의폼, 갤러리, 뉴스레터 등 특별히 원하는
                  기능이나 디자인 요소가 있다면 알려주세요.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 rounded-full p-3 mr-4">
                    <PhotoIcon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    로고 파일 원본
                  </h3>
                </div>
                <p className="text-gray-600">
                  로고 파일이 있다면 고해상도 원본 파일을 준비해주세요. AI, EPS,
                  SVG 등 벡터 파일이 가장 좋습니다.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 자주 묻는 질문 Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              자주 묻는 질문
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              웹사이트 제작 과정에서 궁금한 점들을 미리 확인해보세요
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 font-bold text-sm">
                        Q
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 flex-1">
                      제작 완료 후 유지보수도 해주시나요?
                    </h3>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold text-sm">
                        A
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed flex-1">
                      기본적으로 7일간 오류 수정 기간을 드리며, 지속적인
                      유지보수가 필요하신 경우 별도 계약으로 진행 가능합니다.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 font-bold text-sm">
                        Q
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 flex-1">
                      도메인과 호스팅도 알아봐주시나요?
                    </h3>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold text-sm">
                        A
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed flex-1">
                      원하시면 도메인 구매, 호스팅 세팅까지 전반적인 컨설팅을
                      도와드립니다.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 font-bold text-sm">
                        Q
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 flex-1">
                      텍스트나 이미지가 아직 준비 안됐어요.
                    </h3>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold text-sm">
                        A
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed flex-1">
                      준비가 안된 부분은 임시 컨텐츠로 먼저 작업하고, 나중에
                      교체하는 방식으로도 가능합니다.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 font-bold text-sm">
                        Q
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 flex-1">
                      저희 업체만의 특별히 원하는 기능도 개발해주시나요?
                    </h3>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold text-sm">
                        A
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed flex-1">
                      네, 맞습니다. 예약 시스템, 결제 연동, 회원 관리,
                      데이터베이스 연동 등 업체별 맞춤 기능 개발이 가능합니다.
                      상담 시 구체적인 요구사항을 말씀해 주시면 기술적 검토 후
                      개발 가능 여부와 소요 기간을 안내해드립니다.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 mb-6">
              더 궁금한 점이 있으시다면 언제든 문의해주세요
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              추가 문의하기
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* 맞춤형 교육 커리큘럼 광고 Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Code King Builder 맞춤형 교육 커리큘럼
            </h2>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto">
              유지보수 요청이 번거로우시다면? 이제 직접 개발할 수 있는 능력을
              키워보세요!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* 가격 및 신청 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-8 h-full flex flex-col"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden flex-1">
                <div className="absolute top-0 right-0 bg-gradient-to-l from-purple-500 to-blue-500 text-white px-6 py-2 rounded-bl-2xl">
                  <span className="text-sm font-bold">HOT</span>
                </div>

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    맞춤형 1:1 교육
                  </h3>
                  <div className="text-5xl font-bold text-purple-600 mb-2">
                    시간당 20,000원
                  </div>
                  <p className="text-gray-600">최소 10시간부터 시작 가능</p>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">
                      기본 패키지 (10시간)
                    </span>
                    <span className="text-2xl font-bold text-purple-600">
                      200,000원
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">
                      표준 패키지 (20시간)
                    </span>
                    <span className="text-2xl font-bold text-purple-600">
                      380,000원
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-gray-700 font-medium">
                      프리미엄 패키지 (40시간)
                    </span>
                    <span className="text-2xl font-bold text-purple-600">
                      720,000원
                    </span>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-6 mb-8">
                  <h4 className="font-bold text-gray-900 mb-3">🎁 특별 혜택</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      교육용 개발 환경 무료 제공
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      실습용 도메인 1개 무료 제공
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      교육 자료 및 템플릿 무료 제공
                    </li>
                  </ul>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  🎓 지금 교육 신청하기
                </motion.button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h4 className="text-white font-bold mb-4">📞 교육 문의</h4>
                <div className="space-y-3 text-purple-100">
                  <p className="flex items-center">
                    <span className="mr-3">📧</span>
                    codeking@codekingbuilder.com
                  </p>
                  <p className="flex items-center">
                    <span className="mr-3">📱</span>
                    010-4292-9339
                  </p>
                  <p className="text-sm">
                    * 교육 일정은 개인별 맞춤 조율 가능합니다
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 교육 내용 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8 h-full flex flex-col"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 flex-1">
                <h3 className="text-2xl font-bold text-white mb-6">
                  🚀 자신만의 웹사이트를 직접 개발할 수 있도록
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">
                        기초부터 실전까지
                      </h4>
                      <p className="text-purple-100 text-sm">
                        HTML, CSS, JavaScript부터 React, Next.js까지 단계별 학습
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">
                        실무 프로젝트 중심
                      </h4>
                      <p className="text-purple-100 text-sm">
                        실제 비즈니스 웹사이트를 만들며 실무 경험 쌓기
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">
                        1:1 맞춤형 지도
                      </h4>
                      <p className="text-purple-100 text-sm">
                        개인 수준에 맞는 커리큘럼으로 효율적인 학습
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">
                        기술 지원
                      </h4>
                      <p className="text-purple-100 text-sm">
                        교육 완료 후에도 3개월간 지속적인 기술 지원 및 멘토링
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">
                  💡 이런 분들께 추천합니다
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">👨‍💼</div>
                    <p className="text-white text-sm font-medium">사업자</p>
                    <p className="text-purple-100 text-xs">
                      직접 웹사이트 관리
                    </p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">🎓</div>
                    <p className="text-white text-sm font-medium">학생</p>
                    <p className="text-purple-100 text-xs">취업 준비</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">💼</div>
                    <p className="text-white text-sm font-medium">직장인</p>
                    <p className="text-purple-100 text-xs">부업/전환</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">🚀</div>
                    <p className="text-white text-sm font-medium">창업자</p>
                    <p className="text-purple-100 text-xs">MVP 개발</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 취소 및 환불 규정 Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              취소 및 환불 규정
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              [IT·프로그래밍 {">"} 홈페이지 신규 제작] 취소 및 환불 규정
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* 기본 규정 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-8 border-b border-gray-700 pb-4">
                  기본 규정
                </h3>
                <div className="space-y-8">
                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="font-bold text-white mb-3 text-lg">
                      1. 용역 제공이 개시되기 전
                    </h4>
                    <p className="text-gray-300 text-base leading-relaxed">
                      취소 및 환불 가능
                    </p>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-6">
                    <h4 className="font-bold text-white mb-3 text-lg">
                      2. 용역 제공이 개시된 후
                    </h4>
                    <div className="space-y-3 text-gray-300 text-base leading-relaxed">
                      <p>
                        <span className="font-semibold text-yellow-400">
                          가분적 용역:
                        </span>{" "}
                        개시되지 않은 범위에 대한 취소 및 환불 가능
                      </p>
                      <p>
                        <span className="font-semibold text-yellow-400">
                          불가분적 용역:
                        </span>{" "}
                        취소 및 환불 불가
                      </p>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="font-bold text-white mb-3 text-lg">
                      3. 제공된 용역이 구매 확정된 경우
                    </h4>
                    <p className="text-gray-300 text-base leading-relaxed">
                      거래 금액을 정산 받은 전문가와 직접 취소 및 환불 협의
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 참고 사항 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-8 border-b border-gray-700 pb-4">
                  참고 사항
                </h3>
                <p className="text-gray-300 mb-8 text-base leading-relaxed">
                  다음의 경우에는 해당 기준을 따릅니다.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-gray-300 font-bold text-sm">1</span>
                    </div>
                    <p className="text-gray-300 text-base leading-relaxed">
                      전문가가 제시한 취소 조건이 기본 규정보다 의뢰인에게
                      유리한 경우
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-gray-300 font-bold text-sm">2</span>
                    </div>
                    <p className="text-gray-300 text-base leading-relaxed">
                      전문가가 별도로 명시한 사전 준비 사항(상담, 출장, 예약
                      등)과 이에 대한 취소 조건이 있는 경우
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-gray-300 font-bold text-sm">3</span>
                    </div>
                    <p className="text-gray-300 text-base leading-relaxed">
                      제공받은 용역이 표시·광고의 내용과 다르거나 계약 내용과
                      다르게 이행된 경우 용역을 공급받은 날부터 3개월 이내 또는
                      그 사실을 안 날 또는 알 수 있었던 날부터 30일 이내에 취소
                      및 환불이 가능합니다.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
