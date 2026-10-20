import { useState } from 'react';

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Student Portfolio Website',
      description: 'A responsive single-page portfolio built with React and Vite featuring dynamic component architecture, client-side routing, and clean CSS.',
      tech: ['React', 'Vite', 'React Router', 'CSS3'],
      category: 'Frontend',
      github: 'https://github.com/24it096-pixel/Portfolio-24IT096',
      liveUrl: '/'
    },
    {
      id: 2,
      title: 'Task Manager (Full Stack)',
      description: 'A full-stack task management application with React UI, Express REST API, MongoDB Atlas database, JWT authentication, and optimistic UI updates.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB Atlas', 'JWT'],
      category: 'Full Stack',
      github: 'https://github.com/24it096-pixel/task-manager-api-24IT096',
      liveUrl: 'http://localhost:5174'
    }
  ];

  const categories = ['All', 'Frontend', 'Full Stack'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="content-container projects-page">
      <h2 className="section-title">My Projects</h2>
      <p className="page-intro">
        Explore the web development applications and full-stack projects I have built.
      </p>

      {/* Filter Buttons */}
      <div className="project-filters">
        {categories.map((cat) => (
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

            {/* Interactive Action Links */}
            <div className="project-actions">
              {project.liveUrl && project.id === 2 ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn primary-btn"
                >
                  🚀 Launch Live App
                </a>
              ) : null}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn secondary-btn"
              >
                GitHub Repo ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
