import { motion } from 'framer-motion';
import './Industries.css';
import useScrollReveal from '../hooks/useScrollReveal';
import Icon from './Icon';

const industriesData = [
  {
    icon: 'building',
    title: 'Real Estate',
    desc: 'Elevating property visibility with predictive ML. Generating targeted buyer profiling and securing qualified leads in fiercely competitive markets.'
  },
  {
    icon: 'heart',
    title: 'Healthcare',
    desc: 'Reach patients when intent is highest. Engineering compliant, algorithmic SEO strategies to ensure a trustworthy digital experience.'
  },
  {
    icon: 'coffee',
    title: 'Hospitality',
    desc: 'Boost your online presence to radically increase bookings and customer loyalty by showcasing unique experiences through dynamic campaigns.'
  },
  {
    icon: 'book',
    title: 'Education',
    desc: 'Connect with prospective students and parents through customized, data-driven social architectures and engaging content.'
  },
  {
    icon: 'briefcase',
    title: 'Manufacturing & Engineering',
    desc: 'Enhance brand visibility and reach new B2B opportunities. Our strategies are designed to secure lucrative international contracts fast.'
  },
  {
    icon: 'video',
    title: 'Media & Entertainment',
    desc: 'Engage and grow your audience with innovative digital marketing solutions, including algorithmic content creation and deep social tracking.'
  },
  {
    icon: 'shoppingCart',
    title: 'FMCG',
    desc: 'Build stronger connections with target customers through data-driven campaigns focused on increasing brand awareness and repeat purchase rates.'
  },
  {
    icon: 'star',
    title: 'Beauty & Personal Care',
    desc: 'Impactful strategies that resonate with consumers. Driving brand engagement, enhancing product visibility, and boosting online e-commerce sales.'
  }
];

export default function Industries() {
  const ref = useScrollReveal();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="industries section" id="industries" ref={ref}>
      <div className="container">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Targeted Market Penetration</span>
          <h2 className="section-title">
            Industries We <span className="gradient-text">Dominate</span>
          </h2>
          <p className="section-subtitle">
            Generic marketing fails. We build mathematically proven digital infrastructures explicitly calibrated to the psychological and data realities of specific verticals.
          </p>
        </motion.div>

        <motion.div 
          className="industries-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {industriesData.map((industry, index) => (
            <motion.div 
              className="industry-card" 
              key={index} 
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(108, 60, 225, 0.2)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="industry-icon-wrapper">
                <div className="industry-icon-glow"></div>
                <div className="industry-icon">
                  <Icon name={industry.icon} size={28} />
                </div>
              </div>
              <h3>{industry.title}</h3>
              <p>{industry.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
