import Image from "next/image";
import { PageBanner } from "@/components/layout/page-banner";
import { Container } from "@/components/layout/container";

export default function EyeExaminationsPage() {
  return (
    <>
      <PageBanner
        title="Eye Examinations"
        subtitle="Comprehensive eye exams that go beyond a simple prescription check. We use the latest technology to assess your vision and eye health."
      />

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-cyan/5">
              <Image
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80"
                alt="Eye examination"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-5">
              <h2 className="heading-lg">
                Thorough. Personal. Unhurried.
              </h2>
              <p className="text-muted body-base">
                We believe an eye examination should be thorough and
                unrushed. We take the time to understand your visual needs,
                your lifestyle, and any concerns you may have.
              </p>
              <p className="text-muted body-base">
                Our advanced diagnostic equipment allows us to detect early
                signs of eye conditions such as glaucoma, macular
                degeneration, and cataracts — often before you notice any
                symptoms.
              </p>
              <ul className="space-y-3 pt-4">
                {[
                  "Digital retinal photography",
                  "Visual field analysis",
                  "Intraocular pressure measurement",
                  "Colour vision assessment",
                  "Binocular vision testing",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-charcoal/80"
                  >
                    <svg
                      className="w-5 h-5 text-cyan shrink-0 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-warm">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-5 order-2 lg:order-1">
              <h2 className="heading-lg">Independent Prescriber</h2>
              <p className="text-muted body-base">
                As an Independent Prescriber, Dr. Chen can assess, diagnose,
                and prescribe for a range of eye conditions directly — no
                need for a separate GP or hospital appointment for many
                common issues.
              </p>
              <p className="text-muted body-base">
                This means faster treatment, fewer referrals, and
                continuity of care with a clinician who already knows your
                eyes.
              </p>
            </div>
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-cyan/5 order-1 lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80"
                alt="Eye examination equipment"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <Container className="text-center">
          <div className="max-w-xl mx-auto space-y-6">
            <h2 className="heading-lg">Ready for your eye exam?</h2>
            <p className="text-muted body-base">
              Book online or give us a call. We&apos;ll find a time that
              suits you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/book-online"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-cyan text-white text-sm font-medium rounded-lg hover:bg-cyan-dark transition-colors"
              >
                Book Online
              </a>
              <a
                href="tel:+44112345678"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium text-charcoal/80 border border-border rounded-lg hover:border-charcoal/20 transition-all"
              >
                020 1234 5678
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
