import { useTypewriter } from '../hooks/useTypewriter';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Hero.css';

const roles = [
  'Cloud & Infrastructure Enthusiast',
  'Linux Server Administrator',
  'Home Lab Operator',
  'DevOps Learner',
  'Networking Explorer'
];

export default function Hero() {
  const { displayText } = useTypewriter(roles, { typeSpeed: 60, deleteSpeed: 40, pauseTime: 2500 });
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="hero" className="hero section" ref={ref}>
      <div className="grid-bg"></div>
      <div className="hero-particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }} />
        ))}
      </div>

      <div className={`hero-container container ${isVisible ? 'visible' : ''}`}>
        <div className="hero-content">
          <div className="hero-badge">
            <span className="status-dot healthy"></span>
            <span>System Online — All Services Running</span>
          </div>

          <h1 className="hero-name">
            <span className="greeting">Hello, I'm</span>
            <span className="name-text">Sriguhan S</span>
          </h1>

          <div className="hero-role">
            <span className="role-prefix">~/</span>
            <span className="role-text">{displayText}</span>
            <span className="cursor-blink">|</span>
          </div>

          <p className="hero-desc">
            Building real-world systems through hands-on home lab experience.
            Passionate about Linux, cloud computing, networking, and infrastructure.
          </p>

          <div className="hero-actions">
            <a href="/resume.pdf" download className="btn btn-primary">
              <span className="btn-icon">📄</span>
              Download Resume
            </a>
            <button className="btn btn-secondary" onClick={() =>
              document.getElementById('ops-center')?.scrollIntoView({ behavior: 'smooth' })
            }>
              <span className="btn-icon">🖥</span>
              Explore Dashboard
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">4+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">6</span>
              <span className="stat-label">Services Running</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">1,247</span>
              <span className="stat-label">Visitors</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="avatar-container">
            <div className="avatar-glow"></div>
            <div className="avatar-ring"></div>
            <img src="/profile/my profile.jpeg" alt="Sriguhan S" className="avatar-img" />
          </div>

          <div className="hero-terminal-preview">
            <div className="terminal-mini-bar">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="terminal-mini-title">sriguhan@cloudlab</span>
            </div>
            <div className="terminal-mini-body">
              <span className="t-prompt">$</span> neofetch<br />
              <span className="t-cyan">OS:</span> Ubuntu Server 22.04<br />
              <span className="t-cyan">Host:</span> Lenovo V15<br />
              <span className="t-cyan">Uptime:</span> 47 days, 12 hours<br />
              <span className="t-cyan">Shell:</span> bash 5.1.16<br />
              <span className="t-green">●</span> All systems operational
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
