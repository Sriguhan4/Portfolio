import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="navbar-logo">
              <span className="logo-cloud">☁</span>
              <span className="logo-text">CCC</span>
              <span className="logo-cursor">_</span>
            </div>
            <p className="footer-desc">
              Cloud Command Center portfolio built by Sriguhan S.
              Showcasing cloud, networking, and infrastructure engineering skills.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Navigation</h4>
            <ul>
              <li><a href="#hero">Dashboard</a></li>
              <li><a href="#terminal">Terminal</a></li>
              <li><a href="#profile">System Profile</a></li>
              <li><a href="#ops-center">Ops Center</a></li>
              <li><a href="#topology">Topology</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Resources</h4>
            <ul>
              <li><a href="#arsenal">Tech Arsenal</a></li>
              <li><a href="#projects">Mission Log</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#quiz">Cloud Quiz</a></li>
              <li><a href="/resume.pdf" download>Resume</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Sriguhan S. All systems operational.</p>
          <div className="tech-stack-footer">
            Built with <span>React</span> & <span>Vite</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
