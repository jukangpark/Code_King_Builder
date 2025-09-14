<img width="300" height="300" alt="Code_King_Builder" src="https://github.com/user-attachments/assets/ebc82876-2fab-44ff-9117-859470e719a8" />

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-yellow)

![Next.js](https://img.shields.io/badge/Next.js-15.5.0-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?logo=supabase&logoColor=white)
![Anthropic](https://img.shields.io/badge/Anthropic-Claude-FF6B35?logo=anthropic&logoColor=white)
![Turbopack](https://img.shields.io/badge/Turbopack-FF5733?logo=vercel&logoColor=white)

# 🤖 AI-Powered ✨ Website Builder SaaS

An **AI-driven website builder SaaS** that enables users to build and deploy websites through natural language.  
With the power of **Anthropic Claude AI**, users can generate complete websites, manage portfolios, and deploy to production in minutes.

---

## 🚀 Features

### Core Features

- 🧠 **AI-Powered Code Generation** - Generate websites using natural language prompts
- 🏗️ **Template System** - Pre-built website templates and components
- 🎨 **Customizable Designs** - Colors, layouts, and branding customization
- ⚡ **Fast Deployment** - One-click deployment to Vercel
- 🔒 **Secure Authentication** - Supabase-based user management system

### Advanced Features

- 🌍 **Internationalization** - Multi-language support (Korean, English, Japanese, Chinese)
- 📊 **Dashboard & Monitoring** - 3D dashboard builder and analytics
- 💼 **Portfolio Management** - Showcase your work and projects
- 📧 **Email Integration** - Automated email services with templates
- 🔔 **Discord Notifications** - Real-time alerts and updates
- 🎯 **User Profiles** - Comprehensive user management system

---

## 📦 Tech Stack

### Frontend

- **Next.js 15.5.0** - React framework with App Router
- **React 19.1.0** - UI library with latest features
- **TypeScript 5** - Type safety and development experience
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions

### Backend & Services

- **Supabase** - Database, authentication, and real-time features
- **Anthropic Claude** - AI code generation and assistance
- **Nodemailer** - Email service integration
- **Discord Webhooks** - Notification system
- **Google Sheets API** - Data management and logging

### Development Tools

- **Turbopack** - Fast bundler for development
- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing and optimization
- **Yarn** - Package management

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── [locale]/          # Internationalized routes
│   │   ├── about/         # About pages
│   │   │   ├── careers/   # Career opportunities
│   │   │   ├── ir/        # Investor relations
│   │   │   ├── newsroom/  # News and updates
│   │   │   ├── patents/   # Patent information
│   │   │   ├── resources/ # Resources and guides
│   │   │   └── team/      # Team information
│   │   ├── builder/       # Website builder
│   │   │   ├── editor/    # Code editor interface
│   │   │   └── generateBusinessCode.ts
│   │   ├── contact/       # Contact pages
│   │   ├── deploy/        # Deployment pages
│   │   ├── monitoring/    # Dashboard & monitoring
│   │   │   ├── 3d-dashboard-builder/
│   │   │   ├── dashboard-builder/
│   │   │   ├── dashboard-gallery/
│   │   │   ├── data-integration/
│   │   │   └── service-intro/
│   │   ├── portfolio/     # Portfolio showcase
│   │   ├── profile/       # User profiles
│   │   │   └── [userId]/
│   │   │       ├── components/
│   │   │       │   ├── OverviewTab.tsx
│   │   │       │   ├── PaymentMethodsTab.tsx
│   │   │       │   ├── PaymentsTab.tsx
│   │   │       │   ├── ProfileSidebar.tsx
│   │   │       │   ├── SettingsTab.tsx
│   │   │       │   └── WebsitesTab.tsx
│   │   │       ├── page.tsx
│   │   │       └── types.ts
│   │   ├── support/       # Support pages
│   │   │   ├── developer/
│   │   │   ├── education/
│   │   │   ├── faq/
│   │   │   ├── news/
│   │   │   └── reviews/
│   │   └── templates/     # Template gallery
│   ├── api/               # API routes
│   │   ├── ai/            # AI generation endpoints
│   │   │   └── generate/
│   │   │       └── route.ts
│   │   ├── contact/       # Contact form handling
│   │   │   ├── route.ts
│   │   │   └── update-status/
│   │   ├── deploy/        # Deployment endpoints
│   │   │   └── vercel/
│   │   └── test/          # Testing endpoints
│   │       └── ai-generator/
│   │           └── route.ts
│   ├── auth/              # Authentication pages
│   │   └── callback/
│   │       └── page.tsx
│   ├── contexts/          # React contexts
│   │   └── AuthContext.tsx
│   ├── types/             # TypeScript type definitions
│   │   ├── Auth.ts
│   │   ├── IAuthContext.ts
│   │   ├── index.ts
│   │   └── IUser.ts
│   ├── layout.tsx         # Root layout
│   ├── error.tsx          # Global error handling
│   ├── not-found.tsx      # 404 page
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   ├── auth/              # Authentication components
│   │   ├── LoginModal.tsx
│   │   └── SignUpModal.tsx
│   ├── Banner.tsx         # Site banners
│   ├── ChatBot.tsx        # AI chat interface
│   ├── ConditionalFooter.tsx
│   ├── Footer.tsx         # Site footer
│   ├── JsonEditor.tsx     # JSON editor component
│   ├── LanguageSelector.tsx
│   ├── LogoSlider.tsx
│   ├── Navigation.tsx     # Site navigation
│   └── SimpleChatBot.tsx
├── lib/                   # Business logic & utilities
│   ├── supabase/          # Supabase configuration
│   │   ├── api/
│   │   │   └── auth.ts
│   │   └── client.ts
│   ├── discord-service.ts # Discord integration
│   ├── email-service.ts   # Email handling
│   ├── emailTemplate.ts   # Email templates
│   ├── google-sheets-service.ts
│   ├── i18n.ts           # Internationalization
│   └── middleware.ts      # Next.js middleware
├── constants/             # Application constants
│   ├── index.ts          # Main constants
│   ├── portfolioProjects.ts # Portfolio data
│   ├── social.ts         # Social media links
│   ├── tech.ts           # Technology stack
│   └── techLogos.ts      # Technology logos
└── mock/                  # Mock data for development
    ├── mockPaymentHistory.ts
    ├── mockPaymentMethods.ts
    └── mockWebsites.ts
```

---

## 🖥️ How It Works

1. **User Interaction**: User chats with AI through the web interface
2. **AI Processing**: Anthropic Claude analyzes the request and generates code
3. **Template Assembly**: System fetches and combines relevant templates
4. **Customization**: User preferences are applied (colors, layouts, branding)
5. **Preview & Deploy**: Generated website is previewed and deployed to Vercel

### Key Workflows

#### AI Code Generation

```
User Prompt → Claude AI → Code Generation → Template Assembly → Preview → Deploy
```

#### User Management

```
Registration → Email Verification → Profile Setup → Portfolio Management → Website Building
```

#### Deployment Pipeline

```
Code Generation → Build Process → Vercel Deployment → Domain Configuration → Live Website
```

---

## 📡 API Endpoints

### AI Generation

- `POST /api/ai/generate` - Generate code using AI
- `POST /api/test/ai-generator` - Test AI generation functionality

### Contact & Support

- `POST /api/contact` - Submit contact form
- `POST /api/contact/update-status` - Update contact form status

### Deployment

- `POST /api/deploy/vercel` - Deploy website to Vercel

### Authentication

- `GET /auth/callback` - OAuth callback handling

---

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- Yarn package manager
- Supabase account
- Anthropic API key
- Discord webhook URL (optional)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/jukangpark/Code_King_Builder.git
cd Code_King_Builder
```

2. **Install dependencies**

```bash
yarn install
```

3. **Set up environment variables**

```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Anthropic AI
ANTHROPIC_API_KEY=your_anthropic_api_key

# Email Service
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password

# Discord
DISCORD_WEBHOOK_URL=your_discord_webhook_url

# Google Sheets
GOOGLE_SERVICE_ACCOUNT_EMAIL=your_service_account_email
GOOGLE_PRIVATE_KEY=your_private_key
```

4. **Start development server**

```bash
yarn dev
```

5. **Open in browser**

```
http://localhost:3000
```

### Development Commands

```bash
# Development with Turbopack
yarn dev

# Build for production
yarn build

# Start production server
yarn start

# Run linting
yarn lint
```

---

## 📚 Documentation

### 🔐 Authentication System

- [인증 시스템 구조](./authentication-structure.md) - Supabase 기반 인증 시스템 상세 가이드
- [이메일 인증 템플릿](./email-verification-template.md) - 커스텀 이메일 인증 템플릿

### 🤖 AI Builder System

- [AI 웹사이트 빌더 아키텍처](./ai-builder-architecture.md) - AI 프롬프트 기반 웹사이트 생성 시스템 기술 가이드
- [시장 분석 2025](./market-analysis-2025.md) - AI 웹사이트 빌더 시장 분석 및 경쟁사 벤치마크
- [비즈니스 모델 2025](./business-model-2025.md) - 수익화 전략 및 가격 정책 상세 분석

### 💼 Business & Strategy

- [사업계획서 2025](./business-plan-2025.md) - 종합적인 사업 전략 및 실행 계획

### 📧 Email Service

- [Gmail SMTP 설정 가이드](./gmail-smtp-setup-guide.md) - Gmail SMTP 설정 방법
- [Discord 웹훅 설정 가이드](./discord-webhook-setup-guide.md) - Discord 웹훅 설정 방법

### 📊 Google Apps Script

- [Google Apps Script 설정 가이드](./google-apps-script-integration-guide.md) - Google Apps Script 설정 방법

---

## 🌍 Internationalization

The application supports multiple languages:

- 🇰🇷 **Korean** (ko) - Default language
- 🇺🇸 **English** (en) - Fallback language
- 🇯🇵 **Japanese** (ja) - Japanese localization
- 🇨🇳 **Chinese** (zh) - Chinese localization

Language files are located in the `locales/` directory and automatically loaded based on the URL path.

---

## 🚀 Deployment

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment

```bash
# Build the application
yarn build

# Deploy to Vercel
vercel --prod
```

---

## 🧪 Testing

### Test Structure

- Unit tests for components
- Integration tests for API endpoints
- E2E tests for user workflows
- AI generation testing endpoints

### Running Tests

```bash
# Run all tests
yarn test

# Run tests in watch mode
yarn test:watch

# Run tests with coverage
yarn test:coverage
```

---

## 📈 Roadmap

### Phase 1 (Current)

- ✅ AI-powered code generation
- ✅ Template system
- ✅ User authentication
- ✅ Multi-language support
- ✅ Portfolio management

### Phase 2 (Q2 2025)

- 🔄 Drag & Drop visual editor
- 🔄 Advanced template marketplace
- 🔄 Custom domain integration
- 🔄 Team collaboration features

### Phase 3 (Q3 2025)

- 📋 AI-driven SEO optimization
- 📋 Advanced analytics dashboard
- 📋 Third-party integrations
- 📋 Mobile app development

---

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript strict mode
- Use Tailwind CSS for styling
- Write tests for new features
- Update documentation as needed
- Follow the established code patterns

---

## 📜 License

MIT License © 2025 Code King Academy

See [LICENSE](LICENSE) file for details.

---

## 🍏 About

This project combines **AI + Modern Web Technologies** to deliver a next-generation website builder SaaS. It's designed for developers, designers, and non-technical users who want to build professional websites effortlessly.

### Key Innovations

- **Natural Language to Code**: Transform ideas into working websites
- **AI-Powered Templates**: Intelligent template selection and customization
- **Real-time Collaboration**: Work together on projects
- **One-Click Deployment**: From idea to live website in minutes

### Contact

- **Website**: [Code King Builder](https://codekingbuilder.com)
- **Email**: support@codekingbuilder.com
- **Discord**: [Join our community](https://discord.gg/codekingbuilder)

---

_Built with ❤️ by the Code King Academy team_
