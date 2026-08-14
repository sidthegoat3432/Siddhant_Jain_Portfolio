import { ArrowUp } from "lucide-react";
import { profile, socialLinks } from "@/data/portfolio";
import { SocialIcon } from "./SocialIcon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-lg border border-border bg-card font-display text-sm font-semibold text-cream">
            {profile.firstName.charAt(0)}
            {profile.name.split(" ")[1]?.charAt(0) ?? ""}
          </span>
          <p className="text-sm text-muted-foreground">
            © {year} {profile.name}. Built with care.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-brand/40 hover:text-brand"
            >
              <SocialIcon icon={social.icon} className="size-4" />
            </a>
          ))}
          <a
            href="#top"
            aria-label="Back to top"
            className="ml-2 flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-all hover:bg-primary/90"
          >
            <ArrowUp className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
