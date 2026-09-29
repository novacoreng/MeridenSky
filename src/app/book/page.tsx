import SiteHeader from "@/components/SiteHeader";
import "../page.css";

type SearchParams = { intent?: string; experience?: string; event?: string };

const bookingOptions = [
  {
    name: "Booking.com",
    label: "Find Meridian Sky on Booking.com",
    href: "https://www.booking.com/",
    icon: "B",
  },
  {
    name: "Expedia",
    label: "Find Meridian Sky on Expedia",
    href: "https://www.expedia.com/",
    icon: "e",
  },
] as const;

export default async function BookPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const params = await searchParams;
  const intent = params.intent === "experience" || params.intent === "event" || params.intent === "concierge" ? params.intent : "stay";
  const heading = intent === "experience" ? "Plan the experience." : intent === "event" ? "Reserve your place." : intent === "concierge" ? "Tell us what you need." : "Make the night yours.";

  return <main>
    <SiteHeader />
    <section className="section bookPage">
      <div className="bookContent">
        <p className="eyebrow">PRIVATE {intent.toUpperCase()} ENQUIRY</p>
        <h1>{heading}</h1>
        <p className="lede">Share the details below. Availability and final arrangements will be confirmed separately.</p>
        <div className="bookingOptions" aria-label="Booking platforms">
          {bookingOptions.map((option) => <a className="bookingOption" href={option.href} target="_blank" rel="noreferrer" key={option.name}>
            <span className="bookingOptionIcon" aria-hidden="true">{option.icon}</span>
            <span className="bookingOptionCopy"><strong>{option.name}</strong><small>{option.label}</small></span>
            <span className="bookingOptionArrow" aria-hidden="true">↗</span>
          </a>)}
        </div>
      </div>
    </section>
  </main>;
}
