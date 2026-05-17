import { motion } from 'framer-motion';
import './About.css';
import useScrollReveal from '../hooks/useScrollReveal';
import agencyWorkflowImg from '../assets/agency_workflow.png';
import Icon from './Icon';

const features = [
  { title: 'Channel-Agnostic', desc: 'We go where your customers are, not where agencies prefer.' },
  { title: 'Radical Transparency', desc: 'Live dashboards. You own all data. No black boxes.' },
  { title: 'Senior-Only Teams', desc: 'No juniors learning on your budget. 5+ years experience minimum.' },
  { title: 'Skin in the Game', desc: 'Fees tied to performance. We don\'t get paid unless you grow.' },
];

const stats = [
  { icon: 'trendUp', value: '$42M+', text: 'Revenue Driven' },
  { icon: 'users', value: '180+', text: 'Brands Scaled' },
  { icon: 'award', value: '7 yrs', text: 'Avg. Client Tenure' },
  { icon: 'globe', value: '23', text: 'Industries Served' },
];

export default function About() {
  const ref = useScrollReveal();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="about section" id="about" ref={ref}>
      <div className="container about-grid">
        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.span className="section-label" variants={itemVariants}>The Nexa Edge Difference</motion.span>
          <motion.h2 className="section-title" variants={itemVariants}>
            Built for founders who <span className="gradient-text">demand predictability</span>
          </motion.h2>
          
          <motion.div className="about-desc" variants={itemVariants}>
            <p className="mb-15">Stop burning cash on guesswork. We replace subjective marketing with deterministic computational models to eliminate wasted ad spend and stalled growth.</p>
            <p className="mb-20">Whether you need enterprise B2B leads or rapid D2C scalability, we ingest your data to generate the precise mathematical strategy needed to dominate your sector.</p>
            
            <div className="mission-vision-grid">
              <div className="mv-card mission-card">
                <h4>Our Mission</h4>
                <p>To ruthlessly lower Customer Acquisition Cost, ensuring every dollar mathematically correlates to growth.</p>
              </div>
              <div className="mv-card vision-card">
                <h4>Our Vision</h4>
                <p>To lead algorithmic digital transformation and empower businesses to thrive through predictive strategies.</p>
              </div>
            </div>
          </motion.div>

          <motion.div className="about-features" variants={containerVariants}>
            {features.map((f, i) => (
              <motion.div className="about-feature" key={i} variants={itemVariants}>
                <span className="feature-check"><Icon name="check" size={14} /></span>
                <p><strong>{f.title}:</strong> {f.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.a href="#contact" className="btn btn-primary mt-20" variants={itemVariants}>
            Let's Talk Strategy
          </motion.a>
        </motion.div>

        <motion.div 
          className="about-visual"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-orb" />
          <img 
            src={agencyWorkflowImg} 
            alt="NexaEdge Transparent Functional Architecture" 
            className="about-architecture-img"
          />
          
          <div className="about-stats-grid mt-40">
            {stats.map((s, i) => (
              <div className="about-stat-card glass-card" key={i}>
                <div className="stat-icon">
                  <Icon name={s.icon} size={32} />
                </div>
                <div className="stat-value">{s.value}</div>
                <div className="stat-text">{s.text}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
