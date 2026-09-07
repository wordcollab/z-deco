import { useState } from "react";
import { useI18n } from "../i18n";
import { WhatsAppIcon, ArrowRightIcon } from "./icons";
import { waLink } from "../config";
import { Reveal } from "./Reveal";
import { cn } from "../utils/cn";

export function Portfolio() {
  const { t } = useI18n();
  const [cat, setCat] = useState("all");

  const items = t.portfolio.items.filter((i) => cat === "all" || i.cat === cat);

  return (
    <section id="realisations" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-widest text-accent">
            {t.portfolio.kicker}
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            {t.portfolio.title}
          </h2>
          <p className="mt-4 text-lg text-ink/60">{t.portfolio.subtitle}</p>
        </Reveal>

        {/* Category filter */}
        <Reveal delay={80}>
          <div className="no-scrollbar mt-9 flex gap-2 overflow-x-auto pb-1">
            {t.portfolio.categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setCat(c.key)}
                className={cn(
                  "whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                  cat === c.key
                    ? "bg-ink text-white shadow-sm"
                    : "bg-sand text-ink/60 hover:bg-line hover:text-ink"
                )}
              >
                {c.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <Reveal key={item.img} delay={idx * 60}>
              <figure className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink-2 shadow-lg shadow-ink/5">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                  <div>
                    <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                      {item.tag}
                    </span>
                    <div className="mt-2 font-display text-lg font-bold text-white">
                      {item.title}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* "See more" CTA */}
        <Reveal className="mt-12 flex flex-col items-center gap-4 rounded-2xl bg-sand px-6 py-8 text-center">
          <p className="text-lg font-semibold text-ink">{t.portfolio.more}</p>
          <a
            href={waLink(t.cta.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition hover:brightness-105"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {t.portfolio.moreCta}
            <ArrowRightIcon className="h-4 w-4 rtl:-scale-x-100" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
