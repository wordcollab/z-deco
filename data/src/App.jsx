import { useEffect, useMemo, useState } from "react";
import { CONFIG } from "../data/config.js";
import { PROJECT_IMAGES } from "../data/projects.js";

import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import TrustBar from "./components/TrustBar.jsx";
import Services from "./components/Services.jsx";
import Process from "./components/Process.jsx";
import BeforeAfter from "./components/BeforeAfter.jsx";
import Portfolio from "./components/Portfolio.jsx";
import About from "./components/About.jsx";
import FinalCta from "./components/FinalCta.jsx";
import FloatingWhatsApp from "./components/FloatingWhatsApp.jsx";
import Footer from "./components/Footer.jsx";
import Lightbox from "./components/Lightbox.jsx";

export default function App() {
  const [language, setLanguage] = useState(CONFIG.defaultLanguage);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const copy = CONFIG.copy[language];

  const portfolioImages = useMemo(
    () =>
      PROJECT_IMAGES.filter(
        (image) =>
          image.role === "realisation" || image.role === "detail"
      ),
    []
  );

  useEffect(() => {
    const isArabic = language === "ar";

    document.documentElement.lang = isArabic ? "ar" : "fr";
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
  }, [language]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrevious = () => {
    setLightboxIndex((currentIndex) => {
      if (currentIndex === null || portfolioImages.length === 0) {
        return null;
      }

      return (
        (currentIndex - 1 + portfolioImages.length) %
        portfolioImages.length
      );
    });
  };

  const showNext = () => {
    setLightboxIndex((currentIndex) => {
      if (currentIndex === null || portfolioImages.length === 0) {
        return null;
      }

      return (currentIndex + 1) % portfolioImages.length;
    });
  };

  return (
    <div className="site-shell">
      <Header
        language={language}
        setLanguage={setLanguage}
        copy={copy}
      />

      <main>
        <Hero copy={copy} />
        <TrustBar copy={copy} />
        <Services copy={copy} />
        <Process copy={copy} />
        <BeforeAfter copy={copy} language={language} />
        <Portfolio
          copy={copy}
          language={language}
          images={portfolioImages}
          onOpen={openLightbox}
        />
        <About copy={copy} />
        <FinalCta copy={copy} language={language} />
      </main>

      <Footer copy={copy} />

      <FloatingWhatsApp
        copy={copy}
        language={language}
      />

      <Lightbox
        images={portfolioImages}
        language={language}
        activeIndex={lightboxIndex}
        onClose={closeLightbox}
        onPrevious={showPrevious}
        onNext={showNext}
      />
    </div>
  );
}
