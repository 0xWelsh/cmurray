import Image from "next/image";
import { Container } from "@/components/layout/container";

const services = [
  {
    title: "Eye Examinations",
    description:
      "Comprehensive eye exams using the latest diagnostic technology. We take the time to get your prescription right.",
    href: "/eye-examinations",
    img: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80",
  },
  {
    title: "Designer Eyewear",
    description:
      "Curated frames from leading designers. Professional fitting advice for your face shape, colouring, and budget.",
    href: "/eyewear",
    img: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&q=80",
  },
  {
    title: "Contact Lenses",
    description:
      "Hundreds of lens types available. Trial fittings, aftercare, and direct-to-home delivery for your convenience.",
    href: "/contact-lenses",
    img: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&q=80",
  },
  {
    title: "Children&apos;s Eye Care",
    description:
      "Specialist paediatric eye care from an accredited children's vision practitioner. Gentle, thorough, and fun.",
    href: "/children-young-adults",
    img: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&q=80",
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-20 lg:py-24 bg-white">
      <Container>
        <div className="max-w-xl mb-14">
          <p className="label-accent mb-4">Our Services</p>
          <h2 className="heading-lg">
            Everything you need in one place
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.href}
              className="group relative bg-warm rounded-xl border border-border hover:border-charcoal/15 transition-all overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  width={600}
                  height={450}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="heading-sm mb-2">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-cyan group-hover:gap-2 transition-all">
                  Learn more
                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6h8M6 2l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
