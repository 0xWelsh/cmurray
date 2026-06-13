import { Container } from "@/components/layout/container";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white/70">
      <Container className="py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <Image src="/logo.webp" alt="Murray Optician" width={140} height={57} className="h-10 w-auto brightness-0 invert" />
            <p className="text-sm leading-relaxed text-white/60 max-w-xs">
              Serving Antrim Road families since 2006. Personalised,
              outstanding eye care for the whole family.
            </p>
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} C Murray Optician
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-medium uppercase tracking-[0.08em] text-white/50">
              Contact
            </h4>
            <address className="text-sm leading-relaxed not-italic text-white/60">
              13 Antrim Road
              <br />
              Belfast, BT15 2BE
              <br />
              <a
                href="tel:+442890741122"
                className="hover:text-white transition-colors"
              >
                028 90 74 11 22
              </a>
              <br />
              <a
                href="mailto:info@cmurrayoptician.com"
                className="hover:text-white transition-colors"
              >
                info@cmurrayoptician.com
              </a>
            </address>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-medium uppercase tracking-[0.08em] text-white/50">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {[
                {
                  label: "Facebook",
                  href: "https://www.facebook.com/cmurrayoptician/",
                },
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/murrayopticiansbelfast/",
                },
                {
                  label: "Twitter",
                  href: "https://twitter.com/cmurrayopt?lang=en",
                },
                {
                  label: "YouTube",
                  href: "https://www.youtube.com/channel/UCmMblPuXTp90AhYMfEzX9eA/",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={social.label}
                >
                  <span className="text-xs font-medium text-white/70">
                    {social.label[0]}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <div className="border-t border-white/10 py-4">
        <Container>
          <p className="text-xs text-white/30 text-center">
            Independent Prescriber Optometrist &amp; Specialist in
            Children&apos;s Eye Care
          </p>
        </Container>
      </div>
    </footer>
  );
}
