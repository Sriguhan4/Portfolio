import { useCountUp } from '../hooks/useCountUp';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './OperationsCenter.css';

const services = [
  { name: 'Nginx', port: '80/443', status: 'active', uptime: '47d 12h' },
  { name: 'Grafana', port: '3000', status: 'active', uptime: '47d 12h' },
  { name: 'Prometheus', port: '9090', status: 'active', uptime: '47d 12h' },
  { name: 'SSH', port: '22', status: 'active', uptime: '47d 12h' },
  { name: 'Docker', port: '2375', status: 'active', uptime: '47d 12h' },
  { name: 'Jenkins', port: '8080', status: 'inactive', uptime: '—' },
];

function GaugeChart({ value, label, color, maxLabel }) {
  const { count, ref } = useCountUp(value);
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (circumference * count) / 100;

  return (
    <div className="gauge-widget" ref={ref}>
      <svg className="gauge-svg" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="none" stroke="var(--border-default)" strokeWidth="6" />
        <circle
          cx="50" cy="50" r="45" fill="none"
          stroke={color} strokeWidth="6"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
          style={{ transition: 'stroke-dashoffset 1.5s ease' }}
        />
      </svg>
      <div className="gauge-value">
        <span className="gauge-number" style={{ color }}>{count}%</span>
        <span className="gauge-label">{label}</span>
      </div>
      {maxLabel && <span className="gauge-max">{maxLabel}</span>}
    </div>
  );
}

function RackUnit({ unit, name, status, icon }) {
  return (
    <div className={`rack-unit ${status}`}>
      <span className="rack-unit-num">U{unit}</span>
      <span className="rack-unit-icon">{icon}</span>
      <span className="rack-unit-name">{name}</span>
      <span className={`status-dot ${status}`}></span>
    </div>
  );
}

export default function OperationsCenter() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="ops-center" className="section" ref={ref}>
      <div className="grid-bg"></div>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>🖥</span> Operations Center
          </div>
          <h2 className="section-title">Infrastructure Dashboard</h2>
          <p className="section-subtitle">Real-time home lab monitoring and service status overview.</p>
        </div>

        <div className={`ops-grid ${isVisible ? 'visible' : ''}`}>
          {/* Server Overview */}
          <div className="ops-card server-card">
            <div className="card-header">
              <span className="card-icon">🖥</span>
              <h3>Home Lab Server</h3>
              <span className="server-status-badge">
                <span className="status-dot healthy"></span>
                Online
              </span>
            </div>
            <div className="server-specs">
              <div className="spec-row">
                <span className="spec-icon">💻</span>
                <span className="spec-label">Machine</span>
                <span className="spec-value">Lenovo V15</span>
              </div>
              <div className="spec-row">
                <span className="spec-icon">🐧</span>
                <span className="spec-label">OS</span>
                <span className="spec-value">Ubuntu Server 22.04</span>
              </div>
              <div className="spec-row">
                <span className="spec-icon">🧠</span>
                <span className="spec-label">RAM</span>
                <span className="spec-value">8 GB DDR4</span>
              </div>
              <div className="spec-row">
                <span className="spec-icon">💾</span>
                <span className="spec-label">Storage</span>
                <span className="spec-value">256 GB SSD</span>
              </div>
              <div className="spec-row">
                <span className="spec-icon">🌐</span>
                <span className="spec-label">Network</span>
                <span className="spec-value">1 Gbps Ethernet</span>
              </div>
            </div>
          </div>

          {/* Metrics Dashboard */}
          <div className="ops-card metrics-card">
            <div className="card-header">
              <span className="card-icon">📊</span>
              <h3>System Metrics</h3>
            </div>
            <div className="metrics-grid">
              <GaugeChart value={42} label="CPU" color="#00d4ff" maxLabel="Intel i5" />
              <GaugeChart value={67} label="RAM" color="#a855f7" maxLabel="5.4/8 GB" />
              <GaugeChart value={58} label="Disk" color="#f59e0b" maxLabel="149/256 GB" />
              <GaugeChart value={23} label="Network" color="#22c55e" maxLabel="230 Mbps" />
            </div>
          </div>

          {/* Service Status */}
          <div className="ops-card service-card">
            <div className="card-header">
              <span className="card-icon">🔌</span>
              <h3>Service Status</h3>
            </div>
            <div className="service-table">
              <div className="service-table-header">
                <span>Service</span>
                <span>Status</span>
                <span>Port</span>
                <span>Uptime</span>
              </div>
              {services.map((svc, i) => (
                <div key={i} className={`service-row ${svc.status}`}>
                  <span className="service-name">
                    <span className={`status-dot ${svc.status === 'active' ? 'healthy' : 'critical'}`}></span>
                    {svc.name}
                  </span>
                  <span className={`service-status-text ${svc.status}`}>{svc.status}</span>
                  <span className="service-port">{svc.port}</span>
                  <span className="service-uptime">{svc.uptime}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Rack View */}
          <div className="ops-card rack-card">
            <div className="card-header">
              <span className="card-icon">🏗</span>
              <h3>Rack View</h3>
            </div>
            <div className="rack-container">
              <RackUnit unit={1} name="Nginx Web Server" status="healthy" icon="🌐" />
              <RackUnit unit={2} name="Grafana + Prometheus" status="healthy" icon="📊" />
              <RackUnit unit={3} name="Docker Engine" status="healthy" icon="🐳" />
              <RackUnit unit={4} name="SSH Gateway" status="healthy" icon="🔒" />
              <RackUnit unit={5} name="Jenkins CI" status="warning" icon="🔧" />
              <RackUnit unit={6} name="Reserved" status="critical" icon="📦" />
            </div>
          </div>

          {/* Health Summary */}
          <div className="ops-card health-card">
            <div className="card-header">
              <span className="card-icon">💚</span>
              <h3>Infrastructure Health</h3>
            </div>
            <div className="health-grid">
              <div className="health-item healthy">
                <span className="health-count">5</span>
                <span className="health-label">Healthy</span>
                <div className="health-bar healthy"></div>
              </div>
              <div className="health-item warning">
                <span className="health-count">1</span>
                <span className="health-label">Warning</span>
                <div className="health-bar warning"></div>
              </div>
              <div className="health-item offline">
                <span className="health-count">1</span>
                <span className="health-label">Offline</span>
                <div className="health-bar offline"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
