# Code King Builder - 이메일 인증 템플릿

## 📧 이메일 제목 (Subject)

```
[Code King Builder] 이메일 인증을 완료해주세요
```

## 📋 개요

Code King Builder 서비스 가입 시 사용자에게 발송되는 이메일 인증 템플릿입니다.

## 🎨 디자인 특징

- **브랜드 컬러**: 보라색 그라데이션 (`#7c3aed` → `#8b5cf6`)
- **레이아웃**: 테이블 기반 반응형 디자인
- **호환성**: 모든 주요 이메일 클라이언트 지원
- **스타일**: 인라인 CSS 사용으로 최대 호환성 보장

## 📱 이메일 클라이언트 호환성

| 클라이언트      | 지원도   | 주요 특징                              |
| --------------- | -------- | -------------------------------------- |
| **Gmail**       | ⭐⭐⭐   | Flexbox/Grid 제한, 일부 CSS3 속성 제한 |
| **Outlook**     | ⭐⭐     | Word 엔진 사용, 대부분의 CSS3 미지원   |
| **Apple Mail**  | ⭐⭐⭐⭐ | 상대적으로 좋은 CSS 지원               |
| **Yahoo Mail**  | ⭐⭐⭐   | 중간 정도의 CSS 지원                   |
| **Thunderbird** | ⭐⭐⭐⭐ | Firefox 엔진 기반으로 좋은 지원        |

## 🏗️ 템플릿 구조

### 1. 헤더 섹션

- 브랜드 로고 (🚀 이모지)
- "Code King Builder" 브랜드명
- "웹사이트 제작 플랫폼" 서브타이틀
- 보라색 그라데이션 배경

### 2. 환영 메시지

- "환영합니다! 🎉" 제목
- 가입 감사 메시지
- AI 웹사이트 제작 안내

### 3. 인증 섹션

- 📧 이모지 아이콘
- 인증 안내 메시지
- **"🎉 이메일 인증 완료하기"** 버튼
- Supabase `{{ .ConfirmationURL }}` 템플릿 변수 사용

### 4. 기능 소개 섹션

4개의 주요 기능을 2x2 그리드로 표시:

- 🤖 **AI 대화형 빌더**: 자연어로 웹사이트 제작
- 🎨 **다양한 템플릿**: 전문적인 디자인 템플릿
- ⚡ **빠른 배포**: Vercel, Netlify 등 지원
- 🔒 **안전한 보안**: 엔터프라이즈급 보안

### 5. 푸터 섹션

- 문의 안내 메시지
- 소셜 미디어 링크 (📧💬🐙📱)
- 저작권 정보

## 🔧 기술적 특징

### CSS 호환성 최적화

```css
/* 사용된 안전한 CSS 속성들 */
- font-family: Arial, sans-serif
- background-color: #f4f4f4
- color: #333, #666, #999
- border-radius: 8px
- padding, margin
- text-align: center
- font-size, font-weight
```

### 테이블 기반 레이아웃

- `<div>` 대신 `<table>` 구조 사용
- Outlook Word 렌더링 엔진 호환
- 반응형 레이아웃을 위한 안전한 방법

### 인라인 CSS

- 모든 스타일을 `style=""` 속성으로 인라인화
- 외부 CSS 파일 의존성 제거
- 이메일 클라이언트 호환성 최대화

