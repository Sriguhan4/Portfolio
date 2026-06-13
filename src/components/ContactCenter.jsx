import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './ContactCenter.css';

export default function ContactCenter() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const { ref, isVisible } = useScrollReveal();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate terminal command execution delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="grid-bg"></div>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>📞</span> Contact Center
          </div>
          <h2 className="section-title">Establish Connection</h2>
          <p className="section-subtitle">Reach out for opportunities, collaborations, or just to say hi.</p>
        </div>

        <div className={`contact-container ${isVisible ? 'visible' : ''}`}>
          <div className="contact-form-wrapper">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="terminal-title">send_message.sh</span>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  <span className="prompt-symbol">$</span> Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  <span className="prompt-symbol">$</span> Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  <span className="prompt-symbol">$</span> Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`btn btn-primary submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="btn-icon spinner">⏳</span> Executing...
                  </>
                ) : (
                  <>
                    <span className="btn-icon">🚀</span> ./send_message.sh
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="submit-success">
                  <span className="success-icon">✅</span> 
                  Message transmitted successfully! I'll respond shortly.
                </div>
              )}
            </form>
          </div>

          <div className="contact-info">
            <div className="info-card">
              <h3>Connect Online</h3>
              <p>Find me on these platforms or download my resume.</p>
              
              <div className="social-links">
                <a href="#" className="social-link">
                  <span className="social-icon">💼</span>
                  <span className="social-text">LinkedIn</span>
                </a>
                <a href="#" className="social-link">
                  <span className="social-icon">🐙</span>
                  <span className="social-text">GitHub</span>
                </a>
                <a href="#" className="social-link">
                  <span className="social-icon">🐦</span>
                  <span className="social-text">X (Twitter)</span>
                </a>
                <a href="#" className="social-link">
                  <span className="social-icon">📋</span>
                  <span className="social-text">Naukri</span>
                </a>
              </div>

              <div className="resume-download">
                <a href="/resume.pdf" download className="btn btn-secondary full-width">
                  <span className="btn-icon">📄</span> Download Resume PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
