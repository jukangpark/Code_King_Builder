import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { Website } from "../types";

interface WebsitesTabProps {
  websites: Website[];
}

export default function WebsitesTab({ websites }: WebsitesTabProps) {
  return (
    <div className="p-4 lg:p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">내 웹사이트</h3>
      <div className="space-y-3 lg:space-y-4">
        {websites.map((website) => (
          <div
            key={website.id}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 lg:p-4 border border-gray-200 rounded-lg space-y-3 sm:space-y-0 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center space-x-3 lg:space-x-4">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <GlobeAltIcon className="h-5 w-5 lg:h-6 lg:w-6 text-purple-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900 text-sm lg:text-base">
                  {website.name}
                </p>
                <p className="text-xs lg:text-sm text-gray-600">
                  {website.url}
                </p>
                <p className="text-xs text-gray-500">
                  생성일: {new Date(website.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="text-left sm:text-right">
              <span
                className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  website.status === "active"
                    ? "bg-green-100 text-green-800"
                    : website.status === "building"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {website.status === "active"
                  ? "활성"
                  : website.status === "building"
                  ? "제작중"
                  : "비활성"}
              </span>
              <p className="text-xs lg:text-sm text-gray-600 mt-1">
                {website.template}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
