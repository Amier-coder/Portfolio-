import type { IconType } from "react-icons";
import { FaGamepad, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import {
  SiBootstrap,
  SiCss,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import {
  FiCoffee,
  FiCreditCard,
  FiFilm,
  FiGlobe,
  FiLayers,
  FiLayout,
  FiPlayCircle,
  FiServer,
  FiShoppingBag,
  FiShoppingCart,
  FiSmartphone,
} from "react-icons/fi";

/**
 * ────────────────────────────────────────────────────────────────
 *  Ameer Hamza — Portfolio Data
 *  Synchronized with official CV & GitHub profile
 * ────────────────────────────────────────────────────────────────
 */

export type Profile = {
  name: string;
  firstName: string;
  role: string;
  roles: string[];
  tagline: string;
  location: string;
  city: string;
  country: string;
  timezone: string;
  available: boolean;
  email: string;
  phone: string;
  whatsapp: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  photo: string | null;
  bio: string[];
};

export const profile: Profile = {
  name: "Ameer Hamza",
  firstName: "Ameer",
  role: "Web Developer | Full Stack & Frontend",
  roles: [
    "Full Stack Developer",
    "Frontend Specialist (React.js & Next.js)",
    "Backend & REST API Developer (Laravel & MySQL)",
    "ERP & POS Solutions Engineer",
  ],
  tagline:
    "I build responsive, scalable and high-performance web applications using React.js, Next.js, and modern JavaScript, backed by secure REST APIs in Laravel & MySQL.",
  location: "Azizia Town, Gujranwala, Pakistan",
  city: "Gujranwala",
  country: "Pakistan",
  timezone: "PKT · GMT+5",
  available: true,
  email: "ameerhamza031364@gmail.com",
  phone: "+92 313 6426280",
  whatsapp: "https://wa.me/923136426280",
  github: "https://github.com/Amier-coder",
  linkedin: "https://www.linkedin.com/in/ameer-hamza-551566382",
  resumeUrl: "/resume.pdf",
  photo: null,
  bio: [
    "I am a passionate Frontend and Full Stack Developer with expertise in React.js, Next.js, and modern JavaScript. I build responsive and scalable web applications using HTML5, CSS3, Tailwind CSS, Bootstrap, Redux, and REST APIs.",
    "I also have working knowledge of Laravel for backend integration, alongside Node.js, Express, MySQL, and MongoDB. In enterprise settings, I have developed and maintained large-scale ERP systems and fast, reliable POS billing platforms.",
    "I focus on writing clean, maintainable code, implementing secure role-based access control, optimizing database queries, and continuously improving my skills in collaborative, growth-driven environments.",
  ],
};

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "3+", label: "Enterprise Systems Built" },
  { value: "10+", label: "Completed Projects" },
  { value: "15+", label: "Technologies & Frameworks" },
  { value: "100%", label: "Client & Code Focus" },
];

export type Service = {
  title: string;
  description: string;
  icon: IconType;
};

export const services: Service[] = [
  {
    title: "Frontend Engineering",
    description:
      "Crafting pixel-perfect, responsive user interfaces using React.js, Next.js, Redux, Tailwind CSS, and Bootstrap — fast, accessible, and intuitive across devices.",
    icon: FiLayout,
  },
  {
    title: "Enterprise Web Applications",
    description:
      "Developing end-to-end business applications including ERP and POS systems with role-based access control (RBAC), multi-module workflows, and real-time dashboards.",
    icon: FiLayers,
  },
  {
    title: "REST APIs & Backend Integration",
    description:
      "Designing and connecting secure RESTful APIs with Laravel and Node.js, backed by optimized MySQL and MongoDB databases for maximum throughput.",
    icon: FiServer,
  },
  {
    title: "Responsive & Modern UI/UX",
    description:
      "Converting designs into fluid, accessible digital experiences optimized for smartphones, tablets, laptops, and ultra-wide desktop monitors.",
    icon: FiSmartphone,
  },
];

export type Skill = {
  name: string;
  category: "Frontend" | "Backend & Database" | "Tools & Environment";
  level: number; // 0 - 100
  icon: IconType;
  color: string;
};

