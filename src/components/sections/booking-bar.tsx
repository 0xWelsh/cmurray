import { Container } from "@/components/layout/container";

export function BookingBar() {
  return (
    <section className="bg-cyan py-10">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-heading text-white font-semibold">
              Ready to book?
            </h2>
            <p className="text-white/80 text-sm mt-1">
              Call us or book online — we&apos;re here to help.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+442890741122"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-cyan text-sm font-medium rounded-lg hover:bg-white/90 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M14.5 11.5L11 10.5L9.5 12C7.5 11 5 8.5 4 6.5L5.5 5L4.5 1.5L2 1C1.5 5 3.5 9.5 7 13C10.5 16.5 15 14 15 14L14.5 11.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              028 90 74 11 22
            </a>
            <a
              href="/book-online"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 text-white text-sm font-medium rounded-lg border border-white/30 hover:bg-white/20 transition-colors"
            >
              Book Online
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
