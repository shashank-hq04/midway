# MIDWAY — The Official Website ⚡

> **"Your Computer. Your Words. Your Way."**  
> *Meet Midway — an intelligent personal AI desktop operating environment for Windows 11.*

---

## 🌟 Overview

This repository hosts the official landing website for **MIDWAY**, introducing the project's vision, philosophy, and verified desktop orchestration capabilities to the world.

Midway is an offline-first personal AI companion engineered for Windows 11. It bridges human natural language (Hindi, English, and Hinglish) with deep desktop automation, hardware endpoints, browser orchestration, and local offline intelligence.

Visit the live website: **[https://midway-official.vercel.app](https://midway-official.vercel.app)**  
Midway Application Repository: **[https://github.com/shashank-hq04/MIDWAY](https://github.com/shashank-hq04/MIDWAY)**

---

## 🎨 Visual & Technical Highlights

- **Original Brand Identity:** Preserves and showcases the original vector graphic logo of Midway, featuring a luminous energy core, 3 precision orbital arcs, and central geometric prism 'M' mark.
- **Interactive Acoustic Core (Midway Orb):** Live mathematical representation of Midway’s PySide6 physical visualizer with state-dependent coloration (Idle, Listening, Processing, Executing, Speaking, Success, Interrupted).
- **Interactive Conversational Experience:** Interactive desktop command simulator demonstrating real multi-lingual prompts (Hindi, English, Hinglish), intent classification, Win32 API dispatching, and concise verbal feedback.
- **Verified Capabilities Showcase:** Detailed breakdown of multi-source app discovery, native Win32 hardware `SendInput`, CoreAudio/WMI hardware controls, Vosk offline speech recognition, and zero-cost dual-engine architecture.
- **Modern Responsive Stack:** Built with React 19, TypeScript, Vite, Tailwind CSS v4, and Framer Motion. Fully responsive across ultra-wide desktop monitors, laptops, tablets, and mobile devices.

---

## 🛠️ Tech Stack

- **Framework:** React 19 (TypeScript)
- **Bundler:** Vite 8
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Animations:** Framer Motion
- **Icons:** Lucide React & Custom Official Vector Marks
- **Fonts:** Plus Jakarta Sans, Space Grotesk, JetBrains Mono
- **Deployment Target:** Vercel (Production Zero-Config)

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18.0.0` or higher
- npm `v9.0.0` or higher

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/ShashankShekhar-Moon/midway-website.git
   cd midway-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview production build locally:
   ```bash
   npm run preview
   ```

---

## 📁 Project Structure

```
midway-website/
├── public/
│   ├── favicon.svg             # Midway original vector favicon
│   ├── midway_logo.svg         # High-DPI original Midway vector graphic
│   ├── midway_desktop_preview.png  # High-resolution application preview
│   └── midway_hud_preview.png  # PySide6 HUD telemetry preview
├── src/
│   ├── assets/                 # Vector and static assets
│   ├── components/
│   │   ├── Navbar.tsx          # Minimal responsive header with live status
│   │   ├── Hero.tsx            # Main hero section with interactive assistant HUD
│   │   ├── MidwayOrb.tsx       # Physics-based orbital core visualizer
│   │   ├── Idea.tsx            # Vision, philosophy, and reality check comparison
│   │   ├── Experience.tsx      # Interactive conversational simulator
│   │   ├── Features.tsx        # Verified capabilities showcase with live demos
│   │   ├── Philosophy.tsx      # Personal editorial and design philosophy
│   │   ├── ExploreGithub.tsx   # GitHub repository card & quick clone snippet
│   │   ├── Footer.tsx          # Minimal brand footer
│   │   └── Icons.tsx           # Official GitHub & browser vector icons
│   ├── App.tsx                 # Root application composition
│   ├── index.css               # Design tokens, keyframes, scrollbar styling
│   └── main.tsx                # React DOM entry point
├── vercel.json                 # Vercel deployment routing & caching headers
├── package.json                # Project dependencies and build scripts
├── vite.config.ts              # Vite configuration with Tailwind CSS v4 plugin
└── README.md                   # Project documentation
```

---

## 🌐 Deploy to Vercel

This repository is pre-configured for one-click deployment on Vercel:

1. Push your repository to GitHub.
2. In the [Vercel Dashboard](https://vercel.com/new), select "Import Git Repository".
3. Select this repository.
4. Leave build settings as default (`npm run build`, output directory `dist`).
5. Click **Deploy**.

---

## 📄 License & Attribution

- **Creator:** Shashank Shekhar ("Boss")
- **Website License:** MIT License
- **Midway Application:** Personal Proprietary / Zero-Cost Architecture
- Built with passion, curiosity, and extreme attention to detail.
