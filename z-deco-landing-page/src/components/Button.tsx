import type { ReactNode } from "react";
import { cn } from "../utils/cn";

type Variant = "primary" | "ghost" | "darkghost" | "whatsapp" | "call";

type ButtonProps = {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  external?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-accent to-accent-deep text-white shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:brightness-105",
  ghost: "border border-white/25 bg-white/5 text-white backdrop-blur hover:bg-white/15",
  darkghost:
    "border border-ink/15 bg-white text-ink shadow-sm hover:border-ink/30 hover:bg-sand",
  whatsapp:
    "bg-[#25D366] text-white shadow-lg shadow-green-500/25 hover:shadow-xl hover:brightness-105",
  call: "bg-white text-ink shadow-lg shadow-black/10 hover:shadow-xl hover:brightness-105",
};

export function Button({ href, variant = "primary", children, className, external }: ButtonProps) {
  return (
    <a
      href={href}
      className={cn(base, variants[variant], className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
