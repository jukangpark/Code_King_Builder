import { getTranslation } from "@/lib/i18n";
import { Locale } from "@/lib/i18n";
import { CodeBracketIcon, HeartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { SOCIAL_PLATFORMS } from "@/constants/social";

const Footer = ({ currentLocale }: { currentLocale: Locale }) => {
  return (
    <footer className="bg-gray-50 text-gray-900 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/codekingbuilder.png"
                alt="Code King Builder"
                width={40}
                height={40}
              />
              <span className="ml-2 text-xl font-bold text-gray-900">
                Code King Builder
              </span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              {getTranslation(currentLocale, "footer.description")}
            </p>
            <div className="flex space-x-4">
              {SOCIAL_PLATFORMS.slice(0, 4).map((platform, index) => (
                <a
                  key={index}
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-gray-800 ${platform.color} p-2 rounded-lg transition-colors`}
                >
                  <Image
                    src={platform.icon}
                    alt={platform.name}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              바로가기
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`/${currentLocale}/templates`}
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  {getTranslation(currentLocale, "nav.templates")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${currentLocale}/portfolio`}
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  포트폴리오
                </Link>
              </li>
              <li>
                <Link
                  href={`/${currentLocale}/deploy`}
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  {getTranslation(currentLocale, "nav.deploy")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${currentLocale}/contact`}
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  {getTranslation(currentLocale, "nav.contact")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-500 mb-4 md:mb-0">
              <span className="text-sm">
                {getTranslation(currentLocale, "footer.copyright")}
              </span>
              <span className="mx-2">•</span>
              <span className="text-sm">
                Made with <HeartIcon className="inline h-4 w-4 text-red-500" />{" "}
                in Korea
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
