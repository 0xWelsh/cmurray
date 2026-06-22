"use client";

import { useState, useRef, type FormEvent } from "react";
import { PageBanner } from "@/components/layout/page-banner";
import { Container } from "@/components/layout/container";

const ACCESS_KEY = "9f2f20de-965c-4924-aaa4-0b9dd6282c0d";

const appointmentTypes = [
  { value: "eye-exam", label: "Eye Examination (Adult)" },
  { value: "eye-exam-child", label: "Eye Examination (Child)" },
  { value: "contact-lens", label: "Contact Lens Consultation" },
  { value: "visual-stress", label: "Visual Stress Assessment" },
  { value: "eyewear-fitting", label: "Eyewear Fitting / Styling" },
];

export default function BookOnlinePage() {
  const [selectedType, setSelectedType] = useState("");
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
        body: JSON.stringify({
          ...data,
          appointment_type: selectedType
            ? appointmentTypes.find((t) => t.value === selectedType)?.label
            : "Not specified",
          subject: "Appointment Request - Website",
        }),
      });

      const result = await res.json();

      if (result.success) {
        setSubmitted(true);
        setSelectedType("");
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
        title="Book Online"
        subtitle="Choose an appointment type and we'll find the best time for you."
      />

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-8">
              <div>
                <p className="label-accent mb-4">Step 1</p>
                <h2 className="heading-lg mb-2">
                  What type of appointment?
                </h2>
                <p className="text-sm text-muted mb-6">
                  Select the service you need so we can allocate the right
                  amount of time.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {appointmentTypes.map((type) => (
                    <button
                      key={type.value}
                      onClick={() => setSelectedType(type.value)}
                      className={`p-4 text-left rounded-xl border text-sm font-medium transition-all ${
                        selectedType === type.value
                          ? "bg-cyan text-white border-cyan"
                          : "bg-white text-charcoal/80 border-border hover:border-charcoal/20"
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-8">
                <p className="label-accent mb-4">Step 2</p>
                <h2 className="heading-lg mb-2">
                  Your details
                </h2>
                {submitted ? (
                  <div className="p-6 rounded-xl bg-green-50 border border-green-200 text-center mt-6">
                    <p className="text-green-800 font-medium">Appointment request sent!</p>
                    <p className="text-sm text-green-700 mt-1">
                      We&apos;ll get back to you within 24 hours to confirm.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setError(null);
                      }}
                      className="mt-4 text-sm text-green-700 underline hover:no-underline"
                    >
                      Book another appointment
                    </button>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 mt-6">
                    <input type="hidden" name="access_key" value={ACCESS_KEY} />
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="book-name" className="label block mb-1.5">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="book-name"
                          name="name"
                          required
                          placeholder="Your name"
                          className="w-full px-4 py-2.5 text-sm bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-cyan transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="book-email" className="label block mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="book-email"
                          name="email"
                          required
                          placeholder="your@email.com"
                          className="w-full px-4 py-2.5 text-sm bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-cyan transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="book-phone" className="label block mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="book-phone"
                        name="phone"
                        required
                        placeholder="Your phone number"
                        className="w-full px-4 py-2.5 text-sm bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-cyan transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="book-message" className="label block mb-1.5">
                        Notes (optional)
                      </label>
                      <textarea
                        id="book-message"
                        name="notes"
                        rows={3}
                        placeholder="Any specific concerns or preferred times?"
                        className="w-full px-4 py-2.5 text-sm bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-cyan transition-colors resize-none"
                      />
                    </div>

                    {error && <p className="text-sm text-red-600">{error}</p>}

                    <button
                      type="submit"
                      disabled={loading || !selectedType}
                      className="w-full px-6 py-3 bg-cyan text-white text-sm font-medium rounded-lg hover:bg-cyan-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? "Sending..." : "Request Appointment"}
                    </button>
                  </form>
                )}
              </div>

              <div className="p-5 rounded-xl bg-warm border border-border text-sm text-muted">
                <strong className="text-charcoal block mb-1">
                  Prefer to call?
                </strong>
                We&apos;re happy to help over the phone. Call us on{" "}
                <a
                  href="tel:+44112345678"
                  className="text-cyan font-medium hover:underline"
                >
                  020 1234 5678
                </a>{" "}
                during opening hours.
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
