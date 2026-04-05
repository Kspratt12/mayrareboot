import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Facials",
  description:
    "12 premium facial treatments in Cary, NC. Corrective and holistic facials including Signature, Oxygen Therapy, HydraGlow, Microneedling, Buccal Glow-up, and Luxury Astrodome. Book today.",
};

const facials = [
  {
    name: "Skin Reboot Signature Facial",
    duration: "60 Min",
    price: "$150",
    image: "/Skin-Reboot-Signature-Facial.png",
    description:
      "The foundation of every great skincare journey. This customized facial benefits all skin types and addresses clogged pores, signs of aging, and discoloration. Finished with a therapeutic mask for a natural, healthy glow.",
    includes: ["Deep cleansing", "Pore extraction", "Diamond microdermabrasion", "Neck, decollete & head massage"],
  },
  {
    name: "Oxygen Therapy Facial",
    duration: "90 Min",
    price: "$185",
    origin: "South Korea",
    image: "/Oxygen-Therapy-Facial.png",
    description:
      "Using the OZ Portable Oxygen Facial System and OxygenCeuticals products, this treatment delivers pure liquid oxygen combined with botanicals, vitamins, and minerals to promote nourishment, faster healing, and a healthy glow.",
    includes: ["Oxygen infusion", "Hand & arm massage", "Signature Facial included"],
  },
  {
    name: "Nano Infusion Facial",
    duration: "90 Min",
    price: "$220",
    origin: "South Korea",
    image: "/Nano-Infusion-Facial.png",
    description:
      "A non-invasive treatment that enhances product absorption by driving active ingredients deep into the skin. Visibly softens fine lines, reduces scarring, improves hydration, helps control breakouts, and brightens the complexion.",
    includes: ["Nano needling pen", "Hand & arm massage", "Signature Facial included"],
  },
  {
    name: "LED Light Therapy Facial",
    duration: "90 Min",
    price: "$170",
    origin: "South Korea",
    image: "/LED-Light-Therapy-Facial.png",
    description:
      "LED light therapy penetrates the skin at targeted depths to fight acne-causing bacteria, reduce irritation, brighten the complexion, and promote plumper, smoother skin over time.",
    includes: ["LED light application", "Hand & arm massage", "Signature Facial included"],
  },
  {
    name: "Non-invasive Facelift by LPG",
    duration: "90 Min",
    price: "$210",
    origin: "France",
    image: "/Non-invasive-Facelift-by-LPG.png",
    description:
      "This exclusive anti-aging technique uses the latest non-surgical face lifting technology from LPG Systems France. Featured yearly at the Cannes Film Festival, it stimulates the skin through gentle, powerful massage without injections, electrical currents, or chemicals.",
    includes: ["LPG endermologie", "Signature Facial included"],
  },
  {
    name: "HydraGlow Facial",
    duration: "90 Min",
    price: "$245",
    origin: "South Korea",
    image: "/HydraGlow-Facial.png",
    description:
      "A water-based dermabrasion that exfoliates while infusing concentrated serums tailored to your skin needs. Ultrasonic and radio frequency components improve general skin concerns and provide an instant facial lifting contour.",
    includes: ["Hydra dermabrasion", "Radio frequency", "Ultrasound", "Signature Facial included"],
    tag: "Most Popular",
  },
  {
    name: "MicroPeel Facial",
    duration: "90 Min",
    price: "$275",
    origin: "South Africa",
    image: "/Micropeel-Facial.png",
    description:
      "Designed to refine skin texture damaged by environmental factors and conditions like acne. Smooths fine lines, evens out discoloration, and improves the appearance of acne scars. Available September through March.",
    includes: ["MicroPeel application", "Hand & arm massage", "Signature Facial included"],
    note: "Seasonal: Sept to March",
  },
  {
    name: "Microneedling Facial (CIT)",
    duration: "90 Min",
    price: "$315",
    origin: "South Korea & Ukraine",
    image: "/Microneedling-Facial.png",
    description:
      "Collagen Induction Therapy creates thousands of microchannels in the skin to stimulate the body's natural wound healing, boosting collagen and elastin production. Smooths, firms, and tones skin while improving the appearance of scars, acne, and wrinkles.",
    includes: ["Microneedling (CIT)", "Hand & arm massage", "Signature Facial included"],
  },
  {
    name: "Pure Reboot Holistic Facial",
    duration: "70 Min",
    price: "$160",
    image: "/Pure-Reboot-Holistic-Facial.png",
    description:
      "A completely different facial experience. The music, the treatment, and every detail supports relaxation and healing while giving you a long-lasting glow. An emotional and meditational experience with no machines or tools involved.",
    includes: ["Gentle cleansing & exfoliation", "Relaxing facial massage", "Decollete, head, hand & arm massage", "Cold stones for eye area"],
    note: "No machines. Paraffin add-on only.",
  },
  {
    name: "The Power Mask Facial",
    duration: "90 Min",
    price: "$205",
    origin: "Spain",
    image: "/The-Power-Mask-Facial.png",
    description:
      "A professional revitalizing treatment from Casmara Spain featuring their Algae Peel-off mask technology. This six-phase treatment provides powerful hydration with seaweed extracts and active ingredients customized to your skin type.",
    includes: ["6 phases infusion products", "Hand & arm massage", "Signature Facial included"],
  },
  {
    name: "The Buccal Glow-up",
    duration: "90 Min",
    price: "$250",
    image: "/The-Buccal-Glow-up.png",
    description:
      "A sculpting facial that works both externally and inside the mouth to release deep facial tension, lift and tone the muscles, and promote lymphatic drainage. Defines the jawline, softens fine lines, and leaves skin visibly firmer and naturally glowing.",
    includes: ["Intraoral massage (buccal massage)", "Hand & arm massage", "Signature Facial included"],
    bestFor: ["Jaw tension & TMJ discomfort", "Cheekbone & jawline definition", "Skin tone & elasticity", "Natural contoured glow"],
  },
  {
    name: "Luxury Astrodome Facial",
    duration: "105 Min",
    price: "$310",
    origin: "South Korea",
    image: "/Luxury-Astrodome-Facial.png",
    description:
      "Our most luxurious treatment. The Astrodome device from OxygenCeuticals combines medical-grade LED, NIR, and anion mist infusion for a transformative skincare experience that addresses sensitivity, acne, and signs of aging.",
    includes: ["Oxygen infusion", "Medical grade LED & NIR", "Anion mist infusion", "Hand & arm massage", "Reflexology foot massage", "Signature Facial included"],
    tag: "Most Luxurious",
  },
];

