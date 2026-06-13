import Image from "next/image";
import { PageBanner } from "@/components/layout/page-banner";
import { Container } from "@/components/layout/container";

export default function SunglassesPage() {
  return (
    <>
      <PageBanner
        title="Sunglasses"
        subtitle="Protect your eyes in style. From classic aviators to modern polarised sports frames."
      />

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-cyan/5">
              <Image
                src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80"
                alt="Sunglasses collection"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-5">
              <h2 className="heading-lg">
                Style meets protection
              </h2>
              <p className="text-muted body-base">
                UV protection is essential for maintaining healthy eyes —
                and that doesn&apos;t mean sacrificing style. We stock
                sunglasses from all our leading designer brands, including
                prescription options.
              </p>
              <ul className="space-y-3 pt-4">
                {[
                  "100% UV protection across all frames",
                  "Prescription sunglasses available",
                  "Polarised lenses to reduce glare",
                  "Designer frames from Ray-Ban, Oakley, Tom Ford & more",
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
              <a
                href="/book-online"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan text-white text-sm font-medium rounded-lg hover:bg-cyan-dark transition-colors mt-4"
              >
                Browse in-store
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
