import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Subscribe.css';

export default function Subscribe() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | submitting | success
  const { ref, isVisible } = useScrollReveal();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 4000);
    }, 1200);
  };

  return (
    <section id="subscribe" className="section subscribe-section" ref={ref}>
      <div className="subscribe-bg"></div>
      <div className="container">
        <div className={`subscribe-wrapper ${isVisible ? 'visible' : ''}`}>
          <div className="subscribe-header">
            <h2 className="section-title">Receive Infrastructure Updates</h2>
            <p className="subscribe-subtitle">
              Get notified when I publish new projects, home lab experiments, cloud deployments,
              DevOps insights, Linux administration tips, networking concepts, and learning updates
              from my journey in Cloud Engineering and Site Reliability Engineering.
            </p>
          </div>

          <div className="subscribe-card">
            <div className="subscribe-card-glow"></div>
            <form className="subscribe-form" onSubmit={handleSubmit}>
              <div className="subscribe-input-wrapper">
                <span className="input-prompt">$</span>
                <input
                  type="email"
                  className="subscribe-input"
                  placeholder="operator@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={status === 'submitting'}
                />
              </div>
              <button
                type="submit"
                className={`subscribe-btn ${status === 'submitting' ? 'loading' : ''}`}
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <span className="btn-loading-text">
                    <span className="spinner-dot"></span> Processing...
                  </span>
                ) : (
                  <>
                    <span className="btn-icon">📡</span> Subscribe
                  </>
                )}
              </button>
            </form>

            {status === 'success' && (
              <div className="subscribe-success">
                <span className="success-check">✓</span>
                <span>Subscription request received successfully.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
