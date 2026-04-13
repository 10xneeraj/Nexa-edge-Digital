import Blog from '../components/Blog';
import CTA from '../components/CTA';
import { useEffect } from 'react';

export default function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper" style={{ paddingTop: '80px' }}>
      <Blog />
      <CTA />
    </div>
  );
}
