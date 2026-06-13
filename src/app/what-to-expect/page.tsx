import Image from "next/image";
import { PageBanner } from "@/components/layout/page-banner";
import { Container } from "@/components/layout/container";

export default function WhatToExpectPage() {
  return (
    <>
      <PageBanner
        title="What to Expect"
        subtitle="Your first visit to Murray Opticians — a complete guide so you know exactly what happens."
      />

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-cyan/5">
              <Image
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80"
                alt="Practice interior"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-5">
              <h2 className="heading-lg">
                Relaxed, thorough, professional
              </h2>
              <p className="text-muted body-base">
                We know that visiting a new optician can feel unfamiliar.
                Here&apos;s what happens during a typical appointment so
                you know exactly what to expect.
              </p>
            </div>
          </div>

          <div className="space-y-12 max-w-3xl mx-auto">
            {[
              {
                step: "01",
                title: "Arrival & registration",
                desc: "When you arrive, Cathy will greet you and check your details. If you're a new patient, we'll ask for some basic information — nothing complicated.",
              },
              {
                step: "02",
                title: "Pre-exam screening",
                desc: "We'll perform a few quick initial tests including a puff of air (eye pressure check) and a retinal photograph. These help us build a baseline picture of your eye health.",
              },
              {
                step: "03",
                title: "The eye examination",
                desc: "Carmel will examine your eyes thoroughly — checking your prescription, eye health, and looking for early signs of any conditions. You'll look at letters, lights, and through various lenses. There are no tricks, just careful assessment.",
              },
              {
                step: "04",
                title: "Discussion & recommendations",
                desc: "Carmel will explain the results and recommend the best options for your vision — whether that's glasses, contact lenses, or simply reassurance that everything looks healthy.",
              },
              {
                step: "05",
                title: "Choosing your frames",
                desc: "If you need glasses, Gemma will help you choose frames that suit your face shape, lifestyle, and budget. No pressure, just honest advice.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <span className="text-3xl font-heading text-cyan/30 leading-none shrink-0 w-12">
                  {item.step}
                </span>
                <div>
                  <h3 className="heading-sm mb-2">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-cyan text-white">
        <Container className="text-center max-w-xl mx-auto space-y-6">
          <h2 className="heading-lg text-white">Ready to book?</h2>
          <p className="body-base text-white/70">We look forward to welcoming you.</p>
          <a href="/book-online" className="inline-flex items-center gap-2 px-7 py-3.5 bg-cyan text-white text-sm font-medium rounded-lg hover:bg-cyan-dark transition-colors">
            Book Your Visit
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </Container>
      </section>
    </>
  );
}
