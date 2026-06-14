import { useScrollReveal } from '../hooks/useScrollReveal';
import { skillCategories } from '../data/skills';
import './TechArsenal.css';

export default function TechArsenal() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="arsenal" className="section arsenal-section" ref={ref}>
      <div className="arsenal-bg-grid"></div>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Tech Arsenal</h2>
          <p className="section-subtitle">Technologies, platforms, and tools I use to build, automate, monitor, and operate modern infrastructure.</p>
        </div>

        <div className={`arsenal-container ${isVisible ? 'visible' : ''}`}>
          <div className="arsenal-grid">
            {skillCategories.map((category) => (
              <div 
                key={category.id} 
                className="arsenal-category-card"
                style={{ '--cat-color': category.color }}
              >
                <div className="category-header">
                  <h3 className="category-title">{category.name}</h3>
                </div>
                
                <div className="tech-grid">
                  {category.skills.map((tech, idx) => (
                    <div key={idx} className="tech-item">
                      <span className="tech-icon">{tech.icon}</span>
                      <span className="tech-name">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
