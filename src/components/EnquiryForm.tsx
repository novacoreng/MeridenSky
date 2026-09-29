"use client";

import { FormEvent, useState } from "react";
import type { BookingIntent } from "@/lib/booking";

type Props = { intent?: BookingIntent; context?: string };

export function EnquiryForm({ intent = "stay", context }: Props) {
  const [status, setStatus] = useState<string>("");
  const [reference, setReference] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus("");
    setReference("");
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const date = String(form.get("date") || "");
    const guests = Number(form.get("guests") || 0);
    const message = String(form.get("message") || "").trim();

    if (!name || !email) {
      setStatus("Please add your name and email.");
      setSubmitting(false);
      return;
    }

    const generated = `MS-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
    setReference(generated);
    setStatus(`Thanks ${name}. Your ${intent} enquiry has been received for review.`);
    void { date, guests, message, context };
    event.currentTarget.reset();
    setSubmitting(false);
  }

  if (reference) return <div className="bookingConfirmation" role="status"><p className="eyebrow">ENQUIRY RECEIVED</p><h2>We have<br /><em>your details.</em></h2><p>Your reference is <strong>{reference}</strong>. Keep it for your records.</p><p className="confirmationNote">This is an enquiry, not a confirmed reservation. Availability and final arrangements will be confirmed separately.</p><a className="button primary" href="/">Return to Meridian Sky</a></div>;

  return <form className="enquiryForm" onSubmit={submit}>
    <div className="formGrid">
      <label>Name<input name="name" autoComplete="name" required placeholder="Your name" /></label>
      <label>Email<input name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label>
    </div>
    <div className="formGrid">
      <label>Preferred date<input name="date" type="date" /></label>
      <label>Guests<input name="guests" type="number" min="1" max="50" placeholder="2" /></label>
    </div>
    <label>Message<textarea name="message" rows={5} placeholder="Tell us what you have in mind…" /></label>
    <button className="button primary" type="submit" disabled={submitting}>{submitting ? "Sending…" : "Send private enquiry"}</button>
    {status && <p className="formStatus" role="alert">{status}</p>}
  </form>;
}
