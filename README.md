<div align="center">

![NexPath Banner](assets/banner.png)

<br/>

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-nexpath.netlify.app-4F8EF7?style=for-the-badge&logoColor=white)](https://nexpath.netlify.app)
&nbsp;
[![GitHub Stars](https://img.shields.io/github/stars/your-username/nexpath?style=for-the-badge&color=7B5CF7)](https://github.com/your-username/nexpath)
&nbsp;
[![License MIT](https://img.shields.io/badge/License-MIT-22C55E?style=for-the-badge)](LICENSE)
&nbsp;
[![Hackathon](https://img.shields.io/badge/National_Hackathon-2025-F59E0B?style=for-the-badge)](https://github.com/your-username/nexpath)

<br/>

> **One platform to aggregate study materials, interview experiences, AI roadmaps,**
> **skill gap analysis & industry trends — all personalized for you.**

</div>

---

## The Problem

Students preparing for competitive exams or corporate interviews face one massive, overlooked problem — **everything is scattered.**

To prepare for GATE, a student visits YouTube for lectures, a coaching website for the syllabus, Telegram for notes, forums for PYQs, and blogs for strategy. For a Google interview — LeetCode for practice, Glassdoor for experiences, GeeksforGeeks for theory, and Reddit for roadmaps.

**There is no single platform that brings all of this together and makes it intelligent.**

---

## Our Solution

**NexPath** is a centralized education and career intelligence platform that aggregates scattered resources, generates AI-powered personalized roadmaps, identifies skill gaps, analyzes resumes, and surfaces trending industry skills — all in one place.

---

## Platform Features

![Features](assets/features.png)

| # | Feature | Description | Status |
|---|---------|-------------|--------|
| 📚 | **Exam Preparation Hub** | Syllabus, PYQs, notes for GATE, UPSC, JEE, NEET, SSC, CAT & more | ✅ Ready |
| 🗺️ | **AI Career & Exam Roadmap** | Personalized step-by-step prep plan based on goal + skill level | ✅ Ready |
| 🎯 | **Skill Gap Analyzer** | Compare skills vs exam syllabi or company requirements | ✅ Ready |
| 📄 | **Resume Analyzer** | AI feedback on structure, ATS keywords, missing sections | ✅ Ready |
| 👥 | **Community Experiences** | Real stories from people who cleared GATE, Google, Microsoft & more | ✅ Ready |
| 📈 | **Trending Tech Tracker** | HOT / RISING / STABLE skills by industry, updated weekly | ✅ Ready |
| 🔗 | **Smart Aggregation Engine** | NLP-powered resource collection from across the web | 🔄 In Progress |

---

## Live Dashboard Preview

![Dashboard](assets/dashboard.png)

---

## System Architecture

![Architecture](assets/architecture.png)

**MERN-based modular architecture.** React frontend communicates with Node.js/Express REST APIs. AI services (OpenAI / Gemini) handle resume analysis, skill gap detection, and career roadmap generation. MongoDB stores user profiles, resources, interview experiences, and community data. JWT secures all API endpoints.

---

## Technology Stack

![Tech Stack](assets/techstack.png)

```
Frontend    →  React.js  ·  Tailwind CSS  ·  Axios  ·  React Router
Backend     →  Node.js  ·  Express.js  ·  REST APIs  ·  JWT Auth
Database    →  MongoDB  ·  Mongoose ODM  ·  Atlas Cloud
AI / ML     →  OpenAI API  ·  Google Gemini  ·  NLP/NER  ·  pdf-parse
Deployment  →  Vercel (FE)  ·  Render (BE)  ·  MongoDB Atlas  ·  GitHub CI/CD
```

---

## Why NexPath?

![Comparison](assets/comparison.png)

Every existing platform solves **one part** of the problem. NexPath solves all of it.

---

## Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account (free tier)
- OpenAI API key or Google Gemini API key

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/nexpath.git
cd nexpath

# Install frontend dependencies
cd client && npm install

# Install backend dependencies
cd ../server && npm install
```

### Environment Variables

Create `.env` in the `/server` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
OPENAI_API_KEY=your_openai_api_key
```

### Run Locally

```bash
# Backend (from /server)
npm run dev

# Frontend (from /client)
npm start
```

Frontend → `http://localhost:3000` | Backend → `http://localhost:5000`

---

## Project Structure

```
nexpath/
├── assets/                  ← README images
├── client/                  ← React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Roadmap.jsx
│   │   │   ├── ResumeAI.jsx
│   │   │   ├── Community.jsx
│   │   │   └── Trends.jsx
│   │   ├── services/
│   │   └── App.jsx
│   └── public/
│       └── index.html
│
└── server/                  ← Node.js + Express backend
    ├── routes/
    ├── controllers/
    ├── models/
    │   ├── User.js
    │   ├── Resource.js
    │   ├── Experience.js
    │   └── Roadmap.js
    ├── middleware/
    └── index.js
```

---

## Progress Checklist

- [x] Frontend UI — all 6 screens complete (Home, Dashboard, Resume AI, Community, Trends, Roadmap)
- [x] AI Career Roadmap Generator — working with OpenAI API integration
- [x] Skill Gap Analyzer — visual dashboard with progress bars and alerts
- [x] Resume Analyzer UI — upload zone, score ring, missing skills, AI suggestions
- [x] Community Module — experience cards with voting and filtering
- [x] Trending Tech Tracker — HOT/RISING/STABLE badges
- [x] Goal Selection — personalized dashboard generation on goal input
- [x] Deployed on Netlify — live at nexpath.netlify.app
- [ ] Backend API (Node.js + Express) — 60% complete
- [ ] MongoDB integration — schemas defined, connection in progress
- [ ] Full OpenAI resume pipeline — prompt engineering in progress

---

## Future Scope

- AI career mentor (conversational guidance)
- Automated study schedule generator
- Mock interview simulator with AI feedback
- Real-time job and internship recommendations
- Skill gap tracking over time with analytics
- Mobile app (React Native)

---

## Team

**Team NexPath** · National Hackathon 2025

---

## License

MIT License — see [LICENSE](LICENSE) for details.

---

<div align="center">

**[Live Demo](https://nexpath.netlify.app)** · **[Report Bug](https://github.com/your-username/nexpath/issues)** · **[Request Feature](https://github.com/your-username/nexpath/issues)**

*Made with love for National Hackathon 2025*

</div>

