import Image from "next/image";
import { PageBanner } from "@/components/layout/page-banner";
import { Container } from "@/components/layout/container";

export default function ContactLensesPage() {
  return (
    <>
      <PageBanner
        title="Contact Lenses"
        subtitle="Modern contact lens technology makes them more comfortable and easier to use than ever. Find the lens that fits your life."
      />

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-cyan/5">
              <Image
                src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80"
                alt="Contact lens fitting"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-5">
              <h2 className="heading-lg">
                Freedom and flexibility
              </h2>
              <p className="text-muted body-base">
                Whether you would like to wear lenses every day or just for
                sport or socialising, there is a lens to suit you. We will
                discuss your requirements and fit a lens according to what
                suits your lifestyle.
              </p>
              <p className="text-muted body-base">
                As contact lenses touch your eyes, the right shape, material
                and prescription are essential to ensure you see well and
                look great. That is why it&apos;s important to have a
                dedicated contact lens fitting appointment.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-warm">
        <Container>
          <div className="max-w-xl mb-14">
            <p className="label-accent mb-4">Top Reasons to Wear Lenses</p>
            <h2 className="heading-lg">Why choose contact lenses?</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Natural all-round vision whilst enhancing your appearance",
              "Simple and convenient — expand your lifestyle choices",
              "Great for sport and leisure activities",
              "Wear every day, part-time, or just for going out",
              "Vision can be as good or better than spectacles",
              "Safe, effective, and reversible",
              "Correct almost all conditions for all ages",
              "Adaptation is rapid and trouble-free",
              "Latest solutions provide excellent comfort and health",
              "Some conditions can only be corrected with lenses",
            ].map((reason, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 bg-white rounded-lg border border-border"
              >
                <span className="w-6 h-6 rounded-full bg-cyan/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-semibold text-cyan">{i + 1}</span>
                </span>
                <span className="text-sm text-charcoal/80">{reason}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="max-w-xl mb-10">
            <h2 className="heading-lg">Brands we stock</h2>
            <p className="text-muted body-base mt-4">
              We have access to all major contact lens brands and can offer
              trial fittings of the latest designs as soon as they are
              available. We can also deliver your contact lenses directly
              to you via post.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-cyan text-white">
        <Container className="text-center">
          <div className="max-w-xl mx-auto space-y-6">
            <h2 className="heading-lg text-white">
              Interested in contact lenses?
            </h2>
            <p className="body-base text-white/70">
              Book a contact lens consultation and we&apos;ll find the
              perfect fit for your eyes.
            </p>
            <a
              href="/book-online"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-cyan text-white text-sm font-medium rounded-lg hover:bg-cyan-dark transition-colors"
            >
              Book a consultation
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
