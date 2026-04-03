import './Pricing.css';
import useScrollReveal from '../hooks/useScrollReveal';
import ScrollLink from './ScrollLink';

const plans = [
  {
    tier: 'Infrastructure Build',
    price: '$3,500',
    desc: 'For brands needing technical overhauls: analytics, tracking, and conversion funnels.',
    features: [
      { text: 'Server-Side Tracking Setup', included: true },
      { text: 'Technical SEO Overhaul', included: true },
      { text: 'GA4 / Tag Manager Architecture', included: true },
      { text: 'Conversion Funnel Mapping', included: true },
      { text: 'Live Dashboard Access', included: true },
      { text: 'Media Buying Capital', included: false },
      { text: 'Performance Guarantees', included: false },
    ],
    cta: 'Book an Audit',
    featured: false
  },
  {
    tier: 'Growth Sprint',
    price: '$7,500',
    desc: 'Aggressive 90-day sprints designed to rapidly capture market share.',
    features: [
      { text: 'Paid Media Management (Multi-platform)', included: true },
      { text: 'Weekly Conversion Rate Optimization', included: true },
      { text: 'Custom Landing Page Builds', included: true },
      { text: 'Email Lifecycle Automations', included: true },
      { text: 'Bottom-funnel Content Generation', included: true },
      { text: 'Dedicated Slack Channel', included: true },
      { text: 'Performance-tied Bonuses', included: false },
    ],
    cta: 'Start a Sprint',
    featured: true
  },
  {
    tier: 'Agency of Record',
    price: 'Custom',
    desc: 'Full-funnel takeover for established brands moving $50k+ in monthly ad spend.',
    features: [
      { text: 'Complete Channel Management', included: true },
      { text: 'Custom Creative & Video Production', included: true },
      { text: 'Advanced Attribution Modeling', included: true },
      { text: 'Revenue-share Hybrid Pricing', included: true },
      { text: 'On-site Quarterly Strategy Sessions', included: true },
      { text: 'C-Suite Account Directors', included: true },
      { text: 'Contractual Performance Guarantees', included: true },
    ],
    cta: 'Claim Your Territory',
    featured: false
  },
];

export default function Pricing() {
  const ref = useScrollReveal();

  return (
    <section className="pricing section" id="pricing" ref={ref}>
      <div className="container text-center">
        <span className="section-label reveal">Investment Models</span>
        <h2 className="section-title reveal">
          We only scale when <span className="gradient-text">you scale</span>
        </h2>
        <p className="section-subtitle reveal">
          No mandatory 12-month retainers. We operate on performance-heavy frameworks where our incentives are tied directly to your pipeline and ROAS.
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

              <ScrollLink
                to="/contact"
                className={`btn ${plan.featured ? 'btn-primary' : 'btn-secondary'}`}
              >
                {plan.cta}
              </ScrollLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
