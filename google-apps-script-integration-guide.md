# Google Apps Script + Google Sheets 연동 가이드

## 📋 개요

Code King Builder 상담문의 시스템에 Google Apps Script를 연동하여 상담문의가 접수될 때마다 자동으로 Google Sheets에 저장하는 시스템을 구축합니다.

## 🏗️ 전체 시스템 구조

### 📊 데이터 흐름

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
    ┌─────────────┬─────────────┬─────────────┐
    │   Email     │   Discord   │ Google Apps │
    │  Service    │   Service   │   Script    │
    └─────────────┴─────────────┴─────────────┘
         ↓              ↓              ↓
    ┌─────────────┬─────────────┬─────────────┐
    │  Gmail SMTP │  Discord    │ Google      │
    │  Nodemailer │  Webhook    │ Sheets      │
    └─────────────┴─────────────┴─────────────┘
         ↓              ↓              ↓
    📧 이메일 전송    📱 Discord 알림    📊 Sheets 저장
```

### 🔧 기술 스택

- **Frontend**: React + TypeScript + TailwindCSS
- **Backend**: Next.js API Routes
- **Email**: Nodemailer + Gmail SMTP
- **Discord**: Webhook API
- **Google**: Apps Script + Google Sheets API

## 📝 구현된 기능

### ✅ Google Sheets 저장 기능

- **자동 저장**: 상담문의 접수 시 자동으로 Google Sheets에 저장
- **동시성 제어**: LockService를 통한 동시 접근 제어
- **데이터 검증**: 필수 필드 및 이메일 형식 검증
- **전화번호 파싱**: 국가번호와 전화번호 자동 분리
- **텍스트 형식 보존**: 전화번호를 텍스트 형식으로 저장하여 숫자 파싱 방지
- **한 행씩 추가**: 각 문의를 새로운 행에 순차적으로 저장

### ✅ Google Sheets 컬럼 구조

| 컬럼명      | 설명                     | 예시                  | 데이터 타입 |
| ----------- | ------------------------ | --------------------- | ----------- |
| A: 날짜     | 문의 접수 시간           | 2024-01-15 10:30:00   | DateTime    |
| B: 이름     | 문의자 이름              | 홍길동                | Text        |
| C: 이메일   | 문의자 이메일            | hong@example.com      | Text        |
| D: 국가번호 | 국가 전화번호 코드       | +82                   | Text (@)    |
| E: 전화번호 | 전화번호 (국가번호 제외) | 01042929339           | Text (@)    |
| F: 패키지   | 선택한 패키지            | BASIC/DELUXE/PREMIUM  | Text        |
| G: 문의내용 | 문의 상세 내용           | 웹사이트 제작 문의... | Text        |

### 🔧 전화번호 처리 로직

#### 📱 전화번호 파싱 기능

**입력 형식 지원:**

- `"+82 010-4292-9339"`
- `" +82-10 0429 9339 "`
- `"+821042929339"`
- `"010-4292-9339"` (국가번호 없는 경우)

**처리 결과:**

```javascript
// 입력: "+82 010-4292-9339"
// 출력:
{
  countryCode: "+82",        // D열에 저장
  nationalNumber: "01042929339"  // E열에 저장
}
```

**파싱 로직:**

1. **공백 정규화**: 모든 공백을 단일 공백으로 변환
2. **국가번호 추출**: `+`로 시작하는 경우 1-3자리 숫자 추출
3. **숫자만 추출**: 하이픈, 공백, 괄호 등 제거하여 순수 숫자만 추출
4. **텍스트 형식 저장**: 숫자 파싱 방지를 위해 `@` 형식으로 저장

### 🔒 동시성 제어

#### LockService 사용

- **목적**: 여러 사용자가 동시에 문의를 제출할 때 데이터 충돌 방지
- **잠금 시간**: 5초 (5000ms)
- **실패 시**: "잠금 실패. 다시 시도해주세요." 메시지 반환
- **자동 해제**: try-finally 블록으로 보장된 잠금 해제

```javascript
var lock = LockService.getScriptLock();
if (!lock.tryLock(5000)) {
  return json({ success: false, error: "잠금 실패. 다시 시도해주세요." });
}
try {
  // 데이터 저장 로직
} finally {
  lock.releaseLock(); // 항상 잠금 해제
}
```

## 🚀 설정 절차

### 1단계: Google Sheets 생성

1. **Google Sheets 생성**

   - Google Drive에서 새 Google Sheets 생성
   - 파일명: `Code King Builder 상담문의 관리`

2. **시트 이름 설정**

   - 첫 번째 시트 이름을 `상담문의`로 변경

3. **시트 ID 복사**
   - URL에서 시트 ID 복사
   - 예: `https://docs.google.com/spreadsheets/d/`**`1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`**`/edit`
   - 위의 굵은 부분이 시트 ID

