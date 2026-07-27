import { profile } from "../data/content";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <p className="hero__greeting">Hi, I'm</p>
        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__title">
          {profile.title}
          <span className="hero__separator">·</span>
          {profile.subtitle}
        </p>
        <p className="hero__location">{profile.location}</p>

        <div className="hero__actions">
          <a
            href={profile.resume}
            className="hero__btn hero__btn--primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <a href="#contact" className="hero__btn hero__btn--secondary">
            Contact
          </a>
        </div>

        <div className="hero__links">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            LinkedIn
          </a>
          <span className="hero__dot">·</span>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            GitHub
          </a>
          <span className="hero__dot">·</span>
          <a href={`mailto:${profile.email}`} className="link">
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
