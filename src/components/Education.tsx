import { education } from "../data/content";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <p className="section-label">Education</p>

        <article className="education">
          <div className="education__header">
            <div>
              <h3 className="education__degree">{education.degree}</h3>
              <p className="education__school">{education.school}</p>
            </div>
            <div className="education__meta">
              <span>{education.graduation}</span>
              <span>GPA {education.gpa}</span>
            </div>
          </div>
          <p className="education__activities">
            Activities: {education.activities}
          </p>
        </article>
      </div>
    </section>
  );
}
