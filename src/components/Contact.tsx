import { profile } from "../data/content";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <p className="section-label">Contact</p>

        <div className="contact">
          <p className="contact__intro">
            Open to opportunities in data science and software engineering.
            Feel free to reach out.
          </p>

          <div className="contact__links">
            <a href={`mailto:${profile.email}`} className="contact__link">
              <span className="contact__label">Email</span>
              <span className="contact__value">{profile.email}</span>
            </a>
            <a href={`mailto:${profile.emailAlt}`} className="contact__link">
              <span className="contact__label">Email</span>
              <span className="contact__value">{profile.emailAlt}</span>
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="contact__link">
              <span className="contact__label">Phone</span>
              <span className="contact__value">{profile.phone}</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link"
            >
              <span className="contact__label">LinkedIn</span>
              <span className="contact__value">daniel-birman</span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link"
            >
              <span className="contact__label">GitHub</span>
              <span className="contact__value">danielbirman28</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
