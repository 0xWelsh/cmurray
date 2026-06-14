import { Hero } from "@/components/sections/hero";
import { PatientSplit } from "@/components/sections/patient-split";
import { BookingBar } from "@/components/sections/booking-bar";
import { TrustSection } from "@/components/sections/trust";
import { Services } from "@/components/sections/services";
import { ChildrenSpotlight } from "@/components/sections/children-spotlight";
import { Team } from "@/components/sections/team";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { ScrollReveal } from "@/components/layout/scroll-reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="relative -mt-10 z-20 pb-6 md:pb-10">
        <div className="mx-auto w-full max-w-[75rem] px-6 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <a href="/eye-examinations" className="flex items-center gap-3 bg-white rounded-xl border border-border hover:border-cyan/30 shadow-sm hover:shadow-md transition-all px-4 py-3.5 md:px-5 md:py-4">
              <div className="w-10 h-10 shrink-0 rounded-lg bg-cyan-light/60 flex items-center justify-center text-cyan">
                <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
                  <path d="M24 14c-7 0-13 4.5-16 10 3 5.5 9 10 16 10s13-4.5 16-10c-3-5.5-9-10-16-10z" stroke="currentColor" strokeWidth="2" />
                  <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <span className="text-sm md:text-base font-medium text-charcoal leading-tight">Eye Examinations</span>
            </a>
            <a href="/eyewear" className="flex items-center gap-3 bg-white rounded-xl border border-border hover:border-cyan/30 shadow-sm hover:shadow-md transition-all px-4 py-3.5 md:px-5 md:py-4">
              <div className="w-10 h-10 shrink-0 rounded-lg bg-cyan-light/60 flex items-center justify-center text-cyan">
                <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
                  <ellipse cx="15" cy="26" rx="10" ry="7" stroke="currentColor" strokeWidth="2" />
                  <ellipse cx="33" cy="26" rx="10" ry="7" stroke="currentColor" strokeWidth="2" />
                  <path d="M25 17l4 5M23 17l-4 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M5 26c0-4 2-7 4-9M43 26c0-4-2-7-4-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-sm md:text-base font-medium text-charcoal leading-tight">Eyewear</span>
            </a>
            <a href="/contact-lenses" className="flex items-center gap-3 bg-white rounded-xl border border-border hover:border-cyan/30 shadow-sm hover:shadow-md transition-all px-4 py-3.5 md:px-5 md:py-4">
              <div className="w-10 h-10 shrink-0 rounded-lg bg-cyan-light/60 flex items-center justify-center text-cyan">
                <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
                  <circle cx="18" cy="24" r="11" stroke="currentColor" strokeWidth="2" />
                  <circle cx="30" cy="24" r="11" stroke="currentColor" strokeWidth="2" />
                  <circle cx="18" cy="24" r="3.5" fill="currentColor" fillOpacity="0.15" />
                  <circle cx="30" cy="24" r="3.5" fill="currentColor" fillOpacity="0.15" />
                </svg>
              </div>
              <span className="text-sm md:text-base font-medium text-charcoal leading-tight">Contact Sales</span>
            </a>
            <a href="/children-young-adults" className="flex items-center gap-3 bg-white rounded-xl border border-border hover:border-cyan/30 shadow-sm hover:shadow-md transition-all px-4 py-3.5 md:px-5 md:py-4">
              <div className="w-10 h-10 shrink-0 rounded-lg bg-cyan-light/60 flex items-center justify-center text-cyan">
                <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
                  <circle cx="24" cy="17" r="6" stroke="currentColor" strokeWidth="2" />
                  <path d="M14 37c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 42h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-sm md:text-base font-medium text-charcoal leading-tight">Child Eye Care</span>
            </a>
          </div>
        </div>
      </section>
      <ScrollReveal><PatientSplit /></ScrollReveal>
      <ScrollReveal><BookingBar /></ScrollReveal>
      <ScrollReveal><TrustSection /></ScrollReveal>
      <ScrollReveal><Services /></ScrollReveal>
      <ScrollReveal><ChildrenSpotlight /></ScrollReveal>
      <ScrollReveal><Team /></ScrollReveal>
      <ScrollReveal><Testimonials /></ScrollReveal>
      <ScrollReveal><Contact /></ScrollReveal>
      <ScrollReveal><BookingBar /></ScrollReveal>
    </>
  );
}
