// ============================================================================
//  PORTFOLIO CONTENT — EDIT ME
//  ---------------------------------------------------------------------------
//  Every piece of personal content lives in this one file. Swap any value
//  below and the whole site updates automatically. Nothing here is hardcoded
//  into the components.
// ============================================================================

// ----------------------------------------------------------------------------
//  HERO MEDIA
// ----------------------------------------------------------------------------
// The cinematic background for the hero. Paste a hosted mp4/webm URL (or a
// local path under /public, e.g. "/video/hero.mp4"). While this placeholder is
// in place, an animated gradient fallback renders instead.
export const HERO_BACKGROUND_VIDEO = "BACKGROUND_VIDEO";

// Optional poster image shown before the video plays.
export const HERO_BACKGROUND_POSTER = "BACKGROUND_POSTER";

// About-section motion panel. Paste a hosted mp4/webm URL when ready.
export const ABOUT_BACKGROUND_VIDEO = "BACKGROUND_VIDEO";
export const ABOUT_BACKGROUND_POSTER = "BACKGROUND_POSTER";

// ----------------------------------------------------------------------------
//  PROFILE
// ----------------------------------------------------------------------------
export const profile = {
  // 👈 REPLACE: your full name
  name: "Siddhant Jain",

  // The name of this site, used in the header and document title.
  siteName: "Siddhant Portfolio",

  // 👈 REPLACE: your first name (used for the monogram / sign-off)
  firstName: "Siddhant",

  // 👈 REPLACE: your role / title
  role: "Full-Stack Developer",

  // 👈 REPLACE: your city / location
  city: "Your City",

  // 👈 REPLACE: your email address (drives the contact buttons)
  email: "siddhant0516@gmail.com",

  // 👈 REPLACE: your resume / CV link
  resumeUrl: "#",

  // 👈 PROFILE IMAGE PLACEHOLDER: paste your portrait URL here when ready.
  profileImage: "",

  // 👈 REPLACE: a short, honest introduction — your interests, current focus,
  // and the kind of work you want to grow into.
  bio: "I’m Siddhant Jain, a developer building my foundation across the web stack. I’m interested in thoughtful interfaces, practical software, and learning by turning ideas into working experiences.",

  // 👈 REPLACE: availability — shows as a status badge in the hero
  availability: "Open to freelance & full-time roles" as string,
} as const;

// ----------------------------------------------------------------------------
//  SOCIAL LINKS
// ----------------------------------------------------------------------------
export type SocialIcon =
  | "github"
  | "linkedin"
  | "twitter"
  | "dribbble"
  | "instagram"
  | "mail"
  | "globe";

export interface SocialLink {
  label: string;
  handle: string;
  url: string;
  icon: SocialIcon;
}

// The live contact profiles currently used across the site.
export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    handle: "@sidthegoat3432",
    url: "https://github.com/sidthegoat3432",
    icon: "github",
  },
  {
    label: "Instagram",
    handle: "@siddhant34323",
    url: "https://www.instagram.com/siddhant34323/",
    icon: "instagram",
  },
];

// ----------------------------------------------------------------------------
//  PROJECTS
// ----------------------------------------------------------------------------
export interface Project {
  id: string;
  // 👈 REPLACE: project title
  title: string;
  // 👈 REPLACE: 1–2 sentence description of what the project is and your role
  description: string;
  // 👈 IMAGE PLACEHOLDER: paste an image URL (https://... or /projects/x.png)
  image?: string;
  // 👈 VIDEO PLACEHOLDER: paste a video URL — takes priority over the image
  video?: string;
  // 👈 REPLACE: live link / case study URL
  link: string;
  tags: string[];
  year: string;
}

// 👈 REPLACE: add, remove, or reorder projects freely.
export const projects: Project[] = [
  {
    id: "project-01",
    title: "Signal — Brand & Web",
    description:
      "Replace with a 1–2 sentence description of this project and the role you played in it.",
    image: "",
    video: "",
    link: "#",
    tags: ["Art Direction", "Web Design"],
    year: "2026",
  },
  {
    id: "project-02",
    title: "Pulse — Product Platform",
    description:
      "Replace with a 1–2 sentence description of this project and the role you played in it.",
    image: "",
    video: "",
    link: "#",
    tags: ["Product Design", "React"],
    year: "2025",
  },
  {
    id: "project-03",
    title: "Drift — Motion Study",
    description:
      "Replace with a 1–2 sentence description of this project and the role you played in it.",
    image: "",
    video: "",
    link: "#",
    tags: ["Motion", "Creative Dev"],
    year: "2025",
  },
  {
    id: "project-04",
    title: "Atlas — Design System",
    description:
      "Replace with a 1–2 sentence description of this project and the role you played in it.",
    image: "",
    video: "",
    link: "#",
    tags: ["Design Systems", "UI Engineering"],
    year: "2024",
  },
];