export const skills: Skill[] = [
  // Frontend
  { name: "React.js", category: "Frontend", level: 92, icon: SiReact, color: "#61dafb" },
  { name: "Next.js", category: "Frontend", level: 86, icon: SiNextdotjs, color: "#ffffff" },
  { name: "JavaScript (ES6+)", category: "Frontend", level: 92, icon: SiJavascript, color: "#f7df1e" },
  { name: "Redux.js", category: "Frontend", level: 88, icon: SiRedux, color: "#764abc" },
  { name: "Tailwind CSS", category: "Frontend", level: 92, icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Bootstrap", category: "Frontend", level: 88, icon: SiBootstrap, color: "#7952b3" },
  { name: "HTML5", category: "Frontend", level: 96, icon: SiHtml5, color: "#e34f26" },
  { name: "CSS3", category: "Frontend", level: 94, icon: SiCss, color: "#1572b6" },
  { name: "TypeScript", category: "Frontend", level: 84, icon: SiTypescript, color: "#3178c6" },

  // Backend & Database
  { name: "REST APIs", category: "Backend & Database", level: 90, icon: FiServer, color: "#22d3ee" },
  { name: "Laravel", category: "Backend & Database", level: 85, icon: SiLaravel, color: "#ff2d20" },
  { name: "MySQL", category: "Backend & Database", level: 88, icon: SiMysql, color: "#4479a1" },
  { name: "Node.js", category: "Backend & Database", level: 82, icon: SiNodedotjs, color: "#3c873a" },
  { name: "MongoDB", category: "Backend & Database", level: 80, icon: SiMongodb, color: "#47a248" },
  { name: "Express.js", category: "Backend & Database", level: 80, icon: SiExpress, color: "#cbd5e1" },

  // Tools
  { name: "Git", category: "Tools & Environment", level: 88, icon: SiGit, color: "#f1502f" },
  { name: "GitHub", category: "Tools & Environment", level: 90, icon: SiGithub, color: "#e2e8f0" },
  { name: "Postman", category: "Tools & Environment", level: 86, icon: SiPostman, color: "#ff6c37" },
  { name: "Vite", category: "Tools & Environment", level: 88, icon: SiVite, color: "#a259ff" },
  { name: "Figma", category: "Tools & Environment", level: 80, icon: SiFigma, color: "#f24e1e" },
];

export const techMarquee: string[] = [
  "React.js",
  "Next.js",
  "Redux.js",
  "JavaScript",
  "REST APIs",
  "Laravel",
  "MySQL",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
  "Bootstrap",
  "HTML5",
  "CSS3",
  "TypeScript",
  "Git & GitHub",
  "Postman",
  "ERP Solutions",
  "POS Systems",
];

export type Category = "All" | "Enterprise" | "Web App" | "E-Commerce" | "UI / UX" | "Game";

export type Project = {
  id: string;
  title: string;
  description: string;
  category: Exclude<Category, "All">;
  tags: string[];
  repo: string;
  live?: string;
  icon: IconType;
  demoImage?: string;
  gradient: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "erp-system",
    title: "ERP System",
    description:
      "A comprehensive enterprise ERP system streamlining business operations across inventory, sales, purchasing, accounts, and reporting modules. Built with React.js & Redux frontend and secure RESTful APIs using Laravel & MySQL with role-based access control and query optimization.",
    category: "Enterprise",
    tags: ["React.js", "Redux", "Laravel", "MySQL", "REST APIs", "RBAC"],
    repo: "https://github.com/Amier-coder",
    icon: FiLayers,
    demoImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    gradient: "from-blue-500/30 via-indigo-500/10 to-transparent",
    featured: true,
  },
  {
    id: "pos-system",
    title: "POS System",
    description:
      "Fast and accurate Point of Sale (POS) retail billing and stock management platform. Features instant product search, dynamic cart flows, barcode handling, invoice generation, discount calculation, stock tracking, and daily sales reports.",
    category: "Enterprise",
    tags: ["React.js", "REST APIs", "MySQL", "Inventory", "Retail Billing"],
    repo: "https://github.com/Amier-coder",
    icon: FiCreditCard,
    demoImage: "https://images.unsplash.com/photo-1556742111-aaaa0a9c8f55?w=800&h=500&fit=crop",
    gradient: "from-emerald-500/30 via-teal-500/10 to-transparent",
    featured: true,
  },
  {
    id: "the-para",
    title: "The PARA Platform",
    description:
      "Contributed as a Full Stack Developer to The PARA platform, delivering responsive user interfaces and integrating REST APIs with backend services. Focused on clean, maintainable code, performance optimization, and cross-device consistency.",
    category: "Web App",
    tags: ["Full Stack", "React.js", "REST APIs", "Clean Code", "Optimization"],
    repo: "https://github.com/Amier-coder",
    icon: FiGlobe,
    demoImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    gradient: "from-purple-500/30 via-fuchsia-500/10 to-transparent",
    featured: true,
  },
  {
    id: "eshop",
    title: "eShop",
    description:
      "A modern e-commerce storefront with product browsing, stateful cart flows, item filtering, and a clean, conversion-focused checkout experience.",
    category: "E-Commerce",
    tags: ["React.js", "JavaScript", "REST API", "Tailwind CSS"],
    repo: "https://github.com/Amier-coder/eShop",
    icon: FiShoppingBag,
    demoImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    gradient: "from-violet-500/30 via-fuchsia-500/10 to-transparent",
  },
  {
    id: "myshop",
    title: "MyShop",
    description:
      "A shopping application featuring dynamic product listings, category filtering, search states, and a responsive product detail view.",
    category: "E-Commerce",
    tags: ["JavaScript", "CSS3", "Responsive Design", "Product Search"],
    repo: "https://github.com/Amier-coder/Myshop",
    icon: FiShoppingCart,
    demoImage: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&h=500&fit=crop",
    gradient: "from-cyan-500/30 via-sky-500/10 to-transparent",
  },
  {
    id: "movie-site",
    title: "Movie Discovery Site",
    description:
      "A searchable movie discovery app with dynamic data rendering from REST APIs, movie ratings, details view, and a smooth media-rich browsing experience.",
    category: "Web App",
    tags: ["JavaScript", "REST APIs", "Async UI", "Responsive"],
    repo: "https://github.com/Amier-coder/movie-site",
    icon: FiFilm,
    demoImage: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=500&fit=crop",
    gradient: "from-rose-500/30 via-orange-500/10 to-transparent",
  },
  {
    id: "custom-video-player",
    title: "Custom Video Player",
    description:
      "A custom HTML5 video player with customized playback controls, progress scrub bar, speed regulation, and keyboard shortcut listeners built without external player libraries.",
    category: "Web App",
    tags: ["JavaScript", "HTML5 Video", "Media Controls"],
    repo: "https://github.com/Amier-coder/Custom_video_player",
    icon: FiPlayCircle,
    demoImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop",
    gradient: "from-emerald-500/30 via-teal-500/10 to-transparent",
  },
  {
    id: "restaurant-site",
    title: "Restaurant Showcase",
    description:
      "An appetizing culinary website with menu presentations, gallery sections, and a fully responsive layout tailored for restaurants and cafes.",
    category: "UI / UX",
    tags: ["HTML5", "CSS3", "Responsive", "UI/UX"],
    repo: "https://github.com/Amier-coder/restuarant-site",
    icon: FiCoffee,
    demoImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop",
    gradient: "from-amber-500/30 via-yellow-500/10 to-transparent",
  },
  {
    id: "tic-tac-toe",
    title: "Tic Tac Toe",
    description:
      "A polished browser game with round win detection, interactive turn animations, reset mechanisms, and a playful minimalist UI.",
    category: "Game",
    tags: ["JavaScript", "Game Logic", "CSS3", "State"],
    repo: "https://github.com/Amier-coder/tic-tac-toe",
    icon: FaGamepad,
    demoImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=500&fit=crop",
    gradient: "from-indigo-500/30 via-blue-500/10 to-transparent",
  },
];

