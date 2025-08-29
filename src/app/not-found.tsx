"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HomeIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 로고 */}
          <div className="mb-8">
            <div className="relative mx-auto w-32 h-32 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mb-6 p-4">
              <Image
                src="/codekingbuilder.png"
                alt="Code King Builder"
                width={80}
                height={80}
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>

          {/* 제목 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl font-bold text-gray-900 mb-4"
          >
            404
          </motion.h1>

          {/* 서브타이틀 */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl font-semibold text-gray-800 mb-4"
          >
            페이지를 찾을 수 없습니다
          </motion.h2>

          {/* 설명 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 mb-8 leading-relaxed"
          >
            요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
            <br />
            URL을 다시 확인해주세요.
          </motion.p>

          {/* 버튼들 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-full sm:w-auto bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                <HomeIcon className="w-5 h-5 mr-2" />
                홈으로 돌아가기
              </motion.button>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="flex items-center justify-center w-full sm:w-auto border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              <ArrowLeftIcon className="w-5 h-5 mr-2" />
              이전 페이지
            </button>
          </motion.div>

          {/* 추가 정보 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 p-6 bg-white rounded-lg shadow-sm border border-gray-100"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              도움이 필요하신가요?
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              문제가 지속되면 고객 지원팀에 문의해주세요.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                href="/contact"
                className="text-purple-600 hover:text-purple-700 text-sm font-medium transition-colors"
              >
                문의하기
              </Link>
              <Link
                href="/templates"
                className="text-purple-600 hover:text-purple-700 text-sm font-medium transition-colors"
              >
                템플릿 보기
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
