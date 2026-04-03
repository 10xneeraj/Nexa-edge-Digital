import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import ContactPage from './pages/ContactPage';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <Router>
      <Preloader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <FloatingWhatsApp />
      <BackToTop />
      <Footer />
    </Router>
  );
}

export default App;
