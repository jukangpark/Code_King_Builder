"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  ArrowLeftIcon,
  PaperAirplaneIcon,
  SparklesIcon,
  EyeIcon,
  CodeBracketSquareIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/i18n";
import Navigation from "@/components/Navigation";

export default function BuilderPage() {
  const [currentLocale, setCurrentLocale] = useState<Locale>("ko");
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "ai",
      content: getTranslation("ko", "builder.aiGreeting"),
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

      // Generate sample code based on user input
      if (
        inputValue.toLowerCase().includes("portfolio") ||
        inputValue.toLowerCase().includes("personal")
      ) {
        setGeneratedCode(generatePortfolioCode());
      } else if (
        inputValue.toLowerCase().includes("business") ||
        inputValue.toLowerCase().includes("company")
      ) {
        setGeneratedCode(generateBusinessCode());
      } else {
        setGeneratedCode(generateDefaultCode());
      }
    }, 2000);
  };

  const generateAIResponse = (userInput: string) => {
    const responses = [
      "Great idea! I'll create a modern, responsive website with that design. Let me generate the code for you.",
      "Perfect! I'm building a beautiful website with those specifications. The code will be ready in a moment.",
      "Excellent choice! I'll implement those features and create a stunning website that matches your vision.",
      "I love that concept! Let me craft a professional website with all the elements you mentioned.",
      "Fantastic! I'm generating a custom website that incorporates all your requirements perfectly.",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const generatePortfolioCode = () => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-white">
    <nav class="bg-white shadow-sm border-b border-purple-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="flex items-center">
                    <span class="text-xl font-bold text-gray-900">My Portfolio</span>
                </div>
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-4">
                        <a href="#about" class="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
                        <a href="#projects" class="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                        <a href="#contact" class="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <section class="bg-gradient-to-br from-purple-50 to-white py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Welcome to My
                <span class="text-purple-600"> Portfolio</span>
            </h1>
            <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Creative developer passionate about building amazing digital experiences.
            </p>
            <button class="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                View My Work
            </button>
        </div>
    </section>
</body>
</html>`;
  };

  const generateBusinessCode = () => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Business Website</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-white">
    <nav class="bg-white shadow-sm border-b border-purple-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="flex items-center">
                    <span class="text-xl font-bold text-gray-900">Business Name</span>
                </div>
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-4">
                        <a href="#services" class="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">Services</a>
                        <a href="#about" class="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
                        <a href="#contact" class="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <section class="bg-gradient-to-br from-purple-50 to-white py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Professional
                <span class="text-purple-600"> Solutions</span>
            </h1>
            <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                We help businesses grow with innovative digital solutions and expert consulting.
            </p>
            <button class="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Get Started
            </button>
        </div>
    </section>
</body>
</html>`;
  };

  const generateDefaultCode = () => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-white">
    <nav class="bg-white shadow-sm border-b border-purple-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="flex items-center">
                    <span class="text-xl font-bold text-gray-900">My Website</span>
                </div>
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-4">
                        <a href="#home" class="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                        <a href="#about" class="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
                        <a href="#contact" class="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <section class="bg-gradient-to-br from-purple-50 to-white py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Welcome to
                <span class="text-purple-600"> My Website</span>
            </h1>
            <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                A beautiful website created with AI-powered Code King Builder.
            </p>
            <button class="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Learn More
            </button>
        </div>
    </section>
</body>
</html>`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation
        currentLocale={currentLocale}
        onLocaleChange={setCurrentLocale}
        activePage="builder"
      />

      <div className="flex h-screen">
        {/* Chat Section */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6">
            <div className="flex items-center">
              <Link
                href="/templates"
                className="flex items-center text-white hover:text-purple-100 mr-4"
              >
                <ArrowLeftIcon className="h-5 w-5 mr-2" />
                {getTranslation(currentLocale, "builder.backToTemplates")}
              </Link>
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-white">
                  {getTranslation(currentLocale, "builder.title")}
                </h1>
                <p className="text-purple-100">
                  {getTranslation(currentLocale, "builder.subtitle")}
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setPreviewMode(!previewMode)}
                  className="flex items-center px-3 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors"
                >
                  <EyeIcon className="h-4 w-4 mr-2" />
                  {previewMode
                    ? getTranslation(currentLocale, "builder.hidePreview")
                    : getTranslation(currentLocale, "builder.showPreview")}
                </button>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
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
                  className={`max-w-3xl rounded-lg p-4 ${
                    message.type === "user"
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 text-gray-900"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <p className="text-xs opacity-70 mt-2">
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
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <SparklesIcon className="h-4 w-4 text-purple-600 animate-pulse" />
                    <span className="text-sm text-gray-600">
                      {getTranslation(currentLocale, "builder.aiThinking")}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 p-6">
            <div className="flex space-x-4">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder={getTranslation(
                  currentLocale,
                  "builder.inputPlaceholder"
                )}
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center"
              >
                <PaperAirplaneIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Preview Section */}
        {previewMode && (
          <div className="w-1/2 border-l border-gray-200 flex flex-col">
            <div className="bg-gray-50 p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">
                  {getTranslation(currentLocale, "builder.previewTitle")}
                </h3>
                <div className="flex space-x-2">
                  <button className="flex items-center px-3 py-1 bg-white text-gray-700 rounded border hover:bg-gray-50">
                    <CodeBracketSquareIcon className="h-4 w-4 mr-1" />
                    Code
                  </button>
                  <button className="flex items-center px-3 py-1 bg-purple-600 text-white rounded">
                    <DocumentTextIcon className="h-4 w-4 mr-1" />
                    Preview
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden">
              {generatedCode ? (
                <iframe
                  srcDoc={generatedCode}
                  className="w-full h-full border-0"
                  title="Website Preview"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                  <div className="text-center">
                    <CodeBracketIcon className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                    <p>
                      {getTranslation(currentLocale, "builder.startChatting")}
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
