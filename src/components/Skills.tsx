import { skills } from "../data/content";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="section-label">Skills</p>

        <div className="skills">
          {skills.map((group) => (
            <div key={group.category} className="skills__group">
              <h3 className="skills__category">{group.category}</h3>
              <p className="skills__items">{group.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
