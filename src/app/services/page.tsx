import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our full range of premium skincare services: facials, body treatments, eye enhancements, waxing, and curated skincare products. Skin Reboot Spa Clinic, Cary, NC.",
};

const services = [
  {
    title: "Facials",
    subtitle: "12 Signature Treatments",
    description:
      "From our Signature Facial to the Luxury Astrodome experience, each treatment is customized to your skin type and goals. Corrective, holistic, and results-driven.",
    image: "/Nano-Infusion-Facial.png",
    href: "/facials",
    price: "From $150",
    highlights: [
      "Signature Facial",
      "Oxygen Therapy",
      "HydraGlow",
      "Microneedling",
      "Buccal Glow-up",
      "Luxury Astrodome",
    ],
  },
  {
    title: "Body Treatments",
    subtitle: "5 Specialized Treatments",
    description:
      "Targeted treatments designed to cleanse, exfoliate, and rejuvenate areas beyond the face. Professional care for your back, chest, underarms, and more.",
    image: "/Backcial.png",
    href: "/body-treatments",
    price: "From $110",
    highlights: [
      "Backcial",
      "Decolletage Facial",
      "Pitcial",
      "Vajacial",
      "The Levitation",
    ],
  },
  {
    title: "Eye Enhancements",
    subtitle: "5 Premium Services",
    description:
      "Professional lash lifts, brow lamination, precision tinting, and our signature Eye Perfecting Facial. Enhancement that looks natural and polished.",
    image: "/Lash-Lift-Perm.png",
    href: "/eye-enhancements",
    price: "From $25",
    highlights: [
      "Eye Perfecting Facial",
      "Lash Lift / Perm",
      "Brow Lamination",
      "Eyebrow Tinting",
      "Eyelash Tinting",
    ],
  },
  {
    title: "Waxing",
    subtitle: "Full Service Menu",
    description:
      "Quick, precise, and comfortable waxing with professional techniques. Full face to full body options with minimal discomfort and smooth, lasting results.",
    image: "/Eyelash-Tinting.png",
    href: "/waxing",
    price: "From $10",
    highlights: [
      "Full Face",
      "Brazilian",
      "Full Legs",
      "Full Arms",
      "Bikini",
      "Underarms",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/hero-3.png"
            alt="Premium skincare services at Skin Reboot"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-charcoal/60" />
        </div>
        <div className="relative z-10 container-premium text-center">
          <p className="overline !text-champagne-light mb-4">
            Professional Skincare
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl text-white">
            Our Services
          </h1>
          <p className="text-lg text-white/70 mt-4 max-w-xl mx-auto">
            Corrective and holistic treatments using internationally sourced
            products and advanced techniques
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-premium">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}
              >
                <Link
                  href={service.href}
                  className={`relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden group ${
                    index % 2 === 1 ? "lg:[direction:ltr]" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </Link>
                <div className={index % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                  <p className="overline mb-3">{service.subtitle}</p>
                  <h2 className="font-[family-name:var(--font-heading)] mb-2">
                    {service.title}
                  </h2>
                  <p className="text-lg font-[family-name:var(--font-heading)] text-champagne-dark mb-4">
                    {service.price}
                  </p>
                  <p className="text-warm-gray leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs font-medium tracking-wide px-3 py-1.5 rounded-full bg-sage/10 text-sage-dark"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Link href={service.href} className="btn-primary">
                      View Treatments
                    </Link>
                    <a
                      href="https://mayrasalonga.glossgenius.com/services"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Teaser */}
      <section className="section-padding bg-cream">
        <div className="container-premium text-center">
          <p className="overline mb-4">Curated Collection</p>
          <h2 className="font-[family-name:var(--font-heading)] mb-4">
            Professional Skincare Products
          </h2>
          <p className="text-warm-gray max-w-xl mx-auto mb-8">
            Extend your treatment results at home with our curated collection of
            professional skincare products from South Korea, France, Spain, and
            South Africa.
          </p>
          <Link href="/products" className="btn-primary">
            Shop Products
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <Image
            src="/room.png"
            alt="Treatment room"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="relative z-10 container-premium text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl text-white mb-6">
            Not Sure Which Treatment Is Right for You?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
            Our estheticians will help you find the perfect treatment based on
            your skin type, concerns, and goals.
          </p>
          <a
            href="https://mayrasalonga.glossgenius.com/services"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-champagne"
          >
            Book a Consultation
          </a>
        </div>
      </section>
    </>
  );
}
