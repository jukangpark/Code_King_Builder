"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  HomeIcon,
  ArrowLeftIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // 에러 로깅 (개발 환경에서만)
    if (process.env.NODE_ENV === "development") {
      console.error("Error occurred:", error);
    }
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 에러 로고 */}
          <div className="mb-8">
            <div className="relative mx-auto w-32 h-32 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mb-6 p-4">
              <Image
                src="/codekingbuilder.png"
                alt="Code King Builder"
                width={80}
                height={80}
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-red-200 to-red-300 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>

          {/* 제목 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            오류가 발생했습니다
          </motion.h1>

          {/* 서브타이틀 */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl font-semibold text-gray-800 mb-4"
          >
            예상치 못한 문제가 발생했습니다
          </motion.h2>

          {/* 설명 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 mb-8 leading-relaxed"
          >
            잠시 후 다시 시도해주세요. 문제가 지속되면
            <br />
            고객 지원팀에 문의해주세요.
          </motion.p>

          {/* 에러 정보 (개발 환경에서만 표시) */}
          {process.env.NODE_ENV === "development" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8 p-4 bg-gray-100 rounded-lg text-left"
            >
              <h3 className="text-sm font-semibold text-gray-800 mb-2">
                개발자 정보:
              </h3>
              <p className="text-xs text-gray-600 mb-2">
                <strong>Error:</strong> {error.message}
              </p>
              {error.digest && (
                <p className="text-xs text-gray-600">
                  <strong>Digest:</strong> {error.digest}
                </p>
              )}
            </motion.div>
          )}

          {/* 버튼들 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={reset}
              className="flex items-center justify-center w-full sm:w-auto bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              <ArrowPathIcon className="w-5 h-5 mr-2" />
              다시 시도
            </motion.button>
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-full sm:w-auto border-2 border-red-600 text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
              >
                <HomeIcon className="w-5 h-5 mr-2" />
                홈으로 돌아가기
              </motion.button>
            </Link>
          </motion.div>

          {/* 추가 액션 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center"
          >
            <button
              onClick={() => window.history.back()}
              className="flex items-center text-gray-600 hover:text-gray-800 text-sm font-medium transition-colors"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-1" />
              이전 페이지로 돌아가기
            </button>
          </motion.div>

          {/* 추가 정보 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
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
                className="text-red-600 hover:text-red-700 text-sm font-medium transition-colors"
              >
                문의하기
              </Link>
              <Link
                href="/templates"
                className="text-red-600 hover:text-red-700 text-sm font-medium transition-colors"
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
