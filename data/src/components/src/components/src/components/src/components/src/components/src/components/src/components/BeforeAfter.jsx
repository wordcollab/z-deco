import { useEffect, useRef, useState } from "react";
import { BEFORE_AFTER_IMAGES } from "../../data/projects.js";

export default function BeforeAfter({ copy, language }) {
  const [position, setPosition] = useState(50);
  const panelRef = useRef(null);

  const setFromClientX = (clientX) => {
    const panel = panelRef.current;

    if (!panel) {
      return;
    }

    const rect = panel.getBoundingClientRect();
    const value =
      ((clientX - rect.left) / rect.width) * 100;

    setPosition(Math.max(0, Math.min(100, value)));
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      setPosition((value) => Math.max(0, value - 5));
    }

    if (event.key === "ArrowRight") {
      setPosition((value) => Math.min(100, value + 5));
    }
  };

  useEffect(() => {
    setPosition(50);
  }, [language]);

  return (
    <section
      className="section before-after-section"
      id="transformation"
    >
      <div className="page-width">
        <div className="section-heading section-heading-centered">
          <p className="eyebrow">
            {copy.beforeAfter.eyebrow}
          </p>

          <h2>{copy.beforeAfter.title}</h2>

          <p>{copy.beforeAfter.description}</p>
        </div>

        <div
          className="compare-panel"
          ref={panelRef}
          onPointerDown={(event) => {
            event.currentTarget.setPointerCapture(
              event.pointerId
            );

            setFromClientX(event.clientX);
          }}
          onPointerMove={(event) => {
            if (
              event.currentTarget.hasPointerCapture(
                event.pointerId
              )
            ) {
              setFromClientX(event.clientX);
            }
          }}
          tabIndex="0"
          role="slider"
          aria-label={copy.beforeAfter.sliderLabel}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={Math.round(position)}
          onKeyDown={handleKeyDown}
        >
          <img
            className="compare-after"
            src={BEFORE_AFTER_IMAGES.after.path}
            alt={copy.beforeAfter.afterAlt}
            loading="lazy"
          />

          <div
            className="compare-before-wrap"
            style={{ width: `${position}%` }}
          >
            <img
              className="compare-before"
              src={BEFORE_AFTER_IMAGES.before.path}
              alt={copy.beforeAfter.beforeAlt}
              loading="lazy"
            />
          </div>

          <div
            className="compare-divider"
            style={{ left: `${position}%` }}
            aria-hidden="true"
          >
            <span>↔</span>
          </div>

          <span className="compare-label compare-label-before">
            {copy.beforeAfter.before}
          </span>

          <span className="compare-label compare-label-after">
            {copy.beforeAfter.after}
          </span>
        </div>

        <p className="compare-hint">
          {copy.beforeAfter.hint}
        </p>
      </div>
    </section>
  );
}
