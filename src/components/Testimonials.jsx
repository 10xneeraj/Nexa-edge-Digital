import { useState, useEffect } from 'react';
import './Testimonials.css';
import useScrollReveal from '../hooks/useScrollReveal';
import Icon from './Icon';

const testimonials = [
  {
    quote: "Before NexaEdge, we were burning $40K/month on ads with nothing to show for it. Within 90 days they restructured our entire Google Ads account, cut our CPA by 62%, and we've scaled to $120K/month in spend, profitably. These aren't just marketers, they're growth engineers.",
    name: 'Daniel Ortiz',
    role: 'VP Marketing, Meridian SaaS',
    result: 'CPA reduced 62%'
  },
  {
    quote: "We hired three agencies before NexaEdge. The difference? They actually read our P&L before writing a single ad. In Q1 alone they generated $2.4M in attributable pipeline from a $180K spend. The ROI speaks for itself.",
    name: 'Rachel Tan',
    role: 'Co-founder, Vaulted Finance',
    result: '$2.4M pipeline · Q1'
  },
  {
    quote: "Our organic traffic was flatlined for two years. NexaEdge tore apart our site architecture, rebuilt our content strategy around search intent, and we went from 800 to 14,000 monthly visitors. More importantly, those visitors convert. Our demo requests are up 5x.",
    name: 'Amit Khanna',
    role: 'CEO, PureForm Health',
    result: '800 → 14K visitors'
  },
  {
    quote: "I was skeptical about another agency making promises. NexaEdge didn't promise. They showed us the model, the milestones, and the math. Six months later we'd 4x'd our Instagram following and our DTC revenue was up 190%. Wish we'd found them sooner.",
    name: 'Lisa Bergström',
    role: 'Brand Director, Bloom & Bottle',
    result: '+190% DTC revenue'
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [sliding, setSliding] = useState(false);
  const ref = useScrollReveal();

  const goTo = (idx) => {
    if (sliding) return;
    setSliding(true);
    setTimeout(() => {
      setCurrent(idx);
      setTimeout(() => setSliding(false), 50);
    }, 300);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [current, sliding]);

  const t = testimonials[current];

  return (
    <section className="testimonials section" id="testimonials" ref={ref}>
      <div className="container text-center">
        <span className="section-label reveal">From Our Clients</span>
        <h2 className="section-title reveal">
          They signed. <span className="gradient-text">Then they stayed.</span>
        </h2>
        <p className="section-subtitle reveal">
          97% client retention. Here's why they don't leave.
        </p>

        <div className="testimonials-carousel reveal">
          <div className={`glass-card testimonial-card ${sliding ? 'slide-out' : 'slide-in'}`}>
            <div className="testimonial-stars">
              {[...Array(5)].map((_, i) => (
                <span className="star" key={i}><Icon name="star" size={18} /></span>
              ))}
            </div>
            <p className="testimonial-quote">{t.quote}</p>
            <div className="testimonial-result">{t.result}</div>
            <div className="testimonial-author">
              <div className="author-avatar">{t.name.charAt(0)}</div>
              <div className="author-info">
                <h4>{t.name}</h4>
                <p>{t.role}</p>
              </div>
            </div>
          </div>

          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === current ? 'active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
