import { INFO } from "../../data/info.js";
import LanguageToggle from "./LanguageToggle.jsx";

export default function Header({ language, setLanguage, copy }) {
  return (
    <header className="site-header">
      <div className="page-width header-inner">
        <a className="brand" href="#top" aria-label={INFO.brand}>
          <span className="brand-mark" aria-hidden="true">
            Z.
          </span>
          <span className="brand-name">Z DECO</span>
        </a>

        <LanguageToggle
          language={language}
          setLanguage={setLanguage}
          label={copy.languageLabel}
        />
      </div>
    </header>
  );
}
