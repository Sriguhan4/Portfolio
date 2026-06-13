import { useState } from 'react';
import { skillCategories } from '../data/skills';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './TechArsenal.css';

export default function TechArsenal() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);
  const { ref, isVisible } = useScrollReveal();

  const activeCategory = skillCategories.find(c => c.id === activeTab);

  return (
    <section id="arsenal" className="section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>⚙️</span> Tech Arsenal
          </div>
          <h2 className="section-title">Skills & Tools</h2>
          <p className="section-subtitle">Technologies I use for building and managing infrastructure.</p>
        </div>

        <div className={`arsenal-container ${isVisible ? 'visible' : ''}`}>
          <div className="arsenal-tabs">
            {skillCategories.map(category => (
              <button
                key={category.id}
                className={`arsenal-tab ${activeTab === category.id ? 'active' : ''}`}
                onClick={() => setActiveTab(category.id)}
                style={{ '--tab-color': category.color }}
              >
                <span className="tab-icon">{category.icon}</span>
                <span className="tab-label">{category.name}</span>
              </button>
            ))}
          </div>

          <div className="arsenal-content">
            <div className="skills-grid">
              {activeCategory?.skills.map((skill, index) => (
                <div key={index} className={`skill-card ${skill.status}`}>
                  <div className="skill-header">
                    <h4 className="skill-name">{skill.name}</h4>
                    <span className={`skill-status-badge ${skill.status}`}>
                      {skill.status === 'active' ? 'Active' : skill.status === 'learning' ? 'Learning' : 'Future'}
                    </span>
                  </div>
                  <div className="skill-bar-bg">
                    <div
                      className="skill-bar-fill"
                      style={{
                        width: `${skill.level}%`,
                        backgroundColor: activeCategory.color,
                        opacity: skill.status === 'future' ? 0.3 : 1
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
