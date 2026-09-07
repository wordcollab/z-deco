const placeholder = (label, background = "#EAF0FF") =>
  `data:image/svg+xml,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000">
      <rect width="1600" height="1000" fill="${background}" />
      <path d="M0 760 L700 300 L1600 740 V1000 H0Z" fill="#1546C9" opacity=".88" />
      <path d="M900 0 H1600 V1000 H1150Z" fill="#FFD400" opacity=".92" />
      <text x="80" y="130" font-family="Arial, sans-serif" font-size="58" font-weight="700" fill="#071B47">
        Z DECO
      </text>
      <text x="80" y="205" font-family="Arial, sans-serif" font-size="30" fill="#071B47">
        ${label}
      </text>
    </svg>
  `)}`;

export const HERO_IMAGE = {
  id: "hero-concept",
  role: "hero-concept",
  path: placeholder("Concept Hero — image à ajouter", "#FBFAF7"),
  isRealZDecoProject: false,
};

export const EXECUTION_IMAGE = {
  id: "execution-concept",
  role: "execution",
  path: placeholder("Image d’exécution — image à ajouter", "#EAF0FF"),
  isRealZDecoProject: false,
};

export const ABOUT_IMAGE = {
  id: "about-concept",
  role: "detail",
  path: placeholder("Image Z DECO — image à ajouter", "#F7F2DF"),
  isRealZDecoProject: false,
};

export const BEFORE_AFTER_IMAGES = {
  before: {
    id: "before-placeholder",
    role: "before",
    path: placeholder("Avant — image réelle à ajouter", "#CDD5E4"),
  },

  after: {
    id: "after-placeholder",
    role: "after",
    path: placeholder("Après — image réelle à ajouter", "#E9E0D3"),
  },
};

export const PROJECT_IMAGES = [
  {
    id: "realisation-01",
    role: "realisation",
    path: placeholder("Réalisation 01 — photo à ajouter", "#EAF0FF"),
    isRealZDecoProject: false,
    alt: {
      fr: "Emplacement pour une réalisation intérieure",
      ar: "مكان لصورة تهيئة داخلية",
    },
  },

  {
    id: "realisation-02",
    role: "realisation",
    path: placeholder("Réalisation 02 — photo à ajouter", "#F7F2DF"),
    isRealZDecoProject: false,
    alt: {
      fr: "Emplacement pour une deuxième réalisation intérieure",
      ar: "مكان لصورة ثانية لتهيئة داخلية",
    },
  },

  {
    id: "realisation-03",
    role: "realisation",
    path: placeholder("Réalisation 03 — photo à ajouter", "#DFE8FA"),
    isRealZDecoProject: false,
    alt: {
      fr: "Emplacement pour une troisième réalisation intérieure",
      ar: "مكان لصورة ثالثة لتهيئة داخلية",
    },
  },

  {
    id: "realisation-04",
    role: "detail",
    path: placeholder("Détail 04 — photo à ajouter", "#F3E8B8"),
    isRealZDecoProject: false,
    alt: {
      fr: "Emplacement pour un détail de finition",
      ar: "مكان لصورة تفصيل تشطيب",
    },
  },

  {
    id: "realisation-05",
    role: "realisation",
    path: placeholder("Réalisation 05 — photo à ajouter", "#E4EAF2"),
    isRealZDecoProject: false,
    alt: {
      fr: "Emplacement pour une réalisation intérieure",
      ar: "مكان لصورة تهيئة داخلية",
    },
  },

  {
    id: "realisation-06",
    role: "detail",
    path: placeholder("Détail 06 — photo à ajouter", "#F7F2DF"),
    isRealZDecoProject: false,
    alt: {
      fr: "Emplacement pour un détail de finition intérieure",
      ar: "مكان لصورة تفصيل في التهيئة الداخلية",
    },
  },
];
