"use client";
import {
  contactTranslation,
  localizedHref,
  translateLabel,
  type Locale,
} from "@/lib/locale";
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
  locale = "en",
}: {
  configured: boolean;
  email?: string;
  locale?: Locale;
}) {
  const t = (en: string, my: string) => (locale === "my" ? my : en);
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
          {t(
            "Web submissions are not configured yet.",
            "ဝဘ်ဆိုက်မှ ပေးပို့မှုကို မပြင်ဆင်ရသေးပါ။",
          )}{" "}
          {email ? (
            <>
              <a className="text-link" href={`mailto:${email}`}>
                {t("Email", "အီးမေးလ်")} {email}
              </a>{" "}
              {t(
                "to send your inquiry directly.",
                "သို့ တိုက်ရိုက်ပေးပို့နိုင်ပါသည်။",
              )}
            </>
          ) : (
            t(
              "The website operator must configure a contact webhook or contact email before inquiries can be delivered.",
              "မေးမြန်းချက်များ ပေးပို့နိုင်ရန် ဝဘ်ဆိုက်တာဝန်ရှိသူက contact webhook သို့မဟုတ် ဆက်သွယ်ရန် အီးမေးလ်ကို ပြင်ဆင်ပေးရပါမည်။",
            )
          )}
        </div>
      )}
      <div className="form-grid">
        {contactFields.map((field) => (
          <div className="field" key={field.name}>
            <label htmlFor={`contact-${field.name}`}>
              {translateLabel(field.label, locale)}
            </label>
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
                {contactTranslation(errors[field.name]!, locale)}
              </span>
            )}
          </div>
        ))}
        <div className="field full">
          <label htmlFor="contact-message">{t("Message", "မေးမြန်းစာ")}</label>
          <textarea
            id="contact-message"
            name="message"
            required
            maxLength={3000}
            placeholder={t(
              "Tell us about your restaurant, workflows and deployment plans.",
              "သင့်စားသောက်ဆိုင်၊ လုပ်ငန်းစဉ်နှင့် တပ်ဆင်မည့်အစီအစဉ်ကို ရေးပါ။",
            )}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <span id="message-error" className="field-error">
              {contactTranslation(errors.message!, locale)}
            </span>
          )}
        </div>
      </div>
      <div className="honeypot" aria-hidden="true">
        <label>
          {t("Leave blank", "မဖြည့်ပါနှင့်")}
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <p className="form-disclaimer">
        {t(
          "Use this form for business inquiries. Please don’t include passwords or payment details.",
          "လုပ်ငန်းဆိုင်ရာ မေးမြန်းမှုများအတွက် ဤဖောင်ကို သုံးပါ။ Password သို့မဟုတ် ငွေပေးချေမှုအသေးစိတ်များ မထည့်ပါနှင့်။",
        )}{" "}
        <a
          href={localizedHref("/privacy", locale)}
          style={{ textDecoration: "underline" }}
        >
          {t("Privacy notice", "ကိုယ်ရေးအချက်အလက်ဆိုင်ရာ အသိပေးချက်")}
        </a>
      </p>
      <div
        role={status === "error" ? "alert" : "status"}
        aria-live="polite"
        className={message ? `form-status ${status}` : undefined}
      >
        {message ? contactTranslation(message, locale) : ""}
      </div>
      <button
        className="button button-dark"
        type="submit"
        disabled={status === "submitting" || status === "success"}
      >
        {status === "submitting"
          ? t("Sending…", "ပေးပို့နေပါသည်…")
          : status === "success"
            ? t("Request delivered", "ပေးပို့ပြီးပါပြီ")
            : t("Send request", "တောင်းဆိုချက်ပေးပို့ရန်")}
        <ArrowUpRight size={16} />
      </button>
    </form>
  );
}
