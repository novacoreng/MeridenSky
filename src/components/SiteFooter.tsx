export default function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="footerTop">
        <a className="brand large" href="/">MERIDIAN <span>SKY</span></a>
        <p>Above the ordinary.<br />The city is different from up here.</p>
      </div>
      <div className="footerBottom">
        <span>© {new Date().getFullYear()} Meridian Sky</span>
        <span>Privacy · Terms · Cookies</span>
      </div>
    </footer>
  );
}
