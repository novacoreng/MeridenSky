import type { AdminRecord } from "@/lib/admin-store";

export type EnquiryType = "booking" | "concierge" | "event" | "experience";
export type EnquiryStatus = "new" | "reviewing" | "contacted" | "confirmed" | "closed";

export type Enquiry = AdminRecord & {
  status: EnquiryStatus;
  contentType: "enquiry";
  enquiryType: EnquiryType;
  name: string;
  email: string;
  phone?: string;
  preferredDate?: string;
  guests?: number;
  message: string;
  reference: string;
};

type NewEnquiry = Omit<Enquiry, "id" | "title" | "status" | "updatedAt" | "contentType" | "reference">;

export function createEnquiry(input: NewEnquiry): Enquiry {
  const now = new Date().toISOString();
  const reference = `MS-${now.slice(0, 10).replaceAll("-", "")}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
  return {
    ...input,
    id: `enquiry-${Date.now()}`,
    title: `${input.enquiryType} enquiry · ${input.name}`,
    status: "new",
    updatedAt: now,
    contentType: "enquiry",
    reference,
  };
}
