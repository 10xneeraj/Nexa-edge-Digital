import './About.css';
import useScrollReveal from '../hooks/useScrollReveal';
import agencyWorkflowImg from '../assets/agency_workflow.png';
import Icon from './Icon';

const features = [
  { title: 'Channel-agnostic thinking', desc: 'We don\'t push one channel. We find where your customers actually are and build the system to reach them.' },
  { title: 'Radical transparency', desc: 'You own all accounts, all data, all creatives. Live dashboards. No black boxes, ever.' },
  { title: 'Senior-only teams', desc: 'No junior account managers learning on your budget. Every person on your account has 5+ years in their discipline.' },
  { title: 'Skin in the game', desc: 'We tie our fees to your performance. If we don\'t drive results, we don\'t get paid the same way.' },
];

const stats = [
  { icon: 'trendUp', value: '$42M+', text: 'Client Revenue Driven' },
  { icon: 'users', value: '180+', text: 'Brands Scaled' },
  { icon: 'award', value: '7 yrs', text: 'Average Client Tenure' },
  { icon: 'globe', value: '23', text: 'Industries Served' },
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section className="about section" id="about" ref={ref}>
      <div className="container about-grid">
        <div className="about-content">
          <span className="section-label reveal">The NexaEdge Difference</span>
          <h2 className="section-title reveal">
            Built for founders who <span className="gradient-text">hate wasting money</span>
          </h2>
          <p className="about-desc reveal">
            Most agencies sell you a retainer and run the same playbook for every
            client. We don't. Every strategy is custom-built around your margins.
            We obsess over your unit economics, your customer journey, 
            and your competitive landscape. Because generating clicks is easy. 
            Generating profitable growth requires engineering.
          </p>

          <div className="about-features">
            {features.map((f, i) => (
              <div className="about-feature reveal" key={i}>
                <span className="feature-check"><Icon name="check" size={14} /></span>
                <p><strong>{f.title}:</strong> {f.desc}</p>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn btn-primary reveal">Let's Talk Strategy</a>
        </div>

        <div className="about-visual reveal">
          <div className="about-orb" />
          <img 
            src={agencyWorkflowImg} 
            alt="NexaEdge Transparent Functional Architecture" 
            style={{ 
              width: '100%', 
              borderRadius: '24px', 
              boxShadow: '0 20px 60px rgba(0,0,0,0.6)', 
              position: 'relative', 
              zIndex: 10,
              objectFit: 'cover'
            }} 
          />
        </div>
      </div>
    </section>
  );
}
