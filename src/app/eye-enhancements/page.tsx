import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Eye Enhancements",
  description:
    "Professional eye enhancements in Cary, NC. Lash lift, brow lamination, tinting, and Eye Perfecting Facial. Using Elleebana, RefectoCil, and Casmara products. Book today.",
};

const treatments = [
  {
    name: "Eye Perfecting Facial",
    duration: "60 Min",
    price: "$165",
    origin: "Casmara, Spain",
    image: "/Eye-Perfecting-Facial-from-Casmara-Spain.png",
    description:
      "An advanced professional treatment with a global rejuvenating action, carefully formulated to treat the eye contour. Targets all the signs that age the eyes, including flaccidity, eye bags, and periorbital wrinkles such as crow's feet and frown lines.",
    includes: ["Face & eye cleansing", "Six phases of product infusion", "Neck, decollete & head massage"],
  },
  {
    name: "Lash Lift / Perm",
    duration: "60 Min",
    price: "$70",
    addon: "Add Tinting: $90",
    image: "/Lash-Lift-Perm.png",
    description:
      "A semi-permanent lash curl using Elleebana solution from Australia and a curved silicone form to add length and curl to your natural lashes. Great for all lash types and lasts 6 to 12 weeks depending on your lash growth cycle. Includes a relaxing head massage.",
    includes: ["Elleebana lash lift", "Head massage"],
  },
  {
    name: "Brow Lamination",
    duration: "60 Min",
    price: "$70",
    addon: "Add Tinting: $90",
    image: "/Brow-Lamination.png",
    description:
      "A brow sculpt treatment that gives your natural brows a fuller, more defined look. An excellent alternative to microblading, brow lamination fills gaps, adds definition, and creates the illusion of more hair for sparse brows.",
    includes: ["Brow sculpting", "Head massage"],
  },
  {
    name: "Eyebrow Tinting",
    duration: "45 Min",
    price: "$25",
    addon: "Add Eyelash Tinting: $48",
    image: "/Eyebrow-Tinting.png",
    description:
      "Professional eyebrow tinting using RefectoCil from Austria. Shapes, defines, and adds depth to your brows with semi-permanent dye, creating the appearance of fuller, more youthful brows that complement your natural features. Includes a soothing head massage.",
    includes: ["RefectoCil tinting", "Head massage"],
  },
  {
    name: "Eyelash Tinting",
    duration: "45 Min",
    price: "$25",
    addon: "Add Eyebrow Tinting: $48",
    image: "/Eyelash-Tinting.png",
    description:
      "A semi-permanent enhancement that darkens and defines your lashes, creating the look of mascara without daily application. Lasts a month or more with proper home care. Includes a relaxing head massage.",
    includes: ["RefectoCil tinting", "Head massage"],
  },
];

export default function EyeEnhancementsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/spa-clinic.png"
            alt="Eye enhancements at Skin Reboot"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1510]/80 via-[#1a1510]/50 to-[#1a1510]/30" />
        </div>
        <div className="relative z-10 container-premium text-center">
          <p className="overline !text-champagne-light mb-4">
            Lashes, Brows & Eyes
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl text-white">
            Eye Enhancements
          </h1>
          <p className="text-lg text-white/70 mt-4 max-w-xl mx-auto">
            Using Elleebana from Australia, RefectoCil from Austria, and Casmara
            from Spain for naturally beautiful, polished results
          </p>
        </div>
      </section>

      {/* Treatments */}
      <section className="section-padding bg-background">
        <div className="container-premium">
          <div className="text-center mb-16">
            <p className="overline mb-4">Treatment Menu</p>
            <h2 className="font-[family-name:var(--font-heading)]">
              Our Eye Enhancement Services
            </h2>
            <div className="divider-sage mx-auto mt-6" />
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
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
                    {treatment.origin && (
                      <div className="absolute bottom-4 right-4">
                        <span className="bg-white/90 backdrop-blur-sm text-charcoal text-[11px] font-medium tracking-wider px-3 py-1 rounded-full">
                          {treatment.origin}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6 md:p-8 md:col-span-3">
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <h3 className="font-[family-name:var(--font-heading)] text-2xl">
                        {treatment.name}
                      </h3>
                      <span className="text-2xl font-[family-name:var(--font-heading)] font-semibold text-charcoal shrink-0">
                        {treatment.price}
                      </span>
                    </div>
                    <p className="text-sm text-champagne-dark font-medium mb-1">
                      {treatment.duration}
                    </p>
                    {treatment.addon && (
                      <p className="text-xs text-sage-dark font-medium bg-sage/10 inline-block px-3 py-1 rounded-full mb-3">
                        {treatment.addon}
                      </p>
                    )}
                    <p className="text-sm text-warm-gray leading-relaxed mb-4">
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
            Enhance Your Natural Beauty
          </h2>
          <p className="text-warm-gray max-w-xl mx-auto mb-10">
            Polished, natural-looking results that bring out the best in your features. No maintenance, just confidence.
          </p>
          <a
            href="https://mayrasalonga.glossgenius.com/services"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book an Eye Enhancement
          </a>
        </div>
      </section>
    </>
  );
}
