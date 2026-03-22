import { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const statsRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      time += 0.003;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const x1 = canvas.width * (0.3 + 0.15 * Math.sin(time * 0.7));
      const y1 = canvas.height * (0.4 + 0.15 * Math.cos(time * 0.5));
      const g1 = ctx.createRadialGradient(x1, y1, 0, x1, y1, 350);
      g1.addColorStop(0, 'rgba(108, 60, 225, 0.18)');
      g1.addColorStop(1, 'rgba(108, 60, 225, 0)');
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const x2 = canvas.width * (0.7 + 0.12 * Math.cos(time * 0.6));
      const y2 = canvas.height * (0.5 + 0.18 * Math.sin(time * 0.4));
      const g2 = ctx.createRadialGradient(x2, y2, 0, x2, y2, 300);
      g2.addColorStop(0, 'rgba(0, 212, 170, 0.12)');
      g2.addColorStop(1, 'rgba(0, 212, 170, 0)');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const x3 = canvas.width * (0.5 + 0.2 * Math.sin(time * 0.8 + 2));
      const y3 = canvas.height * (0.3 + 0.1 * Math.cos(time * 0.9));
      const g3 = ctx.createRadialGradient(x3, y3, 0, x3, y3, 200);
      g3.addColorStop(0, 'rgba(255, 107, 53, 0.08)');
      g3.addColorStop(1, 'rgba(255, 107, 53, 0)');
      ctx.fillStyle = g3;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

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

  return (
    <section className="hero section" id="hero">
      <canvas className="hero-canvas" ref={canvasRef} />

      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot" />
            Results-obsessed since 2018
          </div>

          <h1>
            We don't do marketing.
            <span className="gradient-text">We engineer revenue.</span>
          </h1>

          <p className="hero-desc">
            NexaEdge is the performance agency behind 180+ brands that outrank,
            outspend, and outperform their competition — with strategy that's
            accountable to every dollar.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary btn-shimmer">
              Book a Strategy Call
            </a>
            <a href="#portfolio" className="btn btn-secondary">
              See Our Results
            </a>
          </div>

          <div className="hero-stats" ref={statsRef}>
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
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-orb" />

          <div className="hero-float-card card-1">
            <div className="card-value" style={{color: 'var(--secondary)'}}>↑ 340%</div>
            <div className="card-label">Organic Traffic · 6mo</div>
          </div>

          <div className="hero-float-card card-2">
            <div className="card-value" style={{color: 'var(--primary-light)'}}>$2.4M</div>
            <div className="card-label">Pipeline Generated · Q1</div>
          </div>

          <div className="hero-float-card card-3">
            <div className="card-value" style={{color: 'var(--accent)'}}>14:1</div>
            <div className="card-label">Email Campaign ROI</div>
          </div>
        </div>
      </div>
    </section>
  );
}
