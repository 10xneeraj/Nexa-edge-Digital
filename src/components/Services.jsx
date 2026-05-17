import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="services section" id="services" ref={ref}>
      <div className="container text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.span className="section-label" variants={itemVariants}>Capabilities</motion.span>
          <motion.h2 className="section-title" variants={itemVariants}>
            Full-funnel growth. <span className="gradient-text">Zero guesswork.</span>
          </motion.h2>
          <motion.p className="section-subtitle mb-20" variants={itemVariants}>
            Six disciplines, one integrated team. We don't silo channels. We
            orchestrate them so every touchpoint drives measurable revenue.
          </motion.p>

          <motion.div className="capabilities-visuals mb-60 mt-40 flex-center flex-wrap gap-30" variants={itemVariants}>
              <div className="dashboard-preview-card green-glow">
                <div className="dashboard-label">LTV Optimization Engine</div>
                <img src={dashboard1} alt="Predictive Analytics Dashboard Desktop" className="dashboard-img" />
              </div>
              <div className="dashboard-preview-card blue-glow">
                <div className="dashboard-label">Real-Time Mobile Attribution</div>
                <img src={dashboard2} alt="Real-Time Analytics Tablet Focus" className="dashboard-img" />
              </div>
          </motion.div>

          <motion.div className="services-grid" variants={containerVariants}>
            {Object.entries(servicesData).map(([id, s], i) => (
              <motion.div key={i} variants={itemVariants}>
                <Link to={`/service/${id}`} className="glass-card service-card flex-col">
                  <img src={serviceImages[id]} alt={s.title} className="service-card-bg" />
                  <div className="service-content-wrapper flex-grow">
                    <div className="service-icon">
                      <Icon name={getIconName(id)} size={28} />
                    </div>
                    <h3>{s.title.split(' (')[0]}</h3>
                    <h4 className="service-headline">{s.headline}</h4>
                    <p className="service-intro">{s.intro}</p>
                    
                    <div className="service-mockup mt-auto">
                      <img src={serviceDashboards[id]} alt={`${s.title} UI`} className="mockup-img" />
                    </div>

                    <div className="service-click-indicator">
                      View Full Methodology →
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