// ----------------------------------------------------------------------------
//  TRACK RECORD
// ----------------------------------------------------------------------------
export interface TrackRecordItem {
  year: string;
  title: string;
  description: string;
  link?: string;
  linkLabel?: string;
}

// 👈 REPLACE: honest milestones, programs, projects, or writing you want to document.
export const trackRecord: TrackRecordItem[] = [
  {
    year: "NOW",
    title: "Building across the web stack",
    description:
      "Developing a stronger foundation through hands-on frontend, backend, and product experiments.",
  },
  {
    year: "2026",
    title: "Turning class ideas into digital work",
    description:
      "Websites, animations, presentations, and interactive explainers built to make an idea clearer.",
    link: "#projects",
    linkLabel: "See the work",
  },
  {
    year: "2026",
    title: "Learning AI by making things",
    description:
      "Exploring how AI, technology, business, and design can come together in useful experiences.",
  },
  {
    year: "ONGOING",
    title: "Practice outside the screen",
    description:
      "Volleyball, badminton, music production, and the habits that keep curiosity and discipline in motion.",
  },
];

// ----------------------------------------------------------------------------
//  POSTERS
// ----------------------------------------------------------------------------
export interface Poster {
  id: string;
  // 👈 REPLACE: poster title
  title: string;
  // 👈 POSTER IMAGE PLACEHOLDER: paste an image URL (https://... or /posters/x.png)
  image?: string;
}

// 👈 REPLACE: your 3 best posters. Drop an image URL into each `image` field.
export const posters: Poster[] = [
  { id: "poster-01", title: "Poster 01", image: "" },
  { id: "poster-02", title: "Poster 02", image: "" },
  { id: "poster-03", title: "Poster 03", image: "" },
];

// ----------------------------------------------------------------------------
//  TOOLS
// ----------------------------------------------------------------------------
export interface Tool {
  // 👈 REPLACE: tool / technology name
  name: string;
  // 👈 REPLACE: a short category label shown on the tile
  category: string;
  // 👈 REPLACE: the two-sentence capability description shown in the popup
  description: string;
}

// 👈 REPLACE: the 12 tools you actually use in your current toolkit.
export const tools: Tool[] = [
  {
    name: "TypeScript",
    category: "Language",
    description: "I use TypeScript to make interfaces and application logic easier to reason about as products grow. Strong types catch mistakes early and make collaboration across a codebase more predictable.",
  },
  {
    name: "JavaScript",
    category: "Language",
    description: "JavaScript is the foundation I use to create responsive, interactive experiences on the web. I focus on clear, modern patterns that keep behavior fast and maintainable.",
  },
  {
    name: "React",
    category: "Frontend",
    description: "I build React interfaces as reusable systems instead of isolated screens. This keeps complex products consistent, flexible, and easier to evolve.",
  },
  {
    name: "Next.js",
    category: "Frontend",
    description: "I use Next.js when a project benefits from structured routing, performance-focused rendering, and a strong full-stack foundation. It helps connect polished frontend work to production-ready application flows.",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    description: "Tailwind lets me move quickly while keeping spacing, typography, and color decisions consistent. I use it to create responsive interfaces without losing control of the visual system.",
  },
  {
    name: "Framer Motion",
    category: "Frontend",
    description: "I use Framer Motion to give interfaces a sense of rhythm and intention. Motion supports hierarchy and feedback rather than distracting from the product.",
  },
  {
    name: "Node.js",
    category: "Backend",
    description: "Node.js helps me build the server-side logic behind useful, connected products. I use it for APIs, integrations, background work, and the application behavior that interfaces depend on.",
  },
  {
    name: "Convex",
    category: "Backend",
    description: "Convex gives me a reactive backend foundation for products that need live data and simple server logic. I use it to connect frontend experiences to reliable queries, mutations, and authentication flows.",
  },
  {
    name: "Figma",
    category: "Design",
    description: "I use Figma to explore structure, communicate direction, and refine interfaces before they become code. It helps turn abstract ideas into shared, testable decisions.",
  },
  {
    name: "GSAP",
    category: "Design",
    description: "GSAP is useful when a project needs precise, choreographed animation. I use it to build expressive sequences that feel intentional across scroll, interaction, and transition states.",
  },
  {
    name: "Git",
    category: "Tooling",
    description: "Git keeps the work traceable, collaborative, and safe to iterate on. I use clear commits and branches to make progress easier to review and recover.",
  },
  {
    name: "Docker",
    category: "Tooling",
    description: "Docker helps me create repeatable environments across development and deployment. It reduces setup friction and makes the path from local work to production more dependable.",
  },
];

