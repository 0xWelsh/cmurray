import Image from "next/image";
import { Container } from "@/components/layout/container";

const lead = {
  name: "Dr. Alex Chen",
  role: "Principal Optometrist",
  qualification: "BSc (Hons) · MCOptom · Dip Tp (IP)",
  description:
    "Dr. Chen has developed specific expertise in children's vision and the management of visual stress using coloured filters. He is committed to providing personalised, thorough eye care for every patient who walks through the door.",
  img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&q=80",
};

const team = [
  {
    name: "Sarah Mitchell",
    role: "Practice Coordinator",
    description:
      "With a background in healthcare administration, Sarah brings warmth and efficiency to every patient interaction. Calm and reassuring, she sees patients as friends.",
  },
  {
    name: "Emma Roberts",
    role: "Optical Stylist",
    description:
      "Emma has a passion for eyewear fashion and loves helping clients find frames that suit their face, lifestyle, and budget. She stays up to date with the latest trends and styles.",
  },
];

export function Team() {
  return (
    <section id="about" className="py-16 md:py-20 lg:py-24 bg-warm">
      <Container>
        <div className="max-w-xl mb-14">
          <p className="label-accent mb-4">Our Team</p>
          <h2 className="heading-lg">
            Meet the people behind your eye care
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="aspect-square w-full max-w-sm mx-auto md:mx-0 rounded-full overflow-hidden bg-white border-4 border-white shadow-lg">
              <Image
                src={lead.img}
                alt={lead.name}
                width={500}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-3 flex flex-col justify-center">
            <p className="label-accent mb-3">{lead.role}</p>
            <h3 className="heading-md mb-3">{lead.name}</h3>
            <p className="text-xs text-muted uppercase tracking-wider mb-4">
              {lead.qualification}
            </p>
            <p className="text-sm md:text-base leading-relaxed text-muted max-w-xl">
              {lead.description}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member) => (
            <div key={member.name} className="flex items-start gap-5">
              <div className="w-11 h-11 rounded-full bg-cyan-light flex items-center justify-center shrink-0 mt-1">
                <span className="font-heading text-lg text-cyan">
                  {member.name[0]}
                </span>
              </div>
              <div>
                <h3 className="heading-sm mb-0.5">{member.name}</h3>
                <p className="text-sm font-medium text-cyan mb-2">
                  {member.role}
                </p>
                <p className="text-sm leading-relaxed text-muted">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
