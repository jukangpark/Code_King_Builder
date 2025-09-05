"use client";

import dynamic from "next/dynamic";

// Monaco Editor를 동적으로 import (SSR 문제 방지)
const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

interface JsonEditorProps {
  value: string;
  language?: string;
  height?: string;
  readOnly?: boolean;
}

export default function JsonEditor({
  value,
  language = "json",
  height = "400px",
  readOnly = true,
}: JsonEditorProps) {
  const handleEditorDidMount = (editor: any, monaco: any) => {
    // JSON 포맷팅
    if (language === "json") {
      try {
        const formatted = JSON.stringify(JSON.parse(value), null, 2);
        editor.setValue(formatted);
      } catch (error) {
        // JSON 파싱 실패 시 원본 값 사용
        editor.setValue(value);
      }
    }

    // 에디터 설정
    editor.updateOptions({
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      fontSize: 13,
      lineHeight: 20,
      wordWrap: "on",
      automaticLayout: true,
    });

    // JSON 스키마 하이라이팅 강화
    monaco.editor.defineTheme("custom-json", {
      base: "vs",
      inherit: true,
      rules: [
        { token: "string", foreground: "#a6e22e" },
        { token: "number", foreground: "#ae81ff" },
        { token: "keyword", foreground: "#f92672" },
        { token: "operator", foreground: "#f8f8f2" },
        { token: "delimiter", foreground: "#f8f8f2" },
      ],
      colors: {
        "editor.background": "#ffffff",
        "editor.foreground": "#1e1e1e",
        "editor.lineHighlightBackground": "#f8f9fa",
        "editor.selectionBackground": "#add6ff",
      },
    });

    monaco.editor.setTheme("custom-json");
  };

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      {/* 에디터 헤더 */}
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-2 flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700">JSON Schema</span>
        <div className="flex items-center space-x-2">
          <span className="text-xs text-gray-500">Read-only</span>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        </div>
      </div>

      <MonacoEditor
        height={height}
        language={language}
        theme="custom-json"
        value={value}
        options={{
          readOnly,
          lineNumbers: "on",
          roundedSelection: false,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          minimap: { enabled: false },
          fontSize: 13,
          lineHeight: 20,
          wordWrap: "on",
          folding: true,
          foldingStrategy: "indentation",
          showFoldingControls: "always",
          renderLineHighlight: "all",
          selectOnLineNumbers: true,
          cursorBlinking: "smooth",
          cursorSmoothCaretAnimation: "on",
          smoothScrolling: true,
          // 추가 설정
          contextmenu: true,
          quickSuggestions: false,
          suggestOnTriggerCharacters: false,
          acceptSuggestionOnEnter: "off",
          tabCompletion: "off",
        }}
        onMount={handleEditorDidMount}
      />
    </div>
  );
}
