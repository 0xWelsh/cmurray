import Image from "next/image";
import { PageBanner } from "@/components/layout/page-banner";
import { Container } from "@/components/layout/container";

const brands = [
  {
    name: "Lindberg",
    desc: "Danish minimalism. Handcrafted titanium frames that are nearly weightless.",
    img: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&q=80",
  },
  {
    name: "Oliver Peoples",
    desc: "LA-inspired vintage character with a contemporary edge.",
    img: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&q=80",
  },
  {
    name: "Tom Ford",
    desc: "Bold, sophisticated, unmistakable. Luxury eyewear with iconic styling.",
    img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80",
  },
  {
    name: "Ray-Ban",
    desc: "Timeless originals. The Aviator, Wayfarer, and Clubmaster — reimagined.",
    img: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&q=80",
  },
  {
    name: "Oakley",
    desc: "Performance-driven optics for sport and active lifestyles.",
    img: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&q=80",
  },
  {
    name: "Maui Jim",
    desc: "Polarised lens technology that makes colours come alive.",
    img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80",
  },
];

export default function DesignerBrandsPage() {
  return (
    <>
      <PageBanner
        title="Designer Brands"
        subtitle="We curate frames from the world's leading eyewear designers. New ranges and new brands arriving on a regular basis."
      />

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="group rounded-xl bg-warm border border-border overflow-hidden hover:border-charcoal/15 transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden bg-cyan/5">
                  <Image
                    src={brand.img}
                    alt={brand.name}
                    width={600}
                    height={450}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="heading-sm mb-1">{brand.name}</h3>
                  <p className="text-sm text-muted">{brand.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-cyan text-white">
        <Container className="text-center">
          <div className="max-w-xl mx-auto space-y-6">
            <h2 className="heading-lg text-white">
              Not sure which frames suit you?
            </h2>
            <p className="body-base text-white/70">
              Book a styling appointment with Gemma. She&apos;ll help you
              find frames that match your face shape, colouring, and style.
            </p>
            <a
              href="/book-online"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-cyan text-white text-sm font-medium rounded-lg hover:bg-cyan-dark transition-colors"
            >
              Book a Styling Appointment
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
