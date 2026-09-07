import { useI18n } from "../i18n";
import { SITE, waLink } from "../config";
import { WhatsAppIcon, PhoneIcon } from "./icons";
import { Button } from "./Button";
import { Reveal } from "./Reveal";

export function FinalCta() {
  const { t } = useI18n();

  return (
    <section id="contact" className="scroll-mt-24 bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ink-3 to-ink-2 p-8 ring-1 ring-white/10 md:p-14">
            {/* Glow accents */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/20 blur-[110px]" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-accent-deep/20 blur-[110px]" />

            <div className="relative text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {t.cta.kicker}
              </span>

              <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
                {t.cta.title}
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">{t.cta.subtitle}</p>

              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  href={waLink(t.cta.whatsappMessage)}
                  variant="whatsapp"
                  external
                  className="w-full sm:w-auto"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  {t.cta.whatsapp}
                </Button>
                <Button href={SITE.phoneHref} variant="call" className="w-full sm:w-auto">
                  <PhoneIcon className="h-5 w-5 text-accent-deep" />
                  {t.cta.call}
                </Button>
              </div>

              <div className="mt-7 flex flex-col items-center justify-center gap-2 text-sm text-white/60 sm:flex-row sm:gap-6">
                <span className="inline-flex items-center gap-2">
                  <PhoneIcon className="h-4 w-4 text-accent" />
                  {SITE.phoneDisplay}
                </span>
                <span className="hidden h-1 w-1 rounded-full bg-white/25 sm:block" />
                <span>{t.cta.note}</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
