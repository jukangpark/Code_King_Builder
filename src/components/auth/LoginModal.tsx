"use client";

import { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useAuth } from "@/app/contexts/AuthContext";
import { useForm } from "react-hook-form";
import { SignInData } from "@/app/types";
import Image from "next/image";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignUp: () => void;
}

export default function LoginModal({
  isOpen,
  onClose,
  onSwitchToSignUp,
}: LoginModalProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { signIn } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignInData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen, onClose]);

  const onSubmit = async (data: SignInData) => {
    setLoading(true);
    setError("");

    try {
      const { error } = await signIn(data);
      if (error) {
        setError(error.message || "로그인에 실패했습니다.");
      } else {
        onClose();
        reset();
      }
    } catch (err) {
      setError("로그인 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 shadow-xl">
        {/* Logo Section */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center mb-4">
            <Image
              src="/codekingbuilder.png"
              alt="Code King Builder"
              width={48}
              height={48}
              className="rounded-lg"
            />
            <div className="ml-3">
              <h1 className="text-xl font-bold text-gray-900">
                Code King Builder
              </h1>
              <p className="text-sm text-gray-500">웹사이트 제작 플랫폼</p>
            </div>
          </div>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">로그인</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              이메일
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@example.com"
              {...register("email", {
                required: "이메일을 입력해주세요",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "올바른 이메일 형식을 입력해주세요",
                },
              })}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              placeholder="비밀번호를 입력해주세요"
              {...register("password", {
                required: "비밀번호를 입력해주세요",
                minLength: {
                  value: 6,
                  message: "비밀번호는 최소 6자 이상이어야 합니다",
                },
              })}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {error && <div className="text-red-600 text-sm">{error}</div>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "로그인 중..." : "로그인"}
          </button>
        </form>

        <div className="mt-4 text-center">
          <span className="text-gray-600">계정이 없으신가요? </span>
          <button
            onClick={onSwitchToSignUp}
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}
