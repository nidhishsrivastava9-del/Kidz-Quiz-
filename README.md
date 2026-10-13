# 🌟 QuizKids — Kids General Knowledge Quiz Platform
> **Learn • Play • Explore**

A modern, colorful, interactive Full-Stack Kids General Knowledge Quiz Web Application designed specifically for children aged **6–12 years old**. QuizKids turns learning into a joyful educational game with 10+ categories, 100+ curated factually accurate questions, instant cheerful feedback, reward badges, visual progress dashboards, and an administrative question portal.

---

## ✨ Key Features

- 🎨 **Kid-Friendly Modern UI/UX**: Playful bubbly cards, colorful gradients, accessible high-contrast fonts (Nunito), and responsive layouts for mobile, tablet, and desktop.
- 🌍 **10+ Educational Categories**:
  1. 🌍 **World** (Continents, oceans, world-famous landmarks)
  2. 🐾 **Animals** (Habitats, superpowers, sounds, diets)
  3. 🌌 **Space** (Planets, Moon, Sun, galaxy, astronauts)
  4. 🔬 **Science** (Everyday physics, human body, chemistry, matter)
  5. 🏛️ **History** (Ancient civilizations, famous inventors, explorers)
  6. 🌱 **Nature** (Weather, water cycle, forests, volcanoes, seasons)
  7. ⚽ **Sports** (Olympics, football, cricket, rules, equipment)
  8. 🇮🇳 **India** (National symbols, states, culture, monuments, heritage)
  9. 🎨 **Arts & Culture** (Music instruments, painting, books, festivals)
  10. 🧠 **Mixed GK** (Dynamic blend of all categories)
- 🟢🟡🔴 **3 Difficulty Levels**: `Easy` (Ages 6-8), `Medium` (Ages 8-10), and `Challenge` (Ages 10-12).
- 🎮 **Interactive Quiz Arena**:
  - Live progress tracker & score counter (+10 points).
  - Streak multiplier flames (`🔥 5 Streak!`).
  - Large tap-friendly answer choices (A, B, C, D) with keyboard navigation (`1-4`, `Enter`).
  - **Instant Positive Feedback**: Cheering message ("🎉 Great Job!"), confetti fanfare, and concise child-friendly explanations.
  - Encouraging wrong answer handling ("💡 Almost! Keep Learning!") that highlights the correct answer in soothing green without penalizing or shaming.
- 🔊 **Web Audio Synthesizer**: Built-in sound effects (chimes, error boops, victory fanfare, badge shimmers) with a visible **🔊 Sound On/Off** control.
- 🏆 **Gamification Suite**:
  - **15+ Unlockable Badges** (World Explorer, Space Explorer, Science Star, Streak Master, etc.).
  - **Leaderboard Podium** with friendly kid avatars (Lion, Robot, Astronaut, Owl, Panda, Fox).
- 📊 **Progress Dashboard**:
  - Category mastery percentage bars.
  - Overall accuracy SVG donut ring.
  - Quiz history and milestones.
- ⚙️ **Admin Dashboard**:
  - Search, filter, add, edit, and delete questions with full input validations.
- 👤 **Guest Mode + Authentication**:
  - Instant 1-click play for kids without any account barrier.
  - Optional JWT signup/login to sync progress across devices.
- ⚡ **Dual-Mode Database Engine**:
  - Works with **MongoDB** via Mongoose.
  - **Automatic In-Memory Fallback**: Runs instantly out of the box with zero external database configuration required!

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React.js 18 (Vite)
- **Styling**: Tailwind CSS with custom kid-friendly utilities and shadows
- **Icons**: Lucide React
- **Animations & Effects**: Framer Motion, Canvas-Confetti, Web Audio API Sound Synthesizer
- **Routing**: React Router v6

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose) with instant high-performance in-memory fallback
- **Auth**: JWT (JSON Web Tokens) & bcryptjs
- **Security**: CORS protection, sanitized queries, input validation

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 22.12 or higher (Node.js 24 is also supported)
- npm (v9 or higher)
- *(Optional)* MongoDB running locally or MongoDB Atlas connection string.

### 2. Installation
Clone the repository and install all dependencies from the repository root:

```bash
npm ci
```

The frontend source is in the root `src/` directory. There are no separate client or server packages to install.

### 3. Backend Availability
The backend described below is not included in this checkout: `api/index.js` references a missing `server/server.js`. The frontend can be deployed independently, but quiz generation, account authentication, and other `/api` features require restoring and deploying the backend. The following environment example describes that historical backend, not a requirement for building the frontend:

```env
PORT=5000
NODE_ENV=development
JWT_SECRET=quizkids_super_secret_jwt_key_2026
CLIENT_URL=http://localhost:5173

# Optional: If omitted, QuizKids runs automatically in high-speed In-Memory data mode!
# MONGODB_URI=mongodb://localhost:27017/quizkids
```

### 4. Running the Development Server
From the root directory, start the frontend development server:

```bash
npm run dev
```

- **Frontend Client**: `http://localhost:5173`
- **Backend API**: Not included in this checkout.

---

## 📂 Project Structure

```
quizkids/
├── src/                        # React frontend source
│   ├── components/
│   ├── context/
│   ├── data/
│   ├── pages/
│   ├── services/               # API client (requires a backend)
│   ├── utils/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── api/index.js                # Legacy Vercel entry; its server dependency is absent
├── index.html                  # Vite HTML entry point
├── vite.config.mjs
├── tailwind.config.cjs
├── postcss.config.cjs
├── netlify.toml                # Root build, dist publish directory, SPA routing
├── .env.example
├── .gitignore
├── README.md
└── package.json                # Frontend dependencies and scripts
```

---

## 📡 REST API Reference

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Server health check & status |
| `GET` | `/api/categories` | Retrieve all categories with dynamic question counts |
| `GET` | `/api/questions` | Search & filter questions (category, difficulty, text) |
| `POST` | `/api/questions` | Create a new question (Admin) |
| `PUT` | `/api/questions/:id` | Update an existing question (Admin) |
| `DELETE` | `/api/questions/:id` | Delete a question (Admin) |
| `POST` | `/api/quiz/generate` | Generate randomized quiz with shuffled choices |
| `POST` | `/api/quiz/submit` | Evaluate answers, score streak bonuses, unlock badges |
| `GET` | `/api/leaderboard` | Get top player rankings & podium |
| `GET` | `/api/progress` | Get player statistics & category mastery |
| `POST` | `/api/auth/register` | Register player account |
| `POST` | `/api/auth/login` | Log in existing player |
| `GET` | `/api/auth/me` | Fetch authenticated player profile |
| `PUT` | `/api/auth/profile` | Update player display name and avatar |

---

## 🏗️ Production Build & Deployment

### Build the frontend:
```bash
npm run build
```
The optimized production bundle will be generated in `dist/`.

### Preview the frontend locally:
```bash
npm run start
```

Netlify uses the root build command `npm run build` and publishes `dist/`, as configured in `netlify.toml`. The SPA redirect supports direct links to frontend routes. This deploy configuration does not restore the missing backend or enable `/api` endpoints.

---

## 📜 License
This project is licensed under the MIT License — feel free to use, enhance, and share for educational purposes! 🎈
