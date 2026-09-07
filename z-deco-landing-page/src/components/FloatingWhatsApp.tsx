import { useI18n } from "../i18n";
import { waLink } from "../config";
import { WhatsAppIcon } from "./icons";

export function FloatingWhatsApp() {
  const { t } = useI18n();

  return (
    <a
      href={waLink(t.cta.whatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="group fixed bottom-5 end-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-500/30 transition-transform hover:scale-105"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" />
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
