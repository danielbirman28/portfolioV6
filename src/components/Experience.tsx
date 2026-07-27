import { experience } from "../data/content";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <p className="section-label">Experience</p>

        <div className="timeline">
          {experience.map((job, i) => (
            <article key={i} className="timeline__item">
              <div className="timeline__header">
                <div>
                  <h3 className="timeline__role">{job.role}</h3>
                  <p className="timeline__company">{job.company}</p>
                </div>
                <div className="timeline__meta">
                  <span className="timeline__period">{job.period}</span>
                  <span className="timeline__location">{job.location}</span>
                </div>
              </div>
              <ul className="timeline__bullets">
                {job.bullets.map((bullet, j) => (
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
