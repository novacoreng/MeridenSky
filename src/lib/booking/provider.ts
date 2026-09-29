import type { AvailabilityQuery, AvailabilityResult, BookingRequest, BookingResult } from "./types";

export interface BookingProvider {
  checkAvailability(query: AvailabilityQuery): Promise<AvailabilityResult>;
  createBooking(request: BookingRequest): Promise<BookingResult>;
}

/** Temporary enquiry-first provider. Replace only this adapter when a real booking provider is selected. */
export const enquiryBookingProvider: BookingProvider = {
  async checkAvailability() {
    return {
      available: true,
      provider: "mock",
      message: "Availability will be confirmed by Meridian Sky before booking.",
    };
  },
  async createBooking() {
    return {
      reference: `MS-${Date.now().toString(36).toUpperCase()}`,
      status: "inquiry",
      paymentStatus: "not_required",
    };
  },
};
