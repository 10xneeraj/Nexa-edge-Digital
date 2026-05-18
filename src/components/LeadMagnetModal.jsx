import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LeadMagnetModal.css';
import Icon from './Icon';

export default function LeadMagnetModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', website: '', painPoint: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.MODE === 'production' ? '' : 'http://localhost:5000');
      const res = await fetch(`${API_URL}/api/leads`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ ...form, source: 'Lead Magnet Modal' })
      });
      if (res.ok) {
        setStatus('success');
        setTimeout(() => {
          onClose();
          setStatus('idle');
          setForm({ name: '', email: '', website: '', painPoint: '' });
        }, 3000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div 
            className="modal-container"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <button className="modal-close" onClick={onClose}>
              <Icon name="x" size={24} />
            </button>
            
            <div className="modal-content">
              <div className="modal-header">
                <span className="modal-badge">Free Value</span>
                <h2>Get Your Free <span className="gradient-text">AI Growth Audit</span></h2>
                <p>Find out exactly where you are losing money and how our predictive models can recover it. No sales pitch, just actionable data.</p>
              </div>

              {status === 'success' ? (
                <motion.div 
                  className="modal-success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="success-icon">
                    <Icon name="check" size={40} />
                  </div>
                  <h3>Audit Request Received</h3>
                  <p>Our AI strategist will review your data and reach out within 24 hours.</p>
                </motion.div>
              ) : (
                <form className="modal-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Jane Doe" />
                  </div>
                  <div className="form-group">
                    <label>Work Email *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="jane@company.com" />
                  </div>
                  <div className="form-group">
                    <label>Website URL</label>
                    <input type="url" name="website" value={form.website} onChange={handleChange} placeholder="https://company.com" />
                  </div>
                  <div className="form-group">
                    <label>Biggest Bottleneck?</label>
                    <select name="painPoint" value={form.painPoint} onChange={handleChange} required>
                      <option value="" disabled>Select your main challenge</option>
                      <option value="High CAC">High Customer Acquisition Cost (CAC)</option>
                      <option value="Low Lead Quality">Low Quality Leads</option>
                      <option value="Stagnant Traffic">Stagnant Traffic / No Growth</option>
                      <option value="Low Conversion Rate">Low Website Conversion Rate</option>
                    </select>
                  </div>
                  
                  {status === 'error' && (
                    <div className="modal-error">Something went wrong. Please try again.</div>
                  )}

                  <button type="submit" className="btn btn-primary btn-full" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Processing...' : 'Claim My Free Audit'}
                  </button>
                  <p className="modal-disclaimer">We respect your privacy. Zero spam, unsubscribe anytime.</p>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
