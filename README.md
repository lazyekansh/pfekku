# Ekansh Tiwari — Portfolio

Personal portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🏗️ Build & Deploy

```bash
npm run build
npm run start
```

**Deploy on Vercel** (recommended): Push to GitHub → import in Vercel → done.

## 📁 Structure

```
├── app/
│   ├── layout.tsx        # Root layout + metadata
│   ├── page.tsx          # Main page
│   └── globals.css       # Global styles
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── CodeProfile.tsx   # Syntax-highlighted code block
│   ├── BentoGrid.tsx     # Bento layout section
│   ├── MusicWidget.tsx   # YouTube music player
│   ├── ChessWidget.tsx   # Chess.com stats
│   ├── KnowledgeCard.tsx # Skill bars
│   ├── GithubCard.tsx    # GitHub snake contribution graph
│   ├── TechMarquee.tsx   # Scrolling tech stack
│   ├── Projects.tsx      # Project cards grid
│   ├── Contact.tsx       # Contact section
│   └── Footer.tsx
└── lib/
    └── data.ts           # All your data (edit this!)
```

## ✏️ Customization

All your personal info lives in **`lib/data.ts`** — edit that file to update anything.

## 🎸 GitHub Snake

The GitHub contribution snake in `GithubCard` fetches from your repo's GitHub Actions output.
Set up the action at: https://github.com/marketplace/actions/generate-snake-game-from-github-contribution-grid
