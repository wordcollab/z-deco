import { useI18n } from "../i18n";
import { trustIconMap, IconRenovation } from "./icons";

export function TrustBar() {
  const { t } = useI18n();

  return (
    <section className="relative z-20 -mt-14 md:-mt-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-line shadow-xl shadow-ink/5 ring-1 ring-line md:grid-cols-4">
          {t.trust.map((item) => {
            const Icon = trustIconMap[item.icon] ?? IconRenovation;
            return (
              <div
                key={item.title}
                className="flex flex-col gap-3 bg-white p-6 transition-colors hover:bg-sand/60 md:p-8"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <div className="font-display text-sm font-bold leading-snug text-ink md:text-base">
                    {item.title}
                  </div>
                  <div className="mt-1 text-xs text-ink/55 md:text-sm">{item.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
