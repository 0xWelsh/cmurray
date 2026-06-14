import Image from "next/image";
import { PageBanner } from "@/components/layout/page-banner";
import { Container } from "@/components/layout/container";

const brands = [
  { name: "Moleskine", logo: "/images/eyewear_logo/moleskine-vector-logo-e1585780442341.webp" },
  { name: "Guess", logo: "/images/eyewear_logo/guess.webp" },
  { name: "Jasper Conran", logo: "/images/eyewear_logo/jasper_conran.webp" },
  { name: "ProDesign", logo: "/images/eyewear_logo/prodesign.webp" },
  { name: "Charles Stone", logo: "/images/eyewear_logo/charles_stone.webp" },
  { name: "Woow", logo: "/images/eyewear_logo/woow.webp" },
];

export default function EyewearPage() {
  return (
    <>
      <PageBanner
        title="Eye Wear"
        subtitle="Discover frames that suit your style, your face, and your budget. From leading designers to everyday essentials."
      />

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-cyan/5">
              <Image
                src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&q=80"
                alt="Designer eyewear"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-5">
              <h2 className="heading-lg">
                Frames for every occasion
              </h2>
              <p className="text-muted body-base">
                A pair for the office? Something for the weekend? Sports
                vision for the courts? Or a new pair of shades? We can
                advise on eye wear for all occasions.
              </p>
              <p className="text-muted body-base">
                Our team pride themselves on offering a professional,
                personalised fitting and expert advice on our range of
                frames to suit your face shape, colouring and budget.
              </p>
              <a
                href="/book-online"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan text-white text-sm font-medium rounded-lg hover:bg-cyan-dark transition-colors mt-4"
              >
                Book a styling appointment
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-warm">
        <Container>
          <div className="max-w-xl mb-14">
            <p className="label-accent mb-4">Designer Brands</p>
            <h2 className="heading-lg">Brands we stock</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="p-5 bg-white rounded-xl border border-border flex items-center justify-center min-h-[80px]"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={100}
                  height={50}
                  className="object-contain h-10 w-auto"
                />
              </div>
            ))}
          </div>
          <p className="text-sm text-muted mt-8 text-center">
            With new ranges and new brands arriving on a regular basis.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="/eyewear/children"
              className="p-8 rounded-xl bg-cyan-light border border-cyan/20 hover:border-cyan/40 transition-colors group"
            >
              <h3 className="heading-md mb-3">Children&apos;s Eyewear</h3>
              <p className="text-sm text-muted mb-4">
                Durable, stylish frames designed for little faces. NHS-funded options available.
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-cyan group-hover:gap-2 transition-all">
                Browse children&apos;s range
                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
            <a
              href="/designer-brands"
              className="p-8 rounded-xl bg-cyan/5 border border-cyan/10 hover:border-cyan/20 transition-colors group"
            >
              <h3 className="heading-md mb-3">Designer Collections</h3>
              <p className="text-sm text-muted mb-4">
                Premium frames from the world&apos;s leading eyewear designers.
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-cyan group-hover:gap-2 transition-all">
                View designer brands
                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
