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

  // 👈 REPLACE: your first name (used for the monogram / sign-off)
  firstName: "Siddhant",

  // 👈 REPLACE: your role / title
  role: "Designer & Developer",

  // 👈 REPLACE: your city / location
  city: "Your City",

  // 👈 REPLACE: your email address (drives the contact buttons)
  email: "hello@example.com",

  // 👈 REPLACE: your resume / CV link
  resumeUrl: "#",

  // 👈 REPLACE: 2–3 sentences about you — what you do, who you build for,
  // and the kind of work you want to make next.
  bio: "A short, two-to-three sentence bio goes here — what you do, who you build for, and the kind of work you want to make next.",

  // 👈 REPLACE: availability — "open" shows the green "available" badge
  availability: "Available for select projects" as string,
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
//  SKILLS
// ----------------------------------------------------------------------------
export interface Skill {
  name: string;
  level: number; // 0–100, drives the animated bar
}

export interface SkillGroup {
  category: string;
  items: Skill[];
}

// 👈 REPLACE: your real skills and proficiency levels.
export const skillGroups: SkillGroup[] = [
  {
    category: "Design",
    items: [
      { name: "Product Design", level: 92 },
      { name: "UI / UX", level: 90 },
      { name: "Design Systems", level: 84 },
      { name: "Prototyping", level: 88 },
    ],
  },
  {
    category: "Engineering",
    items: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 86 },
      { name: "Node.js", level: 78 },
      { name: "Three.js", level: 72 },
    ],
  },
  {
    category: "Motion & Craft",
    items: [
      { name: "Framer Motion", level: 88 },
      { name: "GSAP", level: 80 },
      { name: "Figma", level: 92 },
      { name: "Blender", level: 68 },
    ],
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
