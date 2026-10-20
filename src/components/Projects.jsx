import { useState } from 'react';

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Student Portfolio Website',
      description: 'A responsive single-page portfolio built with React and Vite featuring dynamic component architecture and clean CSS.',
      tech: ['React', 'Vite', 'CSS3'],
      category: 'Frontend'
    },
    {
      id: 2,
      title: 'Interactive Weather Dashboard',
      description: 'Real-time weather forecast web app using asynchronous API data fetching and dynamic state updates.',
      tech: ['React', 'JavaScript', 'REST API'],
      category: 'API'
    },
    {
      id: 3,
      title: 'Task Tracker & Organizer',
      description: 'Productivity application with comprehensive task management, local storage persistence, and filter states.',
      tech: ['React', 'Hooks', 'LocalStorage'],
      category: 'Frontend'
    }
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="content-container projects-page">
      <h2 className="section-title">My Projects</h2>
      <p className="page-intro">
        Explore some of the web development applications and academic projects I have built.
      </p>

      {/* Filter Buttons */}
      <div className="project-filters">
        {['All', 'Frontend', 'API'].map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((t) => (
                <span key={t} className="tech-badge">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
