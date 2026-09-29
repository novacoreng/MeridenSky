import Link from "next/link";
import { fallbackEvents } from "@/lib/events-content";

export function PublicEventList() {
  return (
    <div className="metaList">
      {fallbackEvents.map((event, index) => (
        <article className="metaRow eventCard" key={event.slug}>
          <span><strong>{String(index + 1).padStart(2, "0")}</strong> · {event.title}<small>{event.description}</small></span>
          <span>{event.date} · {event.time}<br />{event.meta}<br /><Link className="textLink" href={`/events/${event.slug}`}>View event</Link></span>
        </article>
      ))}
    </div>
  );
}

export function PublicEventDetail({ slug }: { slug: string }) {
  const event = fallbackEvents.find((item) => item.slug === slug);
  if (!event) return null;

  return <>
    <section className="subHero"><p className="eyebrow">EVENT / {event.code}</p><h1>{event.title}</h1><p>{event.date} · {event.time} · {event.meta}</p></section>
    <section className="content eventDetail">
      <p className="eventLead">{event.description}</p>
      <div className="rsvpPanel">
        <p className="eyebrow">PLAN YOUR VISIT</p>
        <h2>Make the night<br /><em>yours.</em></h2>
        <p>Choose your preferred booking platform to continue your Meridian Sky experience.</p>
        <Link className="button primary" href="/book">Book your experience</Link>
      </div>
    </section>
  </>;
}
