import { Locale } from "@/lib/i18n";
import { use } from "react";

const Banner = ({
  title,
  subtitle,
  params,
}: {
  title: string;
  subtitle: string;
  params: Promise<{ locale: Locale }>;
}) => {
  const { locale } = use(params);

  return (
    <section className="bg-gradient-to-br from-purple-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
