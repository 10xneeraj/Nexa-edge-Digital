import { useState } from 'react';
import './Contact.css';
import useScrollReveal from '../hooks/useScrollReveal';
import Icon from './Icon';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const ref = useScrollReveal();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...form
        })
      });
      if (res.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', phone: '', service: '', message: '' });
      }
    } catch {
      setSubmitted(true);
      setForm({ name: '', email: '', phone: '', service: '', message: '' });
    }
    setLoading(false);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="contact section" id="contact" ref={ref}>
      <div className="container">
        <div className="text-center">
          <span className="section-label reveal">Get Started</span>
          <h2 className="section-title reveal">
            Let's build your <span className="gradient-text">growth engine</span>
          </h2>
          <p className="section-subtitle reveal">
            <p>Bring us your hardest funnel bottleneck. We'll build you a custom 
            strategy brief: no cost, no obligation, no pitch deck.</p>
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info reveal">
            <h3>Reach Out Directly</h3>
            <p>Prefer a quick conversation? Here's how to find us.</p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon"><Icon name="mapPin" size={20} /></div>
                <div>
                  <h4>Office</h4>
                  <p>123 Innovation Drive, Tech City, CA 94025</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><Icon name="mail" size={20} /></div>
                <div>
                  <h4>Email</h4>
                  <p>hello@nexaedge.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><Icon name="phone" size={20} /></div>
                <div>
                  <h4>Phone</h4>
                  <p>+1 (555) 987-6543</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><Icon name="clock" size={20} /></div>
                <div>
                  <h4>Hours</h4>
                  <p>Mon – Fri: 9:00 AM – 6:00 PM EST</p>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a href="#" aria-label="LinkedIn"><Icon name="linkedin" size={18} /></a>
              <a href="#" aria-label="Twitter"><Icon name="twitter" size={18} /></a>
              <a href="#" aria-label="Instagram"><Icon name="instagram" size={18} /></a>
              <a href="#" aria-label="Facebook"><Icon name="facebook" size={18} /></a>
            </div>
          </div>

          <div className="glass-card contact-form-card reveal">
            {submitted ? (
              <div className="form-success">
                <Icon name="check" size={32} style={{ color: 'var(--secondary)' }} />
                <h3>We got it. Expect a reply within 24 hours.</h3>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="c-name">Full Name *</label>
                    <input id="c-name" name="name" type="text" placeholder="Jane Smith" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="c-email">Work Email *</label>
                    <input id="c-email" name="email" type="email" placeholder="jane@company.com" value={form.email} onChange={handleChange} required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="c-phone">Phone</label>
                    <input id="c-phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" value={form.phone} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="c-service">What do you need help with?</label>
                    <select id="c-service" name="service" value={form.service} onChange={handleChange}>
                      <option value="">Pick one</option>
                      <option>SEO & Organic Growth</option>
                      <option>Paid Media (Google / Meta / LinkedIn)</option>
                      <option>Social Media & Content</option>
                      <option>Website Design & CRO</option>
                      <option>Email & Lifecycle Marketing</option>
                      <option>Full-Funnel Strategy</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="c-message">Tell us about your goals *</label>
                  <textarea id="c-message" name="message" placeholder="What are you trying to achieve? Any timeline or budget context helps us give better advice." value={form.message} onChange={handleChange} required />
                </div>

                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? 'Sending...' : 'Get Your Free Strategy Brief'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
