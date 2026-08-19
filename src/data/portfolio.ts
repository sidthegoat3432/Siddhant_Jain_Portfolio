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
// Aerial footage of Toronto's skyline (Lucastphotography, CC BY 4.0).
export const HERO_BACKGROUND_VIDEO: string =
  "https://upload.wikimedia.org/wikipedia/commons/9/94/Toronto_Skyline.webm";

// Optional poster image shown before the video plays.
export const HERO_BACKGROUND_POSTER = "";

// About-section motion panel — same dusk aerial Toronto skyline as the hero
// (Lucastphotography, CC BY 4.0). Swap for any hosted mp4/webm URL when ready.
export const ABOUT_BACKGROUND_VIDEO: string =
  "https://upload.wikimedia.org/wikipedia/commons/9/94/Toronto_Skyline.webm";
export const ABOUT_BACKGROUND_POSTER = "";

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
  role: "Builder & creative problem-solver",

  // 👈 REPLACE: your city / location
  city: "Toronto, Canada",

  // 👈 REPLACE: your email address (drives the contact buttons)
  email: "siddhant0516@gmail.com",

  // 👈 REPLACE: your resume / CV link
  resumeUrl:
    "https://drive.google.com/file/d/1fHsBjT29sho26HJW2Mrm2JC6ayTm6RWY/view?usp=sharing",

  // 👈 PROFILE IMAGE: your portrait URL.
  profileImage:
    "https://lh3.googleusercontent.com/d/1PoHLLd7rhHohDGcX85Rnx3BAuqE7lrTk",

  // 👈 REPLACE: a short, honest introduction — your interests, current focus,
  // and the kind of work you want to grow into.
  bio: "I’m Siddhant Jain, a student and creative builder learning across design, storytelling, and technology. I’m interested in thoughtful interfaces, clear communication, and turning ideas into finished experiences.",

  // 👈 REPLACE: availability — shows as a status badge in the hero
  availability: "Open to freelance & full-time roles" as string,
} as const;

// Opens Gmail's compose window in the browser with this email pre-filled.
export const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  profile.email,
)}`;

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
    title: "Discoverly",
    description:
      "A curated directory of AI tools, creative resources, productivity apps, and learning platforms — my first website, built and shipped to the web.",
    image:
      "https://s0.wp.com/mshots/v1/https%3A%2F%2Fsidthegoat3432.github.io%2Fdiscoverly%2F?w=1280&h=720",
    video: "",
    link: "https://sidthegoat3432.github.io/discoverly/#/",
    tags: ["Web Design", "Curated Directory"],
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
    year: "FALL 2026",
    title: "Starting the IB Diploma Programme",
    description:
      "Heading into high school on the International Baccalaureate track.",
  },
  {
    year: "2026",
    title: "Writing on Medium",
    description:
      "Sharing thinking and progress in public as part of building a clearer point of view.",
    link: "https://medium.com/@siddhant0516",
    linkLabel: "Read on Medium",
  },
  {
    year: "2025",
    title: "Completed the IBT (International Business & Technology)",
    description:
      "Finished the International Business & Technology programme before moving into the IB Diploma track.",
  },
  {
    year: "2024",
    title: "Peel Skills — 2nd Place, Video",
    description:
      "Placed second for a video entry, recognizing storytelling and execution in front of an audience.",
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
  { id: "poster-01", title: "Porsche 911 GT3 RS", image: "https://lh3.googleusercontent.com/d/1OvVhC79nUF06RrBY0vLnVLKN20v5HrwH" },
  { id: "poster-02", title: "Uma Ice's Kakigori", image: "https://lh3.googleusercontent.com/d/19HSZuOiuD9xjlBV8JhsUBfLyt9eCJLV8" },
  { id: "poster-03", title: "Sony WH-1000XM6", image: "https://lh3.googleusercontent.com/d/1kcTO3CijkCTqWSa9DBQPxtmVuZ06kmqO" },
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
    name: "Photoshop",
    category: "Design",
    description: "Photoshop is where I refine images, clean up layouts, and give visual ideas a polished finish. I use it to make assets and graphics that feel intentional rather than default.",
  },
  {
    name: "Video editing",
    category: "Design",
    description: "I edit video with a focus on rhythm, pacing, and clear storytelling. Cuts, sound, and structure come together so a video holds attention from the first frame.",
  },
  {
    name: "Graphic design",
    category: "Design",
    description: "I create layouts, posters, and visual systems with clear hierarchy and consistent type and color. Graphic design helps me communicate an idea before a single word is read.",
  },
  {
    name: "Creative writing",
    category: "Content",
    description: "I write with the goal of making complicated ideas feel simple and human. Whether it’s project copy or an essay, I focus on clarity, voice, and momentum.",
  },
  {
    name: "Presentations",
    category: "Present",
    description: "I design decks that explain one idea clearly per slide instead of cramming everything in at once. Strong structure and clean visuals keep the audience with the story.",
  },
  {
    name: "Research",
    category: "Lead",
    description: "I dig into facts, audience, and context before making decisions. Research keeps the work grounded so the final result answers the right question.",
  },
  {
    name: "Storytelling",
    category: "Content",
    description: "I shape projects around a clear beginning, middle, and point. Storytelling turns a collection of ideas into something people can follow and remember.",
  },
  {
    name: "Public speaking",
    category: "Present",
    description: "I present the work rather than just submitting it. Preparation and delivery help the idea land with a room the same way it lands on the screen.",
  },
  {
    name: "AI & Technology",
    category: "Lead",
    description: "I’m drawn to where AI, technology, business, and design intersect. I stay curious about new tools and learn by building small experiments with them.",
  },
  {
    name: "Branding",
    category: "Design",
    description: "I think about names, voice, color, and consistency as one connected system. Branding gives a project a point of view that shows up everywhere.",
  },
  {
    name: "Pitching",
    category: "Lead",
    description: "I turn an idea into a clear, confident case for why it matters and how it works. Pitching is about connecting the concept to the people in the room.",
  },
  {
    name: "Photography",
    category: "Design",
    description: "I use photography to frame, light, and capture moments with intention. Composition and mood make an image feel considered rather than accidental.",
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
    title: "City energy",
    copy: "Toronto is the backdrop this site is built around — clean grids, skyline lines, transit rhythm, and the ambition that comes with a big city.",
  },
  {
    number: "02",
    title: "From idea to finished",
    copy: "I push class concepts into real, usable work: websites, animations, decks, and interactive demos you can actually open and click through.",
  },
  {
    number: "03",
    title: "The intersection",
    copy: "I’m most curious where AI, technology, business, and design overlap. Lately, I’ve been all-in on learning AI.",
  },
  {
    number: "04",
    title: "Learn by doing",
    copy: "I pick things up fastest by building, testing, fixing, and presenting. Off the screen, that energy goes into volleyball, badminton, and the occasional track.",
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
    title: "Building websites",
    copy: "Clean, responsive websites and landing pages that present your work clearly and feel finished on every screen.",
  },
  {
    title: "Making posters for your product",
    copy: "Posters and promotional visuals designed to catch attention and communicate your product's message at a glance.",
  },
  {
    title: "Tutoring",
    copy: "Patient, clear help with school subjects, tech basics, and personal projects so concepts click and stick.",
  },
  {
    title: "Making presentations",
    copy: "Decks and pitch presentations structured to tell one clear story and keep an audience engaged from start to finish.",
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
