"use client";

import { useState } from "react";
import { PageBanner } from "@/components/layout/page-banner";
import { Container } from "@/components/layout/container";

const appointmentTypes = [
  { value: "eye-exam", label: "Eye Examination (Adult)" },
  { value: "eye-exam-child", label: "Eye Examination (Child)" },
  { value: "contact-lens", label: "Contact Lens Consultation" },
  { value: "visual-stress", label: "Visual Stress Assessment" },
  { value: "eyewear-fitting", label: "Eyewear Fitting / Styling" },
];

export default function BookOnlinePage() {
  const [selectedType, setSelectedType] = useState("");

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
                <form className="space-y-4 mt-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="book-name" className="label block mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="book-name"
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
                      rows={3}
                      placeholder="Any specific concerns or preferred times?"
                      className="w-full px-4 py-2.5 text-sm bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-cyan transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-cyan text-white text-sm font-medium rounded-lg hover:bg-cyan-dark transition-colors"
                  >
                    Request Appointment
                  </button>
                </form>
              </div>

              <div className="p-5 rounded-xl bg-warm border border-border text-sm text-muted">
                <strong className="text-charcoal block mb-1">
                  Prefer to call?
                </strong>
                We&apos;re happy to help over the phone. Call us on{" "}
                <a
                  href="tel:+442890741122"
                  className="text-cyan font-medium hover:underline"
                >
                  028 90 74 11 22
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
