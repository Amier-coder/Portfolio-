import type { IconType } from "react-icons";
import { FaGamepad, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import {
  SiCss,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import {
  FiBriefcase,
  FiCode,
  FiCoffee,
  FiFilm,
  FiLayers,
  FiLayout,
  FiLock,
  FiPlayCircle,
  FiShoppingBag,
  FiShoppingCart,
  FiSmartphone,
} from "react-icons/fi";

/**
 * ────────────────────────────────────────────────────────────────
 *  EDIT EVERYTHING HERE.
 *  All the content shown on the website comes from this single file.
 * ────────────────────────────────────────────────────────────────
 */

export type Profile = {
  name: string;
  firstName: string;
  role: string;
  roles: string[];
  tagline: string;
  location: string;
  timezone: string;
  available: boolean;
  email: string;
  phone: string;
  whatsapp: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  /** Optional: put a photo in /public and set e.g. "/profile.jpg" */
  photo: string | null;
  bio: string[];
};

export const profile: Profile = {
  name: "Ameer Hamza",
  firstName: "Ameer",
  role: "Full-Stack Web Developer",
  roles: [
    "Full-Stack Web Developer",
    "MERN Stack Developer",
    "React & TypeScript Engineer",
    "UI-Focused Problem Solver",
  ],
  tagline:
    "I design and build fast, accessible and scalable web applications with clean architecture and delightful user experiences.",
  location: "Pakistan",
  timezone: "PKT · GMT+5",
  available: true,
  // TODO: replace with your real email
  email: "ameerhamza@example.com",
  phone: "+92 313 6426280",
  whatsapp: "https://wa.me/923136426280",
  github: "https://github.com/Amier-coder",
  linkedin: "https://www.linkedin.com/in/ameer-hamza-551566382",
  resumeUrl: "/resume.pdf",
  photo: null,
  bio: [
    "I'm a full-stack web developer who loves turning ideas into polished, production-ready products. My core stack is React, TypeScript and Node.js, and I care deeply about clean architecture, performance and accessibility.",
    "From pixel-accurate interfaces to reliable APIs and databases, I enjoy owning a feature end-to-end — understanding the problem, choosing the right tools, and shipping something that actually works in the real world.",
    "When I'm not coding, I'm exploring new UI patterns, sharpening my problem-solving on algorithmic challenges, or contributing to personal projects that push my craft forward.",
  ],
};

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "10+", label: "Projects built" },
  { value: "3+", label: "Years coding" },
  { value: "20+", label: "Technologies" },
  { value: "100%", label: "Passion driven" },
];

export type Service = {
  title: string;
  description: string;
  icon: IconType;
};

export const services: Service[] = [
  {
    title: "Frontend Development",
    description:
      "Pixel-perfect, responsive interfaces built with React, TypeScript and Tailwind CSS — fast, accessible and animation-rich.",
    icon: FiLayout,
  },
  {
    title: "Full-Stack Web Apps",
    description:
      "Complete products with React frontends and Node.js / Express APIs, backed by MongoDB or SQL databases.",
    icon: FiLayers,
  },
  {
    title: "UI / UX Engineering",
    description:
      "Turning Figma designs into living interfaces with reusable component systems and thoughtful micro-interactions.",
    icon: FiCode,
  },
  {
    title: "Responsive & Mobile-First",
    description:
      "Layouts that feel native on every screen — from small phones to ultrawide displays — without compromise.",
    icon: FiSmartphone,
  },
];

export type Skill = {
  name: string;
  level: number; // 0 - 100
  icon: IconType;
  color: string;
};

export const skills: Skill[] = [
  { name: "HTML5", level: 95, icon: SiHtml5, color: "#e34f26" },
  { name: "CSS3", level: 92, icon: SiCss, color: "#1572b6" },
  { name: "JavaScript", level: 90, icon: SiJavascript, color: "#f7df1e" },
  { name: "TypeScript", level: 85, icon: SiTypescript, color: "#3178c6" },
  { name: "React", level: 90, icon: SiReact, color: "#61dafb" },
  { name: "Tailwind CSS", level: 90, icon: SiTailwindcss, color: "#38bdf8" },
  { name: "SASS", level: 80, icon: SiSass, color: "#cc6699" },
  { name: "Redux", level: 78, icon: SiRedux, color: "#764abc" },
  { name: "Node.js", level: 82, icon: SiNodedotjs, color: "#3c873a" },
  { name: "Express", level: 80, icon: SiExpress, color: "#e2e8f0" },
  { name: "MongoDB", level: 78, icon: SiMongodb, color: "#47a248" },
  { name: "Git", level: 88, icon: SiGit, color: "#f1502f" },
  { name: "GitHub", level: 90, icon: SiGithub, color: "#e2e8f0" },
  { name: "Vite", level: 85, icon: SiVite, color: "#a259ff" },
  { name: "Jest", level: 70, icon: SiJest, color: "#c21325" },
  { name: "Figma", level: 80, icon: SiFigma, color: "#f24e1e" },
  { name: "Postman", level: 82, icon: SiPostman, color: "#ff6c37" },
];

