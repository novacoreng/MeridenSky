import { conciergeRequests, enquiries, events, experiences, property } from "./mock";

/**
 * CMS boundary. Keep public pages dependent on these functions rather than
 * directly importing fixtures so Supabase can replace the implementation
 * without changing the UI contract.
 */
export const cms = {
  async getProperty() {
    return property;
  },
  async getExperiences() {
    return experiences.filter((item) => item.status === "published");
  },
  async getEvents() {
    return events.filter((item) => item.status === "published");
  },
  async getEnquiries() {
    return enquiries;
  },
  async getConciergeRequests() {
    return conciergeRequests;
  },
};
