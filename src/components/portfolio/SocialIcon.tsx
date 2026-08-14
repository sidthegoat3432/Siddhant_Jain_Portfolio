import {
  Dribbble,
  Github,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import type { SocialIcon as SocialIconKey } from "@/data/portfolio";

const iconMap: Record<SocialIconKey, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  dribbble: Dribbble,
  instagram: Instagram,
  mail: Mail,
  globe: Globe,
};

export function SocialIcon({
  icon,
  className,
}: {
  icon: SocialIconKey;
  className?: string;
}) {
  const Icon = iconMap[icon];
  return <Icon className={className} />;
}
