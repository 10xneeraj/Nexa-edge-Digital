import './Process.css';
import useScrollReveal from '../hooks/useScrollReveal';
import Icon from './Icon';

const steps = [
  {
    num: '01',
    icon: 'compass',
    title: 'Deep-Dive Audit',
    desc: 'We forensically analyze your analytics, ad accounts, competitive landscape, and customer journey to find the real levers.'
  },
  {
    num: '02',
    icon: 'barChart',
    title: 'Custom Roadmap',
    desc: 'You get a 90-day plan with projected ROI, channel mix, budget allocation, and clear milestones before you spend a dollar.'
  },
  {
    num: '03',
    icon: 'rocket',
    title: 'Sprint & Ship',
    desc: 'Our team executes in 2-week sprints. You see progress in real-time dashboards, not in quarterly slide decks.'
  },
  {
    num: '04',
    icon: 'zap',
    title: 'Scale What Works',
    desc: 'We double down on winning channels, kill underperformers fast, and reinvest learnings to compound your growth curve.'
  }
];

export default function Process() {
  const ref = useScrollReveal();

  return (
    <section className="process section" id="process" ref={ref}>
      <div className="container text-center">
        <span className="section-label reveal">How We Work</span>
        <h2 className="section-title reveal">
          No fluff. <span className="gradient-text">Just a system that works.</span>
        </h2>
        <p className="section-subtitle reveal">
          Every engagement follows this rigorous framework, refined across
          180+ client launches over seven years.
        </p>

        <div className="process-steps">
          {steps.map((s, i) => (
            <div className="process-step reveal" key={i}>
              <div className="step-number">
                <span style={{ fontSize: '0.9rem', opacity: 0.5, position: 'absolute', top: '-10px', left: '-10px', background: 'var(--bg-dark)', padding: '2px 8px', borderRadius: '10px', border: '1px solid var(--border-color)' }}>{s.num}</span>
                <Icon name={s.icon} size={30} />
              </div>
              <h4 style={{ fontSize: '1.2rem', marginTop: '10px' }}>{s.title}</h4>
              <p style={{ fontSize: '0.95rem' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
