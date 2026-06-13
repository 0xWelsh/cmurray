import { Container } from "@/components/layout/container";

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 lg:py-24 bg-white">
      <Container>
        <div className="max-w-xl mb-14">
          <p className="label-accent mb-4">Get in Touch</p>
          <h2 className="heading-lg">
            We&apos;d love to hear from you
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-5 h-5 text-cyan"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M10 2a6 6 0 00-6 6c0 4.5 6 10 6 10s6-5.5 6-10a6 6 0 00-6-6z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="10"
                      cy="8"
                      r="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="heading-sm mb-1">Visit us</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    13 Antrim Road
                    <br />
                    Belfast, BT15 2BE
                  </p>
                  <p className="text-xs text-muted mt-1">
                    Near the Mater Hospital · Easy access from West Link
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-5 h-5 text-cyan"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M2 4l8 5 8-5M2 4v12a1 1 0 001 1h14a1 1 0 001-1V4M2 4a1 1 0 011-1h14a1 1 0 011 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="heading-sm mb-1">Email us</h3>
                  <a
                    href="mailto:info@cmurrayoptician.com"
                    className="text-sm text-muted hover:text-cyan transition-colors"
                  >
                    info@cmurrayoptician.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-5 h-5 text-cyan"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M2 4a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M7 10l2 2 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="heading-sm mb-1">Call us</h3>
                  <a
                    href="tel:+442890741122"
                    className="text-sm text-muted hover:text-cyan transition-colors"
                  >
                    028 90 74 11 22
                  </a>
                  <p className="text-xs text-muted mt-0.5">
                    Mobile: 075 574 344 65
                  </p>
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
                ].map((item) => (
                  <div key={item.day} className="flex justify-between">
                    <dt className="text-charcoal/80">{item.day}</dt>
                    <dd className="font-medium text-cyan">{item.hours}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div id="book" className="p-6 md:p-8 rounded-xl bg-warm border border-border">
            <h3 className="heading-sm mb-2">Book an Appointment</h3>
            <p className="text-sm text-muted mb-6">
              Fill in the form and we&apos;ll get back to you within 24 hours.
            </p>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="label block mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 text-sm bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-cyan transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="label block mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 text-sm bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-cyan transition-colors"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="label block mb-1.5">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Your phone number"
                  className="w-full px-4 py-2.5 text-sm bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-cyan transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="label block mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us what you need..."
                  className="w-full px-4 py-2.5 text-sm bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-cyan transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-cyan text-white text-sm font-medium rounded-lg hover:bg-cyan-dark transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
