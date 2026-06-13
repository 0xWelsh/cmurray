import Image from "next/image";

const slides = [
  {
    image: "/images/pexels-gustavo-fring-5621864.jpg",
    theme: "Comprehensive Eye Examinations",
  },
  {
    image: "/images/pexels-karola-g-5202049.jpg",
    theme: "Designer Frames & Styling",
  },
  {
    image: "/images/pexels-jose-antonio-otegui-auzmendi-2150489988-32209715.jpg",
    theme: "Eye Care for the Whole Family",
  },
];

export function Hero() {
  return (
    <section className="relative min-h-[60vh] lg:min-h-[75vh] flex items-center overflow-hidden">
      <input type="radio" name="hero-slide" id="hero-s0" className="hidden" defaultChecked />
      <input type="radio" name="hero-slide" id="hero-s1" className="hidden" />
      <input type="radio" name="hero-slide" id="hero-s2" className="hidden" />

      {slides.map((slide, i) => (
        <div
          key={i}
          data-slide={i}
          className="hero-slide absolute inset-0 flex items-center"
        >
          <div className="absolute inset-0 bg-charcoal" />
          <Image src={slide.image} alt="" fill className="object-cover opacity-60" priority={i === 0} />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/40 to-charcoal/70" />
          <div className="relative z-10 w-full max-w-[50rem] mx-auto px-6 text-center">
            <p className="text-sm font-medium text-cyan/90 uppercase tracking-[0.15em] mb-4 animate-fade-up">
              {slide.theme}
            </p>
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
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, i) => (
          <label
            key={i}
            data-dot={i}
            htmlFor={`hero-s${i}`}
            className="block h-1.5 rounded-full bg-white/40 hover:bg-white/60 cursor-pointer transition-all duration-300"
          />
        ))}
      </div>
    </section>
  );
}
