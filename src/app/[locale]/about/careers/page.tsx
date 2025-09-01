"use client";

import { useState } from "react";
import { use } from "react";
import { Locale } from "@/lib/i18n";
import Navigation from "@/components/Navigation";
import Banner from "@/components/Banner";

interface CareersPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

interface JobOpening {
  title: string;
  description: string;
  department: string;
  type: string;
  location: string;
  experience: string;
  requirements: string[];
}

export default function CareersPage({ params }: CareersPageProps) {
  const { locale } = use(params);
  const [currentLocale, setCurrentLocale] = useState<Locale>(locale);

  const jobOpenings: JobOpening[] = [];

  return (
    <>
      <Navigation
        currentLocale={currentLocale}
        onLocaleChange={setCurrentLocale}
        activePage="about"
      />
      <Banner
        title="채용"
        subtitle="혁신적인 기술로 웹사이트 제작의 미래를 만들어갈 동료를 찾고 있습니다."
        params={params}
      />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 채용 공고 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">채용 공고</h2>

            {jobOpenings.length > 0 ? (
              <div className="space-y-6">
                {jobOpenings.map((job, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {job.title}
                        </h3>
                        <p className="text-gray-600 mb-3">{job.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                          <span>{job.department}</span>
                          <span>•</span>
                          <span>{job.type}</span>
                          <span>•</span>
                          <span>{job.location}</span>
                          <span>•</span>
                          <span>{job.experience}</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">
                            요구사항:
                          </h4>
                          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                            {job.requirements.map((req, reqIndex) => (
                              <li key={reqIndex}>{req}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <button className="ml-6 px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
                        지원하기
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  현재 열린 채용공고가 없습니다
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  현재는 새로운 채용공고가 없습니다. 하지만 언제든지 열정적인
                  동료를 기다리고 있습니다.
                </p>
              </div>
            )}
          </div>

          {/* 복리후생 */}
          <div className="mt-16 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">복리후생</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  경쟁력 있는 연봉
                </h3>
                <p className="text-sm text-gray-600">
                  업계 최고 수준의 연봉과 성과 보상
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">스톡옵션</h3>
                <p className="text-sm text-gray-600">
                  회사 성장에 따른 스톡옵션 제공
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">교육 지원</h3>
                <p className="text-sm text-gray-600">
                  컨퍼런스, 강의, 도서 구매 지원
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  유연한 근무
                </h3>
                <p className="text-sm text-gray-600">
                  재택근무, 유연근무제 지원
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
