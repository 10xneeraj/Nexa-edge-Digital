import Hero from '../components/Hero';
import Partners from '../components/Partners';
import TrustedBy from '../components/TrustedBy';
import About from '../components/About';
import Services from '../components/Services';
import Process from '../components/Process';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Platforms from '../components/Platforms';
import Industries from '../components/Industries';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Partners />
      <About />
      <Services />
      <Industries />
      <Process />
      <Portfolio />
      <Testimonials />
      <Platforms />
      <FAQ />
      <CTA />
    </>
  );
}
