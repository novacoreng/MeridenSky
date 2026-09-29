"use client";

import { useState } from "react";

const links = [
  ["Stay", "/stay"],
  ["Experience", "/experience"],
  ["Sky Social", "/social"],
  ["Events", "/events"],
  ["Concierge", "/concierge"],
  ["Gallery", "/gallery"],
] as const;

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className={`siteHeader${open ? " isOpen" : ""}`}>
      <a className="brand" href="/" onClick={() => setOpen(false)}>MERIDIAN <span>SKY</span></a>
      <nav aria-label="Primary navigation">
        {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <a className="navCta" href="/book">Book your experience</a>
      <button className="mobileMenuButton" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(value => !value)}>
        <span /><span />
      </button>
      {open && <div className="mobileNavigation" id="mobile-navigation"><nav aria-label="Mobile navigation">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="mobileBook" href="/book" onClick={() => setOpen(false)}>Book your experience ↗</a></nav></div>}
    </header>
  );
}
