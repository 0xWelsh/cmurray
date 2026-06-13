import Image from "next/image";
import { PageBanner } from "@/components/layout/page-banner";
import { Container } from "@/components/layout/container";

export default function ChildrensEyewearPage() {
  return (
    <>
      <PageBanner
        title="Children&apos;s Eyewear"
        subtitle="Durable, comfortable, and fun frames designed for little faces — with expert fitting from our children's eye care specialist."
      />

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-cyan/5">
              <Image
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80"
                alt="Child wearing glasses"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-5">
              <h2 className="heading-lg">
                Frames that keep up with them
              </h2>
              <p className="text-muted body-base">
                Children need frames that are tough enough for school, play,
                and everything in between. We stock a range of durable,
                flexible, and adjustable frames designed specifically for
                younger faces.
              </p>
              <ul className="space-y-3 pt-4">
                {[
                  "Durable, flexible frames that survive the school run",
                  "Adjustable nose pads for a perfect fit as they grow",
                  "NHS-funded frames available for children",
                  "Wide range of colours and styles they&apos;ll love",
                  "Impact-resistant lenses for active kids",
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

      <section className="py-16 md:py-20 bg-cyan-light">
        <Container className="text-center max-w-2xl mx-auto space-y-6">
          <h2 className="heading-lg">NHS-funded children&apos;s frames</h2>
          <p className="text-muted body-base">
            Children under 16 and full-time students under 19 are eligible
            for NHS-funded frames. We&apos;ll guide you through the process
            and help your child find frames they&apos;ll love to wear.
          </p>
          <a
            href="/book-online"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-cyan text-white text-sm font-medium rounded-lg hover:bg-cyan-dark transition-colors"
          >
            Book a fitting for your child
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </Container>
      </section>
    </>
  );
}
