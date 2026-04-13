import { useState } from 'react';
import './FAQ.css';
import useScrollReveal from '../hooks/useScrollReveal';
import Icon from './Icon';

const faqs = [
  {
    question: "What services does Nexa Edge offer?",
    answer: "Nexa Edge specializes in Algorithmic Digital Marketing. This includes Predictive ML Paid Media, AI-Driven SEO, Algorithmic Content Generation, High-Performance Web Architecture (Next.js/React), and Automated Email Lifecycle Systems. We replace guesswork with computationally verified revenue pipelines."
  },
  {
    question: "How does Nexa Edge approach digital marketing differently?",
    answer: "Unlike traditional agencies that rely on manual bidding and generic creative intuition, our approach is exclusively mathematically driven. We deploy custom machine-learning attribution, live behavioral heatmaps, and neural-network ad optimization to drastically lower Customer Acquisition Costs and guarantee maximum ROI."
  },
  {
    question: "What industries does Nexa Edge specialize in?",
    answer: "Our scalable AI infrastructures adapt to any heavy data-flowing industry. We heavily dominate in Real Estate, high-ticket E-Commerce, Healthcare compliance marketing, SaaS/B2B tech sectors, Manufacturing, and Fintech."
  },
  {
    question: "What is the computational baseline for algorithmic scaling?",
    answer: "Within the first 30 to 45 days, our machine learning models ingest your historical data, testing hundreds of micro-audiences and creative permutations dynamically. Most clients see algorithmic break-even and aggressive metric lifts by month two as our systems calibrate to perfection."
  },
  {
    question: "Do you offer web architecture maintenance and SLA?",
    answer: "Absolutely. Our headless and React-based deployments feature auto-scaling edge infrastructure. We provide continuous maintenance, zero-downtime deployments, and real-time security patching seamlessly natively integrated with our deployment partners."
  },
  {
    question: "How do I initiate a strategy audit with Nexa Edge?",
    answer: "We don't do simple discovery calls; we do intensive pipeline audits. Get in touch via our Contact section to book your audit. We will dissect your existing analytics, outline your conversion bottlenecks, and draft the exact mathematical strategy needed to dominate your sector."
  }
];

export default function FAQ() {
  const ref = useScrollReveal();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section section" id="faq" ref={ref}>
      <div className="container">
        <div className="text-center">
          <span className="section-label reveal">Clarity & Confidence</span>
          <h2 className="section-title reveal">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-subtitle reveal">
            Understand how our proprietary AI processes outperform traditional marketing strategies systematically.
          </p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              className={`faq-item reveal ${activeIndex === index ? 'active' : ''}`} 
              key={index}
              style={{ transitionDelay: `${index * 50}ms` }}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-header">
                <h3>{faq.question}</h3>
                <div className="faq-icon">
                  <Icon name="chevronDown" size={20} />
                </div>
              </div>
              <div className="faq-body">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
