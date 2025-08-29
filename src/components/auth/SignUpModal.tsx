"use client";

import { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useAuth } from "@/app/contexts/AuthContext";
import { useForm } from "react-hook-form";
import Image from "next/image";

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

interface SignUpFormData {
  name: string;
  email: string;
  phone: string;
  phoneCountry: string;
  password: string;
  confirmPassword: string;
}

export default function SignUpModal({
  isOpen,
  onClose,
  onSwitchToLogin,
}: SignUpModalProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const { signUp } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<SignUpFormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      phoneCountry: "+82",
      password: "",
      confirmPassword: "",
    },
  });

  const watchedPassword = watch("password");

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

  const onSubmit = async (data: SignUpFormData) => {
    setLoading(true);
    setError("");

    try {
      const { error } = await signUp({
        email: data.email,
        password: data.password,
        name: data.name,
        phone: data.phone,
        phoneCountry: data.phoneCountry,
      });
      if (error) {
        setError(error.message || "회원가입에 실패했습니다.");
      } else {
        setSuccess(true);
        reset();
      }
    } catch (err) {
      setError("회원가입 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  if (success) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 text-center shadow-xl">
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

          <div className="text-green-600 text-6xl mb-4">✓</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            회원가입 완료!
          </h2>
          <p className="text-gray-600 mb-4">
            입력하신 이메일 주소로 인증 메일을 발송했습니다.
            <br />
            이메일을 확인하여 계정을 활성화해주세요.
          </p>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center mb-2">
              <div className="text-purple-600 text-lg mr-2">📧</div>
              <span className="text-sm font-medium text-purple-800">
                인증 메일 발송됨
              </span>
            </div>
            <p className="text-xs text-purple-600">
              스팸 메일함도 함께 확인해보세요
            </p>
          </div>
          <button
            onClick={() => {
              onClose();
              setSuccess(false);
            }}
            className="bg-purple-600 text-white py-3 px-6 rounded-md hover:bg-purple-700 transition-colors font-medium"
          >
            확인
          </button>
        </div>
      </div>
    );
  }

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
          <h2 className="text-2xl font-bold text-gray-900">회원가입</h2>
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
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              이름 *
            </label>
            <input
              type="text"
              id="name"
              {...register("name", {
                required: "이름을 입력해주세요",
                minLength: {
                  value: 2,
                  message: "이름은 최소 2자 이상이어야 합니다",
                },
              })}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              이메일 *
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

          <div className="mb-3">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              전화번호 *
            </label>

            {/* 국가 선택 */}
            <div className="mb-3">
              <select
                {...register("phoneCountry")}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"
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

            {/* 전화번호 입력 */}
            <input
              type="tel"
              id="phone"
              placeholder="01012345678"
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

                  // 010으로 시작하는지 검증 (한국 번호인 경우)
                  if (
                    watch("phoneCountry") === "+82" &&
                    !value.startsWith("010")
                  ) {
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
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
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
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              비밀번호 *
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

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              비밀번호 확인 *
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="비밀번호를 다시 입력해주세요"
              {...register("confirmPassword", {
                required: "비밀번호 확인을 입력해주세요",
                validate: (value) =>
                  value === watchedPassword || "비밀번호가 일치하지 않습니다",
              })}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {error && <div className="text-red-600 text-sm">{error}</div>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "회원가입 중..." : "회원가입"}
          </button>
        </form>

        <div className="mt-4 text-center">
          <span className="text-gray-600">이미 계정이 있으신가요? </span>
          <button
            onClick={onSwitchToLogin}
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            로그인
          </button>
        </div>
      </div>
    </div>
  );
}
