import { useEffect, useState } from "react";
import { navLinks, profile } from "../data/content";
import "./Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="container header__inner">
        <a href="#" className="header__logo" onClick={closeMenu}>
          {profile.name.split(" ")[0]}
        </a>

        <nav className={`header__nav ${menuOpen ? "header__nav--open" : ""}`}>
          <ul className="header__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={`header__toggle ${menuOpen ? "header__toggle--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
