import './Industries.css';
import useScrollReveal from '../hooks/useScrollReveal';
import Icon from './Icon';

const industriesData = [
  {
    icon: 'building',
    title: 'Real Estate',
    desc: 'We elevate high-ticket property visibility through predictive AI modeling, generating hyper-targeted buyer profiling and securing qualified leads in fiercely competitive markets.'
  },
  {
    icon: 'heart',
    title: 'Healthcare',
    desc: 'Reach patients when intent is highest. We engineer compliant, algorithmic SEO and local search strategies to ensure trustworthy, frictionless digital experiences.'
  },
  {
    icon: 'shoppingCart',
    title: 'E-Commerce',
    desc: 'Stop leaving money in abandoned carts. We deploy predictive LTV optimization and cart-abandonment ML flows to radically accelerate online sales and revenue.'
  },
  {
    icon: 'laptop',
    title: 'SaaS & Tech',
    desc: 'Scale ARR efficiently. We architect computational pipeline generation logic that aggressively targets decision-makers and converts software trials into enterprise deals.'
  },
  {
    icon: 'briefcase',
    title: 'B2B Manufacturing',
    desc: 'Transform opaque supply chains into predictable lead aquisition. Our data-driven strategies enhance brand visibility and secure lucrative international contacts.'
  },
  {
    icon: 'trendingUp',
    title: 'Finance & Fintech',
    desc: 'Establish algorithmic authority. We leverage data-driven positioning and high-end aesthetic branding to build trust and increase portfolio adoption rapidly.'
  }
];

export default function Industries() {
  const ref = useScrollReveal();

  return (
    <section className="industries section" id="industries" ref={ref}>
      <div className="container">
        <div className="text-center">
          <span className="section-label reveal">Targeted Market Penetration</span>
          <h2 className="section-title reveal">
            Industries We <span className="gradient-text">Dominate</span>
          </h2>
          <p className="section-subtitle reveal">
            Generic marketing fails. We build mathematically proven digital infrastructures explicitly calibrated to the psychological and data realities of specific verticals.
          </p>
        </div>

        <div className="industries-grid">
          {industriesData.map((industry, index) => (
            <div className="industry-card reveal" key={index} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="industry-icon">
                <Icon name={industry.icon} size={28} />
              </div>
              <h3>{industry.title}</h3>
              <p>{industry.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
