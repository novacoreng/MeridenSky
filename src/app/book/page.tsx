import SiteHeader from "@/components/SiteHeader";
import "../page.css";

const bookingOptions = [
  { name: "Booking.com", label: "Find Meridian Sky on Booking.com", href: "https://www.booking.com/", logo: "/images/booking-logo.svg" },
  { name: "Expedia.com", label: "Find Meridian Sky on Expedia.com", href: "https://www.expedia.com/", logo: "/images/expedia-logo.svg" },
] as const;

export default function BookPage() {
  return <main>
    <SiteHeader />
    <section className="section bookPage">
      <div className="bookContent">
        <p className="eyebrow">PRIVATE LUXURY EXPERIENCE</p>
        <h1>Make the night yours.</h1>
        <p className="lede">Choose your preferred booking platform below. Availability and final arrangements will be confirmed separately.</p>
        <div className="bookingOptions" aria-label="Booking platforms">
          {bookingOptions.map((option) => <a className="bookingOption" href={option.href} target="_blank" rel="noreferrer" key={option.name}>
            <span className="bookingOptionIcon" aria-hidden="true"><img src={option.logo} alt="" /></span>
            <span className="bookingOptionCopy"><strong>{option.name}</strong><small>{option.label}</small></span>
            <span className="bookingOptionAction">Visit site</span>
          </a>)}
        </div>
      </div>
    </section>
  </main>;
}
