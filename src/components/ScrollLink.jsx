import { useNavigate, useLocation } from 'react-router-dom';

export default function ScrollLink({ to, children, className, onClick, ...props }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) onClick(e);

    // Split the path and hash
    const parts = to.split('#');
    const path = parts[0] || '/';
    const hash = parts[1];
    
    if (location.pathname !== path) {
      navigate(path);
      if (hash) {
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    } else {
      if (hash) {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo(0, 0);
      }
    }
  };

  return (
    <a href={`/#${to}`} className={className} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
