"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChatBubbleLeftRightIcon,
  XMarkIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

interface ChatMessage {
  id: string;
  message: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const SimpleChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      message:
        "안녕하세요! Code King Builder 어시스턴트입니다. 무엇을 도와드릴까요?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const quickQuestions = [
    { label: "정기결제 문의", emoji: "🧾" },
    { label: "서비스결제 환불", emoji: "💳" },
    { label: "도메인 문의", emoji: "🌐" },
    { label: "요금제 문의", emoji: "📦" },
  ];

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      message,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = generateBotResponse(message);
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        message: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 800);
  };

  const handleTemplateClick = (template: string) => {
    handleSendMessage(template);
  };

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes("정기결제")) {
      return "정기결제 문의를 도와드릴게요. 결제 수단 변경, 갱신일 확인, 해지 방법 중 어떤 것을 원하시나요?";
    } else if (lowerMessage.includes("환불")) {
      return "환불 절차는 결제일로부터 7일 이내 신청 시 신속 처리됩니다. 주문 번호와 사유를 알려주세요.";
    } else if (lowerMessage.includes("도메인")) {
      return "도메인 연결은 DNS A/CNAME 설정으로 진행됩니다. 사용 중인 도메인 등록기관을 알려주시면 가이드를 드릴게요.";
    } else if (lowerMessage.includes("요금제")) {
      return "요금제는 Basic/Pro/Business가 있으며, 트래픽과 빌드 횟수 기준이 달라요. 어떤 용도로 쓰실 계획인가요?";
    }

    if (lowerMessage.includes("안녕") || lowerMessage.includes("hello")) {
      return "안녕하세요! Code King Builder에서 웹사이트를 만드는 것을 도와드릴게요. 어떤 도움이 필요하신가요?";
    } else if (
      lowerMessage.includes("웹사이트") ||
      lowerMessage.includes("website")
    ) {
      return "웹사이트 제작에 대해 궁금한 점이 있으시군요! 템플릿 선택부터 배포까지 모든 과정을 도와드릴 수 있습니다.";
    } else if (
      lowerMessage.includes("가격") ||
      lowerMessage.includes("price")
    ) {
      return "Code King Builder는 다양한 요금제를 제공합니다. 자세한 내용은 홈페이지의 가격 정보를 확인해보세요!";
    } else if (lowerMessage.includes("도움") || lowerMessage.includes("help")) {
      return "도움이 필요하시다면 고객지원 페이지를 방문해보세요. FAQ와 교육 자료를 제공하고 있습니다.";
    } else if (
      lowerMessage.includes("감사") ||
      lowerMessage.includes("thank")
    ) {
      return "천만에요! 더 궁금한 점이 있으시면 언제든 말씀해주세요.";
    } else if (
      lowerMessage.includes("템플릿") ||
      lowerMessage.includes("template")
    ) {
      return "다양한 템플릿을 제공하고 있어요! 홈페이지의 템플릿 섹션을 확인해보세요.";
    } else if (
      lowerMessage.includes("배포") ||
      lowerMessage.includes("deploy")
    ) {
      return "배포는 매우 간단합니다! 빌드된 코드를 Vercel, Netlify 등에 쉽게 배포할 수 있어요.";
    } else {
      return "좋은 질문이네요! Code King Builder에 대해 더 자세히 알고 싶으시다면 홈페이지를 둘러보시거나, 특정 기능에 대해 질문해주세요.";
    }
  };

  // --- Auto scroll to bottom ---
  // Lazily import hooks to avoid changing existing import formatting at the top
  const ReactRef = require("react");
  const { useRef, useEffect } = ReactRef as typeof import("react");
  const endOfMessagesRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  };

  useEffect(() => {
    if (isOpen) {
      // slight delay to ensure DOM paints before scrolling
      const t = setTimeout(scrollToBottom, 0);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isTyping]);

  return (
    <>
      {/* 챗봇 토글 버튼 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-purple-600 hover:bg-purple-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-purple-300"
        aria-label="챗봇 열기"
      >
        {isOpen ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <ChatBubbleLeftRightIcon className="w-6 h-6" />
        )}
      </button>

      {/* 챗봇 창 */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-96 h-[500px] bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden slide-in-up">
          {/* 헤더 */}
          <div className="bg-white text-gray-800 p-4 flex items-center space-x-3 border-b border-gray-200">
            <div className="relative w-8 h-8">
              <Image
                src="/codekingbuilder.png"
                alt="Code King Builder"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="font-semibold">Code King Builder</h3>
            </div>
          </div>

          {/* 채팅 컨테이너 */}
          <div className="h-[400px] flex flex-col">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.sender === "bot" && (
                    <div className="mr-2 mt-auto">
                      <div className="h-7 w-7 rounded-full border border-gray-200 bg-white overflow-hidden shadow-sm">
                        <Image
                          src="/codekingbuilder.png"
                          alt="CKB Bot"
                          width={28}
                          height={28}
                        />
                      </div>
                    </div>
                  )}
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      msg.sender === "user"
                        ? "bg-purple-600 text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <p className="text-sm">{msg.message}</p>
                    <p className="text-xs mt-1 opacity-70">
                      {msg.timestamp.toLocaleTimeString("ko-KR", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}

              {/* bottom sentinel for auto-scroll */}
              <div ref={endOfMessagesRef} />
            </div>

            {/* 템플릿 버튼 영역 */}
            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="grid grid-cols-2 gap-2">
                {quickQuestions.map((q) => (
                  <button
                    key={q.label}
                    onClick={() => handleTemplateClick(q.label)}
                    className="group relative flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-2.5 py-2 text-xs text-gray-700 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400/30"
                  >
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple-50 text-sm">
                      {q.emoji}
                    </span>
                    <span className="truncate">{q.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SimpleChatBot;
