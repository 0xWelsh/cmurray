import Image from "next/image";
import { Container } from "@/components/layout/container";

export function ChildrenSpotlight() {
  return (
    <section id="children" className="py-16 md:py-20 lg:py-24 bg-cyan-light">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-cyan/5">
              <Image
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80"
                alt="Child eye examination"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <p className="label-accent">Specialist Children&apos;s Eye Care</p>
            <h2 className="heading-lg">
              Little eyes deserve
              <br />
              the same care as yours
            </h2>
            <p className="body-lg text-muted">
              Dr. Chen holds a Professional Certificate in Paediatric Eye Care
              and has a special interest in seeing children. He knows how to
              make an eye exam feel like play, not a test.
            </p>
            <ul className="space-y-3">
              {[
                "School vision screening follow-ups",
                "Myopia management for short-sighted children",
                "Coloured filter assessments for visual stress",
                "NHS-funded children's frames",
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
                    <path
                      d="M7 10l2 2 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="/children-young-adults"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan text-white text-sm font-medium rounded-lg hover:bg-cyan-dark transition-colors mt-4"
            >
              Book a Child&apos;s Eye Exam
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path
                  d="M4 12L12 4M12 4H6M12 4V10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
