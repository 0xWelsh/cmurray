import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/navigation/header";
import { Footer } from "@/components/sections/footer";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-heading-family",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body-family",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "C Murray Optician — Independent Prescriber Optometrist Belfast",
  description:
    "Personalised eye care for the whole family on the Antrim Road, Belfast. Independent Prescriber Optometrist & Specialist in Children's Eye Care since 2006.",
  openGraph: {
    title: "C Murray Optician — Belfast",
    description:
      "Independent Prescriber Optometrist & Specialist in Children's Eye Care.",
    url: "https://cmurrayoptician.com",
    siteName: "C Murray Optician",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${dmSans.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col">
        <div className="bg-charcoal text-white/70 text-xs py-2.5 hidden md:block">
          <div className="max-w-[75rem] mx-auto px-6 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <a href="tel:+442890741122" className="hover:text-white transition-colors flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
                  <path d="M14.5 11.5L11 10.5L9.5 12C7.5 11 5 8.5 4 6.5L5.5 5L4.5 1.5L2 1C1.5 5 3.5 9.5 7 13C10.5 16.5 15 14 15 14L14.5 11.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                028 90 74 11 22
              </a>
              <span className="text-white/20">|</span>
              <a href="mailto:info@cmurrayoptician.com" className="hover:text-white transition-colors flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
                  <path d="M2 4L8 9L14 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="2" y="3" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
                </svg>
                info@cmurrayoptician.com
              </a>
              <span className="text-white/20">|</span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1C5.5 1 2 2.5 2 6C2 9 5 12 8 15C11 12 14 9 14 6C14 2.5 10.5 1 8 1Z" stroke="currentColor" strokeWidth="1.3" />
                  <circle cx="8" cy="6" r="2" stroke="currentColor" strokeWidth="1.3" />
                </svg>
                Antrim Road, Belfast
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
                <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M9.5 3.5H11V1.5C10.3 1.4 9.5 1.3 8.5 1.3C6 1.3 4.5 2.7 4.5 5.5V7H2.5V9.5H4.5V15H7V9.5H9L9.5 7H7V5.8C7 4.8 7.3 3.5 9.5 3.5Z" />
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
                <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
                  <rect x="1.5" y="1.5" width="13" height="13" rx="3.5" stroke="currentColor" strokeWidth="1.3" />
                  <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.3" />
                  <circle cx="12" cy="4" r="0.8" fill="currentColor" />
                </svg>
              </a>
              <span className="text-white/20">|</span>
              <a href="/book-online" className="text-cyan hover:text-cyan-dark transition-colors font-medium">
                Book Online →
              </a>
            </div>
          </div>
        </div>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
