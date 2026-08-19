"use client";

import { useState } from "react";

export default function SiteNav({ active }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="brand" href="/">
          <span className="badge">DR</span> Dhairya Rastogi
        </a>
        <nav className={"nav-links" + (menuOpen ? " open" : "")}>
          <a href="/" onClick={closeMenu} aria-current={active === "about" ? "page" : undefined}>
            About
          </a>
          <a href="/work" onClick={closeMenu} aria-current={active === "work" ? "page" : undefined}>
            Work
          </a>
          <a
            className="nav-cta"
            href="/Dhairya_Rastogi_Resume.pdf"
            target="_blank"
            rel="noopener"
            onClick={closeMenu}
          >
            Resume ↗
          </a>
        </nav>
        <button
          className="menu-btn"
          aria-label="Menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}
