import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Skincare tips, treatment guides, and expert advice from the estheticians at Skin Reboot Spa Clinic in Cary, NC. Professional facials, waxing, LED therapy, and more.",
};

const articles = [
  {
    title: "Best Esthetician in Cary, NC: Why Clients Are Choosing Professional Facials Over DIY in 2026",
    category: "Professional Facials",
    image: "https://cdn.marblism.com/FR7J9bMxCbs.webp",
    href: "https://www.skinrebootbymayra.com/post/best-esthetician-in-cary-nc-why-clients-are-choosing-professional-facials-over-diy-in-2026",
  },
  {
    title: "Holiday Glow Emergency: 5 Steps to Get Party-Ready Skin with a Professional Facial in Cary, NC",
    category: "Holiday Skincare",
    image: "https://cdn.marblism.com/5-0cuaVqyAD.webp",
    href: "https://www.skinrebootbymayra.com/post/holiday-glow-emergency-5-steps-how-to-get-party-ready-skin-with-a-professional-facial-cary-nc-fres",
  },
  {
    title: "10 Things You Should Know About Winter Facial Treatments from an Esthetician in Cary, NC",
    category: "Winter Treatments",
    image: "https://cdn.marblism.com/ZUiMkxpWSMc.webp",
    href: "https://www.skinrebootbymayra.com/post/looking-for-an-esthetician-cary-nc-here-are-10-things-you-should-know-about-winter-facial-treatment",
  },
  {
    title: "Why Everyone in Cary Is Talking About LED Light Therapy Facials",
    category: "LED Therapy",
    image: "https://cdn.marblism.com/2nh6OyUyUBn.webp",
    href: "https://www.skinrebootbymayra.com/post/why-everyone-in-cary-is-talking-about-led-light-therapy-facials-and-you-should-too-1",
  },
  {
    title: "Esthetician Cary NC Secrets Revealed: What Skin Experts Want You to Know About Professional Treatments",
    category: "Expert Tips",
    image: "https://cdn.marblism.com/JNeG_hlkI88.webp",
    href: "https://www.skinrebootbymayra.com/post/esthetician-cary-nc-secrets-revealed-what-skin-experts-dont-want-you-to-know-about-professiona-1",
  },
  {
    title: "Why Everyone in Cary Is Talking About LED Light Therapy Facials (Part 2)",
    category: "LED Therapy",
    image: "https://cdn.marblism.com/2nh6OyUyUBn.webp",
    href: "https://www.skinrebootbymayra.com/post/why-everyone-in-cary-is-talking-about-led-light-therapy-facials-and-you-should-too",
  },
  {
    title: "Esthetician Cary NC Secrets: What You Should Know About Professional Skincare",
    category: "Professional Skincare",
    image: "https://cdn.marblism.com/JNeG_hlkI88.webp",
    href: "https://www.skinrebootbymayra.com/post/esthetician-cary-nc-secrets-revealed-what-skin-experts-don-39-t-want-you-to-know-about-professiona",
  },
  {
    title: "The Emotional Connection Behind Intentional Skincare Shopping in 2026",
    category: "Skincare Philosophy",
    image: "https://cdn.marblism.com/bWOmYRfB9zG.webp",
    href: "https://www.skinrebootbymayra.com/post/the-emotional-connection-behind-intentional-skincare-shopping-in-2026-how-skin-reboot-spa-clinic",
  },
  {
    title: "7 Mistakes You Are Making with Your Facial Routine and How to Fix Them",
    category: "Skincare Tips",
    image: "https://cdn.marblism.com/pD10hdJfOiQ.webp",
    href: "https://www.skinrebootbymayra.com/post/7-mistakes-you-are-making-with-your-facial-cary-nc-routine-and-how-to-fix-them",
  },
  {
    title: "Everything You Need to Know About Waxing at Skin Reboot: First Timers Welcome",
    category: "Waxing Guide",
    image: "https://cdn.marblism.com/HUz6OD2w3Sf.webp",
    href: "https://www.skinrebootbymayra.com/post/everything-you-need-to-know-about-waxing-at-skin-reboot-first-timers-welcome",
  },
  {
    title: "10 Things You Should Know Before Your First Visit to an Esthetician in Cary, NC",
    category: "First Visit",
    image: "https://cdn.marblism.com/dDnzJ7w81p6.webp",
    href: "https://www.skinrebootbymayra.com/post/looking-for-an-esthetician-in-cary-nc-here-are-10-things-you-should-know-before-your-first-visit",
  },
  {
    title: "The Cary Facial Lover's Guide to Winter Skin: Why Professional Treatments Beat DIY Every Time",
    category: "Winter Skincare",
    image: "https://cdn.marblism.com/wiP-nsgv6_h.webp",
    href: "https://www.skinrebootbymayra.com/post/the-cary-facial-lovers-guide-to-winter-skin-why-professional-treatments-beat-diy-every-time-1",
  },
  {
    title: "5 Signs You Need to Switch to a Professional Esthetician and How to Choose",
    category: "Esthetician Guide",
    image: "https://cdn.marblism.com/FR7J9bMxCbs.webp",
    href: "https://www.skinrebootbymayra.com/post/facial-cary-nc-5-signs-you-need-to-switch-to-a-professional-esthetician-and-how-to-choose",
  },
];

export default function JournalPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[350px] flex items-center">
        <div className="absolute inset-0">
          <Image src="/staff-5.png" alt="Skincare journal" fill className="object-cover" sizes="100vw" priority />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 container-premium text-center">
          <p className="overline !text-champagne-light mb-4">
            Skincare Knowledge
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl text-white">
            The Skin Reboot Journal
          </h1>
          <p className="text-lg text-white/70 mt-4 max-w-xl mx-auto">
            Expert skincare advice and treatment guides from our certified estheticians, trusted across the Triangle
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-background">
        <div className="container-premium">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <a
                key={article.title}
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group card-hover bg-white rounded-xl overflow-hidden"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-charcoal text-[11px] font-medium tracking-wider uppercase px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-heading)] text-lg leading-snug group-hover:text-sage-dark transition-colors">
                    {article.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-sage-dark group-hover:text-champagne transition-colors">
                    Read Article
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cream text-center">
        <div className="container-premium">
          <h2 className="font-[family-name:var(--font-heading)] mb-4">
            Ready to Start Your Skin Plan?
          </h2>
          <p className="text-warm-gray max-w-xl mx-auto mb-10">
            Our estheticians will create a personalized treatment plan based on your unique skin type, concerns, and goals.
          </p>
          <a
            href="https://mayrasalonga.glossgenius.com/services"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book Your Treatment
          </a>
        </div>
      </section>
    </>
  );
}
