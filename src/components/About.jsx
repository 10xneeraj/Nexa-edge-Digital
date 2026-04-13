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
          <span className="section-label reveal">The Nexa Edge Difference</span>
          <h2 className="section-title reveal">
            Built for founders who <span className="gradient-text">demand predictability</span>
          </h2>
          <div className="about-desc reveal">
            <p style={{marginBottom: '15px'}}>Welcome to Nexa Edge, where predictive machine learning intercepts human intent to fuel your brand's explosive growth. We are a computational marketing agency dedicated to helping enterprises scale flawlessly in today’s hyper-competitive digital landscape.</p>
            <p style={{marginBottom: '15px'}}>At Nexa Edge, we specialize in Predictive SEO, ML Paid Media, AI Social Engineering, and Algorithmic Content. Whether you're hunting for enterprise B2B leads or rapid D2C scalability, we ingest your data to generate the precise mathematical strategy needed to dominate your sector.</p>
            <p style={{marginBottom: '30px'}}><strong>Our Mission:</strong> To replace subjective marketing guesswork with deterministic computational models. We aim to aggressively lower your Customer Acquisition Cost through AI logic, ensuring every dollar spent mathematically correlates to pipeline growth.</p>
          </div>

          <div className="about-features">
            {[
              {title: 'Customized Algorithms', desc: 'Models tuned precisely to your unit economics.'},
              {title: 'Senior Data Engineers', desc: 'A team obsessed with deterministic outcomes and predictive ROI.'},
              {title: 'Innovation-Driven', desc: 'Deploying neural networks and live heatmaps for unfair advantages.'},
              {title: 'Full-Stack Integration', desc: 'From branding architecture to automated pipeline lifecycle logic in one place.'}
            ].map((f, i) => (
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
