import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './InfraTopology.css';

const nodes = [
  {
    id: 'internet',
    label: 'Internet',
    icon: '🌍',
    x: 50, y: 10,
    details: 'Public internet connection via ISP. External traffic ingress point for all hosted services.',
    specs: ['ISP Gateway', 'Public IP (Dynamic)', 'Bandwidth: 100 Mbps']
  },
  {
    id: 'router',
    label: 'Router',
    icon: '📡',
    x: 50, y: 35,
    details: 'Home router with NAT, firewall, and port forwarding configured for external access.',
    specs: ['NAT / PAT Enabled', 'Firewall Rules Active', 'Port Forwarding: 80, 443, 22']
  },
  {
    id: 'server',
    label: 'Ubuntu Server',
    icon: '🖥',
    x: 50, y: 60,
    details: 'Primary home lab server running Ubuntu Server 22.04 LTS with Docker containers.',
    specs: ['Lenovo V15', 'Ubuntu 22.04 LTS', '8GB RAM / 256GB SSD']
  },
  {
    id: 'services',
    label: 'Services',
    icon: '⚙️',
    x: 30, y: 85,
    details: 'Containerized services running on Docker including web server, monitoring, and CI/CD.',
    specs: ['Nginx', 'Docker Containers', 'SSH Gateway']
  },
  {
    id: 'monitoring',
    label: 'Monitoring',
    icon: '📊',
    x: 70, y: 85,
    details: 'Full observability stack with Grafana dashboards and Prometheus metrics collection.',
    specs: ['Grafana', 'Prometheus', 'Node Exporter']
  },
];

const connections = [
  { from: 'internet', to: 'router' },
  { from: 'router', to: 'server' },
  { from: 'server', to: 'services' },
  { from: 'server', to: 'monitoring' },
];

export default function InfraTopology() {
  const [activeNode, setActiveNode] = useState(null);
  const { ref, isVisible } = useScrollReveal();

  const getNodePos = (id) => {
    const node = nodes.find(n => n.id === id);
    return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
  };

  return (
    <section id="topology" className="section" ref={ref}>
      <div className="grid-bg"></div>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Network Architecture</h2>
          <p className="section-subtitle">Click on any node to explore the infrastructure components.</p>
        </div>

        <div className={`topology-container ${isVisible ? 'visible' : ''}`}>
          <div className="topology-diagram">
            <svg className="topology-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
              {connections.map((conn, i) => {
                const from = getNodePos(conn.from);
                const to = getNodePos(conn.to);
                return (
                  <line
                    key={i}
                    x1={from.x} y1={from.y + 4}
                    x2={to.x} y2={to.y}
                    className="topology-line"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  />
                );
              })}
            </svg>

            {nodes.map((node) => (
              <div
                key={node.id}
                className={`topology-node ${activeNode === node.id ? 'active' : ''}`}
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
              >
                <div className="node-icon">{node.icon}</div>
                <span className="node-label">{node.label}</span>
                <div className="node-pulse"></div>
              </div>
            ))}
          </div>

          {activeNode && (
            <div className="topology-detail">
              <div className="detail-header">
                <span className="detail-icon">
                  {nodes.find(n => n.id === activeNode)?.icon}
                </span>
                <h3>{nodes.find(n => n.id === activeNode)?.label}</h3>
                <button className="detail-close" onClick={() => setActiveNode(null)}>×</button>
              </div>
              <p className="detail-desc">
                {nodes.find(n => n.id === activeNode)?.details}
              </p>
              <div className="detail-specs">
                {nodes.find(n => n.id === activeNode)?.specs.map((spec, i) => (
                  <div key={i} className="spec-tag">
                    <span className="spec-bullet">▸</span>
                    {spec}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
