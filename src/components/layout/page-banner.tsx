import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";

type PageBannerProps = {
  title: string;
  subtitle?: string;
  img?: string;
};

export function PageBanner({ title, subtitle, img }: PageBannerProps) {
  return (
    <section className="pt-24 pb-12 md:pt-28 md:pb-16 bg-warm relative overflow-hidden">
      {img && (
        <div className="absolute inset-0">
          <Image
            src={img}
            alt=""
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-warm via-warm/90 to-transparent" />
        </div>
      )}
      <Container className="relative">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-cyan mb-6 transition-colors"
        >
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
            <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Home
        </Link>
        <h1 className="heading-xl">{title}</h1>
        {subtitle && (
          <p className="body-lg text-muted mt-4 max-w-2xl">{subtitle}</p>
        )}
      </Container>
    </section>
  );
}
