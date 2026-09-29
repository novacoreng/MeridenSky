export interface ExperienceContent {
  code: string;
  title: string;
  description: string;
  slug: string;
  kicker: string;
  details: string[];
}

/**
 * Minimal shape used when resolving optional editorial overrides.
 * This intentionally has no dependency on the removed admin/backend layer.
 */
export interface PublicEditorialRecord {
  contentType?: string;
  slug?: string;
  status?: string;
  title?: string;
  description?: string;
  eyebrow?: string;
}

export const fallbackExperiences: ExperienceContent[] = [
  { code: "01", title: "Private Dining", description: "A considered table, your people and an atmosphere shaped around the occasion.", slug: "private-dining", kicker: "A table above the city.", details: ["Private setting", "Personalised occasion", "Dining arrangements by enquiry"] },
  { code: "02", title: "Rooftop Evenings", description: "Golden hour, cocktails and the city becoming part of the room.", slug: "rooftop-evenings", kicker: "Stay for golden hour.", details: ["Rooftop atmosphere", "Cocktails & music", "Evening arrangements by enquiry"] },
  { code: "03", title: "Celebrations", description: "Birthdays, milestones and private moments with the details handled.", slug: "celebrations", kicker: "Make the moment yours.", details: ["Occasion planning", "Bespoke details", "Private arrangements by enquiry"] },
  { code: "04", title: "Romantic Escapes", description: "A quieter kind of luxury for time spent together.", slug: "romantic-escapes", kicker: "Time, together.", details: ["Private setting", "Romantic details", "Stay arrangements by enquiry"] },
  { code: "05", title: "Entertainment", description: "Music, cocktails and a private atmosphere built for your night.", slug: "entertainment", kicker: "Your atmosphere.", details: ["Music arrangements", "Private atmosphere", "Entertainment by enquiry"] },
  { code: "06", title: "Luxury Concierge", description: "Thoughtful extras, from flowers and chauffeurs to bespoke requests.", slug: "luxury-concierge", kicker: "Tell us what you need.", details: ["Chauffeur arrangements", "Flowers & details", "Bespoke requests"] },
];

export function resolveExperience(
  records: ReadonlyArray<PublicEditorialRecord>,
  slug: string,
): ExperienceContent | undefined {
  const saved = records.find(
    (record) =>
      record.contentType === "editorial" &&
      record.slug === slug &&
      record.status === "published",
  );

  const fallback = fallbackExperiences.find((item) => item.slug === slug);
  if (!fallback) return undefined;
  if (!saved) return fallback;

  return {
    ...fallback,
    title: saved.title || fallback.title,
    description: saved.description || fallback.description,
    kicker: saved.eyebrow || fallback.kicker,
  };
}
