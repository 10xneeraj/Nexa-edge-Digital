import Services from '../components/Services';
import Industries from '../components/Industries';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import { useEffect } from 'react';

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper" style={{ paddingTop: '80px' }}>
      <Services />
      <Industries />
      <FAQ />
      <CTA />
    </div>
  );
}
