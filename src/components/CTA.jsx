import './CTA.css';
import useScrollReveal from '../hooks/useScrollReveal';
import ScrollLink from './ScrollLink';

export default function CTA({ variant }) {
  if (variant === 'mid') {
    return (
      <section className="cta-banner">
        <div className="cta-dot d1" />
        <div className="cta-dot d2" />
        <div className="container cta-inner">
          <h2>Stop guessing. <span className="gradient-text">Start compounding.</span></h2>
          <p>One call. A custom growth roadmap. No pitch deck, no sales pressure. Just honest strategy from people who've done it 180+ times.</p>
          <ScrollLink to="/contact" className="btn btn-accent">
            Claim Your Free Strategy Session
          </ScrollLink>
        </div>
      </section>
    );
  }

  return (
    <section className="cta-banner">
      <div className="cta-dot d1" />
      <div className="cta-dot d2" />
      <div className="container cta-inner">
        <h2>Your competitors are <span className="gradient-text">already investing.</span></h2>
        <p>Every month you wait is market share you hand to someone else. Let's fix that, starting this week.</p>
        <ScrollLink to="/contact" className="btn btn-accent">
          Talk to a Strategist Today
        </ScrollLink>
      </div>
    </section>
  );
}
