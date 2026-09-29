export type BookingStatus = "inquiry" | "pending" | "confirmed" | "cancelled";
export type PaymentStatus = "not_required" | "pending" | "paid" | "failed" | "refunded";

export interface AvailabilityQuery {
  checkIn: string;
  checkOut: string;
  guests: number;
}

export interface AvailabilityResult {
  available: boolean;
  provider: "mock" | "external";
  message: string;
}

export interface BookingRequest {
  name: string;
  email: string;
  phone?: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  notes?: string;
}

export interface BookingResult {
  reference: string;
  status: BookingStatus;
  paymentStatus: PaymentStatus;
}
