import { cn } from "../utils/cn";

type LogoProps = {
  /** "light" = for dark backgrounds (white wordmark), "dark" = white backgrounds (ink wordmark) */
  variant?: "light" | "dark";
  className?: string;
};

export function Logo({ variant = "dark", className }: LogoProps) {
  const wordColor = variant === "light" ? "text-white" : "text-ink";

  return (
    <a href="#accueil" className={cn("group inline-flex items-center gap-2.5", className)}>
      <span className="relative inline-flex h-10 w-10 items-center justify-center">
        <svg viewBox="0 0 44 44" className="h-full w-full drop-shadow-sm" aria-hidden="true">
          <defs>
            <linearGradient id="zdeco-grad" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#3aa2f2" />
              <stop offset="1" stopColor="#1773c9" />
            </linearGradient>
          </defs>
          <rect width="44" height="44" rx="12" fill="url(#zdeco-grad)" />
          <path
            d="M12 13h20M32 13L12 31M12 31h20"
            stroke="white"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </span>
      <span className="font-display text-xl font-extrabold tracking-tight leading-none">
        <span className="text-accent">Z</span>
        <span className={wordColor}> DECO</span>
      </span>
    </a>
  );
}
