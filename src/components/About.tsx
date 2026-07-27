import { profile } from "../data/content";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="section-label">About</p>
        <div className="about__content">
          {profile.about.map((paragraph, i) => (
            <p key={i} className="about__paragraph">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
