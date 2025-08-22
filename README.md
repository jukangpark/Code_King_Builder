<img width="300" height="300" alt="Code_King_Builder" src="https://github.com/user-attachments/assets/ebc82876-2fab-44ff-9117-859470e719a8" />

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-yellow)

<!-- Tech Stack Badges -->
![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white)
![Turbopack](https://img.shields.io/badge/Turbopack-FF5733?logo=vercel&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white)
![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?logo=yarn&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?logo=supabase&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?logo=jsonwebtokens&logoColor=white)
![Lucide React](https://img.shields.io/badge/Lucide%20React-18181B?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Framer Motion](https://img.shields.io/badge/FramerMotion-✔️-F24E1E?logo=framer)


# 🤖 AI-Powered ✨ Website Builder SaaS

An **AI-driven website builder SaaS** that enables users to build and deploy websites through natural language.  
With the power of **MCP (Model Context Protocol)**, the AI can fetch templates, assemble components, and deliver production-ready websites in minutes.  

---

## 🚀 Features

- 🧠 **AI-Powered Conversations**: Build websites by chatting with AI  
- 🏗️ **Template Management**: Pre-built templates accessible via MCP  
- 🎨 **Customizable Designs**: Colors, layouts, and branding applied instantly  
- ⚡ **Fast Deployment**: Export and deploy to Vercel, Netlify, or your own hosting  
- 🔒 **Secure**: No hard-coded secrets, full `.env` management  

---

## 📦 Tech Stack
- **Frontend**: React + TailwindCSS  
- **AI Layer**: Cursor + MCP integration  
- **Builder Engine**: Custom template orchestrator  
- **Deployment**: Vercel / Docker / GitHub Actions  

---

## 🖥️ How It Works
1. User chats with AI:  
2. AI parses request → Calls MCP for templates  
3. MCP returns template JSON/snippets  
4. Builder engine applies user’s preferences  
5. Website is generated → Preview → Deploy  

### 📁 Directories

- **builder/**  
  Core logic for assembling and generating websites.  
  Handles template composition, styling, and final code output.  

- **templates/**  
  Collection of pre-built website templates.  
  Includes HTML, React components, and TailwindCSS layouts.  

- **mcp-server/**  
  MCP (Model Context Protocol) adapter that connects the AI to the template library.  
  Allows AI to search, fetch, and inject templates dynamically.  

- **frontend/**  
  User-facing dashboard where users interact with the builder.  
  Provides chat interface, preview, and deployment features.  

- **README.md**  
  Documentation for the project including setup instructions and usage.
---

## 🛠️ Getting Started
### 1. Clone repository
```bash  
git clone https://github.com/jukangpark/Code_King_Builder.git
```

2. Install dependencies
```bash
npm install
```
3. Run MCP server
```bash
npm run mcp
```

4. Start the builder
```bash
npm run dev
```

## Roadmap
	•	Drag & Drop visual editor
	•	Multi-language template support
	•	AI-driven SEO optimization
	•	Custom domain & hosting integrations

⸻

## 🤝 Contributing

Contributions are welcome!
Please open issues and pull requests to help improve the project.

⸻

## 📜 License

MIT License © 2025 Code King Academy

⸻

## 🍏 About

This project combines AI + MCP to deliver a next-generation website builder SaaS.
It’s designed for developers, designers, and non-technical users who want to build professional websites effortlessly.








