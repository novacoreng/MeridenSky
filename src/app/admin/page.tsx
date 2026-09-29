import "./admin.css";

const metrics = [["ENQUIRIES", "24", "+8 this week"], ["UPCOMING EVENTS", "06", "Next: Skyline Friday"], ["CONCIERGE", "11", "4 awaiting response"], ["GALLERY ASSETS", "128", "12 need alt text"]];
const queue = [["New booking enquiry", "Guest requested 18–20 Oct", "NEW"], ["Concierge request", "Private dining + chauffeur", "REVIEW"], ["Event RSVP", "Skyline Friday · 4 guests", "CONFIRMED"], ["Gallery asset", "Rooftop sunset · missing alt text", "ACTION"]];

export default function AdminPage() {
  return <main className="adminShell">
    <aside className="adminRail"><a href="/" className="adminBrand">MERIDIAN <span>SKY</span></a><p className="adminEyebrow">CONTROL ROOM</p><nav>
      <a className="active" href="/admin">Overview</a><a href="/admin/properties">Properties</a><a href="/admin/gallery">Gallery</a><a href="/admin/experiences">Experiences</a><a href="/admin/events">Events</a><a href="/admin/concierge">Concierge</a><a href="/admin/enquiries">Enquiries</a><a href="/admin/settings">Settings</a>
    </nav><div className="adminRailFooter">CMS FOUNDATION<br />V1</div></aside>
    <section className="adminMain"><header className="adminHeader"><div><p className="adminEyebrow">MERIDIAN SKY</p><h1>Good evening.</h1></div><div className="adminStatus"><span /> CMS foundation ready</div></header>
      <section className="metricGrid">{metrics.map(([label,value,note]) => <article className="metric" key={label}><p>{label}</p><strong>{value}</strong><span>{note}</span></article>)}</section>
      <section className="adminGrid"><div className="panel queuePanel"><div className="panelHead"><div><p className="adminEyebrow">OPERATIONS</p><h2>Action queue</h2></div><a href="#">View all ↗</a></div>{queue.map(([title,detail,status]) => <article className="queueRow" key={title}><div><h3>{title}</h3><p>{detail}</p></div><span>{status}</span></article>)}</div>
        <div className="panel quickPanel"><p className="adminEyebrow">QUICK ACTIONS</p><h2>Shape the sky.</h2><div className="quickActions"><a href="/admin/events">Create event <span>↗</span></a><a href="/admin/gallery">Add gallery media <span>↗</span></a><a href="/admin/experiences">Add experience <span>↗</span></a><a href="/admin/concierge">Review concierge <span>↗</span></a></div></div></section>
      <section className="panel roadmapPanel"><div><p className="adminEyebrow">BUILD STATUS</p><h2>Production roadmap</h2></div><div className="roadmap">{["Foundation","CMS + Admin","Booking","Payments","Analytics","Production QA"].map((item,i)=><div className={i<2?"roadStep done":"roadStep"} key={item}><span>0{i+1}</span><b>{item}</b><small>{i<2?"READY":"NEXT"}</small></div>)}</div></section>
    </section></main>;
}
