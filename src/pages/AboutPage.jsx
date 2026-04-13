import About from '../components/About';
import Process from '../components/Process';
import Team from '../components/Team';
import CTA from '../components/CTA';
import { useEffect } from 'react';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper" style={{ paddingTop: '80px' }}>
      <About />
      <Process />
      <Team />
      <CTA />
    </div>
  );
}
