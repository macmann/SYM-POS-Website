"use client";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  contactFields,
  validateContact,
  type ContactData,
} from "@/lib/contact";
export function ContactForm({
  configured,
  email,
}: {
  configured: boolean;
  email?: string;
}) {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactData, string>>
  >({});
  const busy = useRef(false);
  const form = useRef<HTMLFormElement>(null);
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy.current || status === "success") return;
    const { data, errors: issues } = validateContact(
      Object.fromEntries(new FormData(e.currentTarget)),
    );
    setErrors(issues);
    if (Object.keys(issues).length) {
      setStatus("error");
      setMessage("Please review the highlighted fields.");
      const key = Object.keys(issues)[0];
      form.current?.querySelector<HTMLElement>(`[name="${key}"]`)?.focus();
      return;
    }
    busy.current = true;
    setStatus("submitting");
    setMessage("Sending your request…");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok)
        throw new Error(
          result.error ||
            "Your request could not be delivered. Please try again.",
        );
      setStatus("success");
      setMessage(
        "Your request has been delivered. Thank you for sharing your restaurant plans.",
      );
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Could not deliver your request. Please try again.",
      );
    } finally {
      busy.current = false;
    }
  }
  return (
    <form ref={form} className="contact-form" onSubmit={submit} noValidate>
      {!configured && (
        <div className="form-status">
          Web submissions are not configured yet.{" "}
          {email ? (
            <>
              <a className="text-link" href={`mailto:${email}`}>
                Email {email}
              </a>{" "}
              to send your inquiry directly.
            </>
          ) : (
            "The website operator must configure a contact webhook or contact email before inquiries can be delivered."
          )}
        </div>
      )}
      <div className="form-grid">
        {contactFields.map((field) => (
          <div className="field" key={field.name}>
            <label htmlFor={`contact-${field.name}`}>{field.label}</label>
            <input
              id={`contact-${field.name}`}
              name={field.name}
              type={field.type}
              required={field.name !== "phone"}
              maxLength={field.type === "number" ? undefined : field.max}
              min={field.type === "number" ? 1 : undefined}
              max={field.type === "number" ? 10000 : undefined}
              autoComplete={
                field.name === "name"
                  ? "name"
                  : field.name === "company"
                    ? "organization"
                    : field.name === "email"
                      ? "email"
                      : field.name === "phone"
                        ? "tel"
                        : field.name === "country"
                          ? "country-name"
                          : "off"
              }
              aria-invalid={!!errors[field.name]}
              aria-describedby={
                errors[field.name] ? `${field.name}-error` : undefined
              }
            />
            {errors[field.name] && (
              <span className="field-error" id={`${field.name}-error`}>
                {errors[field.name]}
              </span>
            )}
          </div>
        ))}
        <div className="field full">
          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            required
            maxLength={3000}
            placeholder="Tell us about your restaurant, workflows and deployment plans."
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <span id="message-error" className="field-error">
              {errors.message}
            </span>
          )}
        </div>
      </div>
      <div className="honeypot" aria-hidden="true">
        <label>
          Leave blank
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <p className="form-disclaimer">
        Use this form for business inquiries. Please don’t include passwords or
        payment details.{" "}
        <a href="/privacy" style={{ textDecoration: "underline" }}>
          Privacy notice
        </a>
      </p>
      <div
        role={status === "error" ? "alert" : "status"}
        aria-live="polite"
        className={message ? `form-status ${status}` : undefined}
      >
        {message}
      </div>
      <button
        className="button button-dark"
        type="submit"
        disabled={status === "submitting" || status === "success"}
      >
        {status === "submitting"
          ? "Sending…"
          : status === "success"
            ? "Request delivered"
            : "Send request"}
        <ArrowUpRight size={16} />
      </button>
    </form>
  );
}
