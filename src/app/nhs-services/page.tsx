import { PageBanner } from "@/components/layout/page-banner";
import { Container } from "@/components/layout/container";

export default function NhsServicesPage() {
  return (
    <>
      <PageBanner
        title="NHS Eye Care Services"
        subtitle="We provide NHS-funded sight tests and optical vouchers for eligible patients."
      />

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto space-y-12">
            <div>
              <h2 className="heading-lg mb-4">Who qualifies for an NHS sight test?</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Children under 16",
                  "Full-time students under 19",
                  "People aged 60 or over",
                  "Registered blind or partially sighted",
                  "Diagnosed with diabetes or glaucoma",
                  "Aged 40+ with a close family history of glaucoma",
                  "Those eligible for an NHS complex lens voucher",
                  "Income Support or Universal Credit recipients",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 p-4 bg-warm rounded-lg border border-border"
                  >
                    <svg
                      className="w-5 h-5 text-cyan shrink-0 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-sm text-charcoal/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-warm border border-border">
              <h3 className="heading-sm mb-3">NHS optical vouchers</h3>
              <p className="text-sm text-muted leading-relaxed">
                If you qualify for an NHS sight test, you may also be entitled to an
                optical voucher towards the cost of glasses or contact lenses. We accept
                NHS vouchers and will help you understand your entitlement.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-cyan text-white">
              <h3 className="heading-lg text-white mb-3">Not sure if you qualify?</h3>
              <p className="text-sm text-white/70 mb-4">
                Give us a call or ask when booking. We&apos;ll check your eligibility
                and guide you through the process.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-cyan text-sm font-medium rounded-lg hover:bg-white/90 transition-colors"
              >
                Ask us
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
