export default function SiteHeader() {
  return (
    <header className="siteHeader">
      <a className="brand" href="/">MERIDIAN <span>SKY</span></a>
      <nav aria-label="Primary navigation">
        <a href="/stay">Stay</a>
        <a href="/experience">Experience</a>
        <a href="/social">Sky Social</a>
        <a href="/events">Events</a>
        <a href="/concierge">Concierge</a>
        <a href="/gallery">Gallery</a>
      </nav>
      <a className="navCta" href="/#book">Book your experience</a>
    </header>
  );
}
