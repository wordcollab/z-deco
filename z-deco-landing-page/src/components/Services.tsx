import { useI18n } from "../i18n";
import { serviceIconMap, IconRenovation, ArrowRightIcon } from "./icons";
import { Button } from "./Button";
import { Reveal } from "./Reveal";

export function Services() {
  const { t } = useI18n();

  return (
    <section id="services" className="scroll-mt-24 bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-widest text-accent-2">
            {t.services.kicker}
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            {t.services.title}
          </h2>
          <p className="mt-4 text-lg text-white/60">{t.services.subtitle}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((item, idx) => {
            const Icon = serviceIconMap[item.icon] ?? IconRenovation;
            return (
              <Reveal key={item.title} delay={idx * 60}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.06]">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent-deep/20 text-accent transition-colors duration-300 group-hover:from-accent group-hover:to-accent-deep group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{item.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Button href="#contact" variant="primary">
            {t.services.cta}
            <ArrowRightIcon className="h-4 w-4 rtl:-scale-x-100" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
