export const contactFields = [
  { name: "name", label: "Name", type: "text", max: 100 },
  { name: "company", label: "Restaurant / Company", type: "text", max: 150 },
  { name: "email", label: "Email", type: "email", max: 254 },
  { name: "phone", label: "Phone (optional)", type: "tel", max: 40 },
  { name: "country", label: "Country", type: "text", max: 100 },
  { name: "locations", label: "Number of Locations", type: "number", max: 5 },
  {
    name: "terminals",
    label: "Approximate POS Terminals",
    type: "number",
    max: 5,
  },
] as const;
export type ContactData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  locations: string;
  terminals: string;
  message: string;
  website: string;
};
export function validateContact(value: unknown): {
  data: ContactData;
  errors: Partial<Record<keyof ContactData, string>>;
} {
  const source =
    typeof value === "object" && value !== null
      ? (value as Record<string, unknown>)
      : {};
  const keys = [
    "name",
    "company",
    "email",
    "phone",
    "country",
    "locations",
    "terminals",
    "message",
    "website",
  ] as const;
  const data = Object.fromEntries(
    keys.map((k) => [k, typeof source[k] === "string" ? source[k].trim() : ""]),
  ) as ContactData;
  const errors: Partial<Record<keyof ContactData, string>> = {};
  for (const field of contactFields) {
    if (field.name !== "phone" && !data[field.name])
      errors[field.name] = `${field.label} is required.`;
    if (data[field.name].length > field.max)
      errors[field.name] = `Use at most ${field.max} characters.`;
  }
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Enter a valid email address.";
  for (const k of ["locations", "terminals"] as const)
    if (
      data[k] &&
      (!/^\d+$/.test(data[k]) || Number(data[k]) < 1 || Number(data[k]) > 10000)
    )
      errors[k] = "Enter a whole number between 1 and 10,000.";
  if (data.message.length < 10 || data.message.length > 3000)
    errors.message = "Use between 10 and 3,000 characters.";
  return { data, errors };
}
export function contactEmail() {
  const value = process.env.CONTACT_EMAIL?.trim();
  return value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? value : undefined;
}
