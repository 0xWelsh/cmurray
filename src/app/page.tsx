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
