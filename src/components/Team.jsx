import './Team.css';
import useScrollReveal from '../hooks/useScrollReveal';
import Icon from './Icon';

const team = [
  {
    name: 'Alex Mercer',
    role: 'Founder & Head of Strategy',
    bio: 'Ex-Google · 12 years in performance marketing',
    bg: 'linear-gradient(135deg, #6C3CE1, #8B5CF6)',
    initial: 'AM',
  },
  {
    name: 'Maya Patel',
    role: 'Director of SEO',
    bio: 'Former Conductor · Built 40+ content machines',
    bg: 'linear-gradient(135deg, #00D4AA, #34EDCB)',
    initial: 'MP',
  },
  {
    name: 'Ryan Nakamura',
    role: 'Head of Paid Media',
    bio: 'Managed $50M+ in ad spend · Meta & Google certified',
    bg: 'linear-gradient(135deg, #FF6B35, #FF8F66)',
    initial: 'RN',
  },
  {
    name: 'Sofia Reyes',
    role: 'Creative Director',
    bio: 'Ex-Ogilvy · Award-winning campaigns across 6 markets',
    bg: 'linear-gradient(135deg, #6C3CE1, #00D4AA)',
    initial: 'SR',
  }
];

export default function Team() {
  const ref = useScrollReveal();

  return (
    <section className="team section" id="team" ref={ref}>
      <div className="container text-center">
        <span className="section-label reveal">Leadership</span>
        <h2 className="section-title reveal">
          Senior people. <span className="gradient-text">No interns.</span>
        </h2>
        <p className="section-subtitle reveal">
          Your account is managed by people who've done this at scale.
          not by someone who just graduated a certification course.
        </p>

        <div className="team-grid">
          {team.map((m, i) => (
            <div className="glass-card team-card reveal" key={i}>
              <div className="team-avatar" style={{ background: m.bg }}>
                <span style={{ fontSize: '1.1rem', fontWeight: 700 }}>{m.initial}</span>
              </div>
              <h4>{m.name}</h4>
              <div className="team-role">{m.role}</div>
              <p className="team-bio">{m.bio}</p>
              <div className="team-socials">
                <a href="#" aria-label="LinkedIn"><Icon name="linkedin" size={16} /></a>
                <a href="#" aria-label="Twitter"><Icon name="twitter" size={16} /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
