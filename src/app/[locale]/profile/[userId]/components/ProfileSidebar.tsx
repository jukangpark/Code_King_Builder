import { UserIcon } from "@heroicons/react/24/outline";
import { ProfileData } from "../types";

interface ProfileSidebarProps {
  profileData: ProfileData | null;
  activeTab: string;
  onTabChange: (tab: string) => void;
  tabs: Array<{ id: string; label: string; icon: any }>;
  isMobile?: boolean;
}

export default function ProfileSidebar({
  profileData,
  activeTab,
  onTabChange,
  tabs,
  isMobile = false,
}: ProfileSidebarProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden p-6 ${
        isMobile ? "lg:hidden mb-6" : "hidden lg:block lg:col-span-1"
      }`}
    >
      {/* Profile Info */}
      <div className="text-center mb-6">
        <div
          className={`${
            isMobile ? "w-20 h-20" : "w-24 h-24"
          } bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4`}
        >
          {profileData?.avatar_url ? (
            <img
              src={profileData.avatar_url}
              alt="Profile"
              className={`${
                isMobile ? "w-20 h-20" : "w-24 h-24"
              } rounded-full object-cover`}
            />
          ) : (
            <UserIcon
              className={`${isMobile ? "w-10 h-10" : "w-12 h-12"} text-white`}
            />
          )}
        </div>
        <h2
          className={`${
            isMobile ? "text-lg" : "text-xl"
          } font-bold text-gray-900 mb-1`}
        >
          {profileData?.name}
        </h2>
        <p className={`${isMobile ? "text-sm" : ""} text-gray-600 mb-2`}>
          {profileData?.email}
        </p>
        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
          {profileData?.subscription_plan} 플랜
        </div>
      </div>

      {/* Stats */}
      {isMobile ? (
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center">
            <p className="text-sm text-gray-600">생성한 프로젝트</p>
            <p className="text-lg font-semibold">
              {profileData?.projects_created}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">가입일</p>
            <p className="text-lg font-semibold">
              {new Date(profileData?.created_at || "").toLocaleDateString()}
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-between">
            <span className="text-gray-700">생성한 프로젝트</span>
            <span className="font-semibold text-gray-900">
              {profileData?.projects_created}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">가입일</span>
            <span className="font-semibold text-gray-900">
              {new Date(profileData?.created_at || "").toLocaleDateString()}
            </span>
          </div>
        </div>
      )}

      {/* Navigation Tabs */}
      <nav className={isMobile ? "grid grid-cols-2 gap-2" : "space-y-2"}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`${
              isMobile
                ? "flex items-center justify-center space-x-2 px-3 py-2 rounded-lg text-sm transition-colors"
                : "w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors"
            } ${
              activeTab === tab.id
                ? "bg-purple-100 text-purple-700"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <tab.icon className={isMobile ? "h-4 w-4" : "h-5 w-5"} />
            <span>{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