export type WorkProject = {
  title: string;
  description: string;
  technologies: string[];
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  projects?: WorkProject[];
  highlights: string[];
};

export const experience: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Adroit light Solutions",
    period: "02/2026 – Present",
    location: "Gujranwala, Pakistan",
    description:
      "Spearheading the engineering of enterprise business software, building scalable frontend architectures in React.js and robust RESTful APIs with Laravel and MySQL.",
    projects: [
      {
        title: "ERP System",
        description:
          "Developed and maintained a comprehensive ERP system to streamline core business operations, covering inventory, sales, purchasing, accounts and reporting modules. Built responsive, reusable interfaces using React.js and Redux, and developed secure RESTful APIs with Laravel and MySQL. Implemented role-based access control, data validation and optimized queries to ensure reliable performance and a consistent user experience across the organization.",
        technologies: ["React.js", "Redux", "Laravel", "MySQL", "REST APIs", "RBAC"],
      },
      {
        title: "POS System",
        description:
          "Built a Point of Sale (POS) system for fast and accurate retail billing and stock management. Implemented product search, cart and checkout flows, invoice generation, discounts, inventory tracking and daily sales reports. Integrated a responsive React.js frontend with REST APIs and a MySQL database, focusing on speed, reliability and ease of use for cashiers and store managers.",
        technologies: ["React.js", "REST APIs", "MySQL", "Inventory Tracking", "Invoicing"],
      },
      {
        title: "The PARA Platform",
        description:
          "Contributed as a Full Stack Developer to The PARA platform, delivering responsive user interfaces and integrating REST APIs with backend services. Focused on clean, maintainable code, performance optimization and a smooth, consistent user experience across devices.",
        technologies: ["React.js", "REST APIs", "Full Stack", "Performance Tuning"],
      },
    ],
    highlights: [
      "Engineered comprehensive ERP & POS systems handling mission-critical business modules",
      "Created modular, reusable UI components in React.js with centralized Redux state",
      "Developed secure RESTful APIs in Laravel with role-based access control & input validation",
      "Optimized complex relational queries in MySQL for fast reporting and inventory tracking",
    ],
  },
  {
    role: "Frontend & Web App Developer",
    company: "Freelance & Independent Projects",
    period: "2023 – 2026",
    location: "Remote",
    description:
      "Built and deployed full-featured web applications, modern e-commerce storefronts, and interactive web tools for clients and open-source portfolios.",
    highlights: [
      "Designed and delivered 10+ web applications focusing on responsive design and performance",
      "Implemented stateful shopping carts, filtering engines, and media utilities in React & JavaScript",
      "Practiced clean coding standards, component-driven development, and Git workflows",
    ],
  },
];

