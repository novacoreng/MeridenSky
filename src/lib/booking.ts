export type BookingIntent = "stay" | "experience" | "event" | "concierge";

export interface BookingRequest {
  intent: BookingIntent;
  name: string;
  email: string;
  phone?: string;
  date?: string;
  guests?: number;
  message?: string;
}

export interface BookingResult {
  accepted: boolean;
  reference: string;
  message: string;
}

export interface BookingProvider {
  submit(request: BookingRequest): Promise<BookingResult>;
}

/** Temporary provider used until the production booking/CMS backend is connected. */
export const enquiryBookingProvider: BookingProvider = {
  async submit(request) {
    const reference = `MS-${Date.now().toString(36).toUpperCase()}`;
    return {
      accepted: true,
      reference,
      message: `Your ${request.intent} enquiry has been received.`,
    };
  },
};
