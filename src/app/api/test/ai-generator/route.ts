import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { userPrompt, templateSlug } = await request.json();

    if (!userPrompt || typeof userPrompt !== "string") {
      return NextResponse.json(
        { error: "userPrompt is required" },
        { status: 400 }
      );
    }

    if (!templateSlug || typeof templateSlug !== "string") {
      return NextResponse.json(
        { error: "templateSlug is required" },
        { status: 400 }
      );
    }

    // AI Generator API 호출
    const aiResponse = await fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      }/api/ai/generate`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userPrompt: userPrompt,
          templateSlug: templateSlug,
        }),
      }
    );

    if (!aiResponse.ok) {
      throw new Error(`AI API error: ${aiResponse.status}`);
    }

    const aiResult = await aiResponse.json();

    return NextResponse.json({
      success: true,
      test: {
        prompt: userPrompt,
        template: templateSlug,
        timestamp: new Date().toISOString(),
      },
      aiResponse: aiResult,
    });
  } catch (error) {
    console.error("Test API Error:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error ? error.message : "Unknown error occurred",
        message: "테스트 실행 실패",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: "AI Website Builder Test API",
    endpoint: "/api/test/ai-generator",
    method: "POST",
    required: {
      userPrompt: "string - 웹사이트 요구사항 설명",
      templateSlug: "string - 템플릿 타입",
    },
  });
}
