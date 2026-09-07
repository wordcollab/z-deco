import { useI18n } from "../i18n";
import { SITE, waLink } from "../config";
import { Logo } from "./Logo";
import {
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  WhatsAppIcon,
  InstagramIcon,
  FacebookIcon,
} from "./icons";

export function Footer() {
  const { t, lang } = useI18n();

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">{t.footer.about}</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white/50">
              {t.footer.linksTitle}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {t.footer.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white/50">
              {t.footer.servicesTitle}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {t.services.items.map((service) => (
                <li key={service.title}>
                  <a
                    href="#services"
                    className="text-sm text-white/70 transition-colors hover:text-accent"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white/50">
              {t.footer.contactTitle}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2.5">
                <PhoneIcon className="h-4 w-4 shrink-0 text-accent" />
                <a href={SITE.phoneHref} className="transition-colors hover:text-accent">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <WhatsAppIcon className="h-4 w-4 shrink-0 text-accent" />
                <a
                  href={waLink(t.cta.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPinIcon className="h-4 w-4 shrink-0 text-accent" />
                <span>{SITE.address[lang]}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <ClockIcon className="h-4 w-4 shrink-0 text-accent" />
                <span>{t.footer.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} {SITE.brand}. {t.footer.rights}
          </p>
          <div className="flex items-center gap-3">
            <a
              href={waLink(t.cta.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/70 transition-colors hover:bg-accent hover:text-white"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/70 transition-colors hover:bg-accent hover:text-white"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/70 transition-colors hover:bg-accent hover:text-white"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
