import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
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
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import BackToTop from '../components/BackToTop';

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <TrustedBy />
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
      <Footer />
      <BackToTop />
    </>
  );
}