export type Education = {
  degree: string;
  institution: string;
  location?: string;
  status: string;
  description: string;
  highlights: string[];
};

export const educationList: Education[] = [
  {
    degree: "Bachelor in Business & Information Technology (BBIT)",
    institution: "Virtual University",
    status: "In Progress",
    description:
      "Comprehensive degree program integrating modern information technology, enterprise software development, database systems, and business process automation.",
    highlights: [
      "In-depth focus on Software Engineering, Information Systems & Web Architectures",
      "Database management, relational schema design (MySQL), and systems analysis",
      "Aligning business logic and operational workflows with technological solutions",
    ],
  },
  {
    degree: "FSc Pre-Medical",
    institution: "Punjab College Gujranwala",
    status: "Completed",
    description:
      "Rigorous pre-university academic foundation cultivating analytical thinking, scientific discipline, and systematic problem solving.",
    highlights: [
      "Strong foundation in analytical reasoning and quantitative analysis",
      "High discipline and detail-oriented approach to complex problem-solving",
    ],
  },
];

export type Language = {
  name: string;
  proficiency: string;
  level: number;
  description: string;
};

export const languages: Language[] = [
  {
    name: "English",
    proficiency: "Fluent",
    level: 95,
    description: "Fluent in professional technical discussions, documentation, and team collaboration.",
  },
  {
    name: "Urdu",
    proficiency: "Good / Native",
    level: 100,
    description: "Native proficiency with excellent verbal and written interpersonal communication.",
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
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
