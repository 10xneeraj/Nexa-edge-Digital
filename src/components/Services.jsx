import { Link } from 'react-router-dom';
import './Services.css';
import useScrollReveal from '../hooks/useScrollReveal';
import Icon from './Icon';
import { servicesData } from '../data/servicesData';

function getIconName(id) {
  const map = {
    seo: 'search',
    ppc: 'target',
    social: 'share',
    content: 'pen',
    web: 'code',
    email: 'mail'
  };
  return map[id] || 'star';
}

export default function Services() {
  const ref = useScrollReveal();

  return (
    <section className="services section" id="services" ref={ref}>
      <div className="container text-center">
        <span className="section-label reveal">Capabilities</span>
        <h2 className="section-title reveal">
          Full-funnel growth. <span className="gradient-text">Zero guesswork.</span>
        </h2>
        <p className="section-subtitle reveal">
          Six disciplines, one integrated team. We don't silo channels — we
          orchestrate them so every touchpoint drives measurable revenue.
        </p>

        <div className="services-grid">
          {Object.entries(servicesData).map(([id, s], i) => (
            <Link to={`/service/${id}`} className="glass-card service-card reveal" key={i} style={{textDecoration: 'none'}}>
              <div className="service-icon">
                <Icon name={getIconName(id)} size={28} />
              </div>
              <h3>{s.title.split(' (')[0]}</h3>
              <p>{s.intro}</p>
              <div className="service-click-indicator" style={{marginTop: '15px', color: 'var(--secondary)', fontSize: '0.85rem', fontWeight: 600}}>
                View Full Methodology →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
