import { EXECUTION_IMAGE } from "../../data/projects.js";

export default function Process({ copy }) {
  return (
    <section className="section process-section" id="methode">
      <div className="page-width process-layout">
        <div className="process-image">
          <img
            src={EXECUTION_IMAGE.path}
            alt={copy.process.imageAlt}
            loading="lazy"
          />
        </div>

        <div>
          <div className="section-heading section-heading-left">
            <p className="eyebrow">{copy.process.eyebrow}</p>

            <h2>{copy.process.title}</h2>

            <p>{copy.process.description}</p>
          </div>

          <ol className="process-list">
            {copy.process.items.map((item, index) => (
              <li key={item.title}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