### 2단계: Google Apps Script 설정

1. **Google Apps Script 접속**

   - https://script.google.com/ 접속
   - Google 계정으로 로그인

2. **새 프로젝트 생성**

   - `새 프로젝트` 클릭
   - 프로젝트명: `Code King Builder 상담문의 관리`

3. **코드 작성**

   - `Code.gs` 파일에 제공된 코드 붙여넣기
   - `SHEET_ID` 변수를 실제 시트 ID로 변경

4. **Web App 배포**

   - `배포` → `새 배포` 클릭
   - `유형 선택`: `웹 앱`
   - `설명`: `상담문의 관리 시스템 v1.0`
   - `액세스 권한`: `모든 사용자` 선택
   - `배포` 클릭

5. **Web App URL 복사**
   - 배포 후 생성된 URL 복사
   - 예: `https://script.google.com/macros/s/AKfycbz.../exec`

### 3단계: 환경 변수 설정

1. **프로젝트 루트에 `.env.local` 파일 생성**

```bash
# 기존 설정
NEXT_PUBLIC_GMAIL_USER=codeking@codekingbuilder.com
NEXT_PUBLIC_GMAIL_APP_PASSWORD=your-gmail-app-password
DISCORD_WEBHOOK_URL=your-discord-webhook-url

# 새로 추가
GOOGLE_APPS_SCRIPT_WEBAPP_URL=https://script.google.com/macros/s/YOUR_WEBAPP_ID/exec
```

2. **환경 변수 적용**
   - 개발 서버 재시작
   - `yarn dev` 또는 `npm run dev`

### 4단계: 코드 적용

1. **새 서비스 파일 생성**

   - `src/lib/google-sheets-service.ts` 파일이 자동 생성됨

2. **API Route 수정**

   - `src/app/api/contact/route.ts` 파일이 자동 수정됨

3. **프론트엔드 수정**
   - `src/app/[locale]/contact/page.tsx` 파일이 자동 수정됨

### 5단계: 테스트 및 검증

1. **Google Apps Script 테스트**

   - Apps Script 편집기에서 `testInsertRow()` 함수 실행
   - 로그에서 결과 확인
   - Google Sheets에서 테스트 데이터 확인

2. **전화번호 파싱 테스트**

   - 다양한 형식의 전화번호로 테스트
   - 국가번호와 전화번호 분리 확인
   - 텍스트 형식 저장 확인

3. **동시성 테스트**

   - 여러 사용자가 동시에 문의 제출 시나리오
   - LockService 동작 확인

4. **실제 상담문의 테스트**
   - 웹사이트에서 상담문의 제출
   - Google Sheets에 데이터 저장 확인
   - 전화번호 파싱 결과 확인

## 🔧 Google Apps Script 코드 설명

### 📊 주요 함수

#### `doPost(e)`

- Web App의 진입점
- POST 요청 처리
- CORS 헤더 설정

#### `doPost(e)`

- Web App의 진입점
- POST 요청 처리 및 JSON 응답 반환
- LockService를 통한 동시성 제어

#### `parsePhoneParts(raw)`

- 전화번호를 국가번호와 나머지 번호로 분리
- 다양한 입력 형식 지원 (하이픈, 공백, 괄호 등)
- 정규표현식을 통한 정확한 파싱

#### `safe(v)`

- 입력값의 유효성 검증
- null, undefined, 빈 문자열 체크
- trim()을 통한 공백 제거

#### `json(obj)`

- JSON 응답 생성 헬퍼 함수
- ContentService를 통한 표준화된 응답 형식

#### `testInsertRow()`

- 테스트용 함수
- 시트에 샘플 데이터 삽입
- 전화번호 파싱 로직 검증

### 🎨 데이터 저장 방식

- **한 번에 값 쓰기**: `setValues()`를 통한 효율적인 데이터 저장
- **텍스트 형식 지정**: 전화번호 컬럼에 `@` 형식 적용으로 숫자 파싱 방지
- **자동 행 추가**: `getLastRow() + 1`을 통한 새로운 행 자동 추가
- **데이터 정규화**: trim()을 통한 공백 제거 및 문자열 변환

```javascript
// 한 번에 값 쓰기 (A~G)
sheet.getRange(rowIndex, 1, 1, 7).setValues([
  [
    now, // A: Timestamp
    String(name).trim(), // B: Name
    String(email).trim(), // C: Email
    countryCode, // D: CountryCode (e.g., "+82")
    nationalNumber, // E: Phone (e.g., "01042929339")
    body.data.package ? String(body.data.package).trim() : "", // F: Package
    String(message).trim(), // G: Message
  ],
]);
```

## 📊 Google Sheets 관리 기능

