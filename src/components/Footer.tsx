import { profile } from "../data/content";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__text">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
