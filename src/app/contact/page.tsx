"use client";

import { useState, useRef, type FormEvent } from "react";
import { PageBanner } from "@/components/layout/page-banner";
import { Container } from "@/components/layout/container";

const ACCESS_KEY = "9f2f20de-965c-4924-aaa4-0b9dd6282c0d";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, subject: "Contact Form - Website" }),
      });

      const result = await res.json();

      if (result.success) {
        setSubmitted(true);
        formRef.current?.reset();
      } else {
        setError(result.message || "Failed to send. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Get in touch — we'd love to hear from you."
      />

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-cyan" viewBox="0 0 20 20" fill="none">
                      <path d="M10 2a6 6 0 00-6 6c0 4.5 6 10 6 10s6-5.5 6-10a6 6 0 00-6-6z" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="heading-sm mb-1">Visit us</h3>
                    <p className="text-sm text-muted">123 High Street, London, EC1A 1BB</p>
                    <p className="text-xs text-muted mt-1">City Centre · Easy access from public transport</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-cyan" viewBox="0 0 20 20" fill="none">
                      <path d="M2 4l8 5 8-5M2 4v12a1 1 0 001 1h14a1 1 0 001-1V4M2 4a1 1 0 011-1h14a1 1 0 011 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="heading-sm mb-1">Email us</h3>
                    <a href="mailto:hello@owenopticians.com" className="text-sm text-muted hover:text-cyan transition-colors">hello@owenopticians.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-cyan" viewBox="0 0 20 20" fill="none">
                      <path d="M2 4a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4z" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="heading-sm mb-1">Call us</h3>
                    <a href="tel:+44112345678" className="text-sm text-muted hover:text-cyan transition-colors">020 1234 5678</a>
                    <p className="text-xs text-muted mt-0.5">Mobile: 077 1234 5678</p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-warm border border-border">
                <h3 className="heading-sm mb-3">Opening Hours</h3>
                <dl className="space-y-1.5 text-sm">
                  {[
                    { day: "Monday — Friday", hours: "9:00am — 5:30pm" },
                    { day: "Wednesday", hours: "9:00am — 7:00pm" },
                    { day: "Saturday", hours: "9:00am — 1:00pm" },
                    { day: "Sunday", hours: "Closed" },
                  ].map((item) => (
                    <div key={item.day} className="flex justify-between">
                      <dt className="text-charcoal/80">{item.day}</dt>
                      <dd className="font-medium text-cyan">{item.hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="flex gap-3">
                {[
                  { label: "Facebook", href: "#" },
                  { label: "Instagram", href: "#" },
                  { label: "Twitter", href: "#" },
                  { label: "YouTube", href: "#" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center hover:bg-cyan/20 transition-colors"
                    aria-label={social.label}
                  >
                    <span className="text-xs font-medium text-cyan">{social.label[0]}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 md:p-8 rounded-xl bg-warm border border-border">
              <h3 className="heading-sm mb-2">Send us a message</h3>
              <p className="text-sm text-muted mb-6">We'll get back to you within 24 hours.</p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-green-50 border border-green-200 text-center">
                  <p className="text-green-800 font-medium">Thanks for your message!</p>
                  <p className="text-sm text-green-700 mt-1">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setError(null);
                    }}
                    className="mt-4 text-sm text-green-700 underline hover:no-underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <input type="hidden" name="access_key" value={ACCESS_KEY} />
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="label block mb-1.5">Name</label>
                      <input type="text" id="contact-name" name="name" required placeholder="Your name" className="w-full px-4 py-2.5 text-sm bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-cyan transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="label block mb-1.5">Email</label>
                      <input type="email" id="contact-email" name="email" required placeholder="your@email.com" className="w-full px-4 py-2.5 text-sm bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-cyan transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="label block mb-1.5">Phone</label>
                    <input type="tel" id="contact-phone" name="phone" placeholder="Your phone number" className="w-full px-4 py-2.5 text-sm bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-cyan transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="label block mb-1.5">Message</label>
                    <textarea id="contact-message" name="message" rows={4} required placeholder="How can we help?" className="w-full px-4 py-2.5 text-sm bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-cyan transition-colors resize-none" />
                  </div>

                  {error && <p className="text-sm text-red-600">{error}</p>}

                  <button type="submit" disabled={loading} className="w-full px-6 py-3 bg-cyan text-white text-sm font-medium rounded-lg hover:bg-cyan-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>

      <section className="h-[300px] bg-warm border-t border-border flex items-center justify-center">
        <div className="text-center">
          <p className="text-sm text-muted">Map integration</p>
          <p className="text-xs text-muted mt-1">123 High Street, London, EC1A 1BB</p>
        </div>
      </section>
    </>
  );
}
