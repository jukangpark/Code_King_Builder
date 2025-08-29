"use client";

import { use, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeftIcon,
  CreditCardIcon,
  GlobeAltIcon,
  PencilIcon,
  CogIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import { Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/i18n";
import Navigation from "@/components/Navigation";
import { useAuth } from "@/app/contexts/AuthContext";
import mockPaymentHistory from "@/mock/mockPaymentHistory";
import mockWebsites from "@/mock/mockWebsites";
import mockPaymentMethods from "@/mock/mockPaymentMethods";
import { ProfileData } from "./types";
import ProfileSidebar from "./components/ProfileSidebar";
import OverviewTab from "./components/OverviewTab";
import PaymentsTab from "./components/PaymentsTab";
import PaymentMethodsTab from "./components/PaymentMethodsTab";
import WebsitesTab from "./components/WebsitesTab";
import SettingsTab from "./components/SettingsTab";

export default function ProfilePage({
  params,
}: {
  params: Promise<{ locale: Locale; userId: string }>;
}) {
  const { locale, userId } = use(params);
  const [currentLocale, setCurrentLocale] = useState<Locale>(locale);
  const [activeTab, setActiveTab] = useState<
    "overview" | "payments" | "payment-methods" | "websites" | "settings"
  >("overview");
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);

  const { user } = useAuth();
  const router = useRouter();

  // 현재 사용자와 프로필 주인이 같은지 확인
  const isOwnProfile = user?.id === userId;

  useEffect(() => {
    // 실제로는 API에서 데이터를 가져와야 함
    const fetchProfileData = async () => {
      setLoading(true);
      // 임시 데이터 (실제로는 API 호출)
      setTimeout(() => {
        setProfileData({
          id: userId,
          name: user?.user_metadata?.name || "사용자",
          email: user?.email || "",
          phone: user?.user_metadata?.phone || "",
          avatar_url: user?.user_metadata?.avatar_url,
          created_at: user?.created_at || "",
          subscription_plan: "STANDARD",
          projects_created: 3,
        });
        setLoading(false);
      }, 1000);
    };

    fetchProfileData();
  }, [userId, user]);

  // 탭 설정
  const tabs = [
    { id: "overview", label: "개요", icon: ChartBarIcon },
    { id: "payments", label: "결제 내역", icon: CreditCardIcon },
    { id: "payment-methods", label: "결제 수단", icon: CreditCardIcon },
    { id: "websites", label: "웹사이트", icon: GlobeAltIcon },
    { id: "settings", label: "설정", icon: CogIcon },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation
          currentLocale={currentLocale}
          onLocaleChange={setCurrentLocale}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="h-32 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
              <div className="md:col-span-2 bg-white rounded-lg shadow p-6">
                <div className="h-6 bg-gray-200 rounded mb-4"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation
        currentLocale={currentLocale}
        onLocaleChange={setCurrentLocale}
      />

      {/* Header */}
      <section className="bg-gradient-to-br from-purple-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.back()}
                className="flex items-center text-purple-600 hover:text-purple-700"
              >
                <ArrowLeftIcon className="h-5 w-5 mr-2" />
                돌아가기
              </button>
            </div>
            {isOwnProfile && (
              <button className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                <PencilIcon className="h-4 w-4" />
                <span>정보 편집</span>
              </button>
            )}
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              마이 페이지
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              계정 정보와 설정을 관리하세요
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar - Desktop */}
            <ProfileSidebar
              profileData={profileData}
              activeTab={activeTab}
              onTabChange={(tab) => setActiveTab(tab as any)}
              tabs={tabs}
            />

            {/* Mobile Profile Header */}
            <ProfileSidebar
              profileData={profileData}
              activeTab={activeTab}
              onTabChange={(tab) => setActiveTab(tab as any)}
              tabs={tabs}
              isMobile={true}
            />

            {/* Main Content Area */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Tab Content */}
                {activeTab === "overview" && (
                  <OverviewTab profileData={profileData} />
                )}

                {activeTab === "payments" && (
                  <PaymentsTab paymentHistory={mockPaymentHistory} />
                )}

                {activeTab === "payment-methods" && (
                  <PaymentMethodsTab paymentMethods={mockPaymentMethods} />
                )}

                {activeTab === "websites" && (
                  <WebsitesTab websites={mockWebsites} />
                )}

                {activeTab === "settings" && (
                  <SettingsTab profileData={profileData} />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
