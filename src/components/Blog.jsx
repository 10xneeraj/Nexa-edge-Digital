import './Blog.css';
import useScrollReveal from '../hooks/useScrollReveal';
import Icon from './Icon';

const blogPosts = [
  {
    title: 'We Audited 200 Google Ads Accounts. Here\'s What 90% Get Wrong.',
    excerpt: 'After reviewing $18M in combined ad spend, these are the five structural mistakes that silently drain budgets. We cover the fixes that recovered an average of 34% wasted spend.',
    category: 'Paid Media',
    date: 'Mar 2026',
    readTime: '8 min read',
  },
  {
    title: 'The Content Cluster Playbook That Took a Client from 0 to 14K Monthly Visitors',
    excerpt: 'A step-by-step breakdown of the exact SEO content system we used for PureForm Health, including our topic research framework, internal linking model, and publishing cadence.',
    category: 'SEO',
    date: 'Feb 2026',
    readTime: '12 min read',
  },
  {
    title: 'Why Your Agency\'s Reporting Is Lying to You (And How to Fix It)',
    excerpt: 'Vanity metrics, attribution theater, and cherry-picked timeframes. We break down the reporting games agencies play and show you what a honest dashboard actually looks like.',
    category: 'Strategy',
    date: 'Jan 2026',
    readTime: '6 min read',
  }
];

export default function Blog() {
  const ref = useScrollReveal();

  return (
    <section className="blog section" id="blog" ref={ref}>
      <div className="container text-center">
        <span className="section-label reveal">Insights</span>
        <h2 className="section-title reveal">
          Hard-earned <span className="gradient-text">wisdom, shared free</span>
        </h2>
        <p className="section-subtitle reveal">
          No fluff pieces. These are the frameworks, audits, and playbooks
          from campaigns we've actually run.
        </p>

        <div className="blog-grid">
          {blogPosts.map((post, i) => (
            <div className="glass-card blog-card reveal" key={i}>
              <div className="blog-image">
                <span className="blog-date">{post.date}</span>
                <Icon name={i === 0 ? 'target' : i === 1 ? 'search' : 'barChart'} size={48} style={{ color: 'var(--text-muted)', opacity: 0.4 }} />
              </div>
              <div className="blog-body">
                <div className="blog-category">{post.category}</div>
                <h3>{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-footer">
                  <span className="blog-read-time">{post.readTime}</span>
                  <span className="blog-link">Read <Icon name="arrowRight" size={14} /></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
