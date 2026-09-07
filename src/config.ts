/**
 * Central site configuration.
 * Edit the contact details here — they are used everywhere on the page.
 *
 * Note: per the brief, email has been removed. Communication is via
 * WhatsApp and phone/SMS only.
 */
export const SITE = {
  brand: "Z DECO",
  tagline: "Plâtrerie & Placo",

  // Phone / WhatsApp (placeholders — replace with real numbers)
  phoneDisplay: "+213 555 12 34 56",
  phoneHref: "tel:+213555123456",
  whatsappNumber: "213555123456", // international format, digits only

  address: { fr: "Relizane, Algérie", ar: "غليزان، الجزائر" },
} as const;

/** Build a WhatsApp deep link with a pre-filled message. */
export function waLink(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Image assets (Pexels) used across the page. */
export const IMG = {
  hero: "https://images.pexels.com/photos/11427405/pexels-photo-11427405.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1920&h=1280",
  about:
    "https://images.pexels.com/photos/6473978/pexels-photo-6473978.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1200",
  before:
    "https://images.pexels.com/photos/15798783/pexels-photo-15798783.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=750",
  after:
    "https://images.pexels.com/photos/6283963/pexels-photo-6283963.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=750",
};
