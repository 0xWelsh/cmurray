import { PageBanner } from "@/components/layout/page-banner";
import { Container } from "@/components/layout/container";

export default function SpecialistServicesPage() {
  return (
    <>
      <PageBanner
        title="Specialist Services"
        subtitle="As an Independent Prescriber Optometrist, we offer advanced clinical services beyond a standard eye examination."
      />

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Independent Prescribing",
                desc: "Our optometrist can assess, diagnose, and prescribe medication for a range of eye conditions directly — including infections, allergies, and dry eye — without a separate GP appointment.",
              },
              {
                title: "Children's Eye Care",
                desc: "Specialist paediatric eye care from an accredited practitioner. Our optometrist holds a Professional Certificate in Paediatric Eye Care and has extensive experience with children of all ages.",
              },
              {
                title: "Visual Stress Management",
                desc: "Precision tinted filter assessments for patients who experience discomfort when reading. Using coloured lenses to improve reading fluency and reduce eye strain.",
              },
              {
                title: "Contact Lens Aftercare",
                desc: "Ongoing support and aftercare for contact lens wearers, including routine check-ups, prescription updates, and management of any contact-lens related issues.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-warm border border-border"
              >
                <h3 className="heading-sm mb-3">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-cyan text-white">
        <Container className="text-center">
          <div className="max-w-xl mx-auto space-y-6">
            <h2 className="heading-lg text-white">
              See how we can help you
            </h2>
            <p className="body-base text-white/70">
              Whether you need a comprehensive eye exam, a second opinion, or
              specialist paediatric care — we&apos;re here.
            </p>
            <a
              href="/book-online"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-cyan text-white text-sm font-medium rounded-lg hover:bg-cyan-dark transition-colors"
            >
              Book an Appointment
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
