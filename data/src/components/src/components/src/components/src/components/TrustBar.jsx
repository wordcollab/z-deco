export default function TrustBar({ copy }) {
  return (
    <section
      className="trust-bar"
      aria-label={copy.trust.ariaLabel}
    >
      <div className="page-width trust-grid">
        {copy.trust.items.map((item) => (
          <article className="trust-item" key={item.title}>
            <span className="trust-icon" aria-hidden="true">
              {item.icon}
            </span>

            <div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
