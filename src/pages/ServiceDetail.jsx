import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import './ServiceDetail.css';
import ScrollLink from '../components/ScrollLink';

import dash1 from '../assets/dash_1.png';
import dash2 from '../assets/dash_2.png';

const serviceImages = {
  seo: dash1,
  ppc: dash2,
  social: dash1,
  content: dash2,
  web: dash1,
  email: dash2
};

export default function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="section container text-center" style={{paddingTop: '150px'}}>
        <h2>Service Not Found</h2>
        <Link to="/" className="btn btn-primary" style={{marginTop: '20px'}}>Return Home</Link>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      {/* Sales Hero */}
      <section className="service-hero">
        <div className="service-hero-bg" style={{ background: service.imageGradient }}></div>
        <div className="container">
          <div className="service-hero-content">
            <span className="section-label">{service.title}</span>
            <h1 className="service-headline">{service.headline}</h1>
            <p className="service-intro">{service.intro}</p>
            <div className="service-cta-group">
              <ScrollLink to="/contact" className="btn btn-primary">Claim Your Strategy Session</ScrollLink>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Metrics Section */}
      <section className="service-roi-section section">
        <div className="container">
          <h2 className="text-center section-title">Real Data. <span className="gradient-text">Real ROI.</span></h2>
          <div className="roi-grid">
            {service.roi.map((item, idx) => (
              <div className="roi-card glass-card" key={idx}>
                <div className="roi-metric gradient-text">{item.metric}</div>
                <div className="roi-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive & Features */}
      <section className="service-details-section section">
        <div className="container">
          <div className="details-grid">
            <div className="details-text">
              <div className="service-hero-visual reveal">
                <img 
                  src={serviceImages[id]} 
                  alt={`${service.title} Dashboard Analytics`}
                  style={{
                    width: '100%',
                    borderRadius: '24px',
                    boxShadow: '0 24px 80px rgba(0,0,0,0.5)',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <h3>The Methodology</h3>
              <p>{service.details}</p>
              
              <div className="guarantee-box glass-card">
                <div className="guarantee-icon">🛡️</div>
                <h4>{service.guaranteeTitle}</h4>
                <p>{service.guarantee}</p>
              </div>
            </div>
            <div className="details-features">
              <h3>What's Included in the Arsenal</h3>
              <ul className="features-list">
                {service.features.map((feat, idx) => (
                  <li key={idx} className="feature-item">
                    <span className="check">✓</span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final Push */}
      <section className="service-final-cta">
        <div className="container text-center">
          <h2>Ready to scale your {service.title.split(' ')[0]}?</h2>
          <p>Stop leaving money on the table. Speak with our growth architects today.</p>
          <ScrollLink to="/contact" className="btn btn-primary">Book Your Audit</ScrollLink>
        </div>
      </section>
    </div>
  );
}
