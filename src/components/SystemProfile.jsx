import { useScrollReveal } from '../hooks/useScrollReveal';
import './SystemProfile.css';

const certifications = [
  { name: 'AWS Cloud', icon: '☁️', status: 'learning', org: 'Amazon Web Services' },
  { name: 'Linux Essentials', icon: '🐧', status: 'learning', org: 'Linux Professional Institute' },
  { name: 'Networking', icon: '🌐', status: 'learning', org: 'Cisco / CompTIA' },
  { name: 'Cloud Fundamentals', icon: '📋', status: 'planned', org: 'Various Providers' },
];

const focusAreas = [
  { label: 'Linux Administration', icon: '🐧', color: '#22c55e' },
  { label: 'Cloud Computing', icon: '☁️', color: '#00d4ff' },
  { label: 'Networking', icon: '🌐', color: '#a855f7' },
  { label: 'DevOps', icon: '🔧', color: '#f97316' },
];

export default function SystemProfile() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="profile" className="section" ref={ref}>
      <div className="grid-bg"></div>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>👤</span> System Profile
          </div>
          <h2 className="section-title">cat /etc/profile</h2>
          <p className="section-subtitle">Professional summary, education, and current focus areas.</p>
        </div>

        <div className={`profile-grid ${isVisible ? 'visible' : ''}`}>
          {/* Professional Summary */}
          <div className="profile-card summary-card">
            <div className="card-header">
              <span className="card-icon">📋</span>
              <h3>Professional Summary</h3>
            </div>
            <div className="summary-content">
              <p>
                Cloud & Infrastructure Enthusiast with a passion for building real-world systems
                through hands-on home lab experience. Focused on Linux administration, cloud computing,
                networking fundamentals, and DevOps practices.
              </p>
              <p>
                Currently building and managing a personal home lab server running Ubuntu Server
                with Docker containers, monitoring stack, and self-hosted services to develop
                practical infrastructure skills.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="profile-card education-card">
            <div className="card-header">
              <span className="card-icon">🎓</span>
              <h3>Education</h3>
            </div>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">Present</span>
                  <h4>B.Tech / B.E. (Computer Science)</h4>
                  <p>Pursuing degree with focus on cloud computing and infrastructure</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot completed"></div>
                <div className="timeline-content">
                  <span className="timeline-date">Completed</span>
                  <h4>Higher Secondary (12th)</h4>
                  <p>Completed with focus on Science & Mathematics</p>
                </div>
              </div>
            </div>
          </div>

          {/* Current Focus */}
          <div className="profile-card focus-card">
            <div className="card-header">
              <span className="card-icon">🎯</span>
              <h3>Current Focus</h3>
            </div>
            <div className="focus-tags">
              {focusAreas.map((area, i) => (
                <div key={i} className="focus-tag" style={{ '--tag-color': area.color }}>
                  <span className="focus-icon">{area.icon}</span>
                  <span>{area.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="profile-card cert-card">
            <div className="card-header">
              <span className="card-icon">🏅</span>
              <h3>Certifications</h3>
            </div>
            <div className="cert-grid">
              {certifications.map((cert, i) => (
                <div key={i} className={`cert-item ${cert.status}`}>
                  <span className="cert-icon">{cert.icon}</span>
                  <div className="cert-info">
                    <h4>{cert.name}</h4>
                    <p>{cert.org}</p>
                  </div>
                  <span className={`cert-badge ${cert.status}`}>
                    {cert.status === 'learning' ? '📖 In Progress' : '📋 Planned'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
