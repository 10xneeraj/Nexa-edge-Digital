import Hero from '../components/Hero';
import Partners from '../components/Partners';
import TrustedBy from '../components/TrustedBy';
import Services from '../components/Services';
import About from '../components/About';
import Process from '../components/Process';
import CTA from '../components/CTA';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Team from '../components/Team';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Partners />
      <Services />
      <About />
      <Process />
      <CTA variant="mid" />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <Team />
      <Blog />
      <Contact />
      <CTA />
    </>
  );
}
