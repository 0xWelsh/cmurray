import Image from "next/image";
import { Container } from "@/components/layout/container";

const services = [
  {
    title: "Eye Examinations",
    description:
      "Comprehensive eye exams using the latest diagnostic technology. We take the time to get your prescription right.",
    href: "/eye-examinations",
    icon: "https://i0.wp.com/cmurrayoptician.com/wp-content/uploads/2020/03/eye-exam.png?fit=300%2C300&ssl=1",
  },
  {
    title: "Designer Eyewear",
    description:
      "Curated frames from leading designers. Professional fitting advice for your face shape, colouring, and budget.",
    href: "/eyewear",
    icon: "https://i0.wp.com/cmurrayoptician.com/wp-content/uploads/2020/03/glasses.png?fit=512%2C512&ssl=1",
  },
  {
    title: "Contact Lenses",
    description:
      "Hundreds of lens types available. Trial fittings, aftercare, and direct-to-home delivery for your convenience.",
    href: "/contact-lenses",
    icon: "https://i0.wp.com/cmurrayoptician.com/wp-content/uploads/2020/03/eye.png?fit=512%2C512&ssl=1",
  },
  {
    title: "Children&apos;s Eye Care",
    description:
      "Specialist paediatric eye care from an accredited children's vision practitioner. Gentle, thorough, and fun.",
    href: "/children-young-adults",
    icon: "https://i0.wp.com/cmurrayoptician.com/wp-content/uploads/2020/03/children.png?fit=512%2C512&ssl=1",
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
              className="group p-6 bg-warm rounded-xl border border-border hover:border-cyan/30 hover:shadow-sm transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-white border border-border flex items-center justify-center mb-5 group-hover:border-cyan/20 transition-colors">
                <Image
                  src={service.icon}
                  alt=""
                  width={36}
                  height={36}
                  className="w-8 h-8 object-contain"
                />
              </div>
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
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