const addOns = [
  { name: "Pore Extraction", duration: "10 Min", price: "$30" },
  { name: "High Frequency", duration: "10 Min", price: "$35" },
  { name: "Microdermabrasion", duration: "15 Min", price: "$60" },
  { name: "Oxygen Infuse", duration: "15 Min", price: "$60" },
  { name: "LED Light Therapy", duration: "15 Min", price: "$45" },
  { name: "Non-invasive Facelift by LPG", duration: "20 Min", price: "$70" },
  { name: "RF & Ultrasound", duration: "20 Min", price: "$100" },
  { name: "Nano Infusion", duration: "15 Min", price: "$80" },
  { name: "Microneedling", duration: "15 Min", price: "$150" },
  { name: "MicroPeel (Face)", duration: "30 Min", price: "$70" },
  { name: "Collagen Mask", duration: "10 Min", price: "$30" },
  { name: "Hand Paraffin", duration: "", price: "$15" },
  { name: "Feet Paraffin", duration: "", price: "$15" },
  { name: "Both Feet & Hand Paraffin", duration: "", price: "$28" },
  { name: "Neck & Shoulder Massage", duration: "10 Min", price: "$20" },
  { name: "Hand & Arm Massage", duration: "10 Min", price: "$20" },
  { name: "Head Massage", duration: "10 Min", price: "$20" },
  { name: "Back Massage", duration: "15 Min", price: "$60" },
  { name: "Foot Reflexology", duration: "15 Min", price: "$60" },
];

