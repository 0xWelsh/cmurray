"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";
import { MobileNav } from "./mobile-nav";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/eye-examinations",
    children: [
      { label: "Eye Examinations", href: "/eye-examinations" },
      { label: "Contact Lenses", href: "/contact-lenses" },
      { label: "Children & Young Adults", href: "/children-young-adults" },
      { label: "Visual Stress", href: "/visual-stress-assessment" },
    ],
  },
  {
    label: "Eye Wear",
    href: "/eyewear",
    children: [
      { label: "Eye Wear", href: "/eyewear" },
      { label: "Children's Eyewear", href: "/eyewear/children" },
    ],
  },
];

export function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-[0_1px_0_rgba(0,0,0,0.06)]">
        <Container>
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="/" className="flex items-center gap-2 shrink-0">
              <Image src="/logo.webp" alt="Murray Optician" width={180} height={73} className="h-10 md:h-12 w-auto" priority />
            </a>

            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() =>
                    link.children && setOpenDropdown(link.label)
                  }
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <a
                    href={link.href}
                    className={cn(
                      "px-3 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap",
                      "text-charcoal/80 hover:text-cyan hover:bg-warm"
                    )}
                  >
                    {link.label}
                    {link.children && (
                      <svg
                        className="inline-block ml-1 w-3 h-3"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M3 5l3 3 3-3"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </a>

                  {link.children && openDropdown === link.label && (
                    <div className="absolute top-full left-0 pt-2 min-w-[200px]">
                      <div className="bg-white rounded-lg shadow-lg border border-border py-2">
                        {link.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-charcoal/80 hover:text-cyan hover:bg-warm transition-colors whitespace-nowrap"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <a
                href="/book-online"
                className="ml-3 inline-flex items-center gap-2 px-5 py-2.5 bg-cyan text-white text-sm font-medium rounded-lg hover:bg-cyan-dark transition-colors"
              >
                Book Appointment
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </nav>

            <div className="flex lg:hidden items-center gap-3">
              <a
                href="/book-online"
                className="inline-flex items-center gap-2 px-4 py-2 bg-cyan text-white text-sm font-medium rounded-lg hover:bg-cyan-dark transition-colors"
              >
                Book
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <button
                onClick={() => setMobileOpen(true)}
                className="p-2 -mr-2 text-charcoal"
                aria-label="Open menu"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