## 📄 HTML 코드

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Code King Builder - 이메일 인증</title>
  </head>
  <body
    style="
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      line-height: 1.6;
    "
  >
    <!-- 전체 컨테이너 -->
    <table
      width="100%"
      cellpadding="0"
      cellspacing="0"
      style="background-color: #f4f4f4"
    >
      <tr>
        <td align="center" style="padding: 20px 0">
          <!-- 메인 컨테이너 -->
          <table
            width="600"
            cellpadding="0"
            cellspacing="0"
            style="
              background-color: #ffffff;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            "
          >
            <!-- 헤더 섹션 -->
            <tr>
              <td
                style="
                  background: linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%);
                  padding: 40px 30px;
                  text-align: center;
                "
              >
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center">
                      <!-- 로고 섹션 -->
                      <table cellpadding="0" cellspacing="0">
                        <tr>
                          <td
                            style="
                              background-color: rgba(255, 255, 255, 0.2);
                              border-radius: 8px;
                              padding: 12px;
                              margin-right: 16px;
                            "
                          >
                            <div style="font-size: 24px">🚀</div>
                          </td>
                          <td style="padding-left: 16px">
                            <div
                              style="
                                color: white;
                                font-size: 24px;
                                font-weight: bold;
                                margin-bottom: 4px;
                              "
                            >
                              Code King Builder
                            </div>
                            <div
                              style="
                                color: rgba(255, 255, 255, 0.9);
                                font-size: 14px;
                              "
                            >
                              웹사이트 제작 플랫폼
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- 콘텐츠 섹션 -->
            <tr>
              <td style="padding: 40px 30px">
                <!-- 환영 메시지 -->
                <table
                  width="100%"
                  cellpadding="0"
                  cellspacing="0"
                  style="margin-bottom: 32px"
                >
                  <tr>
                    <td align="center">
                      <h1
                        style="
                          font-size: 28px;
                          font-weight: bold;
                          color: #333;
                          margin: 0 0 16px 0;
                        "
                      >
                        환영합니다! 🎉
                      </h1>
                      <p
                        style="
                          font-size: 16px;
                          color: #666;
                          margin: 0;
                          text-align: center;
                          line-height: 1.7;
                        "
                      >
                        Code King Builder에 가입해주셔서 감사합니다!<br />
                        AI와 함께 멋진 웹사이트를 만들어보세요.
                      </p>
                    </td>
                  </tr>
                </table>

                <!-- 인증 섹션 -->
                <table
                  width="100%"
                  cellpadding="0"
                  cellspacing="0"
                  style="
                    background-color: #f8f9fa;
                    border-radius: 8px;
                    margin-bottom: 32px;
                  "
                >
                  <tr>
                    <td style="padding: 32px; text-align: center">
                      <div style="font-size: 48px; margin-bottom: 16px">📧</div>
                      <h2
                        style="
                          font-size: 20px;
                          font-weight: bold;
                          color: #333;
                          margin: 0 0 12px 0;
                        "
                      >
                        이메일 인증을 완료해주세요
                      </h2>
                      <p
                        style="
                          font-size: 14px;
                          color: #666;
                          margin: 0 0 24px 0;
                          line-height: 1.6;
                        "
                      >
                        계정을 활성화하고 모든 기능을 사용하시려면<br />
                        아래 버튼을 클릭하여 이메일 인증을 완료해주세요.
                      </p>
                      <!-- 인증 버튼 -->
                      <table
                        cellpadding="0"
                        cellspacing="0"
                        style="margin: 0 auto"
                      >
                        <tr>
                          <td
                            style="
                              background: linear-gradient(
                                135deg,
                                #7c3aed 0%,
                                #8b5cf6 100%
                              );
                              border-radius: 8px;
                              padding: 16px 32px;
                            "
                          >
                            <a
                              href="{{ .ConfirmationURL }}"
                              style="
                                color: white;
                                text-decoration: none;
                                font-weight: 600;
                                font-size: 16px;
                                display: inline-block;
                              "
                            >
                              🎉 이메일 인증 완료하기
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <!-- 기능 소개 섹션 -->
                <table
                  width="100%"
                  cellpadding="0"
                  cellspacing="0"
                  style="margin-bottom: 32px"
                >
                  <tr>
                    <td align="center">
                      <h3
                        style="
                          font-size: 18px;
                          font-weight: bold;
                          color: #333;
                          margin: 0 0 20px 0;
                        "
                      >
                        Code King Builder의 특별한 기능들
                      </h3>
                    </td>
                  </tr>
                </table>

                <!-- 기능 그리드 -->
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <!-- AI 빌더 -->
                    <td width="50%" style="padding: 8px">
                      <table
                        width="100%"
                        cellpadding="0"
                        cellspacing="0"
                        style="
                          background-color: #f8f9fa;
                          border-radius: 8px;
                          padding: 16px;
                          text-align: center;
                        "
                      >
                        <tr>
                          <td>
                            <div style="font-size: 24px; margin-bottom: 8px">
                              🤖
                            </div>
                            <div
                              style="
                                font-size: 14px;
                                font-weight: 600;
                                color: #333;
                                margin-bottom: 4px;
                              "
                            >
                              AI 대화형 빌더
                            </div>
                            <div style="font-size: 12px; color: #666">
                              자연어로 웹사이트 제작
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                    <!-- 템플릿 -->
                    <td width="50%" style="padding: 8px">
                      <table
                        width="100%"
                        cellpadding="0"
                        cellspacing="0"
                        style="
                          background-color: #f8f9fa;
                          border-radius: 8px;
                          padding: 16px;
                          text-align: center;
                        "
                      >
                        <tr>
                          <td>
                            <div style="font-size: 24px; margin-bottom: 8px">
                              🎨
                            </div>
                            <div
                              style="
                                font-size: 14px;
                                font-weight: 600;
                                color: #333;
                                margin-bottom: 4px;
                              "
                            >
                              다양한 템플릿
                            </div>
                            <div style="font-size: 12px; color: #666">
                              전문적인 디자인 템플릿
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <!-- 빠른 배포 -->
                    <td width="50%" style="padding: 8px">
                      <table
                        width="100%"
                        cellpadding="0"
                        cellspacing="0"
                        style="
                          background-color: #f8f9fa;
                          border-radius: 8px;
                          padding: 16px;
                          text-align: center;
                        "
                      >
                        <tr>
                          <td>
                            <div style="font-size: 24px; margin-bottom: 8px">
                              ⚡
                            </div>
                            <div
                              style="
                                font-size: 14px;
                                font-weight: 600;
                                color: #333;
                                margin-bottom: 4px;
                              "
                            >
                              빠른 배포
                            </div>
                            <div style="font-size: 12px; color: #666">
                              Vercel, Netlify 등 지원
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                    <!-- 보안 -->
                    <td width="50%" style="padding: 8px">
                      <table
                        width="100%"
                        cellpadding="0"
                        cellspacing="0"
                        style="
                          background-color: #f8f9fa;
                          border-radius: 8px;
                          padding: 16px;
                          text-align: center;
                        "
                      >
                        <tr>
                          <td>
                            <div style="font-size: 24px; margin-bottom: 8px">
                              🔒
                            </div>
                            <div
                              style="
                                font-size: 14px;
                                font-weight: 600;
                                color: #333;
                                margin-bottom: 4px;
                              "
                            >
                              안전한 보안
                            </div>
                            <div style="font-size: 12px; color: #666">
                              엔터프라이즈급 보안
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- 푸터 섹션 -->
            <tr>
              <td
                style="
                  background-color: #f8f9fa;
                  padding: 24px 30px;
                  text-align: center;
                  border-top: 1px solid #e9ecef;
                "
              >
                <p style="font-size: 14px; color: #666; margin: 0 0 16px 0">
                  궁금한 점이 있으시면 언제든 문의해주세요!
                </p>

                <!-- 소셜 링크 -->
                <table
                  cellpadding="0"
                  cellspacing="0"
                  style="margin: 0 auto 16px auto"
                >
                  <tr>
                    <td style="padding: 0 8px">
                      <a
                        href="#"
                        style="
                          display: inline-block;
                          width: 32px;
                          height: 32px;
                          background-color: #e9ecef;
                          border-radius: 50%;
                          text-decoration: none;
                          color: #666;
                          text-align: center;
                          line-height: 32px;
                          font-size: 14px;
                        "
                        >📧</a
                      >
                    </td>
                    <td style="padding: 0 8px">
                      <a
                        href="#"
                        style="
                          display: inline-block;
                          width: 32px;
                          height: 32px;
                          background-color: #e9ecef;
                          border-radius: 50%;
                          text-decoration: none;
                          color: #666;
                          text-align: center;
                          line-height: 32px;
                          font-size: 14px;
                        "
                        >💬</a
                      >
                    </td>
                    <td style="padding: 0 8px">
                      <a
                        href="#"
                        style="
                          display: inline-block;
                          width: 32px;
                          height: 32px;
                          background-color: #e9ecef;
                          border-radius: 50%;
                          text-decoration: none;
                          color: #666;
                          text-align: center;
                          line-height: 32px;
                          font-size: 14px;
                        "
                        >🐙</a
                      >
                    </td>
                    <td style="padding: 0 8px">
                      <a
                        href="#"
                        style="
                          display: inline-block;
                          width: 32px;
                          height: 32px;
                          background-color: #e9ecef;
                          border-radius: 50%;
                          text-decoration: none;
                          color: #666;
                          text-align: center;
                          line-height: 32px;
                          font-size: 14px;
                        "
                        >📱</a
                      >
                    </td>
                  </tr>
                </table>

                <div style="font-size: 12px; color: #999">
                  © 2025 Code King Builder. All rights reserved.
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
```

## 🚀 사용 방법

### Supabase 설정

1. Supabase Dashboard → Authentication → Email Templates
2. "Confirm signup" 템플릿 선택
3. 위의 HTML 코드를 복사하여 붙여넣기
4. Subject 제목 설정: `[Code King Builder] 이메일 인증을 완료해주세요`

### 템플릿 변수

- `{{ .ConfirmationURL }}`: Supabase에서 자동으로 생성되는 인증 URL

## 📊 성능 최적화 팁

### 1. 이미지 최적화

- 모든 이미지에 `alt` 속성 추가
- 배경 이미지 대신 배경색 사용
- 이미지 크기 최적화

### 2. 이메일 테스트

```bash
# 추천 테스트 도구들
- Email on Acid
- Litmus
- Campaign Monitor
- Mailchimp 테스트 기능
```

### 3. Fallback 스타일

```html
<!-- Outlook 전용 스타일 -->
<!--[if mso]>
<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600">
<tr><td>
<![endif]-->
```

## 📝 변경 이력

| 버전 | 날짜       | 변경사항                        |
| ---- | ---------- | ------------------------------- |
| 1.0  | 2025-01-XX | 초기 버전 생성                  |
| -    | -          | 이메일 클라이언트 호환성 최적화 |
| -    | -          | 인라인 CSS 적용                 |
| -    | -          | 테이블 기반 레이아웃 구현       |

---

**참고**: 이 템플릿은 Code King Builder의 브랜드 가이드라인을 따르며, 모든 주요 이메일 클라이언트에서 안전하게 작동하도록 설계되었습니다.
