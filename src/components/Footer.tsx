import { getTranslation } from "@/lib/i18n";
import { Locale } from "@/lib/i18n";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Footer = ({ currentLocale }: { currentLocale: Locale }) => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <CodeBracketIcon className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                Code King Builder
              </span>
            </div>
            <p className="text-gray-600">
              {getTranslation(currentLocale, "footer.description")}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {getTranslation(currentLocale, "footer.product")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${currentLocale}/templates`}
                  className="text-gray-600 hover:text-purple-600"
                >
                  {getTranslation(currentLocale, "nav.templates")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${currentLocale}/builder`}
                  className="text-gray-600 hover:text-purple-600"
                >
                  {getTranslation(currentLocale, "nav.builder")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${currentLocale}/deploy`}
                  className="text-gray-600 hover:text-purple-600"
                >
                  {getTranslation(currentLocale, "nav.deploy")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {getTranslation(currentLocale, "footer.resources")}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  {getTranslation(currentLocale, "footer.documentation")}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  {getTranslation(currentLocale, "footer.apiReference")}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  {getTranslation(currentLocale, "footer.community")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {getTranslation(currentLocale, "footer.company")}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  {getTranslation(currentLocale, "footer.about")}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  {getTranslation(currentLocale, "footer.blog")}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  {getTranslation(currentLocale, "footer.contact")}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600">
            {getTranslation(currentLocale, "footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
