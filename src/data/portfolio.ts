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
  email: "hello@example.com",

  // 👈 REPLACE: your resume / CV link
  resumeUrl: "#",

  // 👈 REPLACE: 2–3 sentences about you — the stack you work in, the
  // problems you solve, and the kind of software you want to build next.
  bio: "A short bio goes here — the languages and tools you work with, the problems you solve, and the kind of software you want to build next.",

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

// 👈 REPLACE: each entry with your real profile URL + handle.
export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    handle: "@yourhandle",
    url: "https://github.com/yourusername",
    icon: "github",
  },
  {
    label: "LinkedIn",
    handle: "/in/yourhandle",
    url: "https://linkedin.com/in/yourusername",
    icon: "linkedin",
  },
  {
    label: "X / Twitter",
    handle: "@yourhandle",
    url: "https://x.com/yourusername",
    icon: "twitter",
  },
  {
    label: "Dribbble",
    handle: "@yourhandle",
    url: "https://dribbble.com/yourusername",
    icon: "dribbble",
  },
  {
    label: "Instagram",
    handle: "@yourhandle",
    url: "https://instagram.com/yourusername",
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
}

// 👈 REPLACE: the tools you actually use (aim for ~15 for a balanced grid).
export const tools: Tool[] = [
  { name: "TypeScript", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Framer Motion", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Convex", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "Prisma", category: "Backend" },
  { name: "Figma", category: "Design" },
  { name: "GSAP", category: "Design" },
  { name: "Three.js", category: "Design" },
  { name: "Git", category: "Tooling" },
  { name: "Docker", category: "Tooling" },
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
