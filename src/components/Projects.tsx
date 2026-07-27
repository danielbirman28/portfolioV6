import { projects } from "../data/content";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-label">Projects</p>

        <div className="projects">
          {projects.map((project, i) => (
            <article key={i} className="projects__item">
              <div className="projects__header">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__title link"
                  >
                    {project.title}
                  </a>
                ) : (
                  <h3 className="projects__title">{project.title}</h3>
                )}
                <span className="projects__period">{project.period}</span>
              </div>
              <p className="projects__tools">{project.tools}</p>
              <ul className="projects__bullets">
                {project.bullets.map((bullet, j) => (
                  <li key={j}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
