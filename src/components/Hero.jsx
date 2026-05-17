import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './Hero.css';
import ScrollLink from './ScrollLink';

const TiltCard = ({ children, className }) => {
  const ref = useRef(null);
  const [style, setStyle] = useState({});
  
  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPct = x / rect.width - 0.5;
    const yPct = y / rect.height - 0.5;
    
    setStyle({
      transform: `perspective(1000px) rotateY(${xPct * 20}deg) rotateX(${-yPct * 20}deg) scale3d(1.05, 1.05, 1.05)`,
      transition: "transform 0.1s ease-out"
    });
  };
  
  const handleMouseLeave = () => {
    setStyle({ transform: "perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)", transition: "transform 0.5s ease-out" });
  };

  return (
    <div className={className} ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={style}>
      {children}
    </div>
  );
};

const MagneticButton = ({ children, className, to }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const handleMouse = (e) => {
    if(!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };
  
  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };
  
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      <ScrollLink to={to} className={className}>
        {children}
      </ScrollLink>
    </motion.div>
  );
};

export default function Hero() {
  const statsRef = useRef(null);
  const canvasRef = useRef(null);

  // Canvas particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];
    let mouse = { x: null, y: null, radius: 150 };

    const handleMouseMove = (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };
    
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
      update() {
        if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
        if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;

        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius + this.size) {
          if (mouse.x < this.x && this.x < canvas.width - this.size * 10) this.x += 10;
          if (mouse.x > this.x && this.x > this.size * 10) this.x -= 10;
          if (mouse.y < this.y && this.y < canvas.height - this.size * 10) this.y += 10;
          if (mouse.y > this.y && this.y > this.size * 10) this.y -= 10;
        }
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    const initParticles = () => {
      particles = [];
      let numberOfParticles = (canvas.height * canvas.width) / 12000;
      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 1;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 0.4) - 0.2;
        let directionY = (Math.random() * 0.4) - 0.2;
        let color = 'rgba(0, 212, 170, 0.5)';
        particles.push(new Particle(x, y, directionX, directionY, size, color));
      }
    };

    const connectParticles = () => {
      let opacityValue = 1;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x)) +
                         ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            opacityValue = 1 - (distance / 15000);
            ctx.strokeStyle = `rgba(108, 60, 225, ${opacityValue})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    let time = 0;
    const animate = () => {
      time += 0.003;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw ambient gradients
      const x1 = canvas.width * (0.3 + 0.15 * Math.sin(time * 0.7));
      const y1 = canvas.height * (0.4 + 0.15 * Math.cos(time * 0.5));
      const g1 = ctx.createRadialGradient(x1, y1, 0, x1, y1, 400);
      g1.addColorStop(0, 'rgba(108, 60, 225, 0.15)');
      g1.addColorStop(1, 'rgba(108, 60, 225, 0)');
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const x2 = canvas.width * (0.7 + 0.12 * Math.cos(time * 0.6));
      const y2 = canvas.height * (0.5 + 0.18 * Math.sin(time * 0.4));
      const g2 = ctx.createRadialGradient(x2, y2, 0, x2, y2, 350);
      g2.addColorStop(0, 'rgba(0, 212, 170, 0.1)');
      g2.addColorStop(1, 'rgba(0, 212, 170, 0)');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => p.update());
      connectParticles();
      
      animId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Stats counting animation
  useEffect(() => {
    const counters = statsRef.current?.querySelectorAll('.stat-number');
    if (!counters) return;

    const animateCount = (el) => {
      const target = parseInt(el.getAttribute('data-target'));
      const suffix = el.getAttribute('data-suffix') || '';
      const duration = 2000;
      const start = performance.now();

      const update = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(target * eased) + suffix;
        if (progress < 1) requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            counters.forEach(animateCount);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  // Framer motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="hero section" id="hero">
      <canvas className="hero-canvas" ref={canvasRef} />

      <div className="container hero-grid">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-badge" variants={itemVariants}>
            <span className="dot" />
            Results-obsessed since 2018
          </motion.div>

          <motion.h1 variants={itemVariants}>
            We don't do marketing.
            <span className="gradient-text">We deploy AI to engineer revenue.</span>
          </motion.h1>

          <motion.p className="hero-desc" variants={itemVariants}>
            NexaEdge is the predictive AI performance agency behind 180+ brands that outrank,
            outspend, and outperform their competition utilizing machine-learning technology.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <MagneticButton to="/contact" className="btn btn-primary btn-shimmer">
              Book a Strategy Call
            </MagneticButton>
            <MagneticButton to="#portfolio" className="btn btn-secondary">
              See Our Results
            </MagneticButton>
          </motion.div>

          <motion.div className="hero-stats" ref={statsRef} variants={itemVariants}>
            <div className="hero-stat">
              <div className="stat-number" data-target="42" data-suffix="M">0</div>
              <div className="stat-label">Revenue Driven for Clients</div>
            </div>
            <div className="hero-stat">
              <div className="stat-number" data-target="6" data-suffix=".2x">0</div>
              <div className="stat-label">Avg. ROAS Across Accounts</div>
            </div>
            <div className="hero-stat">
              <div className="stat-number" data-target="97" data-suffix="%">0</div>
              <div className="stat-label">Client Retention Rate</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="hero-orb" />

          <div className="hero-graph-container">
            <svg viewBox="0 0 400 150" className="animated-graph">
              <defs>
                <linearGradient id="graphGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--secondary)" />
                  <stop offset="100%" stopColor="var(--primary-light)" />
                </linearGradient>
                <linearGradient id="graphFillGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(0, 212, 170, 0.4)" />
                  <stop offset="100%" stopColor="rgba(0, 212, 170, 0)" />
                </linearGradient>
              </defs>
              <path className="graph-fill" d="M 0 120 C 50 120, 80 80, 130 90 C 180 100, 220 40, 270 50 C 320 60, 360 20, 400 10 L 400 150 L 0 150 Z" fill="url(#graphFillGradient)" />
              <path className="graph-line" d="M 0 120 C 50 120, 80 80, 130 90 C 180 100, 220 40, 270 50 C 320 60, 360 20, 400 10" fill="none" stroke="url(#graphGradient)" strokeWidth="4" />
            </svg>
            <div className="graph-point pt-1"></div>
            <div className="graph-point pt-2"></div>
            <div className="graph-point pt-3"></div>
            <div className="graph-badge">+142% Traffic</div>
          </div>

          <div className="hero-cards-row">
            <TiltCard className="hero-float-card card-1">
              <div className="card-value" style={{color: 'var(--secondary)'}}>↑ 340%</div>
              <div className="card-label">Organic Traffic</div>
            </TiltCard>

            <TiltCard className="hero-float-card card-2">
              <div className="card-value" style={{color: 'var(--primary-light)'}}>$2.4M</div>
              <div className="card-label">Pipeline Q1</div>
            </TiltCard>

            <TiltCard className="hero-float-card card-3">
              <div className="card-value" style={{color: 'var(--accent)'}}>14:1</div>
              <div className="card-label">Email Campaign ROI</div>
            </TiltCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
