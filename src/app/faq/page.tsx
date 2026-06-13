import { PageBanner } from "@/components/layout/page-banner";
import { Container } from "@/components/layout/container";

const faqs = [
  {
    q: "How often should I have an eye examination?",
    a: "We recommend an eye examination every two years for most adults. If you have certain medical conditions (such as diabetes), wear contact lenses, or are over 60, annual examinations are advised.",
  },
  {
    q: "Does my child need an eye test before starting school?",
    a: "Yes — we recommend all children have their first eye examination before starting school. Early detection of vision problems can make a significant difference to their learning and development.",
  },
  {
    q: "Are children's eye tests free on the NHS?",
    a: "Yes. Children under 16 (and full-time students under 19) are entitled to free NHS sight tests and, if needed, a voucher towards the cost of glasses.",
  },
  {
    q: "How long does an eye examination take?",
    a: "A standard eye examination takes approximately 20-30 minutes. Contact lens consultations and visual stress assessments may take longer — we'll let you know when booking.",
  },
  {
    q: "Do you accept NHS sight test vouchers?",
    a: "Yes, we accept NHS sight test vouchers and offer NHS-funded frames for eligible patients.",
  },
  {
    q: "What should I bring to my appointment?",
    a: "Please bring your current glasses (if you wear them), any existing prescription details, and your NHS voucher if you have one. If you're a new patient, your NHS number is helpful but not essential.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageBanner
        title="Frequently Asked Questions"
        subtitle="Everything you need to know before your visit."
      />

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group p-5 rounded-xl bg-warm border border-border open:bg-white open:border-charcoal/15 transition-all"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="heading-sm pr-4">{faq.q}</h3>
                  <svg
                    className="w-5 h-5 text-muted shrink-0 group-open:rotate-180 transition-transform"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M5 8l5 5 5-5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>
                <p className="mt-4 text-sm text-muted leading-relaxed border-t border-border pt-4">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-warm">
        <Container className="text-center max-w-xl mx-auto space-y-6">
          <h2 className="heading-lg">Still have questions?</h2>
          <p className="text-muted body-base">
            We&apos;re happy to help over the phone or email.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-cyan text-white text-sm font-medium rounded-lg hover:bg-cyan-dark transition-colors"
          >
            Get in Touch
          </a>
        </Container>
      </section>
    </>
  );
}
