import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Body Treatments",
  description:
    "Professional body treatments in Cary, NC. Backcial, decolletage facial, pitcial, vajacial, and holistic foot therapy. Book your treatment at Skin Reboot Spa Clinic.",
};

const treatments = [
  {
    name: "Backcial",
    duration: "60 Min",
    price: "$150",
    image: "/Backcial.png",
    description:
      "A specialized back facial designed to cleanse, exfoliate, and rejuvenate the skin on your back. Begins with deep-cleansing exfoliation, followed by a therapeutic back mask, and finishes with a soothing neck, back, and shoulder massage. Perfect care for a commonly neglected area.",
    includes: ["Cleansing", "Exfoliation", "Hand & arm massage"],
    addons: true,
  },
  {
    name: "Decolletage Facial",
    duration: "45 Min",
    price: "$140",
    image: "/Decolletage-Facial.png",
    description:
      "A chest rejuvenation treatment designed to exfoliate, refresh, and revitalize the skin on your decolletage. Removes dead skin cells, promotes a smoother and more youthful complexion, and reveals radiant, healthy skin.",
    includes: ["Cleansing", "Exfoliation", "Head & decollete massage"],
    addons: true,
  },
  {
    name: "Pitcial",
    duration: "60 Min",
    price: "$110",
    image: "/Pitcial.png",
    description:
      "A specialized underarm treatment designed to soothe irritated ingrown hairs and lighten dark spots. Begins with a deep double cleanse and exfoliation to eliminate dirt, sweat, and deodorant buildup, followed by a therapeutic mask for smooth, bright, healthy underarms.",
    includes: ["Cleansing", "Exfoliation", "Extractions", "Head & decollete massage"],
    addons: true,
  },
  {
    name: "Vajacial",
    duration: "60 Min",
    price: "$150",
    image: "/Vajacial.png",
    description:
      "A specialized treatment designed to exfoliate and rejuvenate the bikini line and surrounding area. Focuses on extracting ingrown hairs, preventing future breakouts, and softening the skin for a smoother, healthier appearance. Ideal as a follow-up to an intimate wax.",
    includes: ["Cleansing", "Exfoliation", "Extractions", "Foot massage"],
    addons: true,
  },
  {
    name: "The Levitation",
    duration: "60 Min",
    price: "$170",
    image: "/The-Levitation-holistic-foot-therapy.png",
    subtitle: "Holistic Foot Therapy",
    description:
      "A rejuvenating foot treatment designed to restore balance and refresh tired feet. Includes foot filing, gentle exfoliation, a deeply relaxing head massage, a therapeutic foot mask with paraffin wax, and reflexology-inspired massage that promotes circulation and overall well-being.",
    includes: ["Foot filing", "Exfoliation", "Head massage", "Paraffin wax foot mask", "Reflexology foot massage"],
    addons: false,
  },
];

export default function BodyTreatmentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/Backcial.png"
            alt="Body treatments at Skin Reboot"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-charcoal/60" />
        </div>
        <div className="relative z-10 container-premium text-center">
          <p className="overline !text-champagne-light mb-4">
            5 Specialized Treatments
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl text-white">
            Body Treatments
          </h1>
          <p className="text-lg text-white/70 mt-4 max-w-xl mx-auto">
            Targeted care beyond the face. Cleanse, refine, and rejuvenate with
            treatments designed for specific body areas.
          </p>
        </div>
      </section>

      {/* Treatments */}
      <section className="section-padding bg-background">
        <div className="container-premium">
          <div className="space-y-12">
            {treatments.map((treatment) => (
              <div
                key={treatment.name}
                className="bg-white rounded-xl overflow-hidden card-hover"
              >
                <div className="grid grid-cols-1 md:grid-cols-5">
                  <div className="relative h-64 md:h-auto md:col-span-2">
                    <Image
                      src={treatment.image}
                      alt={treatment.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                  <div className="p-6 md:p-8 md:col-span-3">
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <div>
                        <h3 className="font-[family-name:var(--font-heading)] text-2xl">
                          {treatment.name}
                        </h3>
                        {treatment.subtitle && (
                          <p className="text-sm text-sage-dark font-medium">
                            {treatment.subtitle}
                          </p>
                        )}
                      </div>
                      <span className="text-2xl font-[family-name:var(--font-heading)] font-semibold text-charcoal shrink-0">
                        {treatment.price}
                      </span>
                    </div>
                    <p className="text-sm text-champagne-dark font-medium mb-4">
                      {treatment.duration}
                    </p>
                    <p className="text-sm text-warm-gray leading-relaxed mb-6">
                      {treatment.description}
                    </p>
                    <div className="border-t border-stone/30 pt-4 mb-6">
                      <p className="text-xs font-medium tracking-wider uppercase text-charcoal mb-2">
                        Includes:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {treatment.includes.map((item) => (
                          <span
                            key={item}
                            className="text-xs px-2.5 py-1 rounded-full bg-cream text-warm-gray"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    {!treatment.addons && (
                      <p className="text-xs text-sage-dark font-medium bg-sage/10 inline-block px-3 py-1 rounded-full mb-4">
                        No add-ons available for this treatment
                      </p>
                    )}
                    <a
                      href="https://mayrasalonga.glossgenius.com/services"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full md:w-auto text-center"
                    >
                      Book This Treatment
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cream text-center">
        <div className="container-premium">
          <h2 className="font-[family-name:var(--font-heading)] mb-4">
            Questions About Body Treatments?
          </h2>
          <p className="text-warm-gray max-w-xl mx-auto mb-8">
            Our team is happy to help you choose the right treatment. Every body
            treatment can be customized to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://mayrasalonga.glossgenius.com/services"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center"
            >
              Book a Treatment
            </a>
            <a href="tel:+19199456068" className="btn-secondary text-center">
              Call (919) 945-6068
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
