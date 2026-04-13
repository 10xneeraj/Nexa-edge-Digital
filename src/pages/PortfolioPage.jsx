import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import { useEffect } from 'react';

export default function PortfolioPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper" style={{ paddingTop: '80px' }}>
      <Portfolio />
      <Testimonials />
      <CTA />
    </div>
  );
}
