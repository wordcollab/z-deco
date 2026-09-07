import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { WhatsAppIcon, MenuIcon, CloseIcon } from "./icons";
import { useI18n, type Lang } from "../i18n";
import { waLink } from "../config";
import { cn } from "../utils/cn";

const LANGS: { code: Lang; label: string }[] = [
  { code: "fr", label: "FR" },
  { code: "ar", label: "ع" },
];

export function Header() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  const nav = [
    { href: "#realisations", label: t.nav.realisations },
    { href: "#services", label: t.nav.services },
    { href: "#methode", label: t.nav.methode },
    { href: "#apropos", label: t.nav.apropos },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "border-b border-line bg-white/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <Logo variant={solid ? "dark" : "light"} />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                solid
                  ? "text-ink/70 hover:bg-sand hover:text-ink"
                  : "text-white/85 hover:bg-white/10 hover:text-white"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language toggle */}
          <div
            className={cn(
              "flex items-center rounded-full p-1 text-xs font-bold",
              solid ? "bg-sand" : "bg-white/10"
            )}
          >
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={cn(
                  "rounded-full px-2.5 py-1.5 transition-colors",
                  lang === l.code
                    ? "bg-accent text-white shadow"
                    : solid
                      ? "text-ink/50 hover:text-ink"
                      : "text-white/60 hover:text-white"
                )}
              >
                {l.label}
              </button>
            ))}
          </div>

          <a
            href={waLink(t.cta.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:brightness-105 sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span>WhatsApp</span>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full transition md:hidden",
              solid ? "text-ink hover:bg-sand" : "text-white hover:bg-white/10"
            )}
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-line bg-white px-5 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-semibold text-ink/80 transition hover:bg-sand"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={waLink(t.cta.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-white"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span>WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
}
