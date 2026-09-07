export const INFO = {
  brand: "Z DECO",

  serviceArea: {
    fr: "Relizane et ses environs",
    ar: "غليزان وما جاورها",
  },

  phoneDisplay: "0672 25 35 70",
  phoneHref: "tel:+213672253570",
  whatsappNumber: "213672253570",
};

export function contactLinks(language) {
  const message =
    language === "ar"
      ? "سلام Z DECO، عندي مشروع وحاب نهدرو عليه."
      : "Bonjour Z DECO, j’ai un projet et je souhaite en discuter.";

  return {
    phone: INFO.phoneHref,
    whatsapp: `https://wa.me/${INFO.whatsappNumber}?text=${encodeURIComponent(
      message
    )}`,
  };
}
