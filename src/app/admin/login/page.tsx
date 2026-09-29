"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import "../admin.css";

export default function AdminLoginPage() {
  const router = useRouter();
  const [key, setKey] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: FormEvent) {
    event.preventDefault();
    setBusy(true); setError("");
    const response = await fetch("/api/admin/session", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ key }) });
    if (!response.ok) { setError("Access key was not accepted."); setBusy(false); return; }
    router.replace("/admin");
  }

  return <main className="adminLogin"><div className="adminLoginCard"><p className="adminLabel">MERIDIAN SKY / CONTROL ROOM</p><h1>Private access.</h1><p>Enter the administrator access key to continue.</p><form onSubmit={submit}><label>Access key<input autoFocus type="password" value={key} onChange={(event) => setKey(event.target.value)} required /></label><button className="adminPrimary" disabled={busy}>{busy ? "Checking…" : "Enter control room"}</button>{error && <p className="adminError" role="alert">{error}</p>}</form></div></main>;
}
