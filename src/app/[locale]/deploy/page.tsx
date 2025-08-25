"use client";

import { use, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeftIcon,
  RocketLaunchIcon,
  GlobeAltIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  Cog6ToothIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/outline";
import { Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/i18n";
import Navigation from "@/components/Navigation";

const deploymentPlatforms = [
  {
    id: "vercel",
    name: "Vercel",
    description:
      "Deploy to Vercel for the best performance and developer experience",
    icon: "🚀",
    features: [
      "Automatic deployments",
      "Global CDN",
      "Serverless functions",
      "Custom domains",
    ],
    recommended: true,
  },
  {
    id: "netlify",
    name: "Netlify",
    description:
      "Deploy to Netlify with continuous deployment and form handling",
    icon: "🌐",
    features: [
      "Continuous deployment",
      "Form handling",
      "A/B testing",
      "Custom domains",
    ],
    recommended: false,
  },
  {
    id: "github-pages",
    name: "GitHub Pages",
    description:
      "Free hosting for static websites directly from your GitHub repository",
    icon: "📚",
    features: [
      "Free hosting",
      "Git integration",
      "Custom domains",
      "HTTPS support",
    ],
    recommended: false,
  },
];

export default function DeployPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = use(params);
  const [currentLocale, setCurrentLocale] = useState<Locale>(locale);
  const [selectedPlatform, setSelectedPlatform] = useState("vercel");
  const [deploymentStep, setDeploymentStep] = useState(1);
  const [isDeploying, setIsDeploying] = useState(false);
  const [deploymentStatus, setDeploymentStatus] = useState<
    "idle" | "deploying" | "success" | "error"
  >("idle");
  const [customDomain, setCustomDomain] = useState("");
  const [projectName, setProjectName] = useState("my-awesome-website");

  const handleDeploy = async () => {
    setIsDeploying(true);
    setDeploymentStatus("deploying");

    // Simulate deployment process
    setTimeout(() => {
      setDeploymentStatus("success");
      setIsDeploying(false);
      setDeploymentStep(3);
    }, 3000);
  };

  const getDeploymentUrl = () => {
    const platform = deploymentPlatforms.find((p) => p.id === selectedPlatform);
    if (platform?.id === "vercel") {
      return `https://${projectName}.vercel.app`;
    } else if (platform?.id === "netlify") {
      return `https://${projectName}.netlify.app`;
    } else {
      return `https://username.github.io/${projectName}`;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation
        currentLocale={currentLocale}
        onLocaleChange={setCurrentLocale}
        activePage="deploy"
      />

      {/* Header */}
      <section className="bg-gradient-to-br from-purple-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link
              href={`/${currentLocale}/builder`}
              className="flex items-center text-purple-600 hover:text-purple-700"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              {getTranslation(currentLocale, "deploy.backToBuilder")}
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {getTranslation(currentLocale, "deploy.title")}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {getTranslation(currentLocale, "deploy.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Deployment Steps */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Step Indicator */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                      step <= deploymentStep
                        ? "bg-purple-600 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {step}
                  </div>
                  {step < 3 && (
                    <div
                      className={`w-16 h-1 mx-2 ${
                        step < deploymentStep ? "bg-purple-600" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step 1: Choose Platform */}
          {deploymentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {getTranslation(currentLocale, "deploy.step1.title")}
                </h2>
                <p className="text-gray-600">
                  {getTranslation(currentLocale, "deploy.step1.subtitle")}
                </p>
              </div>

              <div className="grid gap-6">
                {deploymentPlatforms.map((platform) => (
                  <motion.div
                    key={platform.id}
                    whileHover={{ scale: 1.02 }}
                    className={`border-2 rounded-lg p-6 cursor-pointer transition-colors ${
                      selectedPlatform === platform.id
                        ? "border-purple-600 bg-purple-50"
                        : "border-gray-200 hover:border-purple-300"
                    }`}
                    onClick={() => setSelectedPlatform(platform.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="text-3xl">{platform.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h3 className="text-xl font-semibold text-gray-900">
                              {platform.name}
                            </h3>
                            {platform.recommended && (
                              <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                                {getTranslation(
                                  currentLocale,
                                  "deploy.recommended"
                                )}
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 mt-1">
                            {platform.description}
                          </p>
                          <div className="mt-4">
                            <h4 className="font-medium text-gray-900 mb-2">
                              {getTranslation(currentLocale, "deploy.features")}
                              :
                            </h4>
                            <ul className="space-y-1">
                              {platform.features.map((feature, index) => (
                                <li
                                  key={index}
                                  className="flex items-center text-sm text-gray-600"
                                >
                                  <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full border-2 ${
                          selectedPlatform === platform.id
                            ? "border-purple-600 bg-purple-600"
                            : "border-gray-300"
                        }`}
                      >
                        {selectedPlatform === platform.id && (
                          <div className="w-2 h-2 bg-white rounded-full m-auto mt-0.5" />
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex justify-end pt-6">
                <button
                  onClick={() => setDeploymentStep(2)}
                  className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  {getTranslation(currentLocale, "deploy.continue")}
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 2: Configure Deployment */}
          {deploymentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {getTranslation(currentLocale, "deploy.step2.title")}
                </h2>
                <p className="text-gray-600">
                  {getTranslation(currentLocale, "deploy.step2.subtitle")}
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {getTranslation(currentLocale, "deploy.step2.projectName")}
                  </label>
                  <input
                    type="text"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="my-awesome-website"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    {getTranslation(
                      currentLocale,
                      "deploy.step2.projectNameHelp"
                    )}{" "}
                    {getDeploymentUrl()}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {getTranslation(currentLocale, "deploy.step2.customDomain")}
                  </label>
                  <input
                    type="text"
                    value={customDomain}
                    onChange={(e) => setCustomDomain(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="example.com"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    {getTranslation(
                      currentLocale,
                      "deploy.step2.customDomainHelp"
                    )}
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <ExclamationTriangleIcon className="h-5 w-5 text-blue-600 mt-0.5 mr-2" />
                    <div>
                      <h4 className="font-medium text-blue-900">
                        {getTranslation(
                          currentLocale,
                          "deploy.step2.importantNote"
                        )}
                      </h4>
                      <p className="text-sm text-blue-700 mt-1">
                        {getTranslation(
                          currentLocale,
                          "deploy.step2.importantNoteText"
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between pt-6">
                <button
                  onClick={() => setDeploymentStep(1)}
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  {getTranslation(currentLocale, "deploy.back")}
                </button>
                <button
                  onClick={handleDeploy}
                  disabled={isDeploying}
                  className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center"
                >
                  {isDeploying ? (
                    <>
                      <Cog6ToothIcon className="h-5 w-5 mr-2 animate-spin" />
                      {getTranslation(currentLocale, "deploy.deploying")}
                    </>
                  ) : (
                    <>
                      <RocketLaunchIcon className="h-5 w-5 mr-2" />
                      {getTranslation(currentLocale, "deploy.deployNow")}
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Deployment Complete */}
          {deploymentStep === 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-6"
            >
              <div className="bg-green-50 border border-green-200 rounded-lg p-8">
                <CheckCircleIcon className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {getTranslation(currentLocale, "deploy.step3.title")}
                </h2>
                <p className="text-gray-600 mb-6">
                  {getTranslation(currentLocale, "deploy.step3.subtitle")}{" "}
                  {
                    deploymentPlatforms.find((p) => p.id === selectedPlatform)
                      ?.name
                  }
                  .
                </p>

                <div className="bg-white rounded-lg p-4 border border-gray-200 mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {getTranslation(currentLocale, "deploy.step3.websiteUrl")}
                  </h3>
                  <div className="flex items-center justify-center space-x-2">
                    <GlobeAltIcon className="h-5 w-5 text-purple-600" />
                    <a
                      href={getDeploymentUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700 font-medium"
                    >
                      {getDeploymentUrl()}
                    </a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={getDeploymentUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center"
                  >
                    <GlobeAltIcon className="h-5 w-5 mr-2" />
                    {getTranslation(currentLocale, "deploy.step3.visitWebsite")}
                  </a>
                  <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center">
                    <DocumentArrowDownIcon className="h-5 w-5 mr-2" />
                    {getTranslation(currentLocale, "deploy.step3.downloadCode")}
                  </button>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">
                  {getTranslation(currentLocale, "deploy.step3.nextSteps")}:
                </h3>
                <ul className="space-y-2 text-left max-w-md mx-auto">
                  {getTranslation(currentLocale, "deploy.step3.nextStepsItems")
                    .split(",")
                    .map((item: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                        {item}
                      </li>
                    ))}
                </ul>
              </div>

              <div className="flex justify-center pt-6">
                <Link href={`/${currentLocale}`}>
                  <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                    {getTranslation(currentLocale, "deploy.backToHome")}
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
