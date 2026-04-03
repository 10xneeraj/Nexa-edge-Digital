import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import './ServiceDetail.css';

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
              <a href="/#contact" className="btn btn-primary">Claim Your Strategy Session</a>
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
          <a href="/#contact" className="btn btn-primary">Book Your Audit</a>
        </div>
      </section>
    </div>
  );
}
