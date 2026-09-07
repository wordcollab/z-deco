import { useI18n } from "../i18n";
import { IMG } from "../config";
import { CheckIcon, ArrowRightIcon } from "./icons";
import { Button } from "./Button";
import { Reveal } from "./Reveal";

export function About() {
  const { t } = useI18n();

  return (
    <section id="apropos" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Image */}
          <Reveal className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-br from-accent/15 to-transparent" />
              <img
                src={IMG.about}
                alt="Artisan Z DECO travaillant sur un mur"
                className="aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl shadow-ink/15"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink/85 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
                {t.about.imageCaption}
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <Reveal delay={100} className="lg:w-1/2">
            <span className="text-sm font-bold uppercase tracking-widest text-accent">
              {t.about.kicker}
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
              {t.about.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/70">{t.about.p1}</p>
            <p className="mt-4 text-lg leading-relaxed text-ink/70">{t.about.p2}</p>

            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {t.about.points.map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm font-semibold text-ink">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button href="#contact" variant="primary">
                {t.about.cta}
                <ArrowRightIcon className="h-4 w-4 rtl:-scale-x-100" />
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
