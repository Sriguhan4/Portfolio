import { useState } from 'react';
import { projects } from '../data/projects';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Projects.css';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const { ref, isVisible } = useScrollReveal();

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.status === filter);

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>🚀</span> Project Command Center
          </div>
          <h2 className="section-title">Mission Log</h2>
          <p className="section-subtitle">Hands-on experience and systems built.</p>
        </div>

        <div className={`projects-container ${isVisible ? 'visible' : ''}`}>
          <div className="projects-filter">
            <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
            <button className={`filter-btn ${filter === 'completed' ? 'active' : ''}`} onClick={() => setFilter('completed')}>Completed</button>
            <button className={`filter-btn ${filter === 'in-progress' ? 'active' : ''}`} onClick={() => setFilter('in-progress')}>In Progress</button>
            <button className={`filter-btn ${filter === 'planned' ? 'active' : ''}`} onClick={() => setFilter('planned')}>Planned</button>
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className={`project-status ${project.status}`}>
                    {project.status === 'completed' && '✅ Completed'}
                    {project.status === 'in-progress' && '🔄 In Progress'}
                    {project.status === 'planned' && '📋 Planned'}
                  </span>
                </div>

                <p className="project-desc">{project.description}</p>

                <div className="project-section">
                  <h4 className="section-label">Architecture</h4>
                  <div className="architecture-flow">
                    {project.architecture.map((step, i) => (
                      <span key={i} className="arch-step">
                        {step}
                        {i < project.architecture.length - 1 && <span className="arch-arrow">→</span>}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-section">
                  <h4 className="section-label">Tech Stack</h4>
                  <div className="tech-stack">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-section">
                  <h4 className="section-label">Lessons Learned</h4>
                  <ul className="lessons-list">
                    {project.lessons.map((lesson, i) => (
                      <li key={i}>{lesson}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-actions">
                  <a href={project.github} className="btn-link" target="_blank" rel="noopener noreferrer">
                    <span className="icon">🐙</span> GitHub
                  </a>
                  {project.demo && (
                    <a href={project.demo} className="btn-link" target="_blank" rel="noopener noreferrer">
                      <span className="icon">🔗</span> Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