export default function FacialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/Luxury-Astrodome-Facial.png"
            alt="Professional facial treatment at Skin Reboot"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 container-premium text-center">
          <p className="overline !text-champagne-light mb-4">
            12 Signature Treatments
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl text-white">
            Professional Facials
          </h1>
          <p className="text-lg text-white/70 mt-4 max-w-xl mx-auto">
            Advanced corrective and holistic treatments using internationally sourced products for visible, lasting results
          </p>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="section-padding bg-background">
        <div className="container-premium">
          <div className="text-center mb-16">
            <p className="overline mb-4">Treatment Menu</p>
            <h2 className="font-[family-name:var(--font-heading)]">
              Our Facial Treatments
            </h2>
            <div className="divider-sage mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facials.map((facial) => (
              <div
                key={facial.name}
                className="bg-white rounded-xl overflow-hidden card-hover"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={facial.image}
                    alt={facial.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {facial.tag && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-champagne text-white text-[11px] font-medium tracking-wider uppercase px-4 py-1.5 rounded-full">
                        {facial.tag}
                      </span>
                    </div>
                  )}
                  {facial.origin && (
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm text-charcoal text-[11px] font-medium tracking-wider px-3 py-1 rounded-full">
                        {facial.origin}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-[family-name:var(--font-heading)] text-xl">
                      {facial.name}
                    </h3>
                    <span className="text-xl font-[family-name:var(--font-heading)] font-semibold text-charcoal shrink-0">
                      {facial.price}
                    </span>
                  </div>
                  <p className="text-sm text-champagne-dark font-medium mb-3">
                    {facial.duration}
                  </p>
                  {facial.note && (
                    <p className="text-xs text-sage-dark font-medium bg-sage/10 inline-block px-3 py-1 rounded-full mb-3">
                      {facial.note}
                    </p>
                  )}
                  <p className="text-sm text-warm-gray leading-relaxed mb-4">
                    {facial.description}
                  </p>
                  {facial.bestFor && (
                    <div className="mb-4">
                      <p className="text-xs font-medium tracking-wider uppercase text-charcoal mb-2">
                        Best For:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {facial.bestFor.map((b) => (
                          <span key={b} className="text-xs px-2.5 py-1 rounded-full bg-blush text-warm-gray">
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="border-t border-stone/30 pt-4">
                    <p className="text-xs font-medium tracking-wider uppercase text-charcoal mb-2">
                      Includes:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {facial.includes.map((item) => (
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
                    className="btn-primary mt-6 w-full text-center"
                  >
                    Book This Treatment
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Treatments */}
      <section className="section-padding bg-cream">
        <div className="container-premium">
          <div className="text-center mb-12">
            <p className="overline mb-4">Customize Your Experience</p>
            <h2 className="font-[family-name:var(--font-heading)]">
              Add-on Treatments
            </h2>
            <p className="text-warm-gray mt-4 max-w-xl mx-auto">
              Enhance any facial with these targeted additions for a fully
              customized skincare experience.
            </p>
            <div className="divider-sage mx-auto mt-6" />
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden">
              {addOns.map((addon, i) => (
                <a
                  key={addon.name}
                  href="https://mayrasalonga.glossgenius.com/services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between px-6 py-4 hover:bg-cream transition-colors cursor-pointer group ${
                    i !== addOns.length - 1 ? "border-b border-stone/20" : ""
                  }`}
                >
                  <div>
                    <p className="font-medium text-charcoal text-sm group-hover:text-sage-dark transition-colors">
                      {addon.name}
                    </p>
                    {addon.duration && (
                      <p className="text-xs text-warm-gray-light mt-0.5">
                        {addon.duration}
                      </p>
                    )}
                  </div>
                  <span className="font-[family-name:var(--font-heading)] text-lg font-medium text-charcoal">
                    {addon.price}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <Image
            src="/hero-2.png"
            alt="Book your facial"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 container-premium text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl text-white mb-6">
            Your Best Skin Is One Treatment Away
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
            Our estheticians will craft the perfect treatment for your skin type, concerns, and goals.
          </p>
          <a
            href="https://mayrasalonga.glossgenius.com/services"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-champagne"
          >
            Schedule Your Facial
          </a>
        </div>
      </section>
    </>
  );
}
