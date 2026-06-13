import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { id: 'hero', label: 'Dashboard' },
  { id: 'terminal', label: 'Terminal' },
  { id: 'profile', label: 'Profile' },
  { id: 'ops-center', label: 'Ops Center' },
  { id: 'topology', label: 'Topology' },
  { id: 'arsenal', label: 'Arsenal' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPos = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollTo('hero')}>
          <span className="logo-cloud">☁</span>
          <span className="logo-text">CCC</span>
          <span className="logo-cursor">_</span>
        </div>

        <button
          className={`navbar-toggle ${isMobileOpen ? 'open' : ''}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-links ${isMobileOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <button
              key={link.id}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={() => scrollTo(link.id)}
            >
              {link.label}
            </button>
          ))}
          <div className="nav-status">
            <span className="status-dot healthy"></span>
            <span className="nav-status-text">Online</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
