import Image from "next/image";
import { PageBanner } from "@/components/layout/page-banner";
import { Container } from "@/components/layout/container";

export default function ChildrenYoungAdultsPage() {
  return (
    <>
      <PageBanner
        title="Children &amp; Young Adults"
        subtitle="Specialist paediatric eye care from an accredited children's vision practitioner."
      />

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-cyan/5">
              <Image
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80"
                alt="Child eye examination"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-5">
              <h2 className="heading-lg">
                Eye care designed for children
              </h2>
              <p className="text-muted body-base">
                Carmel holds a Professional Certificate in Paediatric Eye
                Care and has a special interest in seeing children. She
                knows how to make an eye exam feel like play, not a test —
                putting even the youngest patients at ease.
              </p>
              <p className="text-muted body-base">
                We recommend that all children have their first eye
                examination before starting school, and regularly
                thereafter. Many vision problems are easier to correct when
                detected early.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-cyan-light">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "School screening follow-ups",
                desc: "If your child's school screening flags a concern, we provide a thorough follow-up examination and clear guidance on next steps.",
              },
              {
                title: "Myopia management",
                desc: "We offer myopia management strategies to slow the progression of short-sightedness in children, reducing their risk of high myopia later in life.",
              },
              {
                title: "Visual stress assessment",
                desc: "Coloured filter assessments for children who experience discomfort when reading — often mistaken for dyslexia or concentration issues.",
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
            <h2 className="heading-lg">Book your child&apos;s eye exam</h2>
            <p className="text-muted body-base">
              Early detection makes all the difference. We recommend
              children have their first eye test by age 3-4.
            </p>
            <a
              href="/book-online"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-cyan text-white text-sm font-medium rounded-lg hover:bg-cyan-dark transition-colors"
            >
              Book a Children&apos;s Eye Exam
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
