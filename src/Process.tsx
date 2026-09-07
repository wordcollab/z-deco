import { useI18n } from "../i18n";
import { Reveal } from "./Reveal";

export function Process() {
  const { t } = useI18n();

  return (
    <section id="methode" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-accent">
            {t.process.kicker}
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            {t.process.title}
          </h2>
          <p className="mt-4 text-lg text-ink/60">{t.process.subtitle}</p>
        </Reveal>

        <div className="relative mt-14 grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Connector line (desktop) */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-line md:block" />

          {t.process.items.map((step, idx) => (
            <Reveal key={step.n} delay={idx * 80} className="relative">
              <div className="flex items-start gap-4 md:flex-col md:items-center md:text-center">
                <span className="relative z-10 inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-deep font-display text-lg font-extrabold text-white shadow-lg shadow-accent/25">
                  {step.n}
                </span>
                <div className="md:mt-5">
                  <h3 className="font-display text-lg font-bold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">{step.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
