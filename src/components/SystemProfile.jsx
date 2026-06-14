import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './SystemProfile.css';

const certifications = [
  "Screenshot 2025-11-11 185714.png",
  "Screenshot 2026-06-14 124531.png",
  "Screenshot 2026-06-14 124619.png",
  "Screenshot 2026-06-14 124702.png",
  "Screenshot 2026-06-14 124739.png",
  "Screenshot 2026-06-14 124802.png",
  "Screenshot 2026-06-14 124831.png",
  "Screenshot 2026-06-14 124907.png",
  "Screenshot 2026-06-14 125158.png",
  "Screenshot 2026-06-14 130043.png",
  "Screenshot 2026-06-14 130200.png",
  "Screenshot 2026-06-14 130245.png",
  "Screenshot 2026-06-14 130327.png"
].map((filename, i) => ({
  name: `Certificate ${i + 1}`,
  file: `/certificates/${filename}`
}));

const focusAreas = [
  { label: 'Linux Administration', icon: '🐧', color: '#22c55e' },
  { label: 'Cloud Computing', icon: '☁️', color: '#00d4ff' },
  { label: 'Networking', icon: '🌐', color: '#a855f7' },
  { label: 'DevOps', icon: '🔧', color: '#f97316' },
  { label: 'Docker', icon: '📦', color: '#2496ed' },
  { label: 'CI/CD', icon: '⚙️', color: '#ff5e00' },
  { label: 'Kubernetes', icon: '☸️', color: '#326ce5' },
  { label: 'Monitoring', icon: '📊', color: '#e50914' },
  { label: 'Infrastructure as Code', icon: '🏗️', color: '#14b8a6' },
  { label: 'AWS Cloud', icon: '🌍', color: '#ff9900' },
];

export default function SystemProfile() {
  const { ref, isVisible } = useScrollReveal();
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="profile" className="section" ref={ref}>
      <div className="grid-bg"></div>
      <div className="container">
        <div className="section-header">

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
                Cloud & Infrastructure Enthusiast with a passion for building real-world systems through hands-on home lab experience. Focused on Linux administration, cloud computing, networking, DevOps practices, and infrastructure automation.
              </p>
              <p>
                Currently building and managing a personal Ubuntu Server home lab, working with Docker containers, monitoring tools, self-hosted services, and cloud technologies to develop practical infrastructure and operations skills.
              </p>
              <p>
                Actively learning Kubernetes, CI/CD, observability, and modern cloud-native technologies. Final-year student seeking internship and full-time opportunities in Cloud Engineering, DevOps, Infrastructure, and Site Reliability Engineering.
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
                  <span className="timeline-date">7.84 CGPA</span>
                  <h4>B.E Computer Science and Engineering (2023-2027)</h4>
                  <p>Coimbatore Institute of Engineering and Technologies</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot completed"></div>
                <div className="timeline-content">
                  <span className="timeline-date">72.33%</span>
                  <h4>Higher Secondary (2022-2023)</h4>
                  <p>Mangalam Higher Secondary School</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot completed"></div>
                <div className="timeline-content">
                  <span className="timeline-date">Pass</span>
                  <h4>SSLC (2020-2021)</h4>
                  <p>Mangalam Higher Secondary School</p>
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
              <h3>Certifications Gallery</h3>
            </div>
            <div className="cert-grid">
              {certifications.map((cert, i) => (
                <div key={i} className="cert-item gallery-item">
                  <img 
                    src={cert.file} 
                    alt={cert.name} 
                    className="cert-thumbnail" 
                    onClick={() => setSelectedCert(cert.file)} 
                  />
                  <button className="btn-view-cert" onClick={() => setSelectedCert(cert.file)}>
                    <span className="btn-icon">👁️</span> View
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal Overlay */}
      {selectedCert && (
        <div className="cert-modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={() => setSelectedCert(null)}>✕</button>
            <img src={selectedCert} alt="Certificate" className="cert-modal-img" />
          </div>
        </div>
      )}
    </section>
  );
}
