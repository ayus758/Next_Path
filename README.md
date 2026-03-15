# NexPath — Unified Education & Career Intelligence Platform

> **National Hackathon 2025 Submission** · Team NexPath

[![MIT License](https://img.shields.io/badge/License-MIT-22C55E?style=for-the-badge)](LICENSE)
[![Tech Stack](https://img.shields.io/badge/Stack-MERN%20%2B%20AI-7B5CF7?style=for-the-badge)](#tech-stack)

---

## The Problem

Students preparing for competitive exams or corporate interviews face one massive, overlooked problem — **everything is scattered**.

To prepare for GATE, a student visits YouTube for lectures, a coaching website for syllabus, Telegram for notes, forums for PYQs, and blogs for strategy. For a Google interview, the same chaos — LeetCode for practice, Glassdoor for experiences, GeeksforGeeks for theory, and Reddit for roadmaps.

**There is no single platform that brings all of this together and makes it intelligent.**

---

## Our Solution

**NexPath** is a centralized education and career intelligence platform that:

- Aggregates scattered resources from across the web using NLP
- Generates **AI-powered personalized roadmaps** for any exam or career goal
- Analyzes **skill gaps** against real exam syllabi and company requirements
- Reviews **resumes** using AI and returns structured improvement feedback
- Surfaces **trending tech stacks** and in-demand skills by industry
- Hosts a **community knowledge base** of real interview and exam experiences

> One platform. Every resource. Fully personalized.

---

## Live Demo

🔗 [ayus758.github.io/nexpath](https://ayus758.github.io/nexpath/)

----
## Features

| Feature | Description | Status |
|---|---|---|
| 📚 Exam Preparation Hub | Syllabus, PYQs, notes for GATE, UPSC, JEE, NEET, SSC, CAT | ✅ MVP Ready |
| 🗺️ AI Career & Exam Roadmap | Step-by-step personalized prep plan based on goal + skill level | ✅ MVP Ready |
| 🎯 Skill Gap Analyzer | Compares your skills vs exam syllabi or company requirements | ✅ MVP Ready |
| 📄 Resume Analyzer | AI feedback on structure, ATS keywords, missing sections | ✅ MVP Ready |
| 👥 Community Experiences | Real stories from people who cleared GATE, Google, Microsoft, UPSC | ✅ MVP Ready |
| 📈 Trending Tech Tracker | HOT / RISING / STABLE skills by industry, updated weekly | ✅ MVP Ready |
| 🔗 Smart Aggregation Engine | NLP-powered resource collection from across the web | 🔄 In Progress |

---

## Tech Stack

### Frontend
- **React.js** — Component-based UI
- **Tailwind CSS** — Utility-first styling
- **Axios** — API communication
- **React Router** — Client-side routing

### Backend
- **Node.js + Express.js** — REST API server
- **JWT** — Secure authentication
- **pdf-parse** — Resume PDF extraction

### Database
- **MongoDB** — NoSQL document store
- **Mongoose ODM** — Schema modeling
- **MongoDB Atlas** — Cloud database

### AI / ML
- **OpenAI API / Google Gemini** — Roadmap generation, resume analysis, skill gap detection
- **NLP / NER** — Content aggregation and structuring

### Deployment
- **Githun Pages** — Frontend hosting
- **Render** — Backend hosting
- **MongoDB Atlas** — Database hosting
- **GitHub CI/CD** — Continuous deployment

---

## System Architecture

```
User (Browser)
      │
      ▼
React + Tailwind  ──────────────────────────────────────────────────────────────
      │                                                                         
      ▼  REST API Calls                                                         
Node.js + Express  ──► MongoDB Atlas  (users, resources, experiences, roadmaps)
      │                                                                         
      ▼  AI Processing                                                          
OpenAI / Gemini API  (resume analysis · skill gap · roadmap generation)        
```

**Architecture:** MERN-based modular MVC. React frontend communicates with Node.js/Express REST APIs. AI APIs handle resume analysis, skill gap detection, and career roadmap generation. MongoDB stores user profiles, resources, interview experiences, and community data. JWT secures all API endpoints.

---

## Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account (free tier works)
- OpenAI API key or Google Gemini API key

### Installation

```bash
# Clone the repository
git clone https://github.com/ayus758/nexpath.git
cd nexpath

# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

### Environment Variables

Create a `.env` file in the `/server` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
OPENAI_API_KEY=your_openai_api_key
```

### Run Locally

```bash
# Start backend (from /server)
npm run dev

# Start frontend (from /client)
npm start
```

Frontend runs on `http://localhost:3000`  
Backend runs on `http://localhost:5000`

---

## Project Structure

```
nexpath/
├── client/                  # React frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Route-level pages
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Roadmap.jsx
│   │   │   ├── ResumeAI.jsx
│   │   │   ├── Community.jsx
│   │   │   └── Trends.jsx
│   │   ├── services/        # API call functions
│   │   └── App.jsx
│   └── public/
│       └── index.html       # ← Live demo file
│
├── server/                  # Node.js + Express backend
│   ├── routes/              # API route handlers
│   ├── controllers/         # Business logic
│   ├── models/              # MongoDB schemas
│   │   ├── User.js
│   │   ├── Resource.js
│   │   ├── Experience.js
│   │   └── Roadmap.js
│   ├── middleware/          # JWT auth, error handling
│   └── index.js
│
└── README.md
```

---

## What Makes NexPath Different

| Platform | What It Does | Gap |
|---|---|---|
| LeetCode | Coding practice only | No roadmap, no exam prep |
| Glassdoor | Company reviews only | No learning resources |
| GateOverflow | GATE only | No career/corporate prep |
| GeeksforGeeks | Tutorials only | No personalization |
| Unstop | Competitions & hiring | No preparation guidance |
| **NexPath** | **All of the above + AI personalization** | **Nothing missing** |

---

## Roadmap — Future Scope

- [ ] AI career mentor (conversational guidance)
- [ ] Automated study schedule generator
- [ ] Mock interview simulator with AI feedback
- [ ] Real-time job and internship recommendations
- [ ] Skill gap tracking over time with progress analytics
- [ ] Mobile app (React Native)

---

## Team

**Team Debug & Conquer** ·Graph-e-thon

---

## License

This project is licensed under the MIT License.

