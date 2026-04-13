import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import { useEffect } from 'react';

export default function PricingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper" style={{ paddingTop: '80px' }}>
      <Pricing />
      <FAQ />
      <CTA />
    </div>
  );
}
