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

type NewEnquiry = {
  enquiryType: EnquiryType;
  name: string;
  email: string;
  phone?: string;
  preferredDate?: string;
  guests?: number;
  message: string;
};

export function createEnquiry(input: NewEnquiry): Enquiry {
  const now = new Date().toISOString();
  const reference = `MS-${now.slice(0, 10).replaceAll("-", "")}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;

  return {
    id: `enquiry-${Date.now()}`,
    title: `${input.enquiryType} enquiry · ${input.name}`,
    status: "new",
    updatedAt: now,
    contentType: "enquiry",
    enquiryType: input.enquiryType,
    name: input.name,
    email: input.email,
    phone: input.phone,
    preferredDate: input.preferredDate,
    guests: input.guests,
    message: input.message,
    reference,
  };
}
