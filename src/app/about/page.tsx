import { PageBanner } from "@/components/layout/page-banner";
import { Container } from "@/components/layout/container";
import Image from "next/image";

const lead = {
  name: "Dr. Alex Chen",
  role: "Principal Optometrist",
  qualifications:
    "BSc (Hons) · MCOptom · Dip Tp (IP) · Prof Cert in Paediatric Eye Care",
  description:
    "Dr. Chen is the lead optometrist at OWEN opticians, established in 2015. Alongside his commitment to the very highest standards in patient care, Dr. Chen has completed a Diploma in Independent Prescribing and achieved a Professional Certificate in Paediatric Eye Care. He has developed specific expertise in the management of visual stress using coloured filters.",
  img: "/carmel.webp",
};

const team = [
  {
    name: "Sarah Mitchell",
    role: "Practice Coordinator",
    description: `Sarah joined our practice in 2016. With previous experience in healthcare administration, Sarah has found a very rewarding home in the optical world.

The keen eye for detail which served her so well in healthcare is vital when it comes to the day to day operation of our practice.

Calm and reassuring by nature, she sees our regular patients more as friends than customers. Equally she enjoys introducing new clients to the practice. "Helping patients of all ages sort out their eyecare needs in a friendly and supportive way gives me a real buzz, every time."`,
  },
  {
    name: "Emma Roberts",
    role: "Optical Stylist",
    description: `Emma joined the practice in 2019. Having worked as an Optical Supervisor for many years, she is a natural when it comes to offering excellent patient care.

Emma is passionate about helping clients choose frames. She loves keeping up to date with the latest in eyewear fashion.

As she says herself: "Advising clients about frames has given me a real eye for what suits. Seeing a patient smile when they try on their new glasses for the first time is the best feeling every time."`,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="Our Practice &amp; Our Team"
        subtitle="Get to know the people who will care for your eyes — and the story behind OWEN opticians."
      />

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
              <p className="label-accent">Our Story</p>
              <h2 className="heading-lg">
                Caring for your eyes since 2015
              </h2>
              <div className="space-y-4 text-muted body-base">
                <p>
                  OWEN opticians was established in 2015
                  with a simple belief: that every patient deserves
                  personalised, unhurried eye care in a welcoming
                  environment.
                </p>
                <p>
                  Based in the heart of London, our practice is a bright
                  and spacious facility located on the ground floor — easily
                  accessible from public transport. On-street parking is available close to the
                  practice for your convenience.
                </p>
                <p>
                  Over the years we have grown from a solo practice into a
                  close-knit team, but our founding principle remains the
                  same: take the time to get it right.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-warm">
        <Container>
          <div className="max-w-xl mb-14">
            <p className="label-accent mb-4">Meet the Team</p>
            <h2 className="heading-lg">
              The people looking after you
            </h2>
          </div>

          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="aspect-square w-full max-w-sm mx-auto md:mx-0 rounded-full overflow-hidden bg-cyan/5 border-4 border-white shadow-lg">
                <Image
                  src={lead.img}
                  alt={lead.name}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="heading-md">{lead.name}</h3>
                  <p className="text-sm font-medium text-cyan mt-1">
                    {lead.role}
                  </p>
                </div>
                <p className="text-xs text-muted uppercase tracking-wider">
                  {lead.qualifications}
                </p>
                <p className="text-sm leading-relaxed text-muted">
                  {lead.description}
                </p>
              </div>
            </div>

            {team.map((member) => (
              <div key={member.name} className="max-w-3xl mx-auto">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-cyan-light flex items-center justify-center shrink-0">
                    <span className="font-heading text-xl text-cyan">
                      {member.name[0]}
                    </span>
                  </div>
                  <div>
                    <h3 className="heading-sm">{member.name}</h3>
                    <p className="text-sm font-medium text-cyan">
                      {member.role}
                    </p>
                  </div>
                </div>
                {member.description.split("\n\n").map((p, i) => (
                  <p key={i} className="text-sm leading-relaxed text-muted mb-4 last:mb-0">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="heading-lg">Visit us</h2>
            <p className="body-lg text-muted">
              123 High Street, London, EC1A 1BB
            </p>
            <p className="text-sm text-muted">
              City Centre · Easy access from public transport ·
              On-street parking available
            </p>
            <a
              href="https://www.google.com/maps/search/123+High+Street+London+EC1A+1BB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-cyan hover:text-cyan-dark transition-colors"
            >
              Open in Google Maps
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
