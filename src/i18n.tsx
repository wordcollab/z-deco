import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "fr" | "ar";

export const content = {
  fr: {
    nav: {
      realisations: "Réalisations",
      services: "Services",
      methode: "Méthode",
      apropos: "À propos",
      contact: "Contact",
    },
    hero: {
      kicker: "Spécialiste Plâtrerie • Placo • Staff",
      title1: "Transformez votre intérieur avec",
      highlight: "l'art du plâtre & du placo",
      description:
        "Z DECO imagine, réalise et finalise vos plafonds, cloisons et finitions. Un travail soigné, des matériaux de qualité et un chantier propre — du devis à la livraison.",
      region: "Relizane & sa région",
      ctaPrimary: "Devis gratuit",
      ctaSecondary: "Voir nos réalisations",
      stats: [
        { value: "+10", label: "années d'expérience" },
        { value: "+150", label: "chantiers réalisés" },
        { value: "100%", label: "clients satisfaits" },
      ],
      scroll: "Découvrir",
    },
    trust: [
      { icon: "hammer", title: "Réalisations sur mesure", desc: "Chaque projet est unique" },
      { icon: "quote", title: "Devis gratuit & rapide", desc: "Réponse sous 24h" },
      { icon: "pin", title: "Relizane & région", desc: "Déplacement sur site" },
      { icon: "clean", title: "Chantier propre", desc: "Délais respectés" },
    ],
    portfolio: {
      kicker: "Nos réalisations",
      title: "Un savoir-faire en images",
      subtitle:
        "Un aperçu des chantiers menés par Z DECO : plafonds, cloisons, staff et rénovation intérieure.",
      categories: [
        { key: "all", label: "Tous" },
        { key: "plafonds", label: "Plafonds" },
        { key: "cloisons", label: "Cloisons" },
        { key: "staff", label: "Staff" },
        { key: "renovation", label: "Rénovation" },
      ],
      more: "Envie de voir plus ?",
      moreCta: "Demandez nos photos par WhatsApp",
      items: [
        { img: "https://images.pexels.com/photos/11427524/pexels-photo-11427524.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=900", cat: "cloisons", tag: "Cloisons", title: "Pose placo BA13" },
        { img: "https://images.pexels.com/photos/6474129/pexels-photo-6474129.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=900", cat: "plafonds", tag: "Plafonds", title: "Plafond suspendu" },
        { img: "https://images.pexels.com/photos/8082209/pexels-photo-8082209.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=900", cat: "renovation", tag: "Rénovation", title: "Lambris & finitions" },
        { img: "https://images.pexels.com/photos/7166640/pexels-photo-7166640.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=900", cat: "plafonds", tag: "Plafonds", title: "Rendu haut de gamme" },
        { img: "https://images.pexels.com/photos/35493888/pexels-photo-35493888.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=900", cat: "renovation", tag: "Rénovation", title: "Pièce de vie moderne" },
        { img: "https://images.pexels.com/photos/7045316/pexels-photo-7045316.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=900", cat: "cloisons", tag: "Cloisons", title: "Cloisons & agencement" },
        { img: "https://images.pexels.com/photos/8146316/pexels-photo-8146316.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=900", cat: "renovation", tag: "Rénovation", title: "Mur accents & lissage" },
        { img: "https://images.pexels.com/photos/27604142/pexels-photo-27604142.png?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=900", cat: "staff", tag: "Staff", title: "Plafond décoratif" },
      ],
    },
    services: {
      kicker: "Nos services",
      title: "De la structure à la finition",
      subtitle:
        "Nous couvrons l'ensemble de votre projet de plâtrerie et de placo, avec exigence et propreté.",
      cta: "Demander un devis",
      items: [
        { icon: "ceiling", title: "Plafonds plâtre & staff", desc: "Faux-plafonds, plafonds suspendus et moulures en staff pour un rendu élégant." },
        { icon: "cloisons", title: "Cloisons en placo (BA13)", desc: "Cloisons légères, cloisons techniques et gaines, montées et finies." },
        { icon: "insulation", title: "Doublage & isolation", desc: "Isolation thermique et acoustique des murs et des plafonds." },
        { icon: "moulding", title: "Corniches & moulures", desc: "Gorges, corniches et moulures décoratives, pose soignée." },
        { icon: "enduit", title: "Enduits & lissage", desc: "Enduits de finition, lissage et lumière blanche pour un mur parfait." },
        { icon: "renovation", title: "Rénovation intérieure", desc: "Remise à neuf de vos pièces : murs, plafonds et menuiserie incluse." },
      ],
    },
    beforeAfter: {
      kicker: "Avant / Après",
      title: "La transformation d'un espace",
      subtitle:
        "Glissez le curseur pour comparer. Nos équipes redonnent vie à chaque pièce, du gros œuvre à la finition.",
      before: "Avant",
      after: "Après",
      hint: "Glissez pour comparer",
    },
    process: {
      kicker: "Notre méthode",
      title: "Comment ça marche",
      subtitle: "Un process simple, clair et transparent, en 4 étapes.",
      items: [
        { n: "01", title: "Contact", desc: "Échangez avec nous par WhatsApp ou téléphone et décrivez votre projet." },
        { n: "02", title: "Visite & devis gratuit", desc: "Nous nous déplaçons, relevons les mesures et vous remettons un devis clair." },
        { n: "03", title: "Réalisation", desc: "Nos artisans réalisent le chantier avec soin, dans les délais convenus." },
        { n: "04", title: "Livraison & finitions", desc: "Nous livrons un intérieur impeccable, prêt à vivre, avec garantie." },
      ],
    },
    about: {
      kicker: "À propos",
      title: "Z DECO, l'exigence du travail bien fait",
      p1: "Z DECO est une entreprise de plâtrerie et de placoplâtre basée à Relizane. Depuis plus de 10 ans, nous accompagnons particuliers, architectes et promoteurs dans la réalisation de leurs intérieurs.",
      p2: "Notre métier : le plâtre, le placo, le staff et les finitions. Nous mettons un point d'honneur à respecter les délais, à laisser un chantier propre et à livrer un rendu irréprochable.",
      points: [
        "Matériaux de qualité",
        "Artisans expérimentés",
        "Chantier propre",
        "Respect des délais",
      ],
      imageCaption: "Un savoir-faire artisanal, une finition parfaite.",
      cta: "Discutons de votre projet",
    },
    cta: {
      kicker: "Contact",
      title: "Un projet en tête ? Parlons-en.",
      subtitle:
        "Contactez-nous dès maintenant — réponse rapide, devis gratuit et sans engagement. Décrivez votre chantier en un message.",
      whatsapp: "Écrire sur WhatsApp",
      whatsappMessage:
        "Bonjour Z DECO 👋, je souhaite obtenir un devis pour mon projet de plâtrerie / placo.",
      call: "Appeler maintenant",
      note: "Réponse sous 24h · Devis gratuit · Sans engagement",
    },
    footer: {
      about:
        "Z DECO — spécialiste plâtrerie & placo à Relizane. Nous concevons et réalisons vos plafonds, cloisons et finitions avec exigence.",
      linksTitle: "Navigation",
      servicesTitle: "Services",
      contactTitle: "Contact",
      phoneLabel: "Téléphone",
      whatsappLabel: "WhatsApp",
      regionLabel: "Zone",
      hoursLabel: "Horaires",
      hours: "Lun – Sam : 8h – 19h",
      rights: "Tous droits réservés.",
      nav: [
        { href: "#realisations", label: "Réalisations" },
        { href: "#services", label: "Services" },
        { href: "#methode", label: "Méthode" },
        { href: "#apropos", label: "À propos" },
        { href: "#contact", label: "Contact" },
      ],
    },
  },
  ar: {
    nav: {
      realisations: "أعمالنا",
      services: "خدماتنا",
      methode: "طريقة العمل",
      apropos: "من نحن",
      contact: "اتصل بنا",
    },
    hero: {
      kicker: "متخصص في الجبس • البلاكو • الستاف",
      title1: "حوّل مساحتك الداخلية مع",
      highlight: "فن الجبس والبلاكو",
      description:
        "Z DECO تصمّم وتنفّذ وتُنهي أسقفك وجدرانك الفاصلة وتشطيباتك. عمل متقن، مواد عالية الجودة، وموقع نظيف — من التقدير حتى التسليم.",
      region: "غليزان وضواحيها",
      ctaPrimary: "عرض سعر مجاني",
      ctaSecondary: "شاهد أعمالنا",
      stats: [
        { value: "+10", label: "سنوات من الخبرة" },
        { value: "+150", label: "مشروعاً منجزاً" },
        { value: "100%", label: "رضا العملاء" },
      ],
      scroll: "اكتشف",
    },
    trust: [
      { icon: "hammer", title: "أعمال حسب الطلب", desc: "كل مشروع فريد" },
      { icon: "quote", title: "عرض سعر مجاني وسريع", desc: "رد خلال 24 ساعة" },
      { icon: "pin", title: "غليزان والمنطقة", desc: "تنقّل إلى الموقع" },
      { icon: "clean", title: "موقع نظيف", desc: "احترام الآجال" },
    ],
    portfolio: {
      kicker: "أعمالنا",
      title: "حرفية تتجلى في الصور",
      subtitle:
        "لمحة عن المشاريع التي أنجزتها Z DECO: الأسقف، الجدران الفاصلة، الستاف والتجديد الداخلي.",
      categories: [
        { key: "all", label: "الكل" },
        { key: "plafonds", label: "الأسقف" },
        { key: "cloisons", label: "الجدران الفاصلة" },
        { key: "staff", label: "الستاف" },
        { key: "renovation", label: "التجديد" },
      ],
      more: "تريد رؤية المزيد؟",
      moreCta: "اطلب صوراً عبر واتساب",
      items: [
        { img: "https://images.pexels.com/photos/11427524/pexels-photo-11427524.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=900", cat: "cloisons", tag: "الجدران الفاصلة", title: "تركيب بلاكو BA13" },
        { img: "https://images.pexels.com/photos/6474129/pexels-photo-6474129.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=900", cat: "plafonds", tag: "الأسقف", title: "سقف معلّق" },
        { img: "https://images.pexels.com/photos/8082209/pexels-photo-8082209.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=900", cat: "renovation", tag: "التجديد", title: "ألواح وتشطيبات" },
        { img: "https://images.pexels.com/photos/7166640/pexels-photo-7166640.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=900", cat: "plafonds", tag: "الأسقف", title: "مستوى راقٍ" },
        { img: "https://images.pexels.com/photos/35493888/pexels-photo-35493888.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=900", cat: "renovation", tag: "التجديد", title: "فضاء معيشي عصري" },
        { img: "https://images.pexels.com/photos/7045316/pexels-photo-7045316.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=900", cat: "cloisons", tag: "الجدران الفاصلة", title: "جدران فاصلة وترتيب" },
        { img: "https://images.pexels.com/photos/8146316/pexels-photo-8146316.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=900", cat: "renovation", tag: "التجديد", title: "تنعيم وجدران مميزة" },
        { img: "https://images.pexels.com/photos/27604142/pexels-photo-27604142.png?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=900", cat: "staff", tag: "الستاف", title: "سقف زخرفي" },
      ],
    },
    services: {
      kicker: "خدماتنا",
      title: "من البنية إلى التشطيب",
      subtitle:
        "نغطي كامل مشروعك في الجبس والبلاكو، بإتقان ونظافة.",
      cta: "اطلب عرض سعر",
      items: [
        { icon: "ceiling", title: "أسقف الجبس والستاف", desc: "أسقف معلّقة، أسقف مستعارة وحليّات بالستاف لمظهر أنيق." },
        { icon: "cloisons", title: "جدران فاصلة بالبلاكو (BA13)", desc: "جدران فاصلة خفيفة، جدران تقنية وصناديق، تركيب وتشطيب." },
        { icon: "insulation", title: "الدوبلاج والعزل", desc: "عزل حراري وصوتي للجدران والأسقف." },
        { icon: "moulding", title: "الحليّات والمُحارف", desc: "إفريزات وحليّات وزخارف جبسية، بتركيب متقن." },
        { icon: "enduit", title: "اللّياس والتنعيم", desc: "طبقات التشطيب، التنعيم واللمعان الأبيض لجبس مثالي." },
        { icon: "renovation", title: "التجديد الداخلي", desc: "تجديد غرفك: الجدران، الأسقف والنجارة." },
      ],
    },
    beforeAfter: {
      kicker: "قبل / بعد",
      title: "تحوّل الفضاء",
      subtitle:
        "اسحب المؤشر للمقارنة. فرقنا تمنح الحياة لكل غرفة، من الأساس حتى التشطيب.",
      before: "قبل",
      after: "بعد",
      hint: "اسحب للمقارَنة",
    },
    process: {
      kicker: "طريقة عملنا",
      title: "كيف نعمل",
      subtitle: "عملية بسيطة، واضحة وشفّافة، في 4 خطوات.",
      items: [
        { n: "01", title: "التواصل", desc: "تحدّث معنا عبر واتساب أو الهاتف وصف لنا مشروعك." },
        { n: "02", title: "زيارة وعرض سعر مجاني", desc: "نتنقّل إلى الموقع، نأخذ القياسات ونقدّم عرض سعر واضحاً." },
        { n: "03", title: "الإنجاز", desc: "ينفّذ حرفيونا المشروع بإتقان، ضمن الأجال المتفق عليها." },
        { n: "04", title: "التسليم والتشطيبات", desc: "نسلّمك مساحة مثالية جاهزة للعيش، مع ضمان." },
      ],
    },
    about: {
      kicker: "من نحن",
      title: "Z DECO، إتقان العمل الجيد",
      p1: "Z DECO شركة متخصصة في الجبس والبلاكو مقرها غليزان. منذ أكثر من 10 سنوات نرافق الأفراد والمهندسين المعماريين والمطوّرين في إنجاز مساحاتهم الداخلية.",
      p2: "حرفتنا: الجبس، البلاكو، الستاف والتشطيبات. نلتزم باحترام الآجال، بترك موقع نظيف، وبالتسليم بمستوى لا تشوبه شائبة.",
      points: [
        "مواد عالية الجودة",
        "حرفيون ذوو خبرة",
        "موقع نظيف",
        "احترام الآجال",
      ],
      imageCaption: "حرفية أصيلة، وتشطيب مثالي.",
      cta: "لنتحدث عن مشروعك",
    },
    cta: {
      kicker: "اتصل بنا",
      title: "لديك مشروع في بالك؟ لنتحدث.",
      subtitle:
        "اتصل بنا الآن — رد سريع، عرض سعر مجاني ودون التزام. صف لنا مشروعك في رسالة واحدة.",
      whatsapp: "اكتب عبر واتساب",
      whatsappMessage: "مرحباً Z DECO 👋، أودّ الحصول على عرض سعر لمشروعي في الجبس / البلاكو.",
      call: "اتصل الآن",
      note: "رد خلال 24 ساعة · عرض سعر مجاني · دون التزام",
    },
    footer: {
      about:
        "Z DECO — متخصص في الجبس والبلاكو في غليزان. نصمّم وننفّذ أسقفك وجدرانك الفاصلة وتشطيباتك بإتقان.",
      linksTitle: "روابط سريعة",
      servicesTitle: "الخدمات",
      contactTitle: "التواصل",
      phoneLabel: "الهاتف",
      whatsappLabel: "واتساب",
      regionLabel: "المنطقة",
      hoursLabel: "أوقات العمل",
      hours: "الاثنين – السبت: 8ص – 7م",
      rights: "جميع الحقوق محفوظة.",
      nav: [
        { href: "#realisations", label: "أعمالنا" },
        { href: "#services", label: "خدماتنا" },
        { href: "#methode", label: "طريقة العمل" },
        { href: "#apropos", label: "من نحن" },
        { href: "#contact", label: "اتصل بنا" },
      ],
    },
  },
};

type Content = typeof content.fr;

type I18nContextValue = {
  lang: Lang;
  dir: "ltr" | "rtl";
  t: Content;
  setLang: (lang: Lang) => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");

  // Apply language + direction to the document for correct RTL rendering.
  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }, [lang]);

  const dir: "ltr" | "rtl" = lang === "ar" ? "rtl" : "ltr";

  return (
    <I18nContext.Provider value={{ lang, dir, t: content[lang], setLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
