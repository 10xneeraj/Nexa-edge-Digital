import './Pricing.css';
import useScrollReveal from '../hooks/useScrollReveal';

const plans = [
  {
    tier: 'Starter',
    price: '$999',
    desc: 'Perfect for small businesses just getting started with digital marketing.',
    features: [
      { text: 'SEO Audit & Strategy', included: true },
      { text: '5 Social Media Posts / Week', included: true },
      { text: 'Google Analytics Setup', included: true },
      { text: 'Monthly Performance Report', included: true },
      { text: 'PPC Campaign Management', included: false },
      { text: 'Dedicated Account Manager', included: false },
      { text: 'Content Creation (Blog)', included: false },
    ],
    cta: 'Get Started',
    featured: false
  },
  {
    tier: 'Growth',
    price: '$2,499',
    desc: 'Accelerate growth with comprehensive marketing across all channels.',
    features: [
      { text: 'Full SEO Optimization', included: true },
      { text: '15 Social Media Posts / Week', included: true },
      { text: 'PPC Campaign Management', included: true },
      { text: '4 Blog Posts / Month', included: true },
      { text: 'Email Marketing Automation', included: true },
      { text: 'Dedicated Account Manager', included: true },
      { text: 'Bi-Weekly Strategy Calls', included: false },
    ],
    cta: 'Start Growing',
    featured: true
  },
  {
    tier: 'Enterprise',
    price: '$4,999',
    desc: 'Full-scale marketing operations for established brands seeking dominance.',
    features: [
      { text: 'Advanced SEO & Link Building', included: true },
      { text: 'Unlimited Social Media Content', included: true },
      { text: 'Multi-Channel PPC Campaigns', included: true },
      { text: '8 Blog Posts + Video Content', included: true },
      { text: 'Advanced Email Sequences', included: true },
      { text: 'Dedicated Strategy Team', included: true },
      { text: 'Weekly Strategy Calls', included: true },
    ],
    cta: 'Contact Sales',
    featured: false
  },
];

export default function Pricing() {
  const ref = useScrollReveal();

  return (
    <section className="pricing section" id="pricing" ref={ref}>
      <div className="container text-center">
        <span className="section-label reveal">Pricing</span>
        <h2 className="section-title reveal">
          Simple, Transparent <span className="gradient-text">Pricing</span>
        </h2>
        <p className="section-subtitle reveal">
          Choose the plan that fits your goals. No hidden fees, no long-term
          contracts — just results.
        </p>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <div className={`glass-card pricing-card reveal ${plan.featured ? 'featured' : ''}`} key={i}>
              <div className="pricing-tier">{plan.tier}</div>
              <div className="pricing-price">
                {plan.price}<span>/month</span>
              </div>
              <p className="pricing-desc">{plan.desc}</p>

              <ul className="pricing-features">
                {plan.features.map((f, j) => (
                  <li key={j}>
                    <span className={`check ${f.included ? 'yes' : 'no'}`}>
                      {f.included ? '✓' : '✕'}
                    </span>
                    {f.text}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`btn ${plan.featured ? 'btn-primary' : 'btn-secondary'}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
