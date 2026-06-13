import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[60vh] lg:min-h-[75vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-charcoal" />
      <Image
        src="/hero-design.webp"
        alt=""
        fill
        className="object-cover opacity-60 scale-105 hover:scale-100 transition-transform duration-[8s] ease-out"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/40 to-charcoal/70" />
      <div className="relative z-10 w-full max-w-[50rem] mx-auto px-6 text-center">
        <h1 className="animate-fade-up text-4xl md:text-5xl lg:text-6xl font-heading text-white leading-tight">
          C Murray Optician
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed animate-fade-up animation-delay-200">
          Independent Prescriber Optometrist · Antrim Road, Belfast · Est. 2006
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-400">
          <a
            href="/book-online"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cyan text-white text-sm font-medium rounded-lg hover:bg-cyan-dark transition-colors"
          >
            Book an Eye Exam
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="/eye-examinations"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-white/80 border border-white/20 rounded-lg hover:border-white/40 hover:text-white transition-all"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
