export default function Services({ copy }) {
  return (
    <section className="section section-soft" id="services">
      <div className="page-width">
        <div className="section-heading">
          <p className="eyebrow">{copy.services.eyebrow}</p>

          <h2>{copy.services.title}</h2>

          <p>{copy.services.description}</p>
        </div>

        <div className="service-grid">
          {copy.services.items.map((item) => (
            <article className="service-card" key={item.title}>
              <span className="service-icon" aria-hidden="true">
                {item.icon}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
