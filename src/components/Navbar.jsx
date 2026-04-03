import { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/logo.svg';
import ScrollLink from './ScrollLink';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          <ScrollLink to="#hero" className="navbar-logo">
            <img src={logo} alt="NexaEdge Digital" />
          </ScrollLink>

          <div className="navbar-links">
            {navLinks.map(link => (
              <ScrollLink key={link.href} to={link.href}>{link.label}</ScrollLink>
            ))}
          </div>

          <div className="navbar-cta" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <ScrollLink to="#contact" className="btn btn-primary">Get Started</ScrollLink>
          </div>

          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-overlay ${menuOpen ? 'open' : ''}`} onClick={closeMenu} />
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <ScrollLink key={link.href} to={link.href} onClick={closeMenu}>{link.label}</ScrollLink>
        ))}
        <div style={{ marginTop: '24px' }}>
          <ScrollLink to="#contact" className="btn btn-primary" onClick={closeMenu} style={{ width: '100%', display: 'inline-block' }}>
            Get Started
          </ScrollLink>
        </div>
      </div>
    </>
  );
}
