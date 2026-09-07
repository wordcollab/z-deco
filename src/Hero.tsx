import { useI18n } from "../i18n";
import { IMG } from "../config";
import { MapPinIcon, ArrowRightIcon } from "./icons";
import { Button } from "./Button";

export function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="accueil"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink"
    >
      {/* Background image + overlays */}
      <div className="absolute inset-0">
        <img
          src={IMG.hero}
          alt="Pose de placo par les artisans Z DECO"
          className="h-full w-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/60 to-ink" />
        <div className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-accent/20 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-24 pt-28 md:px-8 md:pt-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {t.hero.kicker}
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
            {t.hero.title1}{" "}
            <span className="bg-gradient-to-r from-accent-2 to-accent bg-clip-text text-transparent">
              {t.hero.highlight}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 md:text-xl">
            {t.hero.description}
          </p>

          <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/90">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
              <MapPinIcon className="h-5 w-5 text-accent" />
            </span>
            {t.hero.region}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#contact" variant="primary">
              {t.hero.ctaPrimary}
              <ArrowRightIcon className="h-4 w-4 rtl:-scale-x-100" />
            </Button>
            <Button href="#realisations" variant="ghost">
              {t.hero.ctaSecondary}
            </Button>
          </div>

        </div>

        {/* Stats */}
        <div className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
          {t.hero.stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl font-extrabold text-white md:text-4xl">
                {s.value}
              </div>
              <div className="mt-1.5 text-sm text-white/60">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
