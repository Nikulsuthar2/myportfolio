import React from "react";
import { GrMysql } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";
import { AiFillApi } from "react-icons/ai";
import { VscVscode } from "react-icons/vsc";
import { TbBrandCSharp } from "react-icons/tb";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaReddit,
  FaDiscord,
} from "react-icons/fa";
import {
  Home,
  Code2,
  Rocket,
  User,
  Briefcase,
  Mail,
  Bot,
} from "lucide-react";
import { FaFacebookF, FaJava, FaPython, FaXTwitter } from "react-icons/fa6";
import {
  SiBuymeacoffee,
  SiCplusplus,
  SiCss3,
  SiDart,
  SiDevdotto,
  SiDotnet,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiGeeksforgeeks,
  SiGit,
  SiHackerrank,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiLeetcode,
  SiMedium,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

// Education Logos
import jecrc from "@/assets/Education/jecrc.jpg";
import nvpas from "@/assets/Education/nvpas.jpg";

// Company Logos
import accenture from "@/assets/Company/AccentureLogoShort.png";

// Project Screenshots
import nikcalc from "@/assets/Projects/Calculator/thumb.png";
import nikcalc1 from "@/assets/Projects/Calculator/img0.png";
import nikcalc2 from "@/assets/Projects/Calculator/img1.png";

import v2portfolio from "@/assets/Projects/PortfolioV2/thumb.png";
import v2portfolio1 from "@/assets/Projects/PortfolioV2/img0.png";
import v2portfolio2 from "@/assets/Projects/PortfolioV2/img1.png";
import v2portfolio3 from "@/assets/Projects/PortfolioV2/img2.png";
import v2portfolio4 from "@/assets/Projects/PortfolioV2/img3.png";
import v2portfolio5 from "@/assets/Projects/PortfolioV2/img4.png";

import v3portfolio from "@/assets/Projects/PortfolioV3/thumb.png";
import v3portfolio1 from "@/assets/Projects/PortfolioV3/img0.png";
import v3portfolio2 from "@/assets/Projects/PortfolioV3/img1.png";
import v3portfolio3 from "@/assets/Projects/PortfolioV3/img2.png";
import v3portfolio4 from "@/assets/Projects/PortfolioV3/img3.png";
import v3portfolio5 from "@/assets/Projects/PortfolioV3/img4.png";
import v3portfolio6 from "@/assets/Projects/PortfolioV3/img5.png";
import v3portfolio7 from "@/assets/Projects/PortfolioV3/img6.png";
import v3portfolio8 from "@/assets/Projects/PortfolioV3/img7.png";
import v3portfolio9 from "@/assets/Projects/PortfolioV3/img8.png";
import v3portfolio10 from "@/assets/Projects/PortfolioV3/img9.png";

import chatp1 from "@/assets/Projects/OnlineChattingSystemPHP/thumb.png";
import chatp2 from "@/assets/Projects/OnlineChattingSystemPHP/img1.png";
import chatp3 from "@/assets/Projects/OnlineChattingSystemPHP/img2.png";
import chatp4 from "@/assets/Projects/OnlineChattingSystemPHP/img3.png";
import chatp5 from "@/assets/Projects/OnlineChattingSystemPHP/img4.png";
import chatp6 from "@/assets/Projects/OnlineChattingSystemPHP/img5.png";
import chatp7 from "@/assets/Projects/OnlineChattingSystemPHP/img6.png";
import chatp8 from "@/assets/Projects/OnlineChattingSystemPHP/img7.png";
import chatp9 from "@/assets/Projects/OnlineChattingSystemPHP/img8.png";
import chatp10 from "@/assets/Projects/OnlineChattingSystemPHP/img9.png";
import chatp11 from "@/assets/Projects/OnlineChattingSystemPHP/img10.png";
import chatp12 from "@/assets/Projects/OnlineChattingSystemPHP/img11.png";
import chatp13 from "@/assets/Projects/OnlineChattingSystemPHP/img12.png";
import chatp14 from "@/assets/Projects/OnlineChattingSystemPHP/img13.png";
import chatp15 from "@/assets/Projects/OnlineChattingSystemPHP/img14.png";
import chatp16 from "@/assets/Projects/OnlineChattingSystemPHP/img15.png";
import chatp17 from "@/assets/Projects/OnlineChattingSystemPHP/img16.png";
import chatp18 from "@/assets/Projects/OnlineChattingSystemPHP/img17.png";

import moviep1 from "@/assets/Projects/MovieStreamingPHP/thumb.png";
import moviep2 from "@/assets/Projects/MovieStreamingPHP/img1.png";
import moviep3 from "@/assets/Projects/MovieStreamingPHP/img2.png";
import moviep4 from "@/assets/Projects/MovieStreamingPHP/img3.png";
import moviep5 from "@/assets/Projects/MovieStreamingPHP/img4.png";
import moviep6 from "@/assets/Projects/MovieStreamingPHP/img5.png";
import moviep7 from "@/assets/Projects/MovieStreamingPHP/img6.png";
import moviep8 from "@/assets/Projects/MovieStreamingPHP/img7.png";
import moviep9 from "@/assets/Projects/MovieStreamingPHP/img8.png";
import moviep10 from "@/assets/Projects/MovieStreamingPHP/img9.png";
import moviep11 from "@/assets/Projects/MovieStreamingPHP/img10.png";
import moviep12 from "@/assets/Projects/MovieStreamingPHP/img11.png";
import moviep13 from "@/assets/Projects/MovieStreamingPHP/img12.png";
import moviep14 from "@/assets/Projects/MovieStreamingPHP/img13.png";
import moviep15 from "@/assets/Projects/MovieStreamingPHP/img14.png";
import moviep16 from "@/assets/Projects/MovieStreamingPHP/img15.png";
import moviep17 from "@/assets/Projects/MovieStreamingPHP/img16.png";
import moviep18 from "@/assets/Projects/MovieStreamingPHP/img17.png";
import moviep19 from "@/assets/Projects/MovieStreamingPHP/img18.png";
import moviep20 from "@/assets/Projects/MovieStreamingPHP/img19.png";
import moviep21 from "@/assets/Projects/MovieStreamingPHP/img20.png";
import moviep22 from "@/assets/Projects/MovieStreamingPHP/img21.png";
import moviep23 from "@/assets/Projects/MovieStreamingPHP/img22.png";
import moviep24 from "@/assets/Projects/MovieStreamingPHP/img23.png";
import moviep25 from "@/assets/Projects/MovieStreamingPHP/img24.png";
import moviep26 from "@/assets/Projects/MovieStreamingPHP/img25.png";
import moviep27 from "@/assets/Projects/MovieStreamingPHP/img26.png";
import moviep28 from "@/assets/Projects/MovieStreamingPHP/img27.png";
import moviep29 from "@/assets/Projects/MovieStreamingPHP/img28.png";
import moviep30 from "@/assets/Projects/MovieStreamingPHP/img29.png";

import jblstore1 from "@/assets/Projects/JBLStoreASP/thumb.png";
import jblstore2 from "@/assets/Projects/JBLStoreASP/img1.png";
import jblstore3 from "@/assets/Projects/JBLStoreASP/img2.png";
import jblstore4 from "@/assets/Projects/JBLStoreASP/img3.png";
import jblstore5 from "@/assets/Projects/JBLStoreASP/img4.png";
import jblstore6 from "@/assets/Projects/JBLStoreASP/img5.png";
import jblstore7 from "@/assets/Projects/JBLStoreASP/img6.png";
import jblstore8 from "@/assets/Projects/JBLStoreASP/img7.png";
import jblstore9 from "@/assets/Projects/JBLStoreASP/img8.png";
import jblstore10 from "@/assets/Projects/JBLStoreASP/img9.png";
import jblstore11 from "@/assets/Projects/JBLStoreASP/img10.png";
import jblstore12 from "@/assets/Projects/JBLStoreASP/img11.png";
import jblstore13 from "@/assets/Projects/JBLStoreASP/img12.png";
import jblstore14 from "@/assets/Projects/JBLStoreASP/img13.png";
import jblstore15 from "@/assets/Projects/JBLStoreASP/img14.png";
import jblstore16 from "@/assets/Projects/JBLStoreASP/img15.png";
import jblstore17 from "@/assets/Projects/JBLStoreASP/img16.png";
import jblstore18 from "@/assets/Projects/JBLStoreASP/img17.png";
import jblstore19 from "@/assets/Projects/JBLStoreASP/img18.png";
import jblstore20 from "@/assets/Projects/JBLStoreASP/img19.png";
import jblstore21 from "@/assets/Projects/JBLStoreASP/img20.png";
import jblstore22 from "@/assets/Projects/JBLStoreASP/img21.png";
import jblstore23 from "@/assets/Projects/JBLStoreASP/img22.png";
import jblstore24 from "@/assets/Projects/JBLStoreASP/img23.png";

import chatbotp1 from "@/assets/Projects/ChatbotPythonPHP/thumb.png";
import chatbotp2 from "@/assets/Projects/ChatbotPythonPHP/img1.png";
import chatbotp3 from "@/assets/Projects/ChatbotPythonPHP/img2.png";
import chatbotp4 from "@/assets/Projects/ChatbotPythonPHP/img3.png";
import chatbotp5 from "@/assets/Projects/ChatbotPythonPHP/img4.png";
import chatbotp6 from "@/assets/Projects/ChatbotPythonPHP/img5.png";
import chatbotp7 from "@/assets/Projects/ChatbotPythonPHP/img6.png";
import chatbotp8 from "@/assets/Projects/ChatbotPythonPHP/img7.png";
import chatbotp9 from "@/assets/Projects/ChatbotPythonPHP/img8.png";

import ebookstore1 from "@/assets/Projects/EBookStore/thumb.png";
import ebookstore2 from "@/assets/Projects/EBookStore/img1.png";
import ebookstore3 from "@/assets/Projects/EBookStore/img2.png";
import ebookstore4 from "@/assets/Projects/EBookStore/img3.png";
import ebookstore5 from "@/assets/Projects/EBookStore/img4.png";
import ebookstore6 from "@/assets/Projects/EBookStore/img5.png";
import ebookstore7 from "@/assets/Projects/EBookStore/img6.png";
import ebookstore8 from "@/assets/Projects/EBookStore/img7.png";
import ebookstore9 from "@/assets/Projects/EBookStore/img8.png";
import ebookstore10 from "@/assets/Projects/EBookStore/img9.png";
import ebookstore11 from "@/assets/Projects/EBookStore/img10.png";
import ebookstore12 from "@/assets/Projects/EBookStore/img11.png";
import ebookstore13 from "@/assets/Projects/EBookStore/img12.png";
import ebookstore14 from "@/assets/Projects/EBookStore/img13.png";
import ebookstore15 from "@/assets/Projects/EBookStore/img14.png";
import ebookstore16 from "@/assets/Projects/EBookStore/img15.png";
import ebookstore17 from "@/assets/Projects/EBookStore/img16.png";
import ebookstore18 from "@/assets/Projects/EBookStore/img17.png";
import ebookstore19 from "@/assets/Projects/EBookStore/img18.png";
import ebookstore20 from "@/assets/Projects/EBookStore/img19.png";
import ebookstore21 from "@/assets/Projects/EBookStore/img20.png";
import ebookstore22 from "@/assets/Projects/EBookStore/img21.png";

import cardtrick from "@/assets/Projects/CardTrick/thumb.png";

import nikmark from "@/assets/Projects/Nikmark/thumb.png";
import nikmark1 from "@/assets/Projects/Nikmark/img0.png";
import nikmark2 from "@/assets/Projects/Nikmark/img1.png";
import nikmark3 from "@/assets/Projects/Nikmark/img2.png";
import nikmark4 from "@/assets/Projects/Nikmark/img3.png";
import nikmark5 from "@/assets/Projects/Nikmark/img4.png";

// Certificates
import accentureInternshipCertificate from "@/assets/Certificates/accenture_internship.png";
import freecodecampCSharp from "@/assets/Certificates/freecodecampCSharp.png";
import ibmHTML from "@/assets/Certificates/ibmHTML.jpg";
import ibmJavascript from "@/assets/Certificates/ibmJavasrcipt.jpg";
import ibmNodejs from "@/assets/Certificates/ibmNodejs.jpg";
import ibmDevOpsFundamentals from "@/assets/Certificates/ibmDevOpsFundamentals.jpg";
import courseraUX from "@/assets/Certificates/courseraUX.jpg";
import courseraTechSupport from "@/assets/Certificates/courseraTechSupport.jpg";
import courseraVersionControl from "@/assets/Certificates/courseraVersionControl.jpg";
import courseraFrontend from "@/assets/Certificates/courseraFrontend.jpg";
import courseraJavascript from "@/assets/Certificates/courseraJavascript.jpg";
import courseraAI from "@/assets/Certificates/courseraAI.jpg";
import courseraJDBC from "@/assets/Certificates/courseraJDBC.jpg";
import courseraDataForML from "@/assets/Certificates/courseraDataForML.jpg";
import antigravityLogo from "@/assets/antigravity.svg";

// Navigation Links for V4
export const navLinks = [
  { name: "Home", icon: <Home size={16} />, href: "#home" },
  { name: "Projects", icon: <Rocket size={16} />, href: "#projects" },
  { name: "Experience", icon: <Briefcase size={16} />, href: "#experience" },
  { name: "Skills", icon: <Code2 size={16} />, href: "#skills" },
  { name: "About", icon: <User size={16} />, href: "#about" },
  { name: "Contact", icon: <Mail size={16} />, href: "#contact" },
];

// Skills isolated for V4
export const skills = {
  languages: [
    { name: "C++", icon: <SiCplusplus />, color: "#6872ff", },
    { name: "Python", icon: <FaPython />, color: "#a9fb61" },
    { name: "Dart", icon: <SiDart />, color: "#0175C2" },
    { name: "C#", icon: <TbBrandCSharp />, color: "#77fb61", past: true },
    { name: "Java", icon: <FaJava />, color: "#6188fb", past: true },
    { name: "PHP", icon: <SiPhp />, color: "#c161fb", past: true },
  ],
  development: [
    { name: "Next.js", icon: <SiNextdotjs />, color: "#60a5fa" },
    { name: "React", icon: <SiReact />, color: "#61abfb" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#61c8fb" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#616cfb" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#fbcd61" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "#77fb61" },
    { name: "Express", icon: <SiExpress />, color: "#808080" },
    { name: "REST APIs", icon: <AiFillApi />, color: "#22c55e" },
    { name: "JWT", icon: <SiJsonwebtokens />, color: "#0fffff" },
    { name: "Flutter", icon: <SiFlutter />, color: "#61DAFB" },
    { name: "HTML5", icon: <SiHtml5 />, color: "#fb6161" },
    { name: "CSS3", icon: <SiCss3 />, color: "#61DAFB" },
    { name: ".NET", icon: <SiDotnet />, color: "#5C2D91", past: true },
  ],
  database: [
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#77fb61" },
    { name: "MySQL", icon: <GrMysql />, color: "#f8b381" },
    { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
    { name: "SQL Server", icon: <SiMicrosoftsqlserver />, color: "#CC2927", past: true },
  ],
  tools: [
    { name: "VS Code", icon: <VscVscode />, color: "#61abfb" },
    { name: "Antigravity", icon: <img src={antigravityLogo} alt="Antigravity" className="w-[1em] h-[1em] object-contain" />, color: "inherit" },
    { name: "Git", icon: <SiGit />, color: "#fb6161" },
    { name: "NPM", icon: <SiNpm />, color: "#CB3837" },
    { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
  ],
};

/*
========================================================================
HOW TO ADD A NEW PROJECT:
1. Upload your screenshots into `src/assets/Projects/<YourProjectName>/`
2. Import them at the top of this file:
   e.g. `import myProjThumb from "@/assets/Projects/MyNewProj/thumb.png";`
   e.g. `import myProjImg1 from "@/assets/Projects/MyNewProj/img1.png";`
3. Add a new object to the top of the `projects` array below. Follow this template:

  {
    id: 8, // Increment this number
    title: "Project Title",
    description: "Short 1-2 sentence description for the main page.",
    image: myProjThumb, // Imported above
    tech: ["ReactJS", "NodeJS", "TailwindCSS"], // Tech keywords
    color: "violet", // Theme color options: purple, blue, indigo, green, violet, amber, pink, rose, emerald, cyan
    screenshots: [
      myProjThumb,
      myProjImg1,
      // Add more if you have them
    ],
    longDescription: "Deep dive details. Explain what the project is, why you built it, and what problem it solves.",
    features: [
      "Key Feature 1",
      "Key Feature 2",
      "Key Feature 3"
    ],
    demoUrl: "https://yourdemolink.com", // Leave as "" if none
    githubUrl: "https://github.com/Nikulsuthar2/your-repo-name",
    youtubeUrl: "" // Leave as "" if none
  },
========================================================================
*/

export const projects = [
  {
    id: 10,
    title: "NikMark",
    status: "WIP",
    description: "An advanced, highly extensible Markdown system rethinking layout formatting and realtime text editing from scratch.",
    image: nikmark,
    tech: ["TypeScript", "NPM", "NodeJS", "ReactJS", "TailwindCSS"],
    color: "blue",
    screenshots: [nikmark1, nikmark2, nikmark3, nikmark4, nikmark5],
    longDescription: "NikMark is a complete rethink of how Markdown works. Built with raw TypeScript, it provides highly optimized parsing, custom extensions, and a fluid playground environment to write, preview, and extend markdown layouts dynamically.",
    features: ["Advanced extensible parsing engine", "Speed-optimized AST compilers", "Developer playground panel with visual toggles"],
    demoUrl: "https://nikmark.netlify.app",
    githubUrl: "https://github.com/Nikulsuthar2/Nikmark",
    youtubeUrl: "",
    npmUrl: "https://www.npmjs.com/package/nikmark",
    installCommand: "npm install nikmark"
  },
  {
    id: 9,
    title: "Readory",
    status: "WIP",
    description: "An offline-first elegant PDF & eBook reader featuring reading progress logs, highlights, and custom library vaults.",
    image: null,
    tech: ["Flutter", "Dart", "SQLite"],
    color: "emerald",
    screenshots: [],
    longDescription: "An offline-first mobile eBook reader designed for ultimate structural reading speed. Users can import local PDF/ePub files, track reading progress, create color-coded annotation logs, and organize books inside a private library vault.",
    features: ["Offline-first SQLite local caching", "Interactive progress monitoring logs", "Beautiful micro-animated page sliders"],
    demoUrl: "",
    githubUrl: "https://github.com/Nikulsuthar2/Readory",
    youtubeUrl: ""
  },
  {
    id: 8,
    title: "Money Tracker App",
    status: "WIP",
    description: "A secure, offline-first personal financial manager to catalog ledger accounts and track monthly budgets.",
    image: null,
    tech: ["Flutter", "Dart", "Hive DB"],
    color: "purple",
    screenshots: [],
    longDescription: "A highly secure expense tracking app designed to catalog ledger records offline. Implements fast local Hive DB storage, dynamic category-wise budgeting charts, and clean payment reminder integrations.",
    features: ["Hive DB ultra-fast secure storage", "Interactive budget diagnostics", "Offline-first privacy audits"],
    demoUrl: "",
    githubUrl: "https://github.com/Nikulsuthar2/Money-Tracker",
    youtubeUrl: ""
  },
  {
    id: 7,
    title: "EBook Store",
    description: "An E-Commerce website for selling, purchasing, and reading PDF books online with a custom reader.",
    image: ebookstore4,
    tech: ["ReactJS", "TailwindCSS", "Ant Design", "NodeJS", "Express", "MongoDB"],
    color: "emerald",
    screenshots: [
      ebookstore1,
      ebookstore2,
      ebookstore3,
      ebookstore4,
      ebookstore5,
      ebookstore6,
      ebookstore7,
      ebookstore8,
      ebookstore9,
      ebookstore10,
      ebookstore11,
      ebookstore12,
      ebookstore13,
      ebookstore14,
      ebookstore15,
      ebookstore16,
      ebookstore17,
      ebookstore18,
      ebookstore19,
      ebookstore20,
      ebookstore21,
      ebookstore22,
    ],
    longDescription:
      "An E-Commerce Website designed for seamless reading and commercial distribution of digital e-books. Users can view previews, purchase access keys, and read purchases inside a secured, custom-built web PDF viewer. Features a robust role-based Admin dashboard for managing inventories, revenue charts, and billing audits.",
    features: [
      "JWT Secure Authentication",
      "Fluid Shopping Cart & Checkout",
      "Native Custom-Built Secure PDF Reader Component",
      "Deep-Dive Admin Panel with Inventory & User Control",
      "Complete Billing Audits & Purchase Log Reports",
    ],
    demoUrl: "",
    githubUrl: "https://github.com/Nikulsuthar2/EBookStoreMern",
    youtubeUrl: "",
  },
  {
    id: 11,
    title: "Card Guess Trick",
    description: "Classic 21-card magic trick as a web app — pick a card, shuffle three times, and we find it.",
    image: cardtrick,
    tech: ["HTML", "CSS", "JavaScript"],
    color: "rose",
    screenshots: [nikcalc1],
    longDescription: "A classic 21-card magic trick built as an interactive web experience. The user picks any card from a grid of 21, shuffles it three times across different columns, and through mathematical sorting logic, the app precisely guesses the exact card chosen.",
    features: [
      "Dynamic 21-card mathematical sorting algorithm",
      "Sleek and interactive card-flipping animations",
      "Pure responsive layout using vanilla JavaScript and CSS3",
      "Clean step-by-step game guide for perfect onboarding"
    ],
    demoUrl: "https://simplecardtrick.netlify.app/",
    githubUrl: "https://github.com/Nikulsuthar2/Simple-Card-Guess-Trick",
    youtubeUrl: ""
  },
  {
    id: 6,
    title: "Calculator",
    description: "A gorgeous modern calculator supporting advanced operations and local history logs.",
    image: nikcalc,
    tech: ["HTML", "CSS", "Javascript"],
    color: "amber",
    screenshots: [nikcalc1, nikcalc2],
    longDescription:
      "A fast, modern-styled web calculator supporting major mathematical operations, basic calculus macros (factorial, exponents, roots), and a beautiful, sliding side panel for equation memory and historical equations.",
    features: [
      "Beautiful Glassmorphic UI with Fluid Key Transitions",
      "Advanced Scientific Macros (Factorials, Square Roots, Powers)",
      "Persistent History Tracker with LocalStorage",
      "Keyboard Navigation Support",
    ],
    demoUrl: "https://nikcalculator.netlify.app/",
    githubUrl: "https://github.com/Nikulsuthar2/Calculator",
    youtubeUrl: "",
  },
  {
    id: 5,
    title: "Online JBL Store",
    description: "An E-Commerce catalog system designed for selling high-end JBL products and managing warehouse logistics.",
    image: jblstore4,
    tech: ["ASP.NET", "Microsoft SQL Server", "Bootstrap", "C#"],
    color: "orange",
    screenshots: [
      jblstore1,
      jblstore2,
      jblstore3,
      jblstore4,
      jblstore5,
      jblstore6,
      jblstore7,
      jblstore8,
      jblstore9,
      jblstore10,
      jblstore11,
      jblstore12,
      jblstore13,
      jblstore14,
      jblstore15,
      jblstore16,
      jblstore17,
      jblstore18,
      jblstore19,
      jblstore20,
      jblstore21,
      jblstore22,
      jblstore23,
      jblstore24,
    ],
    longDescription:
      "A complete enterprise-style E-commerce catalog web app specialized in marketing JBL sound systems. It implements user order profiles, inventory tracking, bill receipt creation, and an admin section to oversee active sales.",
    features: [
      "Multi-Functional Admin Panel for Logistics",
      "Dynamic Shopping Cart & Order Checkout Pipeline",
      "Automated PDF Bill Receipt Generation",
      "Warehouse Stock Level Alerts & Auto-Restock Indicator",
    ],
    demoUrl: "",
    githubUrl: "https://github.com/Nikulsuthar2/JBLStore",
    youtubeUrl: "",
  },
  {
    id: 4,
    title: "Chatbot in Python & PHP",
    description: "An intelligent Scikit-Learn NLP chatbot integrated with a secure PHP dashboard via a Flask API.",
    image: chatbotp6,
    tech: ["PHP", "MySQL", "Python", "Flask", "Scikit-Learn"],
    color: "indigo",
    screenshots: [
      chatbotp1,
      chatbotp2,
      chatbotp3,
      chatbotp4,
      chatbotp5,
      chatbotp6,
      chatbotp7,
      chatbotp8,
      chatbotp9,
    ],
    longDescription:
      "An AI-powered automated chatbot that parses inputs using a Scikit-Learn CountVectorizer. Running on a lightweight Flask backend, the NLP bot integrates with a custom PHP portal, providing users with responsive, intelligent help desk support.",
    features: [
      "User Authentication & Custom Dashboards",
      "Intelligent Scikit-Learn ML CountVectorizer Model",
      "Real-Time API Interfacing via Flask",
      "Interactive Interface to upload custom training CSV sheets",
      "Full User Chat History Audit Logs",
    ],
    demoUrl: "",
    githubUrl: "https://github.com/Nikulsuthar2/Chatbot-Flask-PHP-MySQL",
    youtubeUrl: "https://youtu.be/Zd0WRUx-IG8?si=TOqUdB9ch9vOKvuW",
  },
  {
    id: 3,
    title: "Online Chatting System",
    description: "A secure, real-time messaging application supporting group rooms and media sharing.",
    image: chatp1,
    tech: ["PHP", "MySQL", "HTML", "CSS", "Javascript"],
    color: "purple",
    screenshots: [
      chatp1,
      chatp2,
      chatp3,
      chatp4,
      chatp5,
      chatp6,
      chatp7,
      chatp8,
      chatp9,
      chatp10,
      chatp11,
      chatp12,
      chatp13,
      chatp14,
      chatp15,
      chatp16,
      chatp17,
      chatp18,
    ],
    longDescription:
      "A robust, real-time social chatting application. It features direct user-to-user private chats, shared chatroom lobbies, active search, profiles, blocking, and private attachment uploads.",
    features: [
      "Fast Real-Time Message Dispatching",
      "Interactive Shared Group Lounges",
      "Secure Direct Image Attachments",
      "User Searching, Custom Profiles, and Blocking Actions",
      "Instant Message Deletion & Private Logs Cleansing",
    ],
    demoUrl: "",
    githubUrl: "https://github.com/Nikulsuthar2/OnlineChat",
    youtubeUrl: "",
  },
  {
    id: 2,
    title: "Movie Streaming System",
    description: "A subscription-based media portal featuring high-definition video players and watchlists.",
    image: moviep1,
    tech: ["PHP", "MySQL", "HTML", "CSS", "Javascript"],
    color: "blue",
    screenshots: [
      moviep2,
      moviep3,
      moviep4,
      moviep5,
      moviep1,
      moviep6,
      moviep7,
      moviep8,
      moviep9,
      moviep10,
      moviep11,
      moviep12,
      moviep13,
      moviep14,
      moviep15,
      moviep16,
      moviep17,
      moviep18,
      moviep19,
      moviep20,
      moviep21,
      moviep22,
      moviep23,
      moviep24,
      moviep25,
      moviep26,
      moviep27,
      moviep28,
      moviep29,
      moviep30,
    ],
    longDescription:
      "A complete streaming site that operates on subscription access tiers. It handles video loading, a customized control bar, search bars, user bookmarks/watchlists, and a powerful admin section for uploading movies.",
    features: [
      "Custom HD Video Player with Smooth Seek Controls",
      "Integrated Tiered Subscription System",
      "Interactive User Watchlists & Bookmarks",
      "Robust Admin Panel for Video Catalog Management",
      "Frictionless User Profile Management",
    ],
    demoUrl: "",
    githubUrl: "https://github.com/Nikulsuthar2/MovieStreamer",
    youtubeUrl: "",
  },
  {
    id: 12,
    title: "My Portfolio V3",
    description: "A beautiful legacy dark-mode portfolio displaying custom-curated slide animations.",
    image: v3portfolio,
    tech: ["ReactJS", "TailwindCSS", "Bolt.new"],
    color: "violet",
    screenshots: [
      v3portfolio1,
      v3portfolio2,
      v3portfolio3,
      v3portfolio4,
      v3portfolio5,
      v3portfolio6,
      v3portfolio7,
      v3portfolio8,
      v3portfolio9,
      v3portfolio10,
    ],
    longDescription:
      "A gorgeous dark-mode specific animated single page portfolio showing structural slide reveals, modular card elements, and project showcase carousels.",
    features: [
      "Striking Legacy Visuals in Pure Dark Mode",
      "Dynamic Framer Motion Page Reveals",
      "Modular Cards & Smooth Scrolling Sections",
    ],
    demoUrl: "https://nikulsuthar.netlify.app/v3/",
    githubUrl: "https://github.com/Nikulsuthar2/myportfolio",
    youtubeUrl: "",
  },
  {
    id: 1,
    title: "My Portfolio V2",
    description: "A beautiful legacy dark-mode portfolio displaying custom-curated slide animations.",
    image: v2portfolio,
    tech: ["ReactJS", "TailwindCSS", "Framer Motion"],
    color: "violet",
    screenshots: [
      v2portfolio1,
      v2portfolio2,
      v2portfolio3,
      v2portfolio4,
      v2portfolio5,
    ],
    longDescription:
      "A gorgeous dark-mode specific animated single page portfolio showing structural slide reveals, modular card elements, and project showcase carousels.",
    features: [
      "Striking Legacy Visuals in Pure Dark Mode",
      "Dynamic Framer Motion Page Reveals",
      "Modular Cards & Smooth Scrolling Sections",
    ],
    demoUrl: "https://nikulsuthar.netlify.app/v2/",
    githubUrl: "https://github.com/Nikulsuthar2/myportfolio",
    youtubeUrl: "",
  },
];

// Social Links isolated for V4
export const socialLinks = [
  {
    name: "LeetCode",
    icon: <SiLeetcode size={20} />,
    url: "https://leetcode.com/nikulsuthar/",
    username: "nikulsuthar",
    color: "#FFA116",
  },
  {
    name: "GitHub",
    icon: <FiGithub size={20} />,
    url: "https://github.com/Nikulsuthar2",
    username: "Nikulsuthar2",
    color: "#9ca3af",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn size={20} />,
    url: "https://www.linkedin.com/in/nikulsuthar",
    username: "nikulsuthar",
    color: "#0A66C2",
  },
  {
    name: "X (Twitter)",
    icon: <FaXTwitter size={20} />,
    url: "https://x.com/ItsNikcode",
    username: "ItsNikcode",
    color: "#4B5563",
  },
  {
    name: "Instagram",
    icon: <FaInstagram size={20} />,
    url: "https://instagram.com/itsnikcode",
    username: "itsnikcode",
    color: "#E4405F",
  },
  {
    name: "YouTube",
    icon: <FaYoutube size={20} />,
    url: "https://youtube.com/@Nikcode",
    username: "Nikcode",
    color: "#FF0000",
  },
  {
    name: "Facebook",
    icon: <FaFacebookF size={20} />,
    url: "https://www.facebook.com/people/Nikcode/61579323034506/",
    username: "Nikcode",
    color: "#1877F2",
  },
  {
    name: "Reddit",
    icon: <FaReddit size={20} />,
    url: "https://www.reddit.com/u/itsnikcode",
    username: "itsnikcode",
    color: "#FF4500",
  },
  {
    name: "Discord",
    icon: <FaDiscord size={20} />,
    url: "https://discord.gg/qERZXGJT8Y",
    username: "nikcode",
    color: "#5865F2",
  },
  {
    name: "GeeksforGeeks",
    icon: <SiGeeksforgeeks size={20} />,
    url: "https://www.geeksforgeeks.org/user/nikulsut28ew/",
    username: "nikulsut28ew",
    color: "#2F8D46",
  },
  {
    name: "HackerRank",
    icon: <SiHackerrank size={20} />,
    url: "https://www.hackerrank.com/profile/nikulsuthar973",
    username: "nikulsuthar973",
    color: "#2EC866",
  },
  {
    name: "Dev.to",
    icon: <SiDevdotto size={20} />,
    url: "https://dev.to/nikulsuthar",
    username: "nikulsuthar",
    color: "#0A0A0A",
  },
  {
    name: "Medium",
    icon: <SiMedium size={20} />,
    url: "https://medium.com/@nikulsuthar",
    username: "nikulsuthar",
    color: "#000000",
  },
  {
    name: "Buy Me a Coffee",
    icon: <SiBuymeacoffee size={20} />,
    url: "https://buymeacoffee.com/nikul",
    username: "nikul",
    color: "#FF813F",
  },
];

// Education history for V4 (descending chronological order)
export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    university: "JECRC University",
    college: "JECRC University",
    period: "Aug 2023 - 2025",
    grade: "8.13",
    courses: ["Advanced Algorithms", "Machine Learning", "Distributed Systems"],
    logo: jecrc,
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    university: "CVM University",
    college: "NVPAS College",
    period: "Aug 2020 - May 2023",
    grade: "9.72",
    courses: ["Data Structures", "Operating Systems", "Database Management"],
    logo: nvpas,
  },
];

// Professional Experience history for V4 (descending chronological order)
export const experience = [
  {
    logo: accenture,
    company: "Accenture",
    position: "Associate Software Engineer",
    type: "Full-Time",
    locationType: "On-site",
    location: "Ahmedabad, India",
    duration: "",
    period: "Oct 2025 - Present",
    fullPeriod: "15th Oct 2025 - Present",
    startDate: "2025-10-15",
    endDate: null,
    skills: ["SAP ABAP", "Agile Development", "System Diagnostics"],
    description:
      "Hired directly into a full-time engineering position after demonstrating excellent delivery performance, diagnostic skills, and developer contributions during internship.",
    link: "https://www.accenture.com/in-en/careers",
    color: "purple",
  },
  {
    logo: accenture,
    company: "Accenture",
    position: "Associate Software Engineer",
    type: "Internship",
    locationType: "Hybrid",
    location: "Ahmedabad, India",
    duration: "4 months",
    period: "Feb 2025 - Jun 2025",
    fullPeriod: "21st Feb 2025 - 20th Jun 2025",
    startDate: "2025-02-21",
    endDate: "2025-06-20",
    skills: ["SAP", "SAP ABAP", "DevOps"],
    description:
      "Successfully finalized a highly selective 4-month professional software internship, dividing time between virtual training blocks and in-office sprints. Conducted structured engineering in SAP ABAP, integrated Agile/SDLC methods, and optimized modular application logic.",
    link: "https://www.accenture.com/in-en/careers",
    color: "purple",
  },
];

// Certificates data for V4 native view
export const certificates = [
  {
    id: "accenture-internship",
    name: "Internship Completion Certificate",
    organization: "Accenture",
    image: accentureInternshipCertificate,
    issueDate: "Jun 2025",
    link: null,
  },
  {
    id: "815825ed7753433cadcea35de3d3b3f0",
    name: "DevOps Fundamentals",
    organization: "IBM Skills Network",
    image: ibmDevOpsFundamentals,
    issueDate: "Dec 2024",
    link: "https://courses.jecrc.skillsnetwork.site/certificates/815825ed7753433cadcea35de3d3b3f0",
  },
  {
    id: "freecodecamp-csharp",
    name: "Foundational C# with Microsoft",
    organization: "FreeCodeCamp",
    image: freecodecampCSharp,
    issueDate: "Jan 2024",
    link: "https://freecodecamp.org/certification/nikulsuthar/foundational-c-sharp-with-microsoft",
  },
  {
    id: "41739f419d9e462a99da96c53786fcfa",
    name: "NodeJS",
    organization: "IBM Skills Network",
    image: ibmNodejs,
    issueDate: "Jan 2024",
    link: "https://courses.jecrc.skillsnetwork.site/certificates/41739f419d9e462a99da96c53786fcfa",
  },
  {
    id: "9379b0438f1c4e82b4310e1fa7caa36b",
    name: "JavaScript",
    organization: "IBM Skills Network",
    image: ibmJavascript,
    issueDate: "Jan 2024",
    link: "https://courses.jecrc.skillsnetwork.site/certificates/9379b0438f1c4e82b4310e1fa7caa36b",
  },
  {
    id: "1b60a3a2871545b38bf6f1528f0402b0",
    name: "Web Development using HTML",
    organization: "IBM Skills Network",
    image: ibmHTML,
    issueDate: "Jan 2024",
    link: "https://courses.jecrc.skillsnetwork.site/certificates/1b60a3a2871545b38bf6f1528f0402b0",
  },
  {
    id: "K4P4KFGRSGM4",
    name: "Exploratory Data Analysis for Machine Learning",
    organization: "Coursera",
    image: courseraDataForML,
    issueDate: "Jan 2023",
    link: "https://coursera.org/verify/K4P4KFGRSGM4",
  },
  {
    id: "82TJR2NHLHU8",
    name: "Introduction to Artificial Intelligence (AI)",
    organization: "Coursera",
    image: courseraAI,
    issueDate: "Jan 2023",
    link: "https://coursera.org/verify/82TJR2NHLHU8",
  },
  {
    id: "W8ALPEY4JMW5",
    name: "Version Control",
    organization: "Coursera",
    image: courseraVersionControl,
    issueDate: "Jul 2022",
    link: "https://coursera.org/verify/W8ALPEY4JMW5",
  },
  {
    id: "GFLK2D83RJTA",
    name: "Programming with JavaScript",
    organization: "Coursera",
    image: courseraJavascript,
    issueDate: "Jul 2022",
    link: "https://coursera.org/verify/GFLK2D83RJTA",
  },
  {
    id: "WHPDYPMGY2K2",
    name: "Introduction to Front-End Development",
    organization: "Coursera",
    image: courseraFrontend,
    issueDate: "Jul 2022",
    link: "https://coursera.org/verify/WHPDYPMGY2K2",
  },
  {
    id: "9KMXQ2DW64AD",
    name: "Foundations of User Experience (UX) Design",
    organization: "Coursera",
    image: courseraUX,
    issueDate: "Jul 2022",
    link: "https://coursera.org/verify/9KMXQ2DW64AD",
  },
  {
    id: "CB5TSLJ55QK2",
    name: "Technical Support Fundamentals",
    organization: "Coursera",
    image: courseraTechSupport,
    issueDate: "Jul 2022",
    link: "https://coursera.org/verify/CB5TSLJ55QK2",
  },
  {
    id: "NLFH3TR9YHV4",
    name: "Java Database Connectivity (JDBC) Introduction",
    organization: "Coursera",
    image: courseraJDBC,
    issueDate: "Jul 2022",
    link: "https://coursera.org/verify/NLFH3TR9YHV4",
  },
];

