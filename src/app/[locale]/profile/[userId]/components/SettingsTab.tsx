import { ProfileData } from "../types";

interface SettingsTabProps {
  profileData: ProfileData | null;
}

export default function SettingsTab({ profileData }: SettingsTabProps) {
  return (
    <div className="p-4 lg:p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">계정 설정</h3>
      <div className="space-y-4 lg:space-y-6">
        <div>
          <h4 className="font-medium text-gray-900 mb-3 text-sm lg:text-base">
            개인 정보
          </h4>
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-1 sm:space-y-0">
              <span className="text-gray-700 text-sm lg:text-base">이름</span>
              <span className="font-medium text-gray-900 text-sm lg:text-base">
                {profileData?.name}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-1 sm:space-y-0">
              <span className="text-gray-700 text-sm lg:text-base">이메일</span>
              <span className="font-medium text-gray-900 text-sm lg:text-base">
                {profileData?.email}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-1 sm:space-y-0">
              <span className="text-gray-700 text-sm lg:text-base">
                전화번호
              </span>
              <span className="font-medium text-gray-900 text-sm lg:text-base">
                {profileData?.phone || "미설정"}
              </span>
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-medium text-gray-900 mb-3 text-sm lg:text-base">
            구독 관리
          </h4>
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-1 sm:space-y-0">
              <span className="text-gray-700 text-sm lg:text-base">
                현재 플랜
              </span>
              <span className="font-medium text-gray-900 text-sm lg:text-base">
                {profileData?.subscription_plan}
              </span>
            </div>
            <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors text-sm lg:text-base font-medium">
              플랜 변경
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
