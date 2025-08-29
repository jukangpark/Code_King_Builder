import { CreditCardIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { ProfileData } from "../types";

interface OverviewTabProps {
  profileData: ProfileData | null;
}

export default function OverviewTab({ profileData }: OverviewTabProps) {
  return (
    <div className="p-4 lg:p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">계정 개요</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
        <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
          <div className="flex items-center space-x-3 mb-3">
            <CreditCardIcon className="h-5 w-5 lg:h-6 lg:w-6 text-purple-600" />
            <h4 className="font-medium text-gray-900 text-sm lg:text-base">
              구독 정보
            </h4>
          </div>
          <p className="text-gray-600 mb-2 text-sm lg:text-base">
            현재 플랜:{" "}
            <span className="font-semibold">
              {profileData?.subscription_plan}
            </span>
          </p>
          <p className="text-gray-600 text-sm lg:text-base">
            다음 결제일: <span className="font-semibold">2024-02-15</span>
          </p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
          <div className="flex items-center space-x-3 mb-3">
            <GlobeAltIcon className="h-5 w-5 lg:h-6 lg:w-6 text-purple-600" />
            <h4 className="font-medium text-gray-900 text-sm lg:text-base">
              웹사이트 현황
            </h4>
          </div>
          <p className="text-gray-600 mb-2 text-sm lg:text-base">
            활성 웹사이트: <span className="font-semibold">2개</span>
          </p>
          <p className="text-gray-600 text-sm lg:text-base">
            제작 중: <span className="font-semibold">1개</span>
          </p>
        </div>
      </div>
    </div>
  );
}
