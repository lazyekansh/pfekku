export const USER = {
  name: "Ekansh Tiwari",
  displayName: "乇Ҝ卂几丂卄",
  handle: "lazyekansh",
  altHandle: "ek4nsh",
  role: "Frontend Dev & JEE Aspirant",
  location: "Noida, India",
  email: "lazyekansh@gmail.com",
  avatar: "https://iili.io/fxlFap9.jpg",
  bio: "Architecting digital ecosystems while cracking JEE Physics. Creator of Ehenias AI & Syncly OSINT.",
  bioLong: "16-year-old developer from Noida building OSINT tools, AI systems, and internet infrastructure. When I'm not deep in code, I'm on the tennis court or working through chess puzzles.",
  github: "https://github.com/lazyekansh",
  telegram: "https://t.me/lazyekansh",
  instagram: "https://instagram.com/lazyekansh",
}

export const CHESS_STATS = {
  rapid: 1613,
  blitz: 1358,
  daily: 1452,
  bullet: "---",
}

export const SOCIALS = [
  { label: "GitHub", link: "https://github.com/lazyekansh", icon: "github" },
  { label: "Telegram", link: "https://t.me/lazyekansh", icon: "telegram" },
  { label: "Instagram", link: "https://instagram.com/lazyekansh", icon: "instagram" },
  { label: "Email", link: "mailto:lazyekansh@gmail.com", icon: "email" },
]

export const PLAYLIST = [
  { videoId: "S1woxquYxVA", title: "Piya Samaye", artist: "Shafqat Amanat Ali" },
  { videoId: "_38sG8ANXKw", title: "Wishes", artist: "ft. Talwiinder" },
  { videoId: "AX6OrbgS8lI", title: "Tu Hai Kahan", artist: "Usama Ali" },
  { videoId: "s0eRE9B9Ado", title: "Zaroor X Tere Bina", artist: "Mashup" },
]

export const SKILLS = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#ffffff" },
  { name: "Node.js", color: "#339933" },
  { name: "TailwindCSS", color: "#06B6D4" },
  { name: "Python", color: "#3776AB" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Socket.io", color: "#ffffff" },
  { name: "Firebase", color: "#FFCA28" },
  { name: "HTML5", color: "#E34F26" },
  { name: "TypeScript", color: "#3178C6" },
]

export const PROJECTS = [
  {
    id: 1,
    title: "Lazy Chess",
    desc: "Multiplayer chess engine with Stockfish AI & real-time Socket.io moves.",
    tags: ["Socket.io", "React", "Chess.js"],
    link: "https://chess-lazyekansh.vercel.app",
    color: "from-yellow-500/20 to-orange-500/20",
    hoverBorder: "hover:border-yellow-500/50",
    iconColor: "text-yellow-400",
    icon: "chess",
  },
  {
    id: 2,
    title: "Ehenias (Nebula)",
    desc: "Academic OS for JEE/NEET aspirants with Zen Focus Mode and smart scheduling.",
    tags: ["Firebase", "React", "AI"],
    link: "https://ehenias.vercel.app",
    color: "from-cyan-500/20 to-blue-500/20",
    hoverBorder: "hover:border-cyan-500/50",
    iconColor: "text-cyan-400",
    icon: "brain",
  },
  {
    id: 3,
    title: "Lazygram",
    desc: "Pixel-perfect Instagram clone with Stories, Feed, and real-time updates.",
    tags: ["Next.js", "Redux", "Firebase"],
    link: "https://lazygram.vercel.app",
    color: "from-pink-500/20 to-rose-500/20",
    hoverBorder: "hover:border-pink-500/50",
    iconColor: "text-pink-500",
    icon: "instagram",
  },
  {
    id: 4,
    title: "OSINT Tool",
    desc: "Digital reconnaissance tool for deep-dive investigations using multi-source APIs.",
    tags: ["Python", "Next.js", "APIs"],
    link: "https://osint.ek4nsh.in",
    color: "from-purple-400/20 to-violet-500/20",
    hoverBorder: "hover:border-purple-400/50",
    iconColor: "text-purple-400",
    icon: "terminal",
  },
  {
    id: 5,
    title: "SkyCast Weather",
    desc: "Real-time weather app with dynamic themes based on conditions and geolocation.",
    tags: ["OpenWeather API", "JS"],
    link: "https://skycast-le.vercel.app",
    color: "from-blue-400/20 to-indigo-500/20",
    hoverBorder: "hover:border-blue-400/50",
    iconColor: "text-blue-300",
    icon: "cloud",
  },
  {
    id: 6,
    title: "Examly Quiz",
    desc: "Rapid-fire quiz platform for NEET/JEE aspirants with timed rounds and scoring.",
    tags: ["Vanilla JS", "Logic"],
    link: "https://NeuroQuiz-le.vercel.app",
    color: "from-green-400/20 to-emerald-500/20",
    hoverBorder: "hover:border-green-400/50",
    iconColor: "text-green-400",
    icon: "zap",
  },
]

export const KNOWLEDGE = [
  { category: "Frontend", color: "text-cyan-400", bar: "bg-cyan-400", percent: 92, skills: "React, Next.js, Tailwind, Framer" },
  { category: "Backend", color: "text-green-400", bar: "bg-green-400", percent: 75, skills: "Node.js, Express, Python, Socket.io" },
  { category: "Database", color: "text-yellow-400", bar: "bg-yellow-400", percent: 60, skills: "MongoDB, Firebase, PostgreSQL" },
]

export const INTERESTS = [
  { title: "3D Models", subtitle: "Blender", icon: "cube", color: "text-purple-400" },
  { title: "Sports", subtitle: "Tennis 🎾", icon: "trophy", color: "text-orange-400" },
  { title: "Manga", subtitle: "Reader", icon: "book", color: "text-blue-400" },
]

export const CODE_PROFILE = {
  filename: "lazyekansh.ts",
  code: `class Ekansh extends Developer {
  name = "lazyekansh";
  age = 16;
  location = "Noida, India 🇮🇳";
  status = "JEE_GRIND" as const;

  stack = {
    frontend: ["React", "Next.js", "Tailwind"],
    backend:  ["Node.js", "Python"],
    db:       ["MongoDB", "Firebase"],
  };

  hobbies = ["Chess ♟", "Tennis 🎾", "OSINT"];

  dailyRoutine(): void {
    while (alive) {
      this.study("Physics");
      this.build("Startups");
      this.debug("Life");
    }
  }
}`,
}
