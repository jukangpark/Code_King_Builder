"use client";

import { useState, useRef, useEffect } from "react";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
  Avatar,
} from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
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

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      message:
        "안녕하세요! Code King Builder AI 어시스턴트입니다. 무엇을 도와드릴까요?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    // 사용자 메시지 추가
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      message,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // AI 응답 시뮬레이션 (실제로는 API 호출)
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
    }, 1000);
  };

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

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
    } else {
      return "좋은 질문이네요! Code King Builder에 대해 더 자세히 알고 싶으시다면 홈페이지를 둘러보시거나, 특정 기능에 대해 질문해주세요.";
    }
  };

  return (
    <>
      {/* 챗봇 토글 버튼 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-purple-600 hover:bg-purple-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
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
        <div className="fixed bottom-24 right-6 z-40 w-96 h-[500px] bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
          {/* 헤더 */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4 flex items-center space-x-3">
            <div className="relative w-8 h-8">
              <Image
                src="/codekingbuilder.png"
                alt="Code King Builder"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="font-semibold">Code King Builder AI</h3>
              <p className="text-xs text-purple-100">AI 어시스턴트</p>
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
            </div>

            {/* 입력 영역 */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) =>
                    e.key === "Enter" && handleSendMessage(inputValue)
                  }
                  placeholder="메시지를 입력하세요..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={!inputValue.trim()}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <PaperAirplaneIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
