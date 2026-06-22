import Image from "next/image";
import { PageBanner } from "@/components/layout/page-banner";
import { Container } from "@/components/layout/container";

export default function VisualStressPage() {
  return (
    <>
      <PageBanner
        title="Visual Stress Assessment"
        subtitle="Struggling with reading? Words that blur, move, or cause headaches may be a sign of visual stress — and coloured filters can help."
      />

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-cyan/5">
              <Image
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80"
                alt="Visual examination"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-5">
              <h2 className="heading-lg">
                What is visual stress?
              </h2>
              <p className="text-muted body-base">
                Visual stress — also known as Meares-Irlen Syndrome — is a
                condition where the brain has difficulty processing certain
                visual patterns, particularly lines of text. It can affect
                reading fluency, concentration, and cause physical
                discomfort.
              </p>
              <p className="text-muted body-base">
                Common symptoms include words appearing to blur, move, or
                shimmer on the page, eye strain, headaches during or after
                reading, and avoiding reading altogether.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-warm">
        <Container>
          <div className="max-w-xl mb-14">
            <p className="label-accent mb-4">How We Help</p>
            <h2 className="heading-lg">Coloured filter assessment</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Assessment",
                desc: "We use precision tinted filters to determine the exact colour that reduces visual stress for your eyes. This is a painless, non-invasive process.",
              },
              {
                title: "Prescription",
                desc: "If coloured filters help, we prescribe them as precision-tinted lenses for reading glasses or as coloured overlays for school and work.",
              },
              {
                title: "Follow-up",
                desc: "We monitor the effectiveness of your prescribed filters and make adjustments as needed. Many patients report immediate improvement in reading comfort.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 bg-white rounded-xl border border-border"
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

      <section className="py-16 md:py-20 bg-white">
        <Container className="text-center">
          <div className="max-w-xl mx-auto space-y-6">
            <h2 className="heading-lg">
              Think you or your child might have visual stress?
            </h2>
            <p className="text-muted body-base">
              Dr. Chen has specific expertise in this area and can perform a
              thorough assessment. Many cases of reading difficulty are
              linked to visual stress — not a lack of effort.
            </p>
            <a
              href="/book-online"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-cyan text-white text-sm font-medium rounded-lg hover:bg-cyan-dark transition-colors"
            >
              Book a Visual Stress Assessment
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
