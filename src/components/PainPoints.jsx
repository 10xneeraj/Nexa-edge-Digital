import { motion } from 'framer-motion';
import './PainPoints.css';
import useScrollReveal from '../hooks/useScrollReveal';
import Icon from './Icon';

const painPointsData = [
  {
    icon: 'trendingDown',
    title: 'Skyrocketing CAC',
    description: 'Ad costs are rising while lead quality plummets. You are burning budget on generic campaigns that do not convert.',
    solution: 'Our AI precisely targets high-intent buyers, driving down acquisition costs by up to 40%.'
  },
  {
    icon: 'activity',
    title: 'Stagnant Growth',
    description: 'You have hit a plateau. Old strategies that used to work are no longer moving the needle in a crowded market.',
    solution: 'Predictive analytics identify untapped revenue channels before your competitors find them.'
  },
  {
    icon: 'alertCircle',
    title: 'Unpredictable Lead Flow',
    description: 'Feast or famine cycles make it impossible to scale operations or project revenue accurately.',
    solution: 'Automated, full-funnel systems ensure a consistent, scalable pipeline of qualified opportunities.'
  }
];

export default function PainPoints({ onOpenLeadMagnet }) {
  const ref = useScrollReveal();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="pain-points section" id="pain-points" ref={ref}>
      <div className="container">
        <div className="text-center">
          <span className="section-label reveal">The Reality</span>
          <h2 className="section-title reveal">
            Why Your Marketing Is <span className="gradient-text">Failing to Scale</span>
          </h2>
          <p className="section-subtitle reveal">
            Stop pretending the old playbook works. If you're experiencing these bottlenecks, you're handing market share to competitors who leverage AI.
          </p>
        </div>

        <motion.div 
          className="pain-points-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {painPointsData.map((point, idx) => (
            <motion.div key={idx} className="pain-point-card" variants={itemVariants}>
              <div className="pain-icon-wrapper">
                <Icon name={point.icon} size={28} />
              </div>
              <h3>{point.title}</h3>
              <p className="pain-description">{point.description}</p>
              <div className="pain-solution">
                <span className="solution-label">The AI Fix:</span>
                <p>{point.solution}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <button className="btn btn-primary btn-shimmer" onClick={onOpenLeadMagnet}>
            Get Your Free AI Growth Audit
          </button>
        </motion.div>
      </div>
    </section>
  );
}
