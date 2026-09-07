export default function Portfolio({
  copy,
  language,
  images,
  onOpen,
}) {
  return (
    <section
      className="section portfolio-section"
      id="realisations"
    >
      <div className="page-width">
        <div className="portfolio-heading">
          <p className="eyebrow">
            {copy.portfolio.eyebrow}
          </p>

          <h2>{copy.portfolio.title}</h2>
        </div>

        <div className="portfolio-grid">
          {images.map((image, index) => (
            <button
              type="button"
              className={`portfolio-image-card portfolio-image-card-${
                (index % 5) + 1
              }`}
              key={image.id}
              onClick={() => onOpen(index)}
              aria-label={`${copy.portfolio.openImage}: ${
                image.alt[language]
              }`}
            >
              <img
                src={image.path}
                alt={image.alt[language]}
                loading="lazy"
              />

              {image.isRealZDecoProject && (
                <span>
                  {copy.portfolio.realisationLabel}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
