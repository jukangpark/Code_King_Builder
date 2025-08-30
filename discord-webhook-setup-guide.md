# Discord 웹훅 설정 가이드

## 🎮 Discord 웹훅으로 상담문의 알림 받기

Discord 웹훅을 사용하면 상담문의가 접수될 때마다 실시간으로 Discord 채널에 알림을 받을 수 있습니다!

## ✅ Discord 웹훅의 장점

- **🆓 완전 무료**: 사용량 제한 없음
- **⚡ 실시간 알림**: 즉시 메시지 전송
- **📱 모바일 지원**: Discord 앱으로 언제든 확인
- **👥 팀 공유**: 여러 팀원과 함께 알림 받기
- **🎨 아름다운 UI**: 임베드 형태로 정보 표시

## 🏗️ 전체 시스템 구조 및 흐름

### 📋 상담문의 처리 흐름

```
사용자 상담문의 제출
         ↓
    ┌─────────────────┐
    │   Contact Form  │
    │   (Frontend)    │
    └─────────────────┘
         ↓
    ┌─────────────────┐
    │   API Route     │
    │  /api/contact   │
    └─────────────────┘
         ↓
    ┌─────────────────┐
    │  동시 처리      │
    │  (Promise.all)  │
    └─────────────────┘
         ↓
    ┌─────────────┬─────────────┐
    │   Email     │   Discord   │
    │  Service    │   Service   │
    └─────────────┴─────────────┘
         ↓              ↓
    ┌─────────────┬─────────────┐
    │  Gmail SMTP │  Discord    │
    │  Nodemailer │  Webhook    │
    └─────────────┴─────────────┘
         ↓              ↓
    📧 이메일 전송    📱 Discord 알림
    (codeking@...)   (실시간 채널)
```

### 🔧 기술 스택 구성

#### **Frontend (React + TypeScript)**

- **파일**: `src/app/[locale]/contact/page.tsx`
- **기능**: 상담문의 폼 UI 및 제출 처리
- **라이브러리**: React Hook Form, TailwindCSS

#### **Backend API (Next.js API Routes)**

- **파일**: `src/app/api/contact/route.ts`
- **기능**: 폼 데이터 검증 및 서비스 호출
- **처리**: 동시 이메일 + Discord 전송

#### **Email Service (Nodemailer)**

- **파일**: `src/lib/email-service.ts`
- **기능**: Gmail SMTP를 통한 이메일 전송
- **템플릿**: HTML 이메일 템플릿

#### **Discord Service (Webhook)**

- **파일**: `src/lib/discord-service.ts`
- **기능**: Discord 웹훅을 통한 실시간 알림
- **형태**: 임베드 형태의 아름다운 메시지

### 📊 데이터 흐름

#### **1. 사용자 입력 데이터**

```typescript
interface ContactForm {
  name: string; // 문의자 이름
  email: string; // 문의자 이메일
  phone: string; // 전화번호
  phoneCountry: string; // 국가 코드 (+82)
  package: string; // 선택한 패키지
  message: string; // 문의 내용
}
```

#### **2. API 처리 과정**

```typescript
// 1. 폼 데이터 검증
if (!name || !email || !phone || !message) {
  return error("필수 정보가 누락되었습니다.");
}

// 2. 서비스 인스턴스 생성
const emailService = EmailService.getInstance();
const discordService = DiscordService.getInstance();

// 3. 동시 전송 처리
const [emailResult, discordResult] = await Promise.all([
  emailService.sendContactNotification(contactData),
  discordService.sendNotification(contactData),
]);

// 4. 결과 반환
return {
  success: true,
  message: "상담문의가 성공적으로 접수되었습니다.",
  emailId: emailResult.messageId,
  discordId: discordResult.messageId,
};
```

#### **3. 이메일 전송 결과**

```typescript
// Gmail SMTP 전송
{
  success: true,
  messageId: "Gmail_Message_ID",
  to: "codeking@codekingbuilder.com",
  subject: "[상담문의] 홍길동님의 문의",
  html: "HTML_Email_Template"
}
```

#### **4. Discord 알림 결과**

```typescript
// Discord 웹훅 전송
{
  success: true,
  messageId: "discord_1705123456789",
  embed: {
    title: "🏗️ 새로운 상담문의가 접수되었습니다",
    fields: [
      { name: "👤 문의자 정보", value: "..." },
      { name: "💬 문의 내용", value: "..." }
    ]
  }
}
```

### 🎯 시스템 특징

#### **✅ 장점**

- **실시간 처리**: 이메일과 Discord 동시 전송
- **안정성**: 각 서비스 독립적 처리
- **확장성**: 새로운 알림 채널 쉽게 추가 가능
- **사용자 경험**: 즉시 피드백 제공

#### **🔄 에러 처리**

- **부분 실패**: 이메일 성공, Discord 실패 시에도 사용자에게 명확한 피드백
- **재시도 로직**: 네트워크 오류 시 자동 재시도
- **로깅**: 상세한 에러 로그로 디버깅 지원

#### **📱 알림 형태**

- **이메일**: 공식 문서, 법적 증거용
- **Discord**: 실시간 팀 알림, 모바일 푸시

## 🚀 개발 환경에서 Discord 웹훅 설정 방법

- 환경변수는 codeking@codekingbuilder.com 으로 문의 주세요.

```bash
NEXT_PUBLIC_DISCORD_WEBHOOK_URL="문의주세요"
```
