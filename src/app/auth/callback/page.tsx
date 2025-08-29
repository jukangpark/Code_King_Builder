"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabaseClient } from "@/lib/supabase/client";

function AuthCallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // URL에서 토큰 파라미터 확인
        const accessToken = searchParams.get("access_token");
        const refreshToken = searchParams.get("refresh_token");
        const error = searchParams.get("error");
        const errorDescription = searchParams.get("error_description");

        if (error) {
          setError(errorDescription || "인증 중 오류가 발생했습니다.");
          setIsLoading(false);
          return;
        }

        if (accessToken && refreshToken) {
          // 세션 설정
          const { error: sessionError } = await supabaseClient.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken,
          });

          if (sessionError) {
            setError("세션 설정 중 오류가 발생했습니다.");
            setIsLoading(false);
            return;
          }

          // 성공적으로 인증 완료
          setTimeout(() => {
            router.push("/");
          }, 2000);
        } else {
          // 토큰이 없는 경우 (이미 인증된 상태일 수 있음)
          const {
            data: { user },
          } = await supabaseClient.auth.getUser();
          if (user) {
            setTimeout(() => {
              router.push("/");
            }, 2000);
          } else {
            setError("인증 정보를 찾을 수 없습니다.");
            setIsLoading(false);
          }
        }
      } catch (error) {
        console.error("Auth callback error:", error);
        setError("인증 처리 중 오류가 발생했습니다.");
        setIsLoading(false);
      }
    };

    handleAuthCallback();
  }, [router, searchParams]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 rounded-full border-4 animate-spin border-primary-600 border-t-transparent"></div>
          <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
            이메일 인증 처리 중...
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            잠시만 기다려주세요.
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="flex justify-center items-center mx-auto mb-4 w-16 h-16 bg-red-100 rounded-full dark:bg-red-900">
            <span className="text-2xl text-red-600 dark:text-red-400">⚠️</span>
          </div>
          <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
            인증 오류
          </h2>
          <p className="mb-4 text-red-600 dark:text-red-400">{error}</p>
          <button
            onClick={() => router.push("/")}
            className="px-6 py-2 text-white rounded-lg transition-colors bg-primary-600 hover:bg-primary-700"
          >
            홈으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <div className="flex justify-center items-center mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full dark:bg-green-900">
          <span className="text-2xl text-green-600 dark:text-green-400">✓</span>
        </div>
        <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
          이메일 인증 완료!
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          성공적으로 인증되었습니다. 잠시 후 홈페이지로 이동합니다.
        </p>
        <div className="mx-auto w-8 h-8 rounded-full border-2 animate-spin border-primary-600 border-t-transparent"></div>
      </div>
    </div>
  );
}

export default function AuthCallback() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
          <div className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 rounded-full border-4 animate-spin border-primary-600 border-t-transparent"></div>
            <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
              로딩 중...
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              잠시만 기다려주세요.
            </p>
          </div>
        </div>
      }
    >
      <AuthCallbackContent />
    </Suspense>
  );
}
