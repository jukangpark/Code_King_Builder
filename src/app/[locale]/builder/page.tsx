"use client";

import { useState, useRef, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  PaperAirplaneIcon,
  SparklesIcon,
  EyeIcon,
  CodeBracketSquareIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import { Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/i18n";
import Navigation from "@/components/Navigation";
import generateBusinessCode from "./generateBusinessCode";

export default function BuilderPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = use(params);
  const router = useRouter();
  const [currentLocale, setCurrentLocale] = useState<Locale>(locale);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "ai",
      content: getTranslation(locale, "builder.aiGreeting"),
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [generatedCode, setGeneratedCode] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Update AI greeting when locale changes
  useEffect(() => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === 1
          ? {
              ...msg,
              content: getTranslation(currentLocale, "builder.aiGreeting"),
            }
          : msg
      )
    );
  }, [currentLocale]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = {
      id: messages.length + 1,
      type: "user" as const,
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: "ai" as const,
        content: generateAIResponse(inputValue),
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);

      // Always generate business code regardless of user input
      setGeneratedCode(generateBusinessCode());
    }, 2000);
  };

  const generateAIResponse = (userInput: string) => {
    const responses = [
      "좋은 아이디어네요! 그 디자인으로 모던하고 반응형 웹사이트를 만들어드릴게요. 코드를 생성해드리겠습니다.",
      "완벽해요! 그 사양에 맞는 아름다운 웹사이트를 구축하고 있습니다. 잠시만 기다려주세요.",
      "훌륭한 선택이에요! 그 기능들을 구현하고 비전에 맞는 멋진 웹사이트를 만들어드릴게요.",
      "그 컨셉이 정말 좋네요! 언급해주신 모든 요소들을 포함한 전문적인 웹사이트를 제작해드리겠습니다.",
      "환상적이에요! 모든 요구사항을 완벽하게 반영한 맞춤형 웹사이트를 생성하고 있습니다.",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation
        currentLocale={currentLocale}
        onLocaleChange={setCurrentLocale}
        activePage="builder"
      />

      {/* Main Container */}
      <div className="flex flex-col lg:flex-row h-[calc(100vh-4rem)]">
        {/* Chat Section */}
        <div className="flex-1 flex flex-col bg-white shadow-sm">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 p-4 lg:p-6">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-xl lg:text-2xl font-bold text-white mb-1">
                  {getTranslation(currentLocale, "builder.title")}
                </h1>
                <p className="text-purple-100 text-sm lg:text-base">
                  {getTranslation(currentLocale, "builder.subtitle")}
                </p>
              </div>

              <div className="flex justify-center lg:justify-end">
                {/* Desktop Preview Toggle */}
                <button
                  onClick={() => setPreviewMode(!previewMode)}
                  className="hidden lg:flex items-center px-3 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors text-sm"
                >
                  <EyeIcon className="h-4 w-4 mr-2" />
                  <span>
                    {previewMode
                      ? getTranslation(currentLocale, "builder.hidePreview")
                      : getTranslation(currentLocale, "builder.showPreview")}
                  </span>
                </button>

                {/* Mobile Preview and Code Buttons */}
                <div className="lg:hidden flex space-x-2 justify-center">
                  <button
                    onClick={() => {
                      if (generatedCode) {
                        const newWindow = window.open("", "_blank");
                        if (newWindow) {
                          newWindow.document.write(generatedCode);
                          newWindow.document.close();
                        }
                      }
                    }}
                    disabled={!generatedCode}
                    className="flex items-center justify-center px-3 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
                  >
                    <DocumentTextIcon className="h-4 w-4" />
                    <span className="hidden sm:inline ml-2">Preview</span>
                  </button>
                  <button
                    onClick={() => {
                      if (generatedCode) {
                        window.open(
                          `/${currentLocale}/builder/editor`,
                          "_blank"
                        );
                      }
                    }}
                    disabled={!generatedCode}
                    className="flex items-center justify-center px-3 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
                  >
                    <CodeBracketSquareIcon className="h-4 w-4" />
                    <span className="hidden sm:inline ml-2">Code</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] lg:max-w-2xl rounded-2xl p-4 shadow-sm ${
                    message.type === "user"
                      ? "bg-purple-600 text-white"
                      : "bg-white text-gray-900 border border-gray-200"
                  }`}
                >
                  <p className="text-sm lg:text-base leading-relaxed">
                    {message.content}
                  </p>
                  <p
                    className={`text-xs mt-2 ${
                      message.type === "user"
                        ? "text-purple-100"
                        : "text-gray-500"
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </motion.div>
            ))}

            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm max-w-[85%] lg:max-w-2xl">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <SparklesIcon className="h-5 w-5 text-purple-600" />
                      <div className="absolute inset-0 bg-purple-600 rounded-full animate-ping opacity-20"></div>
                    </div>
                    <span className="text-sm lg:text-base text-gray-600">
                      {getTranslation(currentLocale, "builder.aiThinking")}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 p-4 lg:p-6 bg-white">
            <div className="flex space-x-3 lg:space-x-4">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder={getTranslation(
                  currentLocale,
                  "builder.inputPlaceholder"
                )}
                className="flex-1 border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors text-sm lg:text-base text-gray-900 placeholder-gray-500"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="bg-purple-600 text-white px-4 lg:px-6 py-3 rounded-xl hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center min-w-[48px]"
              >
                <PaperAirplaneIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Preview Section - Desktop Only */}
        {previewMode && (
          <div className="hidden lg:flex w-1/2 border-l border-gray-200 flex-col bg-white">
            <div className="bg-gray-50 p-4 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <h3 className="font-semibold text-gray-900 text-lg">
                  {getTranslation(currentLocale, "builder.previewTitle")}
                </h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => {
                      if (generatedCode) {
                        window.open(
                          `/${currentLocale}/builder/editor`,
                          "_blank"
                        );
                      }
                    }}
                    disabled={!generatedCode}
                    className="flex items-center px-3 py-2 bg-white text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
                  >
                    <CodeBracketSquareIcon className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">Code</span>
                  </button>
                  <button
                    onClick={() => {
                      if (generatedCode) {
                        const newWindow = window.open("", "_blank");
                        if (newWindow) {
                          newWindow.document.write(generatedCode);
                          newWindow.document.close();
                        }
                      }
                    }}
                    disabled={!generatedCode}
                    className="flex items-center px-3 py-2 bg-purple-600 text-white rounded-lg transition-colors text-sm hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <DocumentTextIcon className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">Preview</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden bg-white">
              {generatedCode ? (
                <iframe
                  srcDoc={generatedCode}
                  className="w-full h-full border-0"
                  title="Website Preview"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500 p-8">
                  <div className="text-center">
                    <div className="bg-gray-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                      <CodeBracketIcon className="h-8 w-8 text-gray-400" />
                    </div>
                    <p className="text-sm lg:text-base">
                      {getTranslation(currentLocale, "builder.startChatting")}
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      AI와 대화하여 웹사이트를 생성해보세요
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
