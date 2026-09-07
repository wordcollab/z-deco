import { I18nProvider } from "./i18n";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { Portfolio } from "./components/Portfolio";
import { Services } from "./components/Services";
import { BeforeAfter } from "./components/BeforeAfter";
import { Process } from "./components/Process";
import { About } from "./components/About";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <I18nProvider>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Portfolio />
        <Services />
        <BeforeAfter />
        <Process />
        <About />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </I18nProvider>
  );
}