export const techMarquee: string[] = [
  "React",
  "TypeScript",
  "JavaScript",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "REST APIs",
  "Redux",
  "HTML5",
  "CSS3",
  "Git",
  "Vite",
  "Figma",
  "Responsive Design",
];

export type Category = "All" | "Web App" | "E-Commerce" | "Game" | "UI / UX";

export type Project = {
  id: string;
  title: string;
  description: string;
  category: Exclude<Category, "All">;
  tags: string[];
  repo: string;
  live?: string;
  icon: IconType;
  gradient: string;
};

export const projects: Project[] = [
  {
    id: "eshop",
    title: "eShop",
    description:
      "A modern e-commerce storefront with product browsing, cart flow and a clean, conversion-focused checkout experience.",
    category: "E-Commerce",
    tags: ["JavaScript", "React", "REST API"],
    repo: "https://github.com/Amier-coder/eShop",
    icon: FiShoppingBag,
    gradient: "from-violet-500/30 via-fuchsia-500/10 to-transparent",
  },
  {
    id: "myshop",
    title: "MyShop",
    description:
      "A shopping application featuring dynamic product listings, category filtering and a responsive product detail view.",
    category: "E-Commerce",
    tags: ["JavaScript", "CSS3", "Responsive"],
    repo: "https://github.com/Amier-coder/Myshop",
    icon: FiShoppingCart,
    gradient: "from-cyan-500/30 via-sky-500/10 to-transparent",
  },
  {
    id: "movie-site",
    title: "Movie Site",
    description:
      "A searchable movie discovery app with dynamic data rendering, ratings and a smooth, media-rich browsing experience.",
    category: "Web App",
    tags: ["JavaScript", "API", "UI"],
    repo: "https://github.com/Amier-coder/movie-site",
    icon: FiFilm,
    gradient: "from-rose-500/30 via-orange-500/10 to-transparent",
  },
  {
    id: "restaurant-site",
    title: "Restaurant Site",
    description:
      "An appetizing restaurant website with menu presentation, gallery sections and a fully responsive layout.",
    category: "UI / UX",
    tags: ["HTML5", "CSS3", "Responsive"],
    repo: "https://github.com/Amier-coder/restuarant-site",
    icon: FiCoffee,
    gradient: "from-amber-500/30 via-yellow-500/10 to-transparent",
  },
  {
    id: "custom-video-player",
    title: "Custom Video Player",
    description:
      "A fully custom HTML5 video player with playback controls, progress handling and keyboard shortcuts — no third-party player.",
    category: "Web App",
    tags: ["JavaScript", "HTML5", "Media"],
    repo: "https://github.com/Amier-coder/Custom_video_player",
    icon: FiPlayCircle,
    gradient: "from-emerald-500/30 via-teal-500/10 to-transparent",
  },
  {
    id: "tic-tac-toe",
    title: "Tic Tac Toe",
    description:
      "A polished two-player browser game with win detection, animated turns and a playful, minimal interface.",
    category: "Game",
    tags: ["JavaScript", "Game Logic", "CSS3"],
    repo: "https://github.com/Amier-coder/tic-tac-toe",
    icon: FaGamepad,
    gradient: "from-indigo-500/30 via-blue-500/10 to-transparent",
  },
  {
    id: "login-form",
    title: "Login Form UI",
    description:
      "A modern, accessible authentication form with validation states and a refined glassmorphic visual style.",
    category: "UI / UX",
    tags: ["HTML5", "CSS3", "Forms"],
    repo: "https://github.com/Amier-coder/login-form",
    icon: FiLock,
    gradient: "from-purple-500/30 via-violet-500/10 to-transparent",
  },
  {
    id: "company-demo",
    title: "Company Demo",
    description:
      "A corporate landing page demo with hero, services and contact sections — structured for real business use.",
    category: "UI / UX",
    tags: ["HTML5", "CSS3", "Landing Page"],
    repo: "https://github.com/Amier-coder/company-demo",
    icon: FiBriefcase,
    gradient: "from-slate-400/30 via-slate-500/10 to-transparent",
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
};

/**
 * NOTE: Edit / replace these with your real experience.
 * They are friendly placeholders so the section is not empty.
 */
export const experience: Experience[] = [
  {
    role: "Full-Stack Web Developer",
    company: "Freelance & Personal Projects",
    period: "2023 — Present",
    description:
      "Building and shipping web applications end-to-end — from UI design to API and database — for clients and personal products.",
    highlights: [
      "Developed responsive React interfaces from Figma designs",
      "Built REST APIs with Node.js, Express and MongoDB",
      "Deployed and maintained production projects on Vercel",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Personal & Open-Source Work",
    period: "2022 — 2023",
    description:
      "Focused on mastering modern JavaScript and component-driven UI development through hands-on projects.",
    highlights: [
      "Created 10+ projects covering e-commerce, media and games",
      "Built reusable component libraries with clean CSS architecture",
      "Practiced performance, accessibility and responsive design",
    ],
  },
];

export type Social = { label: string; href: string; icon: IconType };

export const socials: Social[] = [
  { label: "GitHub", href: profile.github, icon: SiGithub },
  { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedin },
  { label: "WhatsApp", href: profile.whatsapp, icon: FaWhatsapp },
];

export const navLinks: { label: string; href: string }[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
