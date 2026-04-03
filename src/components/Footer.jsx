import './Footer.css';
import logo from '../assets/logo.svg';
import Icon from './Icon';
import ScrollLink from './ScrollLink';

const quickLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Results', href: '#portfolio' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  { label: 'SEO & Organic Growth', path: '/service/seo' },
  { label: 'Paid Media Performance', path: '/service/ppc' },
  { label: 'Social & Community', path: '/service/social' },
  { label: 'Web Design & CRO', path: '/service/web' },
  { label: 'Email & Lifecycle', path: '/service/email' },
  { label: 'Content & Demand Gen', path: '/service/content' },
];

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <ScrollLink to="#hero" className="footer-logo">
            <img src={logo} alt="NexaEdge Digital" />
          </ScrollLink>
          <p>
            Performance marketing for brands that measure everything.
            We turn ad spend into revenue and traffic into pipeline.
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="LinkedIn"><Icon name="linkedin" size={18} /></a>
            <a href="#" aria-label="Twitter"><Icon name="twitter" size={18} /></a>
            <a href="#" aria-label="Instagram"><Icon name="instagram" size={18} /></a>
            <a href="#" aria-label="Facebook"><Icon name="facebook" size={18} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            {quickLinks.map((link, i) => (
              <li key={i}><ScrollLink to={link.href}>{link.label}</ScrollLink></li>
            ))}
          </ul>
        </div>

        <div className="footer-links">
          <h4>Capabilities</h4>
          <ul>
            {serviceLinks.map((s, i) => (
              <li key={i}><ScrollLink to={s.path}>{s.label}</ScrollLink></li>
            ))}
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4>Weekly Growth Brief</h4>
          <p>
            One email per week. Frameworks, benchmarks, and strategies
            from our actual client work. No spam, unsubscribe anytime.
          </p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your work email" required />
            <button className="btn btn-primary" type="submit">Join</button>
          </form>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} NexaEdge Digital. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
