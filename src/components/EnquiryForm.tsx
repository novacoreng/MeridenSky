"use client";

import { FormEvent, useState } from "react";
import type { BookingIntent } from "@/lib/booking";

export function EnquiryForm({ intent = "stay" }: { intent?: BookingIntent }) {
  const [status, setStatus] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus("");

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");

    if (!name.trim() || !email.trim()) {
      setStatus("Please add your name and email.");
      setSubmitting(false);
      return;
    }

    setStatus(`Thanks ${name}. Your ${intent} enquiry is ready for the next booking step.`);
    event.currentTarget.reset();
    setSubmitting(false);
  }

  return (
    <form className="enquiryForm" onSubmit={submit}>
      <div className="formGrid">
        <label>Name<input name="name" autoComplete="name" required placeholder="Your name" /></label>
        <label>Email<input name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label>
      </div>
      <label>Message<textarea name="message" rows={5} placeholder="Tell us what you have in mind…" /></label>
      <button className="button primary" type="submit" disabled={submitting}>{submitting ? "Preparing…" : "Send enquiry"}</button>
      {status && <p className="formStatus" role="status">{status}</p>}
    </form>
  );
}
