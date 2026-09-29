import { EnquiryForm } from "@/components/EnquiryForm";
import "../page.css";

type SearchParams = { intent?: string; experience?: string; event?: string };

export default async function BookPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const params = await searchParams;
  const intent = params.intent === "experience" || params.intent === "event" || params.intent === "concierge" ? params.intent : "stay";
  const context = params.experience || params.event || "";
  const heading = intent === "experience" ? "Plan the experience." : intent === "event" ? "Reserve your place." : intent === "concierge" ? "Tell us what you need." : "Make the night yours.";

  return <main><section className="section bookPage"><a className="brand" href="/">MERIDIAN <span>SKY</span></a><div className="bookContent"><p className="eyebrow">PRIVATE {intent.toUpperCase()} ENQUIRY</p><h1>{heading}</h1><p className="lede">Share the details below. This starts a private enquiry; availability and final arrangements will be confirmed separately.</p><EnquiryForm intent={intent} context={context} /></div></section></main>;
}
