export default function LanguageToggle({
  language,
  setLanguage,
  label,
}) {
  return (
    <div className="language-toggle" aria-label={label}>
      <button
        type="button"
        className={language === "fr" ? "is-active" : ""}
        onClick={() => setLanguage("fr")}
        aria-pressed={language === "fr"}
      >
        FR
      </button>

      <button
        type="button"
        className={language === "ar" ? "is-active" : ""}
        onClick={() => setLanguage("ar")}
        aria-pressed={language === "ar"}
      >
        ع
      </button>
    </div>
  );
}
