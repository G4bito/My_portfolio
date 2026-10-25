"use client";

import { Send } from "lucide-react";
import { useRef, useState, type FormEvent, type ReactNode } from "react";
import { GMAIL_PATTERN, isValidGmailAddress, sendContactMessage } from "@/lib/contact-delivery";

const fieldClass =
  "focus-ring w-full rounded-xl border border-foreground/15 bg-background px-4 py-3 text-base text-foreground placeholder:text-foreground/40";

export function ContactForm(): ReactNode {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const submitting = useRef(false);
  const [emailError, setEmailError] = useState("");
  const gmailError = "Enter a valid Gmail address, such as yourname@gmail.com.";

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    if (submitting.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    if (!isValidGmailAddress(data.get("email"))) {
      setEmailError(gmailError);
      form.querySelector<HTMLInputElement>("#contact-email")?.focus();
      return;
    }
    submitting.current = true;
    setStatus("sending");
    try {
      await sendContactMessage(data);
      form.reset();
      setEmailError("");
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      submitting.current = false;
    }
  }

  return (
    // FormSubmit AJAX keeps the visitor on this page.
    // https://formsubmit.co/documentation
    <form
      action="https://formsubmit.co/zyrelgabrielmaningding@gmail.com"
      method="POST"
      onSubmit={handleSubmit}
      aria-busy={status === "sending"}
      className="flex w-full flex-col gap-5"
    >
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_subject" value="New message from your portfolio" />
      <input type="hidden" name="_template" value="table" />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-name" className="text-sm font-medium">Your name</label>
        <input id="contact-name" name="name" type="text" autoComplete="name" required maxLength={100} placeholder="Full name" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-email" className="text-sm font-medium">Your Gmail address</label>
        <input
          id="contact-email" name="email" type="email" autoComplete="email"
          required maxLength={254} placeholder="yourname@gmail.com"
          pattern={GMAIL_PATTERN} title={gmailError}
          aria-invalid={Boolean(emailError)}
          aria-describedby="contact-email-help contact-email-error"
          onInvalid={(event) => {
            event.currentTarget.setCustomValidity(gmailError);
            setEmailError(gmailError);
          }}
          onChange={(event) => {
            event.currentTarget.setCustomValidity("");
            if (emailError) setEmailError(isValidGmailAddress(event.currentTarget.value) ? "" : gmailError);
          }}
          onBlur={(event) => {
            setEmailError(isValidGmailAddress(event.currentTarget.value) ? "" : gmailError);
          }}
          className={fieldClass}
        />
        <p id="contact-email-help" className="text-xs text-foreground/55">Only @gmail.com addresses are accepted.</p>
        <p id="contact-email-error" aria-live="polite" className="text-sm text-foreground">{emailError}</p>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-message" className="text-sm font-medium">Your message</label>
        <textarea id="contact-message" name="message" required maxLength={5000} rows={5} placeholder="Tell me about your project, idea, or question..." className={fieldClass + " resize-y"} />
      </div>
      <button type="submit" disabled={status === "sending"} className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-85 disabled:cursor-wait disabled:opacity-60">
        {status === "sending" ? "Sending..." : "Submit message"} <Send className="h-4 w-4" aria-hidden="true" />
      </button>
      <div aria-live="polite" aria-atomic="true">
        {status === "success" && (
          <p role="status" className="rounded-xl border border-foreground/15 bg-foreground/5 px-4 py-3 text-sm">Message sent successfully! I&rsquo;ll get back to you soon.</p>
        )}
        {status === "error" && (
          <p role="alert" className="rounded-xl border border-foreground/15 px-4 py-3 text-sm">Your message could not be confirmed. Your text is still here. Please try again or email <a href="mailto:zyrelgabrielmaningding@gmail.com" className="underline">zyrelgabrielmaningding@gmail.com</a>.</p>
        )}
      </div>
    </form>
  );
}
