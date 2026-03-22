import { useState, useEffect } from 'react';
import './Preloader.css';

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${hidden ? 'hidden' : ''}`}>
      <div className="preloader-logo">NexaEdge</div>
      <div className="preloader-bar" />
    </div>
  );
}
