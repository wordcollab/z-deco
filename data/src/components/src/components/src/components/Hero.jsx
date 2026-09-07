import { HERO_IMAGE } from "../../data/projects.js";

export default function Hero({ copy }) {
  return (
    <section className="hero" id="top">
      <div className="page-width hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{copy.hero.eyebrow}</p>

          <h1>{copy.hero.title}</h1>

          <p className="hero-signature">
            {copy.hero.signature}
          </p>

          <p className="hero-description">
            {copy.hero.description}
          </p>

          <a className="button button-primary" href="#realisations">
            {copy.hero.cta}
          </a>
        </div>

        <div
          className="hero-visual"
          aria-label={copy.hero.imageAlt}
        >
          <div className="hero-curtain" aria-hidden="true" />

          <div className="hero-image-frame">
            <img
              src={HERO_IMAGE.path}
              alt=""
              fetchPriority="high"
            />
          </div>

          <span className="hero-visual-note">
            {copy.hero.visualNote}
          </span>
        </div>
      </div>
    </section>
  );
}
