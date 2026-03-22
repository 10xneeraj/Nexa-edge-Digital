import './TrustedBy.css';

const brands = [
  { name: 'Meridian' },
  { name: 'Vaulted' },
  { name: 'PureForm' },
  { name: 'Bloom & Bottle' },
  { name: 'ThreadLine' },
  { name: 'Crave Kitchen' },
  { name: 'Rentova' },
  { name: 'Apex Legal' },
  { name: 'Launchpad' },
  { name: 'VoltEdge' },
];

export default function TrustedBy() {
  const items = [...brands, ...brands];

  return (
    <section className="trusted">
      <p className="trusted-label">Trusted by growth-stage companies</p>
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {items.map((b, i) => (
            <div className="marquee-item" key={i}>
              <span className="m-dot" />
              {b.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
