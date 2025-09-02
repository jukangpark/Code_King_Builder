# 📖 README — AI Website Builder (Next.js + Supabase)

## 🚀 개요

이 프로젝트는 사용자가 템플릿을 선택하고, AI와 대화하며 웹사이트를 점진적으로 설계/편집/생성할 수 있는 SaaS 빌더입니다.

흐름은 다음과 같습니다:
`템플릿 선택` → `프롬프트 입력` → `AI 대화` → `웹사이트 빌더(편집기)` → `웹사이트 생성/배포`

---

## 🏗️ 단계별 구조 & 흐름

```
┌───────────────────┐
       템플릿 선택
└───────────────────┘
          │
          ▼
┌───────────────────┐
      프롬프트 입력
└───────────────────┘
          │
          ▼
┌───────────────────┐
   AI 대화 (SiteSpec)
└───────────────────┘
          │
          ▼
┌───────────────────┐
   웹사이트 빌더(편집기)
└───────────────────┘
          │
          ▼
┌───────────────────┐
    웹사이트 생성/배포
└───────────────────┘
```

## 단계별 구조 & 흐름

## 1. 템플릿 선택

• 역할: 사이트의 기본 레이아웃/구조(Startup, Portfolio, Restaurant 등) 정의
• 구현
• templates 테이블 (Supabase)에 사전 정의된 템플릿 메타데이터 저장
• 템플릿은 “허용 섹션 타입(whitelist)”을 포함 (예: Hero, Features, CTA, Pricing 등)
• Next.js 처리
• /builder 페이지에서 드롭다운/갤러리 UI 제공
• 선택한 템플릿 slug를 이후 AI 프롬프트와 함께 API로 전송

---

## 2. 프롬프트 입력

• 역할: 사용자가 브랜드·목적·요구사항을 텍스트로 설명
• 구현
• /builder UI에서 textarea 입력 → /api/generate POST
• 최소 길이, 금지어 필터링, 프롬프트 주입 방지 처리
• Next.js 처리
• Edge Route Handler(app/api/generate/route.ts)에서 JSON body를 파싱하고 AI 호출 준비

---

## 3. AI 대화

• 역할: 사용자의 설명을 기반으로 SiteSpec(JSON) 구조 생성
• AI 모델
• GPT-4.1, Claude 3.5 Sonnet 등 → Planner 모델
• 출력: { brand, pages[], sections[] } 구조
• 검증
• Zod 스키마로 SiteSpec validate
• 실패 시 JSON repair → 재시도
• 저장
• Supabase sites, pages, sections 테이블에 매핑
• generations 테이블에 prompt & 모델 로그 기록

---

## 4. 웹사이트 빌더 (편집기)

• 역할: 생성된 SiteSpec을 기반으로 UI 편집 지원
• 구현
• SectionRenderer가 kind → 컴포넌트 레지스트리 매핑
• 편집 UI
• props 인라인 수정 (예: 버튼 텍스트 변경)
• 섹션 추가/삭제
• “AI로 다듬기” 버튼 → 해당 섹션만 재프롬프트
• Next.js 처리
• /builder/[siteId]에서 실시간 미리보기
• Supabase Realtime으로 props 변경사항 즉시 반영
• 장점
• AI 생성 + 수동 편집이 공존하는 하이브리드 워크플로우

---

## 5. 웹사이트 생성 / 배포

• 미리보기
• 동적 라우팅 /[site]/[...slug]
• Supabase에서 섹션 JSON 불러와 컴포넌트 렌더
• 배포
• 사이트 status=published → 도메인 연결
• 멀티테넌시 미들웨어 (호스트 기반 라우팅)
• Vercel/Netlify/Docker CI 연동
• 이미지/에셋 처리 (옵션)
• AI가 image prompt 제안 → Supabase Storage에 업로드
• 섹션 props에 asset URL 자동 패치

---

## 📦 기술 스택

• Frontend: Next.js 15 + React 19 + TailwindCSS ￼
• Backend: Supabase (Postgres, Auth, Storage, Realtime) ￼
• AI Layer: OpenAI GPT-4.1 / Anthropic Claude 3.5
• Infra: Vercel + Docker + GitHub Actions ￼
