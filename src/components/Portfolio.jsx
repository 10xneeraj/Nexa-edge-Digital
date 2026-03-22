import { useState } from 'react';
import './Portfolio.css';
import useScrollReveal from '../hooks/useScrollReveal';

const categories = ['All', 'SEO', 'Paid', 'Social', 'Web'];

const projects = [
  { title: 'Meridian SaaS', subtitle: '0 → 14K monthly organic visitors in 8 months', category: 'SEO', color: '#6C3CE1', metric: '+14K visitors/mo' },
  { title: 'Bloom & Bottle', subtitle: 'Scaled Meta spend from $5K to $120K/mo at 8.3x ROAS', category: 'Paid', color: '#00D4AA', metric: '8.3x ROAS' },
  { title: 'Crave Kitchen', subtitle: 'Built 85K Instagram following in 5 months from zero', category: 'Social', color: '#FF6B35', metric: '85K followers' },
  { title: 'Vaulted Finance', subtitle: 'Redesigned funnel increased demo bookings by 210%', category: 'Web', color: '#6C3CE1', metric: '+210% demos' },
  { title: 'PureForm Health', subtitle: 'Captured 320 high-intent keywords on page 1', category: 'SEO', color: '#00D4AA', metric: '320 P1 keywords' },
  { title: 'ThreadLine Fashion', subtitle: 'TikTok campaign drove 2.4M views and $380K in sales', category: 'Social', color: '#FF6B35', metric: '$380K revenue' },
  { title: 'Rentova PropTech', subtitle: 'Google Ads CPA reduced from $94 to $31 in 60 days', category: 'Paid', color: '#6C3CE1', metric: '-67% CPA' },
  { title: 'Launchpad Studio', subtitle: 'Headless Shopify build → 4.2s faster load, +38% CVR', category: 'Web', color: '#00D4AA', metric: '+38% CVR' },
  { title: 'Apex Legal Group', subtitle: 'LinkedIn thought-leadership program → 140 inbound leads', category: 'Social', color: '#FF6B35', metric: '140 leads' },
];

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const ref = useScrollReveal();

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.category === active);

  return (
    <section className="portfolio section" id="portfolio" ref={ref}>
      <div className="container text-center">
        <span className="section-label reveal">Results</span>
        <h2 className="section-title reveal">
          Work that <span className="gradient-text">speaks for itself</span>
        </h2>
        <p className="section-subtitle reveal">
          No lorem ipsum. No mockups. These are real campaigns with real
          numbers from real clients who gave us permission to share.
        </p>

        <div className="portfolio-filters reveal">
          {categories.map(cat => (
            <button
              key={cat}
              className={active === cat ? 'active' : ''}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filtered.map((p, i) => (
            <div className="portfolio-card" key={`${active}-${i}`}>
              <div className="portfolio-image" style={{
                background: `linear-gradient(135deg, ${p.color}15, ${p.color}06)`
              }}>
                <span className="portfolio-metric" style={{ color: p.color }}>{p.metric}</span>
              </div>
              <div className="portfolio-overlay">
                <span className="portfolio-cat">{p.category}</span>
                <h4>{p.title}</h4>
                <p className="portfolio-sub">{p.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