export interface AboutCard {
  number: string;
  title: string;
  copy: string;
}

// 👈 REPLACE: the four personal details you want visitors to understand first.
export const aboutCards: AboutCard[] = [
  {
    number: "01",
    title: "Toronto-based",
    copy: "I use Toronto as the visual anchor for this site: tall structures, clean grids, transit energy, skyline motion, and big-city ambition.",
  },
  {
    number: "02",
    title: "Project builder",
    copy: "I like turning class ideas into finished digital experiences: websites, animations, decks, and interactive explainers.",
  },
  {
    number: "03",
    title: "Tech + design",
    copy: "I’m drawn to where AI, technology, business, and design meet — lately I’m all-in on learning AI.",
  },
  {
    number: "04",
    title: "Hands-on learner",
    copy: "I learn by building, testing, fixing, and presenting. Off the screen, that energy goes into volleyball, badminton, and producing the odd track.",
  },
];

export interface Strength {
  title: string;
  copy: string;
}

// 👈 REPLACE: the qualities and working habits you want clients to remember.
export const strengths: Strength[] = [
  {
    title: "Clear communication",
    copy: "I keep decisions, trade-offs, and progress visible from kickoff to handoff.",
  },
  {
    title: "Initiative",
    copy: "I look for the next useful step instead of waiting for a perfect brief.",
  },
  {
    title: "Ownership",
    copy: "I stay accountable for the outcome, not just the part of the task I was assigned.",
  },
  {
    title: "Reliability",
    copy: "I value thoughtful estimates, consistent follow-through, and work that holds up.",
  },
  {
    title: "Problem-solving",
    copy: "I break complicated problems into focused decisions and practical solutions.",
  },
  {
    title: "Collaboration",
    copy: "I work openly with designers, founders, and engineers to make the strongest version.",
  },
  {
    title: "Adaptability",
    copy: "I stay curious, take feedback seriously, and adjust quickly when the work changes.",
  },
  {
    title: "Attention to detail",
    copy: "I care about the small interactions, spacing decisions, and edge cases that make work feel complete.",
  },
];

export interface Language {
  name: string;
  note: string;
}

// 👈 REPLACE: spoken languages and your comfort level with each one.
export const languages: Language[] = [
  { name: "English", note: "Fluent" },
  { name: "French", note: "Conversational" },
  { name: "Hindi", note: "Fluent" },
];

export interface Service {
  title: string;
  copy: string;
}

// 👈 REPLACE: the services you want visitors to ask you about.
export const services: Service[] = [
  {
    title: "Personal websites",
    copy: "Thoughtful portfolios, landing pages, and personal sites that give your work a clear presence online.",
  },
  {
    title: "Frontend development",
    copy: "Responsive interfaces built with attention to structure, usability, motion, and maintainable code.",
  },
  {
    title: "UI implementation",
    copy: "Designs translated into polished, accessible web experiences that feel consistent across screen sizes.",
  },
  {
    title: "Website improvements",
    copy: "Focused help with visual refinements, interactions, responsiveness, and the details that make a site feel finished.",
  },
];

// ----------------------------------------------------------------------------
//  ABOUT — STATS
// ----------------------------------------------------------------------------
// 👈 REPLACE: quick numbers for the About section.
export const stats = [
  { value: "5+", label: "Years building" },
  { value: "30+", label: "Projects shipped" },
  { value: "14", label: "Happy clients" },
  { value: "9", label: "Awards & features" },
] as const;
