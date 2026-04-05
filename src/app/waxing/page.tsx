import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Waxing",
  description:
    "Professional waxing services in Cary, NC. Full face, Brazilian, full body waxing with minimal pain and smooth, lasting results. Skin Reboot Spa Clinic.",
};

const waxingPrices = [
  { service: "Upper Lip & Brazilian Art", price: "$10" },
  { service: "Eyebrow, Nasal, Ear & Chin", price: "$12" },
  { service: "Side Burns", price: "$15" },
  { service: "Neck & Underarm", price: "$25" },
  { service: "Bikini, Half Back, Shoulder, Lower Arms & Stomach", price: "$30" },
  { service: "Half Face, Upper Arms, Chest, Full Butt & Lower Legs", price: "$40" },
  { service: "Full Face, Full Back & Upper Legs", price: "$60" },
  { service: "Full Face & Brazilian (Female)", price: "$60" },
  { service: "Full Arms", price: "$70" },
  { service: "Boyzilian", price: "$90" },
  { service: "Full Legs", price: "$100" },
];

const precautions = [
  "Discontinue using Renova, tanning, and sunbathing 72 hours (3 days) before and after your appointment",
  "Hair should be at least 1/4 inch long (about 2 to 3 weeks of growth)",
  "Take two Advil or Tylenol 30 minutes before your appointment for comfort",
  "Discontinue use of Accutane for 6 months prior to waxing",
  "Exercising before your appointment, drinking caffeine, being near your menstrual cycle, or extreme nervousness can sometimes cause additional sensitivity",
];

const contraindications = [
  "Taking antibiotics or acne medication",
  "Using skin peeling or skin thinning preparations",
  "Varicose veins",
  "Underarms: mastitis",
  "Skin disorders or diseases, bruising, or recent hemorrhages",
  "Scar tissue, especially recent",
  "Warts, moles, and skin tags (area can be avoided)",
  "Fractures or sprains",
  "Bruising",
  "Diabetes (sensitivity test may be conducted as skin may be slow to heal)",
  "Sunburn",
  "Use of sunbeds 24 hours prior to waxing",
  "Receiving cancer therapy (chemotherapy or radiation)",
];

export default function WaxingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/Eyelash-Tinting.png"
            alt="Professional waxing at Skin Reboot"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-charcoal/60" />
        </div>
        <div className="relative z-10 container-premium text-center">
          <p className="overline !text-champagne-light mb-4">
            Smooth & Precise
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl text-white">
            Professional Waxing
          </h1>
          <p className="text-lg text-white/70 mt-4 max-w-xl mx-auto">
            Quick, flawless waxing with minimal pain. Professional technique for
            smooth, lasting results you can count on.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-background">
        <div className="container-premium">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="overline mb-4">Service Menu</p>
              <h2 className="font-[family-name:var(--font-heading)]">
                Waxing Services & Pricing
              </h2>
              <div className="divider-sage mx-auto mt-6" />
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              {waxingPrices.map((item, i) => (
                <a
                  key={item.service}
                  href="https://mayrasalonga.glossgenius.com/services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between px-6 md:px-8 py-5 hover:bg-cream transition-colors cursor-pointer group ${
                    i !== waxingPrices.length - 1 ? "border-b border-stone/20" : ""
                  }`}
                >
                  <p className="font-medium text-charcoal text-sm md:text-base group-hover:text-sage-dark transition-colors">
                    {item.service}
                  </p>
                  <div className="flex items-center gap-3 shrink-0 ml-4">
                    <span className="font-[family-name:var(--font-heading)] text-xl font-semibold text-charcoal">
                      {item.price}
                    </span>
                    <svg className="w-4 h-4 text-sage-dark opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center mt-8">
              <a
                href="https://mayrasalonga.glossgenius.com/services"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book Your Waxing Appointment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Precautions */}
      <section className="section-padding bg-cream">
        <div className="container-premium">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Precautions */}
              <div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl mb-6">
                  Waxing Precautions
                </h3>
                <div className="space-y-4">
                  {precautions.map((item) => (
                    <div key={item} className="flex gap-3">
                      <svg className="w-5 h-5 text-sage-dark shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                      </svg>
                      <p className="text-sm text-warm-gray leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contra-Indications */}
              <div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl mb-6">
                  Contra-Indications
                </h3>
                <p className="text-sm text-warm-gray mb-4">
                  Waxing may not be suitable if you are experiencing any of the
                  following:
                </p>
                <div className="space-y-3">
                  {contraindications.map((item) => (
                    <div key={item} className="flex gap-3">
                      <svg className="w-4 h-4 text-warm-gray-light shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <p className="text-sm text-warm-gray leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background text-center">
        <div className="container-premium">
          <h2 className="font-[family-name:var(--font-heading)] mb-4">
            First Time? We Make It Easy.
          </h2>
          <p className="text-warm-gray max-w-xl mx-auto mb-8">
            Our estheticians are experienced in making your waxing appointment
            as comfortable as possible. If you have questions, just ask.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://mayrasalonga.glossgenius.com/services"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center"
            >
              Book Now
            </a>
            <a href="tel:+19199456068" className="btn-secondary text-center">
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
