"use client";

import { useEffect, useState } from "react";

const links = [
  ["Stay", "/"],
  ["Experience", "/experience"],
  ["Concierge", "/concierge"],
  ["Gallery", "/gallery"],
] as const;

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("mobileMenuOpen", open);
    return () => document.body.classList.remove("mobileMenuOpen");
  }, [open]);

  return (
    <>
      <header className={`siteHeader${open ? " isOpen" : ""}`}>
        <a className="brand" href="/" onClick={() => setOpen(false)} aria-label="Meridian Sky home">
          <span className="brandText">MERIDIAN SKY</span>
        </a>
        <nav className="desktopNavigation" aria-label="Primary navigation">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className="navCta" href="/book">Book your experience</a>
        <button className="mobileMenuButton" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(value => !value)}>
          <span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" />
        </button>
      </header>
      <div className={`mobileNavigation${open ? " isVisible" : ""}`} id="mobile-navigation" aria-hidden={!open}>
        <div className="mobileNavigationInner">
          <a className="mobileNavigationBrand" href="/" onClick={() => setOpen(false)} aria-label="Meridian Sky home">
            <span className="brandText">MERIDIAN SKY</span>
          </a>
          <nav aria-label="Mobile navigation">
            {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
            <a className="mobileBook" href="/book" onClick={() => setOpen(false)}>Book your experience</a>
          </nav>
        </div>
      </div>
    </>
  );
}