### ✅ 데이터 관리

- **자동 저장**: 문의 접수 시 즉시 저장
- **동시성 보장**: LockService를 통한 안전한 데이터 저장
- **전화번호 정규화**: 국가번호와 전화번호 자동 분리
- **데이터 무결성**: 필수 필드 검증 및 형식 보장
- **순차적 저장**: 한 행씩 순서대로 추가

### ✅ 시각적 관리

- **텍스트 형식 보존**: 전화번호를 텍스트로 저장하여 숫자 파싱 방지
- **날짜 형식**: 자동 타임스탬프 기록
- **필터링**: Google Sheets 기본 필터 기능 활용
- **정렬**: 날짜, 이름, 패키지별 정렬 가능

### ✅ 추가 기능

- **동시성 제어**: LockService를 통한 안전한 다중 사용자 처리
- **전화번호 파싱**: 다양한 형식의 전화번호 자동 처리
- **에러 처리**: 상세한 오류 메시지 및 예외 처리
- **테스트 함수**: `testInsertRow()`를 통한 쉬운 테스트

## 🛠️ 문제 해결

### ❌ 일반적인 오류

#### 1. CORS 오류

```
Access to fetch at 'https://script.google.com/...' from origin 'http://localhost:3000' has been blocked by CORS policy
```

**해결 방법:**

- Google Apps Script에서 `doOptions()` 함수가 제대로 구현되었는지 확인
- Web App 배포 시 권한 설정 확인

#### 2. 권한 오류

```
Exception: You do not have permission to access the requested document
```

**해결 방법:**

- Google Sheets 공유 설정 확인
- Apps Script 실행 계정이 시트에 접근 권한이 있는지 확인

#### 3. 시트를 찾을 수 없음

```
시트를 찾을 수 없습니다: 상담문의
```

**해결 방법:**

- Google Sheets에서 시트 이름이 정확히 `상담문의`인지 확인
- 시트 ID가 올바른지 확인

### 🔍 디버깅 방법

1. **Google Apps Script 로그 확인**

   - Apps Script 편집기 → `보기` → `실행 로그`
   - 오류 메시지 및 실행 과정 확인

2. **브라우저 개발자 도구**

   - Network 탭에서 API 요청/응답 확인
   - Console 탭에서 JavaScript 오류 확인

3. **Google Sheets 직접 확인**
   - 시트에 데이터가 저장되었는지 직접 확인
   - 헤더가 올바르게 생성되었는지 확인

## 📈 성능 최적화

### ⚡ 최적화 팁

1. **배치 처리**

   - 여러 문의를 한 번에 처리하는 경우 배치 API 사용

2. **캐싱**

   - 자주 사용되는 데이터는 캐싱하여 성능 향상

3. **에러 핸들링**

   - 네트워크 오류 시 재시도 로직 구현

4. **로깅**
   - 상세한 로그를 통한 모니터링

## 🔐 보안 고려사항

### 🛡️ 보안 설정

1. **Web App 접근 권한**

   - 필요한 경우 특정 도메인만 허용
   - IP 화이트리스트 설정

2. **API 키 관리**

   - 환경 변수로 민감한 정보 관리
   - Git에 API 키 커밋 금지

3. **데이터 검증**
   - 서버 사이드 데이터 검증 필수
   - XSS 및 SQL Injection 방지

## 📞 지원 및 문의

### 🆘 문제 발생 시

1. **로그 확인**: Google Apps Script 실행 로그 확인
2. **권한 확인**: Google Sheets 및 Apps Script 권한 확인
3. **코드 검증**: 제공된 코드와 실제 코드 비교
4. **문의**: codeking@codekingbuilder.com으로 문의

### 📚 추가 자료

- [Google Apps Script 공식 문서](https://developers.google.com/apps-script)
- [Google Sheets API 문서](https://developers.google.com/sheets/api)
- [Next.js API Routes 문서](https://nextjs.org/docs/api-routes/introduction)

---

## 🎯 완료 체크리스트

- [ ] Google Sheets 생성 및 시트 ID 복사
- [ ] Google Apps Script 프로젝트 생성
- [ ] Apps Script 코드 작성 및 배포
- [ ] Web App URL 복사
- [ ] 환경 변수 설정
- [ ] 코드 적용 및 테스트
- [ ] `testInsertRow()` 함수로 테스트
- [ ] 전화번호 파싱 기능 확인
- [ ] 동시성 제어 테스트
- [ ] 실제 상담문의 테스트
- [ ] Google Sheets 데이터 저장 확인
- [ ] 팀원과 시트 공유 설정

모든 단계가 완료되면 상담문의가 접수될 때마다 자동으로 Google Sheets에 저장되어 효율적인 고객 관리가 가능합니다! 🎉
