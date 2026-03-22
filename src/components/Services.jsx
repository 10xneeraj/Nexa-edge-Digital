import './Services.css';
import useScrollReveal from '../hooks/useScrollReveal';
import Icon from './Icon';

const services = [
  {
    icon: 'search',
    title: 'Search Engine Optimization',
    desc: 'We reverse-engineer Google\'s algorithm to put you on page one. Technical audits, content clusters, and link acquisition that compound month over month.',
    tag: 'Avg. +280% organic traffic'
  },
  {
    icon: 'target',
    title: 'Paid Media & Performance',
    desc: 'Google, Meta, LinkedIn, TikTok — we manage $3M+ in monthly ad spend. Every campaign is built around your unit economics, not vanity metrics.',
    tag: 'Avg. 6.2x ROAS'
  },
  {
    icon: 'share',
    title: 'Social & Community',
    desc: 'Platform-native content that builds real followings. We handle everything from strategy to daily publishing, community management, and influencer partnerships.',
    tag: '2M+ engagements managed'
  },
  {
    icon: 'pen',
    title: 'Content & Demand Gen',
    desc: 'Bottom-of-funnel blogs, case studies, whitepapers, and video — engineered to rank, convert, and nurture your pipeline from first click to signed contract.',
    tag: '1,200+ assets created'
  },
  {
    icon: 'code',
    title: 'Web Design & CRO',
    desc: 'Conversion-focused websites and landing pages that load fast, look premium, and turn visitors into customers. We A/B test until the numbers sing.',
    tag: 'Avg. +62% conversion lift'
  },
  {
    icon: 'mail',
    title: 'Email & Lifecycle',
    desc: 'Revenue-generating automations, segmentation strategies, and campaigns that move subscribers through your funnel — from welcome series to win-back flows.',
    tag: '$8.2M attributed revenue'
  }
];

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
          {services.map((s, i) => (
            <div className="glass-card service-card reveal" key={i}>
              <div className="service-icon">
                <Icon name={s.icon} size={28} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="service-tag">{s.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
