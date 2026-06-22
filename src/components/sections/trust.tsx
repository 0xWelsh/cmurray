import { Container } from "@/components/layout/container";

const stats = [
  { number: "10+", label: "Years of experience" },
  { number: "4.9", label: "Rating on Google" },
  { number: "1000s", label: "Happy patients" },
];

export function TrustSection() {
  return (
    <section className="py-20 md:py-28 bg-warm">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="rounded-xl overflow-hidden border border-border shadow-sm h-[300px] md:h-[400px]">
            <iframe
              src="https://www.google.com/maps?q=London&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="OWEN opticians location"
            />
          </div>

          <div className="space-y-8">
            <div>
              <p className="label-accent mb-3">About the practice</p>
              <h2 className="heading-lg">
                Professional eye care you can trust since 2015
              </h2>
            </div>

            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                OWEN opticians is an independent practice built on
                one belief: eye care should be personal. We take the time to get
                to know you, your vision, and what matters most to you.
              </p>
              <p>
                Our team brings a wealth of clinical expertise — from
                routine exams to specialist children&apos;s eye care and
                contact lens fitting.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-2">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl md:text-3xl font-heading text-cyan">{stat.number}</p>
                  <p className="text-xs text-muted mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <a
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-cyan hover:text-cyan-dark transition-colors"
            >
              More about us
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
