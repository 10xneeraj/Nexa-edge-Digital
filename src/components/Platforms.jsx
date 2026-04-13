import './Platforms.css';
import useScrollReveal from '../hooks/useScrollReveal';
import Icon from './Icon';
import { Link } from 'react-router-dom';

const platforms = [
  { name: 'Google Ads', icon: 'target' },
  { name: 'Meta Ads', icon: 'share' },
  { name: 'Shopify', icon: 'shoppingCart' },
  { name: 'WordPress', icon: 'code' },
  { name: 'Next.js / Vercel', icon: 'server' },
  { name: 'React Native', icon: 'smartphone' },
  { name: 'HubSpot CRM', icon: 'database' },
  { name: 'Salesforce', icon: 'briefcase' },
  { name: 'Mailchimp', icon: 'mail' },
  { name: 'OpenAI / LLMs', icon: 'zap' },
  { name: 'Google Analytics', icon: 'barChart' },
  { name: 'Figma', icon: 'pen' }
];

export default function Platforms() {
  const ref = useScrollReveal();

  return (
    <section className="platforms section" id="platforms" ref={ref}>
      <div className="container text-center">
        <span className="section-label reveal">Working With Top Platforms</span>
        <h2 className="section-title reveal">
          Powered By The <span className="gradient-text">Best In Class</span>
        </h2>
        <p className="section-subtitle reveal">
          At Nexa Edge, we leverage the power of leading platforms to deliver
          optimal solutions. From headless e-commerce on Shopify to predictive
          campaigns on Meta and Google, we ensure seamless functionality,
          scalability, and performance across every digital channel.
        </p>

        <div className="platforms-grid">
          {platforms.map((platform, idx) => (
            <div className="platform-badge reveal" key={idx} style={{ transitionDelay: `${idx * 50}ms` }}>
              <Icon name={platform.icon} size={20} />
              <span>{platform.name}</span>
            </div>
          ))}
        </div>

        <Link to="/contact" className="btn btn-primary reveal" style={{ marginTop: '40px' }}>
          Talk to Our Experts →
        </Link>
      </div>
    </section>
  );
}
