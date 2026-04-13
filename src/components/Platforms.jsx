import './Platforms.css';
import useScrollReveal from '../hooks/useScrollReveal';
import Icon from './Icon';

// Note: Using standard Icons as placeholders for logos, or text-heavy badges
const platforms = [
  { name: 'Vercel / Next.js Edge', icon: 'server' },
  { name: 'React Native & Flutter', icon: 'smartphone' },
  { name: 'Shopify Advanced Headless', icon: 'shoppingCart' },
  { name: 'Meta / Google Neural APIs', icon: 'cpu' },
  { name: 'Hubspot & Salesforce CRM', icon: 'database' },
  { name: 'Custom LLM / OpenAI', icon: 'zap' }
];

export default function Platforms() {
  const ref = useScrollReveal();

  return (
    <section className="platforms section" id="platforms" ref={ref}>
      <div className="container text-center">
        <span className="section-label reveal">The Tech Stack</span>
        <h2 className="section-title reveal">
          Engineering At The <span className="gradient-text">Edge</span>
        </h2>
        <p className="section-subtitle reveal">
          At Nexa Edge, we leverage enterprise-grade infrastructure. Whether deploying serverless frontends, building complex marketplace architecture, or integrating predictive AI pipelines natively into your ad stack, our code executes immaculately.
        </p>

        <div className="platforms-grid">
          {platforms.map((platform, idx) => (
            <div className="platform-badge reveal" key={idx} style={{ transitionDelay: `${idx * 50}ms` }}>
              <Icon name={platform.icon} size={20} />
              <span>{platform.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
