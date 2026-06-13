import { Container } from "@/components/layout/container";

const testimonials = [
  {
    quote:
      "I came here, I was seen on time, there was no waiting around, I got my glasses and Carmel said 'If you have any problems with them, drop in anytime.'",
    name: "Michael",
    age: 60,
    location: "Belfast",
  },
  {
    quote:
      "Convenient and reliable. I have been coming here for years with no regrets. Thank you for all your continued good service and care.",
    name: "Mr G Greene",
    source: "Google review",
  },
  {
    quote:
      "So helpful! Offering the latest trends. Always going out of their way in providing excellent service! Highly recommended.",
    name: "Jamie Isobel Campbell",
    source: "Google review",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-warm">
      <Container>
        <div className="max-w-xl mb-14">
          <p className="label-accent mb-4">Patient Stories</p>
          <h2 className="heading-lg">
            What our patients say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="relative p-6 bg-white rounded-xl border border-border"
            >
              <svg
                className="w-8 h-8 text-cyan/20 mb-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>
              <p className="text-sm leading-relaxed text-charcoal/80 mb-5">
                {t.quote}
              </p>
              <footer>
                <strong className="text-sm font-semibold text-cyan">
                  {t.name}
                </strong>
                {"age" in t && t.age ? (
                  <span className="text-sm text-muted">
                    , {t.age}, {t.location}
                  </span>
                ) : (
                  <span className="text-sm text-muted"> — {t.source}</span>
                )}
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.google.co.uk/search?q=C+Murray+Optician&ludocid=8877205590413695877"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-cyan hover:text-cyan-dark transition-colors"
          >
            Read more reviews on Google
            <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 6h8M6 2l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  );
}
