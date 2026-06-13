"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Eye Care", href: "/#services" },
  { label: "Eyewear", href: "/#services" },
  { label: "Contact Lenses", href: "/#services" },
  { label: "Contact", href: "/#contact" },
];

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ open, onClose }: MobileNavProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      ref={overlayRef}
      className={cn(
        "fixed inset-0 z-50 lg:hidden transition-opacity duration-300",
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
    >
      <div
        className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className={cn(
          "absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white",
          "transform transition-transform duration-300 ease-in-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-border">
          <Image src="/logo.webp" alt="Murray Optician" width={120} height={49} className="h-8 w-auto" />
          <button
            onClick={onClose}
            className="p-2 -mr-2 text-charcoal"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <nav className="px-6 py-8">
          <ul className="space-y-1">
            {navLinks.map((link, i) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={onClose}
                  className="block px-4 py-3 text-lg font-medium text-charcoal/80 hover:text-cyan hover:bg-warm rounded-lg transition-colors"
                  style={{
                    animation: open
                      ? `fadeSlideIn 300ms ease-out ${i * 60}ms both`
                      : undefined,
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 pt-8 border-t border-border">
            <a
              href="/#book"
              onClick={onClose}
              className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-cyan text-white text-sm font-medium rounded-lg hover:bg-cyan-dark transition-colors"
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
          </div>
        </nav>
      </div>

      <style jsx>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateX(12px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
