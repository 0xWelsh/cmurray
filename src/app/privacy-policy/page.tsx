import { PageBanner } from "@/components/layout/page-banner";
import { Container } from "@/components/layout/container";

export default function PrivacyPage() {
  return (
    <>
      <PageBanner
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information."
      />

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto prose prose-sm text-muted space-y-8">
            <p className="body-base">
              OWEN opticians is committed to protecting your privacy. This
              policy explains how we collect, use, and safeguard your personal
              information when you visit our practice or use our website.
            </p>

            <div>
              <h3 className="heading-sm mb-3">Information we collect</h3>
              <p className="text-sm leading-relaxed">
                We may collect personal information including your name, address,
                date of birth, contact details, medical history, and NHS number.
                This information is necessary to provide you with appropriate eye
                care services.
              </p>
            </div>

            <div>
              <h3 className="heading-sm mb-3">How we use your information</h3>
              <p className="text-sm leading-relaxed">
                Your information is used solely for the purpose of providing
                optometry services, including maintaining your clinical records,
                processing NHS sight test claims, and communicating with you
                about appointments and follow-up care.
              </p>
            </div>

            <div>
              <h3 className="heading-sm mb-3">Data storage and security</h3>
              <p className="text-sm leading-relaxed">
                We store your records securely and in compliance with UK data
                protection law (UK GDPR and Data Protection Act 2018). Your
                information is retained for the period required by our
                professional regulator and then securely destroyed.
              </p>
            </div>

            <div>
              <h3 className="heading-sm mb-3">Your rights</h3>
              <p className="text-sm leading-relaxed">
                You have the right to access your personal data, request
                corrections, and ask us to delete your information (subject to
                legal retention requirements). To exercise these rights, please
                contact us in writing.
              </p>
            </div>

            <div>
              <h3 className="heading-sm mb-3">Contact</h3>
              <p className="text-sm leading-relaxed">
                For any questions about this policy or how we handle your data,
                please contact us at{" "}
                <a href="mailto:hello@owenopticians.com" className="text-cyan hover:underline">
                  hello@owenopticians.com
                </a>{" "}
                or call 020 1234 5678.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
