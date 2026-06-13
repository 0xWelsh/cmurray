import { PageBanner } from "@/components/layout/page-banner";
import { Container } from "@/components/layout/container";
import Image from "next/image";

const team = [
  {
    name: "Carmel Murray",
    role: "Principal Optometrist",
    qualifications:
      "BSc (Hons) · MCOptom · Dip Tp (IP) · Prof Cert in Paediatric Eye Care",
    description:
      "Carmel is the founding optometrist of Murray Opticians, established in 2006. Alongside her commitment to the very highest standards in patient care, Carmel has completed a Diploma in Independent Prescribing and achieved a Professional Certificate in Paediatric Eye Care. She has developed specific expertise in the management of visual stress using coloured filters.",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80",
  },
  {
    name: "Cathy",
    role: "Optical Receptionist",
    description:
      "Cathy joined the practice in 2014. With previous experience in finance, Cathy has found a very rewarding home in the optical world. The key eye for detail which served her so well in finance is vital when it comes to the day-to-day operation. Calm and reassuring by nature, she sees our regular patients more as friends than customers. 'Working in Murray Opticians is the ideal job for me — helping patients of all ages sort out their eyecare needs in a friendly and supportive way gives me a real buzz, every time.'",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=80",
  },
  {
    name: "Gemma",
    role: "Optical Stylist",
    description:
      "Gemma joined the practice in November 2019. Having worked in Specsavers as an Optical Supervisor for many years, she is a natural when it comes to offering excellent patient care. Gemma won a UK-wide 'Spectacle Wearer of the Year' competition so she is a dab hand when it comes to helping clients choose frames. 'Advising thousands of clients about frames has given me a real eye for what suits. Seeing a patient smile when they try on their new glasses for the first time is the best feeling, every time.'",
    img: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&q=80",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="Our Practice &amp; Our Team"
        subtitle="Get to know the people who will care for your eyes — and the story behind Murray Opticians."
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
                Caring for Belfast eyes since 2006
              </h2>
              <div className="space-y-4 text-muted body-base">
                <p>
                  Murray Opticians was established in 2006 by Carmel Murray
                  with a simple belief: that every patient deserves
                  personalised, unhurried eye care in a welcoming
                  environment.
                </p>
                <p>
                  Based on the lower Antrim Road, our practice is a bright
                  and spacious facility located on the ground floor — easily
                  accessible from the City Centre, West Link, and other main
                  routes. On-street parking is available close to the
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
            {team.map((member, i) => (
              <div
                key={member.name}
                className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                  i % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
              >
                <div
                  className={`aspect-[4/5] w-full rounded-2xl overflow-hidden bg-cyan/5 ${
                    i % 2 === 1 ? "md:col-start-2" : ""
                  }`}
                >
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={800}
                    height={1000}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="heading-md">{member.name}</h3>
                    <p className="text-sm font-medium text-cyan mt-1">
                      {member.role}
                    </p>
                  </div>
                  {"qualifications" in member && (
                    <p className="text-xs text-muted uppercase tracking-wider">
                      {member.qualifications}
                    </p>
                  )}
                  <p className="text-sm leading-relaxed text-muted">
                    {member.description}
                  </p>
                </div>
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
              13 Antrim Road, Belfast, BT15 2BE
            </p>
            <p className="text-sm text-muted">
              Near the Mater Hospital · Easy access from West Link ·
              On-street parking available
            </p>
            <a
              href="https://www.google.com/maps/search/13+Antrim+Road+Belfast+BT15+2BE"
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
