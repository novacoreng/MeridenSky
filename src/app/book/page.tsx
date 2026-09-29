import { EnquiryForm } from "@/components/EnquiryForm";
import "../page.css";

export default function BookPage() {
  return (
    <main>
      <section className="section bookPage">
        <a className="brand" href="/">MERIDIAN <span>SKY</span></a>
        <div className="bookContent">
          <p className="eyebrow">PRIVATE BOOKING</p>
          <h1>Make the night<br /><em>yours.</em></h1>
          <p className="lede">Start with a private enquiry. We’ll collect the details needed to shape your Meridian Sky experience.</p>
          <EnquiryForm intent="stay" />
        </div>
      </section>
    </main>
  );
}
