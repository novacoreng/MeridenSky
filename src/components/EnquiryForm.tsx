"use client";

import { FormEvent, useState } from "react";
import type { BookingIntent } from "@/lib/booking";
import { createEnquiry, type EnquiryType } from "@/lib/enquiries";
import { readAdminStore, writeAdminStore } from "@/lib/admin-store";

type Props = { intent?: BookingIntent; context?: string };

export function EnquiryForm({ intent = "stay", context }: Props) {
  const [status, setStatus] = useState("");
  const [reference, setReference] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setStatus("");
    setError("");
    setReference("");

    try {
      const form = new FormData(event.currentTarget);
      const name = String(form.get("name") || "").trim();
      const email = String(form.get("email") || "").trim();
      const date = String(form.get("date") || "");
      const guestsValue = String(form.get("guests") || "").trim();
      const guests = guestsValue ? Number(guestsValue) : undefined;
      const message = String(form.get("message") || "").trim();

      if (name.length < 2) throw new Error("Please enter your full name.");
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("Please enter a valid email address.");
      if (guests !== undefined && (!Number.isInteger(guests) || guests < 1 || guests > 50)) throw new Error("Guests must be between 1 and 50.");
      if (message.length > 2000) throw new Error("Please keep your message under 2,000 characters.");

      const enquiryType: EnquiryType = intent === "experience" || intent === "event" || intent === "concierge" ? intent : "booking";
      const enquiry = createEnquiry({ enquiryType, name, email, preferredDate: date || undefined, guests, message: context ? `${context}\n\n${message}`.trim() : message });
      const store = readAdminStore();
      writeAdminStore({ ...store, enquiries: [...store.enquiries, enquiry] });

      setReference(enquiry.reference);
      setStatus(`Thanks ${name}. Your ${intent} enquiry has been received for review.`);
      event.currentTarget.reset();
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "We could not save your enquiry. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (reference) return <div className="bookingConfirmation" role="status" aria-live="polite"><p className="eyebrow">ENQUIRY RECEIVED</p><h2>We have<br /><em>your details.</em></h2><p>Your reference is <strong>{reference}</strong>. Keep it for your records.</p><p className="confirmationNote">This is an enquiry, not a confirmed reservation. Availability and final arrangements will be confirmed separately.</p><a className="button primary" href="/">Return to Meridian Sky</a></div>;

  return <form className="enquiryForm" onSubmit={submit} noValidate>
    <div className="formGrid">
      <label>Name<input name="name" autoComplete="name" required minLength={2} aria-invalid={Boolean(error)} placeholder="Your name" /></label>
      <label>Email<input name="email" type="email" autoComplete="email" required aria-invalid={Boolean(error)} placeholder="you@example.com" /></label>
    </div>
    <div className="formGrid">
      <label>Preferred date<input name="date" type="date" /></label>
      <label>Guests<input name="guests" type="number" min="1" max="50" inputMode="numeric" placeholder="2" /></label>
    </div>
    <label>Message<textarea name="message" rows={5} maxLength={2000} placeholder="Tell us what you have in mind…" /></label>
    <button className="button primary" type="submit" disabled={submitting} aria-busy={submitting}>{submitting ? "Sending…" : "Send private enquiry"}</button>
    {error && <p className="formStatus" role="alert" aria-live="assertive">{error}</p>}
    {!error && status && <p className="formStatus" role="status" aria-live="polite">{status}</p>}
  </form>;
}
