import Image from "next/image";
import { PageBanner } from "@/components/layout/page-banner";
import { Container } from "@/components/layout/container";

const posts = [
  {
    title: "Why children need their first eye test before starting school",
    excerpt:
      "Many parents don't realise that vision problems can affect a child's ability to learn, read, and socialise. Here's why early detection matters.",
    date: "March 2025",
    category: "Children's Eye Care",
  },
  {
    title: "Understanding visual stress: symptoms, diagnosis, and treatment",
    excerpt:
      "If reading gives you a headache or words seem to move on the page, you may have visual stress. Learn how coloured filters can help.",
    date: "January 2025",
    category: "Visual Stress",
  },
  {
    title: "Spring eyewear trends: what's new in frames for 2025",
    excerpt:
      "From transparent acetates to bold geometric shapes, here are the frame trends our team is recommending this season.",
    date: "February 2025",
    category: "Eyewear",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageBanner
        title="News &amp; Insights"
        subtitle="Eye health advice, practice news, and frame styling tips from the team at OWEN opticians."
      />

      <section className="py-16 md:py-20 bg-white">
        <Container>
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.title}
                  className="group rounded-xl bg-warm border border-border overflow-hidden hover:border-charcoal/15 transition-all"
                >
                  <div className="aspect-[16/9] bg-gradient-to-br from-cyan/10 to-cyan/5 flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-cyan/30"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M4 4h16v16H4V4z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M8 12l2 2 4-4 3 3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium text-cyan uppercase tracking-wider">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted">{post.date}</span>
                    </div>
                    <h3 className="heading-sm mb-2 group-hover:text-cyan-dark transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted body-lg">Coming soon.</p>
              <p className="text-sm text-muted mt-2">
                We&apos;re working on our first articles. Check back soon for
                eye care advice and practice updates.
              </p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
