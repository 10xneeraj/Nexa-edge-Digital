import { Link } from 'react-router-dom';
import './Services.css';
import useScrollReveal from '../hooks/useScrollReveal';
import Icon from './Icon';
import { servicesData } from '../data/servicesData';

import bgSeo from '../assets/unique_bg_seo.png';
import bgPpc from '../assets/unique_bg_ppc.png';
import bgSocial from '../assets/unique_bg_social.png';
import bgContent from '../assets/unique_bg_content.png';
import bgWeb from '../assets/unique_bg_web.png';
import bgEmail from '../assets/unique_bg_email.png';
import dashboard1 from '../assets/dashboard1.png';
import dashboard2 from '../assets/dashboard2.png';
import dashSocial from '../assets/dashboard_social.png';
import dashContent from '../assets/dashboard_content.png';
import dashWeb from '../assets/dashboard_web.png';
import dashEmail from '../assets/dashboard_email.png';

export const serviceImages = {
  seo: bgSeo,
  ppc: bgPpc,
  social: bgSocial,
  content: bgContent,
  web: bgWeb,
  email: bgEmail
};

export const serviceDashboards = {
  seo: dashboard1,
  ppc: dashboard2,
  social: dashSocial,
  content: dashContent,
  web: dashWeb,
  email: dashEmail
};

function getIconName(id) {
  const map = {
    seo: 'search',
    ppc: 'target',
    social: 'share',
    content: 'pen',
    web: 'code',
    email: 'mail'
  };
  return map[id] || 'star';
}

export default function Services() {
  const ref = useScrollReveal();

  return (
    <section className="services section" id="services" ref={ref}>
      <div className="container text-center">
        <span className="section-label reveal">Capabilities</span>
        <h2 className="section-title reveal">
          Full-funnel growth. <span className="gradient-text">Zero guesswork.</span>
        </h2>
        <p className="section-subtitle reveal" style={{marginBottom: '20px'}}>
          Six disciplines, one integrated team. We don't silo channels. We
          orchestrate them so every touchpoint drives measurable revenue.
        </p>

        {/* --- Injected Dashboard Images for Capabilities Visibility --- */}
        <div className="capabilities-visuals reveal" style={{display: 'flex', gap: '30px', margin: '40px 0 60px 0', justifyContent: 'center', flexWrap: 'wrap'}}>
            <div style={{flex: '1 1 45%', maxWidth: '500px', minWidth: '300px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(108,60,225,0.2)', border: '1px solid rgba(255,255,255,0.1)', position: 'relative'}}>
              <div style={{position: 'absolute', top: '15px', left: '15px', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(10px)', padding: '6px 14px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', border: '1px solid rgba(255,255,255,0.1)', zIndex: 10}}>LTV Optimization Engine</div>
              <img src={dashboard1} alt="Predictive Analytics Dashboard Desktop" style={{width: '100%', height: '100%', display: 'block', objectFit: 'cover'}} />
            </div>
            <div style={{flex: '1 1 45%', maxWidth: '500px', minWidth: '300px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,212,170,0.15)', border: '1px solid rgba(255,255,255,0.1)', position: 'relative'}}>
              <div style={{position: 'absolute', top: '15px', left: '15px', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(10px)', padding: '6px 14px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', border: '1px solid rgba(255,255,255,0.1)', zIndex: 10}}>Real-Time Mobile Attribution</div>
              <img src={dashboard2} alt="Real-Time Analytics Tablet Focus" style={{width: '100%', height: '100%', display: 'block', objectFit: 'cover'}} />
            </div>
        </div>
        {/* ----------------------------------------------------------- */}

        <div className="services-grid">
          {Object.entries(servicesData).map(([id, s], i) => (
            <Link to={`/service/${id}`} className="glass-card service-card reveal" key={i} style={{textDecoration: 'none', display: 'flex', flexDirection: 'column'}}>
              <img src={serviceImages[id]} alt={s.title} className="service-card-bg" />
              <div className="service-content-wrapper" style={{ flexGrow: 1 }}>
                <div className="service-icon">
                  <Icon name={getIconName(id)} size={28} />
                </div>
                <h3>{s.title.split(' (')[0]}</h3>
                <h4 style={{fontSize: '1rem', color: 'var(--primary)', marginBottom: '10px'}}>{s.headline}</h4>
                <p style={{fontSize: '0.9rem', opacity: 0.8, marginBottom: '20px'}}>{s.intro}</p>
                
                <div className="service-mockup" style={{ marginTop: 'auto', marginBottom: '16px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', height: '140px' }}>
                  <img src={serviceDashboards[id]} alt={`${s.title} UI`} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="mockup-img" />
                </div>

                <div className="service-click-indicator" style={{color: 'var(--secondary)', fontSize: '0.85rem', fontWeight: 600}}>
                  View Full Methodology →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
