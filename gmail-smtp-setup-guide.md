# Gmail SMTP + Nodemailer 설정 가이드

## 📧 Gmail SMTP 설정 방법

### 1. Gmail 계정 준비

- Gmail 계정이 필요합니다 (codeking@codekingbuilder.com)
- 2단계 인증이 활성화되어 있어야 합니다

### 2. 앱 비밀번호 생성

1. **Google 계정 설정** 접속: https://myaccount.google.com/
2. **보안** 메뉴 클릭
3. **2단계 인증** 활성화 (아직 안 되어 있다면)
4. **앱 비밀번호** 클릭
5. **앱 선택** → **기타 (맞춤 이름)** 선택
6. 이름 입력: `Code King Builder`
7. **생성** 클릭
8. 생성된 16자리 비밀번호 복사 (예: `abcd efgh ijkl mnop`)

### 3. 환경 변수 설정

환경변수는 codeking@codekingbuilder.com 으로 문의주세요.
프로젝트 루트에 `.env.local` 파일 생성:

```bash
# Gmail SMTP 설정
NEXT_PUBLIC_GMAIL_USER=codeking@codekingbuilder.com
NEXT_PUBLIC_GMAIL_APP_PASSWORD=your-16-digit-app-password
```

### 4. 패키지 설치

```bash
yarn add nodemailer @types/nodemailer
```

## 🔧 구현된 기능

### ✅ 이메일 전송

- **Gmail SMTP**를 통한 직접 이메일 전송
- **HTML 템플릿** 사용으로 아름다운 이메일 디자인
- **이메일 친화적** 코드로 모든 이메일 클라이언트에서 안정적 표시
- **Reply-To** 설정으로 문의자에게 직접 답장 가능

### ✅ SMS 시뮬레이션

- 현재는 콘솔 로그로 SMS 전송 시뮬레이션
- 실제 SMS 전송을 원한다면 네이버 클라우드 플랫폼 SMS 서비스 연동 가능

## 🚀 EmailJS vs Nodemailer 비교

| 기능             | EmailJS         | Nodemailer    |
| ---------------- | --------------- | ------------- |
| **설정 복잡도**  | 간단            | 중간          |
| **비용**         | 무료 (월 200건) | 무료          |
| **보안**         | 클라이언트 노출 | 서버 보안     |
| **호환성**       | 모든 브라우저   | 서버 사이드만 |
| **커스터마이징** | 제한적          | 자유로움      |
| **신뢰성**       | 높음            | 매우 높음     |

## 📋 API 엔드포인트

### POST `/api/contact`

```typescript
// 요청 데이터
{
  name: string;
  email: string;
  phone: string;
  phoneCountry: string;
  package: string;
  message: string;
}

// 응답 데이터
{
  success: boolean;
  message: string;
  emailId?: string; // Gmail 메시지 ID
}
```

## 🎨 이메일 템플릿 특징

### ✅ 디자인

- **반응형 레이아웃**: 모바일과 데스크톱 모두 지원
- **테이블 기반**: 이메일 클라이언트 호환성 최대화
- **인라인 스타일**: 모든 이메일 클라이언트에서 안정적 표시
- **브랜딩**: Code King Builder 로고와 색상 사용

### ✅ 정보 구조

- **문의자 정보**: 이름, 이메일, 전화번호, 패키지
- **문의 내용**: 사용자가 입력한 메시지
- **연락처 정보**: 회사 연락처 정보

### 📧 이메일 템플릿 코드

#### **파일 위치**: `src/lib/emailTemplate.ts`

