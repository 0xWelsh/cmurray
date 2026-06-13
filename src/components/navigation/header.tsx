"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";
import { MobileNav } from "./mobile-nav";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  {
    label: "Eye Care",
    href: "/#services",
    children: [
      { label: "Eye Examinations", href: "/#services" },
      { label: "Children's Eye Care", href: "/#children" },
      { label: "Visual Stress", href: "/#services" },
      { label: "Contact Lenses", href: "/#services" },
    ],
  },
  {
    label: "Eyewear",
    href: "/#services",
    children: [
      { label: "Adults", href: "/#services" },
      { label: "Children", href: "/#services" },
    ],
  },
  { label: "Contact", href: "/#contact" },
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
              <span className="font-heading text-xl font-semibold text-charcoal tracking-tight">
                Murray<span className="text-cyan"> Optician</span>
              </span>
            </a>

            <nav className="hidden lg:flex items-center gap-1">
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
                      "px-3 py-2 text-sm font-medium rounded-md transition-colors",
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
                            className="block px-4 py-2 text-sm text-charcoal/80 hover:text-cyan hover:bg-warm transition-colors"
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
                className="ml-4 inline-flex items-center gap-2 px-5 py-2.5 bg-cyan text-white text-sm font-medium rounded-lg hover:bg-cyan-dark transition-colors"
              >
                Book Appointment
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M4 12L12 4M12 4H6M12 4V10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </nav>

            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 -mr-2 text-charcoal"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </Container>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
