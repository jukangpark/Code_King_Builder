import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

// Claude API 클라이언트 초기화
const anthropic = new Anthropic({
  apiKey: process.env.NEXT_PUBLIC_ANTHROPIC_API_KEY!, // 서버용 환경 변수
});

// SiteSpec JSON 스키마 정의 (Architecture 문서 기반)
const systemPrompt = `You are an AI website builder that creates structured JSON schemas based on user descriptions.

STRICT RULES:
- Output MUST be a valid JSON object following the SiteSpec schema
- Use only the allowed section types: hero, features, cta, pricing, testimonials, contact, footer
- Each section must have appropriate props based on its kind
- No prose, no markdown, only valid JSON
- Follow the exact schema structure provided

SITE SPEC SCHEMA:
{
  "templateSlug": "string",
  "brand": {
    "name": "string",
    "description": "string",
    "palette": [{"name": "string", "value": "string"}]
  },
  "pages": [
    {
      "slug": "string",
      "title": "string",
      "sections": [
        {
          "id": "string",
          "kind": "string",
          "props": "object"
        }
      ]
    }
  ]
}

ALLOWED SECTION TYPES:
- hero: title, subtitle, cta, background
- features: title, items (array of feature objects)
- cta: title, subtitle, buttonText, buttonLink
- pricing: title, plans (array of pricing objects)
- testimonials: title, reviews (array of review objects)
- contact: title, form, address, phone, email
- footer: links, social, copyright

EXAMPLE OUTPUT:
{
  "templateSlug": "startup",
  "brand": {
    "name": "TechCorp",
    "description": "AI-powered solutions for modern businesses",
    "palette": [{"name": "primary", "value": "#0a2540"}]
  },
  "pages": [
    {
      "slug": "index",
      "title": "Home",
      "sections": [
        {
          "id": "hero_01",
          "kind": "hero",
          "props": {
            "title": "Transform Your Business",
            "subtitle": "AI-powered solutions for the future",
            "cta": {"label": "Get Started", "href": "/signup"}
          }
        }
      ]
    }
  ]
}`;

export async function POST(request: NextRequest) {
  try {
    const { userPrompt, templateSlug = "startup" } = await request.json();

    if (!userPrompt || typeof userPrompt !== "string") {
      return NextResponse.json(
        { error: "userPrompt is required and must be a string" },
        { status: 400 }
      );
    }

    // Claude API 호출
    const response = await anthropic.messages.create({
      model: "claude-3-5-haiku-20241022", // Haiku 모델 사용 (비용 절약)
      max_tokens: 2000,
      system: systemPrompt,
      messages: [
        {
          role: "user",
          content: `Create a website JSON schema for: "${userPrompt}"
          
Template: ${templateSlug}
Requirements: 
- Generate a complete SiteSpec JSON following the exact schema
- Include at least 3-5 relevant sections
- Make it realistic and business-appropriate
- Use the exact schema structure provided above`,
        },
      ],
    });

    // 응답에서 JSON 추출
    const content = response.content[0];
    if (content.type !== "text") {
      throw new Error("Unexpected response type from Claude");
    }

    let jsonResponse;
    try {
      // JSON 파싱 시도
      jsonResponse = JSON.parse(content.text);
    } catch (parseError) {
      // JSON 파싱 실패 시 텍스트에서 JSON 부분만 추출
      const jsonMatch = content.text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        jsonResponse = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error("Failed to extract valid JSON from Claude response");
      }
    }

    // 스키마 검증 (간단한 검증)
    if (
      !jsonResponse.templateSlug ||
      !jsonResponse.pages ||
      !Array.isArray(jsonResponse.pages)
    ) {
      throw new Error("Generated JSON does not match required schema");
    }

    return NextResponse.json({
      success: true,
      data: jsonResponse,
      message: "Website schema generated successfully",
    });
  } catch (error) {
    console.error("AI Generation Error:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error ? error.message : "Unknown error occurred",
        message: "Failed to generate website schema",
      },
      { status: 500 }
    );
  }
}

// GET 요청 처리 (테스트용)
export async function GET() {
  return NextResponse.json({
    message: "AI Website Builder API",
    endpoint: "/api/ai/generate",
    method: "POST",
    required: {
      userPrompt: "string - 사용자의 웹사이트 요구사항 설명",
      templateSlug: "string (optional) - 템플릿 타입 (기본값: startup)",
    },
    example: {
      userPrompt:
        "스타트업을 위한 모던한 랜딩페이지를 만들어주세요. AI 기술을 활용한 서비스이고, 투자 유치를 목표로 합니다.",
      templateSlug: "startup",
    },
  });
}