```typescript
const emailTemplate = (data: {
  name: string;
  email: string;
  phone: string;
  phoneCountry: string;
  package: string;
  message: string;
}) => `
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>새로운 상담문의</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333333; margin: 0; padding: 0; background-color: #f8f9fa;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f9fa;">
        <tr>
            <td align="center" style="padding: 20px;">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    <!-- Header -->
                    <tr>
                        <td style="text-align: center; padding: 30px 30px 20px 30px; border-bottom: 3px solid #8b5cf6;">
                            <div style="font-size: 24px; font-weight: bold; color: #8b5cf6; margin-bottom: 10px;">🏗️ Code King Builder</div>
                            <div style="font-size: 20px; font-weight: bold; color: #1f2937; margin-bottom: 5px;">새로운 상담문의가 접수되었습니다</div>
                            <div style="color: #6b7280; font-size: 14px;">웹사이트 제작 문의</div>
                        </td>
                    </tr>

                    <!-- Contact Information Section -->
                    <tr>
                        <td style="padding: 20px 30px;">
                            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; border-radius: 8px; border-left: 4px solid #8b5cf6;">
                                <tr>
                                    <td style="padding: 20px;">
                                        <div style="font-weight: bold; color: #1f2937; margin-bottom: 15px; font-size: 16px;">📋 문의자 정보</div>
                                        
                                        <table width="100%" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td width="50%" style="padding-right: 10px; vertical-align: top;">
                                                    <div style="margin-bottom: 15px;">
                                                        <div style="font-weight: bold; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">이름</div>
                                                        <div style="color: #1f2937; font-size: 14px; margin-top: 2px;">\${data.name}</div>
                                                    </div>
                                                </td>
                                                <td width="50%" style="padding-left: 10px; vertical-align: top;">
                                                    <div style="margin-bottom: 15px;">
                                                        <div style="font-weight: bold; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">이메일</div>
                                                        <div style="color: #1f2937; font-size: 14px; margin-top: 2px;">\${data.email}</div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width="50%" style="padding-right: 10px; vertical-align: top;">
                                                    <div style="margin-bottom: 15px;">
                                                        <div style="font-weight: bold; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">전화번호</div>
                                                        <div style="color: #1f2937; font-size: 14px; margin-top: 2px;">\${data.phoneCountry} \${data.phone}</div>
                                                    </div>
                                                </td>
                                                <td width="50%" style="padding-left: 10px; vertical-align: top;">
                                                    <div style="margin-bottom: 15px;">
                                                        <div style="font-weight: bold; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">선택한 패키지</div>
                                                        <div style="color: #1f2937; font-size: 14px; margin-top: 2px;">
                                                            <span style="display: inline-block; padding: 4px 8px; background-color: #10b981; color: white; border-radius: 4px; font-size: 11px; font-weight: bold; text-transform: uppercase;">\${data.package}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Message Section -->
                    <tr>
                        <td style="padding: 0 30px 20px 30px;">
                            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #fef3c7; border-radius: 8px; border-left: 4px solid #f59e0b;">
                                <tr>
                                    <td style="padding: 20px;">
                                        <div style="font-weight: bold; color: #1f2937; margin-bottom: 15px; font-size: 16px;">💬 문의 내용</div>
                                        <div style="background-color: #ffffff; padding: 15px; border-radius: 6px; border: 1px solid #e5e7eb; font-size: 14px; line-height: 1.5; white-space: pre-wrap;">\${data.message}</div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="text-align: center; padding: 20px 30px 30px 30px; border-top: 1px solid #e5e7eb;">
                            <div style="color: #6b7280; font-size: 12px; margin-bottom: 10px;">
                                이 이메일은 Code King Builder 상담문의 시스템에서 자동으로 발송되었습니다.
                            </div>
                            <div style="color: #6b7280; font-size: 12px; margin-bottom: 15px;">
                                문의자에게 빠른 시일 내에 연락드리시기 바랍니다.
                            </div>
                            <div style="margin-top: 15px;">
                                <strong style="color: #1f2937;">Code King Builder</strong><br>
                                📧 codeking@codekingbuilder.com<br>
                                📱 010-4292-9339
                            </div>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
`;

export default emailTemplate;
```

#### **템플릿 특징**

- **🎨 브랜딩**: Code King Builder 로고와 보라색(#8b5cf6) 테마
- **📱 반응형**: 모바일과 데스크톱 모두 지원
- **📧 이메일 친화적**: 테이블 기반 레이아웃으로 모든 이메일 클라이언트 호환
- **🎯 정보 구조화**: 문의자 정보와 문의 내용을 명확히 구분
- **💼 전문적**: 회사 연락처 정보 포함

## 🔒 보안 고려사항

### ✅ 현재 구현

- **서버 사이드 처리**: API 키가 클라이언트에 노출되지 않음
- **환경 변수**: 민감한 정보를 환경 변수로 관리
- **에러 처리**: 상세한 에러 로깅

### ⚠️ 주의사항

- **앱 비밀번호**: 절대 코드에 하드코딩하지 마세요
- **환경 변수**: `.env.local` 파일을 `.gitignore`에 추가
- **배포**: 프로덕션 환경에서도 환경 변수 설정 필요

## 🚀 배포 시 설정

### Vercel 배포

1. **Vercel 대시보드** → 프로젝트 선택
2. **Settings** → **Environment Variables**
3. 다음 변수 추가:
   - `NEXT_PUBLIC_GMAIL_USER`: codeking@codekingbuilder.com
   - `NEXT_PUBLIC_GMAIL_APP_PASSWORD`: 앱 비밀번호

### 다른 호스팅 서비스

- 각 서비스의 환경 변수 설정 방법에 따라 동일하게 설정

## 🔧 문제 해결

### 일반적인 오류

#### 1. "Invalid login" 오류

- 2단계 인증이 활성화되어 있는지 확인
- 앱 비밀번호를 올바르게 생성했는지 확인

#### 2. "Less secure app access" 오류

- 앱 비밀번호를 사용하고 있는지 확인
- 일반 비밀번호 대신 앱 비밀번호 사용

#### 3. "Rate limit exceeded" 오류

- Gmail의 일일 전송 한도 확인 (일반 계정: 500건/일)
- 비즈니스 계정으로 업그레이드 고려

## 📞 지원

문제가 발생하면 다음을 확인해주세요:

1. **환경 변수**가 올바르게 설정되었는지 확인
2. **앱 비밀번호**가 정확한지 확인
3. **Gmail 계정**의 2단계 인증이 활성화되어 있는지 확인
4. **브라우저 콘솔**에서 에러 메시지 확인

이제 Gmail SMTP를 통해 안정적이고 안전한 이메일 전송이 가능합니다! 🚀
