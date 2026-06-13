import { Container } from "@/components/layout/container";

export function PatientSplit() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <p className="label-accent mb-4">Book an Appointment</p>
          <h2 className="heading-lg mb-4">
            Have you been tested with us before?
          </h2>
          <p className="text-muted leading-relaxed mb-8 max-w-lg mx-auto">
            It is easy to book an appointment online in a few quick and easy
            steps. Click the button below which lets us know if you have visited
            us before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book-online?type=new"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cyan text-white text-sm font-medium rounded-lg hover:bg-cyan-dark transition-colors"
            >
              New Patient
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="/book-online?type=existing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-charcoal/80 border-2 border-charcoal/20 rounded-lg hover:border-cyan hover:text-cyan transition-all"
            >
              Existing Patient
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
