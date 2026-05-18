import { useState } from 'react';
import Hero from '../components/Hero';
import Partners from '../components/Partners';
import TrustedBy from '../components/TrustedBy';
import About from '../components/About';
import Services from '../components/Services';
import PainPoints from '../components/PainPoints';
import LeadMagnetModal from '../components/LeadMagnetModal';
import Process from '../components/Process';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Platforms from '../components/Platforms';
import Industries from '../components/Industries';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

export default function Home() {
  const [isLeadMagnetOpen, setIsLeadMagnetOpen] = useState(false);

  return (
    <>
      <Hero />
      <TrustedBy />
      <Partners />
      <About />
      <Services />
      <PainPoints onOpenLeadMagnet={() => setIsLeadMagnetOpen(true)} />
      <Industries />
      <Process />
      <Portfolio />
      <Testimonials />
      <Platforms />
      <FAQ />
      <CTA onOpenLeadMagnet={() => setIsLeadMagnetOpen(true)} />
      <LeadMagnetModal isOpen={isLeadMagnetOpen} onClose={() => setIsLeadMagnetOpen(false)} />
    </>
  );
}
