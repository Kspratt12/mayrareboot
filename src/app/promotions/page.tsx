import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Promotions & Gift Cards",
  description:
    "Value packages and gift cards at Skin Reboot Spa Clinic. Save up to 20% with our treatment packages. Gift cards available online and in-store.",
};

export default function PromotionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/front-office-full.png"
            alt="Skin Reboot Spa Clinic"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-charcoal/60" />
        </div>
        <div className="relative z-10 container-premium text-center">
          <p className="overline !text-champagne-light mb-4">
            Save on Your Skincare
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl text-white">
            Packages & Gift Cards
          </h1>
        </div>
      </section>

      {/* Value Packages */}
      <section className="section-padding bg-background">
        <div className="container-premium">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="overline mb-4">Invest in Your Skin</p>
              <h2 className="font-[family-name:var(--font-heading)]">
                Value Packages
              </h2>
              <p className="text-warm-gray mt-4 max-w-xl mx-auto">
                The more you invest in your skincare journey, the more you save.
                Packages are designed for clients who want consistent, ongoing
                care.
              </p>
              <div className="divider-sage mx-auto mt-6" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { amount: "$1,000", discount: "10%", savings: "Save $100" },
                { amount: "$2,000", discount: "15%", savings: "Save $300", featured: true },
                { amount: "$3,000", discount: "20%", savings: "Save $600" },
              ].map((pkg) => (
                <div
                  key={pkg.amount}
                  className={`rounded-xl p-8 text-center card-hover ${
                    pkg.featured
                      ? "bg-charcoal text-white ring-2 ring-champagne"
                      : "bg-white"
                  }`}
                >
                  {pkg.featured && (
                    <span className="text-[11px] font-medium tracking-wider uppercase text-champagne mb-4 block">
                      Most Popular
                    </span>
                  )}
                  <p className={`text-4xl font-[family-name:var(--font-heading)] font-semibold mb-2 ${
                    pkg.featured ? "text-white" : "text-charcoal"
                  }`}>
                    {pkg.amount}
                  </p>
                  <p className={`text-5xl font-[family-name:var(--font-heading)] font-bold mb-2 ${
                    pkg.featured ? "text-champagne" : "text-sage-dark"
                  }`}>
                    {pkg.discount}
                    <span className="text-lg"> off</span>
                  </p>
                  <p className={`text-sm mb-6 ${
                    pkg.featured ? "text-white/60" : "text-warm-gray"
                  }`}>
                    {pkg.savings}
                  </p>
                  <a
                    href="https://mayrasalonga.glossgenius.com/services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={pkg.featured ? "btn-champagne w-full text-center" : "btn-primary w-full text-center"}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="mt-12 bg-cream rounded-xl p-8">
              <h3 className="font-[family-name:var(--font-heading)] text-xl text-center mb-6">
                Package Benefits
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Applicable to any treatments",
                  "Valid for 1 year from purchase",
                  "Can be shared with family and friends",
                  "Can be used as a gift certificate",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-sage-dark shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-warm-gray">{benefit}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-warm-gray-light text-center mt-6">
                See our <Link href="/policies" className="text-sage-dark hover:underline">policies page</Link> for complete details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gift Cards */}
      <section className="section-padding bg-cream">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <div>
              <p className="overline mb-4">The Perfect Gift</p>
              <h2 className="font-[family-name:var(--font-heading)] mb-6">
                Gift Cards
              </h2>
              <p className="text-warm-gray leading-relaxed mb-4">
                Choose your amount, choose your treatment. Our online and elegant
                physical gift cards make the perfect gift for anyone who
                appreciates professional skincare. Available for facials, waxing,
                body treatments, and more.
              </p>
              <p className="text-warm-gray leading-relaxed mb-8">
                Gift cards are available in any amount and can be redeemed for any
                service or product at Skin Reboot Spa Clinic.
              </p>
              <a
                href="https://mayrasalonga.glossgenius.com/services"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-champagne"
              >
                Purchase a Gift Card
              </a>
            </div>
            <div className="relative h-[350px] rounded-2xl overflow-hidden">
              <Image
                src="/front-desk.png"
                alt="Gift cards at Skin Reboot"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
