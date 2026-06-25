"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import { trackLeadSubmit, trackWhatsAppClick } from "@/lib/analytics";
import { contact, contactFormOptions } from "@/lib/site";

const serviceOptions = contactFormOptions.services;
const budgetOptions = contactFormOptions.budgetRanges;

type FormValues = {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  service: string;
  budget: string;
  message: string;
  website: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  businessName: "",
  service: "Not sure yet",
  budget: "",
  message: "",
  website: "",
};

function validateForm(values: FormValues) {
  const errors: FormErrors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Please enter your WhatsApp or phone number.";
  }

  if (!values.message.trim()) {
    errors.message = "Please tell us a little about what you need.";
  }

  return errors;
}

function getWhatsAppLeadUrl(values: FormValues) {
  const messageLines = [
    "New Syncore website enquiry",
    "",
    `Name: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
    `WhatsApp/Phone: ${values.phone.trim()}`,
    values.businessName.trim()
      ? `Business: ${values.businessName.trim()}`
      : "",
    `Service: ${values.service}`,
    values.budget ? `Budget: ${values.budget}` : "",
    "",
    "Message:",
    values.message.trim(),
  ].filter(Boolean);

  return `${contact.whatsapp}?text=${encodeURIComponent(
    messageLines.join("\n"),
  )}`;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const updateValue = (field: keyof FormValues, value: string) => {
    setValues((currentValues) => ({
      ...currentValues,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((currentErrors) => ({
        ...currentErrors,
        [field]: undefined,
      }));
    }

    if (formError) {
      setFormError("");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError("");

    const nextErrors = validateForm(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setIsSubmitted(false);
      return;
    }

    setIsSubmitting(true);

    try {
      window.open(getWhatsAppLeadUrl(values), "_blank", "noopener,noreferrer");
      setIsSubmitted(true);
      trackLeadSubmit({
        service: values.service,
        budget: values.budget || undefined,
        source: "contact_page",
      });
      trackWhatsAppClick({ location: "contact_form" });
      setValues(initialValues);
      setErrors({});
    } catch {
      setFormError(
        "We couldn't open WhatsApp right now. Please contact us directly.",
      );
      setIsSubmitted(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div
        className="card brand-gradient-surface spotlight-card p-7 sm:p-8"
        role="status"
        aria-live="polite"
      >
        <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-cyan text-brand-charcoal shadow-[0_1rem_2.5rem_rgb(0_188_212/22%)]">
          <CheckCircle2 aria-hidden="true" size={26} strokeWidth={2.3} />
        </div>
        <h2 className="mt-7 font-heading text-3xl font-extrabold text-brand-charcoal">
          Thanks. Your request has been received.
        </h2>
        <p className="mt-4 leading-8">
          WhatsApp opened with your details filled in. Send the message there
          and we&apos;ll follow up soon.
        </p>
        <button
          type="button"
          className="btn btn-secondary mt-7"
          onClick={() => setIsSubmitted(false)}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      className="card brand-gradient-surface spotlight-card p-6 sm:p-8"
      onSubmit={handleSubmit}
      noValidate
      aria-busy={isSubmitting}
      aria-label="Contact lead form"
      aria-describedby={
        formError ? "contact-form-help form-error" : "contact-form-help"
      }
    >
      <div className="mb-6 rounded-2xl border border-brand-border bg-brand-surface p-4">
        <p className="font-heading text-sm font-extrabold uppercase tracking-[0.12em] text-brand-indigo">
          Free growth consult
        </p>
        <p id="contact-form-help" className="mt-2 text-sm leading-6 text-brand-muted">
          Tell us what you are building and Syncore will map the clearest next
          step.
        </p>
      </div>

      <div
        className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => updateValue("website", event.target.value)}
        />
      </div>

      {formError && (
        <div
          id="form-error"
          role="alert"
          className="mb-5 rounded-2xl border border-brand-purple/30 bg-brand-purple/10 p-4 text-sm font-semibold leading-6 text-brand-charcoal"
        >
          {formError}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="font-heading text-sm font-extrabold text-brand-charcoal"
          >
            Name <span className="text-brand-indigo">*</span>
          </label>
          <input
            id="name"
            name="name"
            className="form-field mt-2"
            value={values.name}
            onChange={(event) => updateValue("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            autoComplete="name"
            required
          />
          {errors.name && (
            <p
              id="name-error"
              role="alert"
              className="mt-2 text-sm font-semibold text-brand-indigo"
            >
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="font-heading text-sm font-extrabold text-brand-charcoal"
          >
            Email <span className="text-brand-indigo">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-field mt-2"
            value={values.email}
            onChange={(event) => updateValue("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            autoComplete="email"
            required
          />
          {errors.email && (
            <p
              id="email-error"
              role="alert"
              className="mt-2 text-sm font-semibold text-brand-indigo"
            >
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="font-heading text-sm font-extrabold text-brand-charcoal"
          >
            WhatsApp/Phone <span className="text-brand-indigo">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            className="form-field mt-2"
            value={values.phone}
            onChange={(event) => updateValue("phone", event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            autoComplete="tel"
            required
          />
          {errors.phone && (
            <p
              id="phone-error"
              role="alert"
              className="mt-2 text-sm font-semibold text-brand-indigo"
            >
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="businessName"
            className="font-heading text-sm font-extrabold text-brand-charcoal"
          >
            Business name
          </label>
          <input
            id="businessName"
            name="businessName"
            className="form-field mt-2"
            value={values.businessName}
            onChange={(event) =>
              updateValue("businessName", event.target.value)
            }
            autoComplete="organization"
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="font-heading text-sm font-extrabold text-brand-charcoal"
          >
            Service interested in
          </label>
          <select
            id="service"
            name="service"
            className="form-field mt-2"
            value={values.service}
            onChange={(event) => updateValue("service", event.target.value)}
          >
            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="budget"
            className="font-heading text-sm font-extrabold text-brand-charcoal"
          >
            Budget range
          </label>
          <select
            id="budget"
            name="budget"
            className="form-field mt-2"
            value={values.budget}
            onChange={(event) => updateValue("budget", event.target.value)}
          >
            <option value="">Select a range</option>
            {budgetOptions.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="message"
          className="font-heading text-sm font-extrabold text-brand-charcoal"
        >
          Message <span className="text-brand-indigo">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          className="form-field mt-2 min-h-40 resize-y"
          value={values.message}
          onChange={(event) => updateValue("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          required
        />
        {errors.message && (
          <p
            id="message-error"
            role="alert"
            className="mt-2 text-sm font-semibold text-brand-indigo"
          >
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="btn btn-primary mt-7 min-h-14 w-full px-7 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            Sending
            <Loader2
              aria-hidden="true"
              className="animate-spin"
              size={18}
              strokeWidth={2.5}
            />
          </>
        ) : (
          <>
            Send Message
            <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2.5} />
          </>
        )}
      </button>
    </form>
  );
}
