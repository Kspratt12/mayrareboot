import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Mayra Salonga Davis and the team behind Skin Reboot Spa Clinic. Internationally trained estheticians bringing corrective and holistic skincare to Cary, NC.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/front-office-full-2.png"
            alt="Skin Reboot Spa Clinic"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1510]/80 via-[#1a1510]/50 to-[#1a1510]/30" />
        </div>
        <div className="relative z-10 container-premium text-center">
          <p className="overline !text-champagne-light mb-4">Our Story</p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl text-white">
            About Skin Reboot
          </h1>
        </div>
      </section>

      {/* Our Story - Split Layout */}
      <section className="section-padding bg-background">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="overline mb-4">Our Mission</p>
              <h2 className="font-[family-name:var(--font-heading)] mb-8">
                Exceptional Skincare, Rooted in Expertise
              </h2>
              <div className="space-y-5 text-warm-gray leading-relaxed">
                <p>
                  Skin Reboot Spa Clinic has earned its reputation by going out of
                  its way to provide truly exceptional service to each client. What
                  sets us apart is our diversity of professional products and
                  treatments, combined with a genuine commitment to your skin health.
                </p>
                <p>
                  Mayra and her team continuously study innovative skincare trends
                  from around the world. Our signature products come from South Korea,
                  our holistic treatments from the UK, chemical treatments from
                  South Africa, powerful mask treatments from Spain, the latest
                  non-invasive LPG machines from France, and microneedling serums
                  from South Korea and Ukraine.
                </p>
                <p>
                  This global approach to skincare, combined with a deeply personal
                  touch, is what makes every visit to Skin Reboot feel different.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/front-office.png"
                alt="Skin Reboot Spa Clinic interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mayra Spotlight */}
      <section className="section-padding bg-cream">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative h-[550px] rounded-2xl overflow-hidden">
                <Image
                  src="/mayra-main.png"
                  alt="Mayra Salonga Davis"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-lg hidden md:block">
                <Image
                  src="/2025-award.png"
                  alt="Award"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="overline mb-4">Meet the Founder</p>
              <h2 className="font-[family-name:var(--font-heading)] mb-2">
                Mayra Salonga Davis
              </h2>
              <p className="text-sm tracking-[0.1em] uppercase text-sage-dark font-medium mb-8">
                Certified Esthetician &middot; Beauty Therapist &middot; Educator
              </p>
              <div className="space-y-5 text-warm-gray leading-relaxed max-w-lg">
                <p>
                  With a profound understanding of beauty from multiple traditions,
                  Mayra specializes in blending traditional Asian and Western
                  treatments with a holistic and corrective approach.
                </p>
                <p>
                  Originally from the Philippines, Mayra relocated to Hong Kong at
                  age six and earned her beauty specialist diploma in 2009 with
                  honors, receiving the Most Outstanding Student of the Year award
                  at CMM Monita Beauty Academy.
                </p>
                <p>
                  After moving to the United States in 2018, she completed her NC
                  esthetics program, passed her board exam, and launched Skin Reboot
                  in August 2019. She started with zero clients and built a fully
                  booked practice through faith, resilience, and word-of-mouth
                  referrals.
                </p>
                <p>
                  Today, Mayra holds her aesthetic educator license and leads a team
                  of certified estheticians who share her commitment to personalized,
                  results-driven skincare.
                </p>
              </div>

              {/* Credentials */}
              <div className="mt-10 grid grid-cols-2 gap-4">
                {[
                  "CIBTAC Certified",
                  "ITEC Qualified",
                  "NC Licensed Esthetician",
                  "Aesthetic Educator",
                ].map((cred) => (
                  <div key={cred} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-sage-dark shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-charcoal font-medium">{cred}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-background">
        <div className="container-premium">
          <div className="text-center mb-16">
            <p className="overline mb-4">Our Team</p>
            <h2 className="font-[family-name:var(--font-heading)]">
              Meet Your Estheticians
            </h2>
            <div className="divider-sage mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              {
                name: "Mayra",
                title: "Founder / Lead Esthetician / Educator",
                image: "/mayra.png",
                specialty: "Corrective & holistic facials, international techniques",
              },
              {
                name: "Ezra",
                title: "Certified Esthetician / Beauty Therapist",
                image: "/ezra.png",
                specialty: "Advanced facial manipulation, gentle extractions",
              },
              {
                name: "Zoe",
                title: "Certified Esthetician / Beauty Therapist",
                image: "/zoe.png",
                specialty: "Skin wellness, personalized treatment plans",
              },
            ].map((member) => (
              <div key={member.name} className="group text-center">
                <div className="relative h-[420px] rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-2xl mb-1">
                  {member.name}
                </h3>
                <p className="text-[11px] font-medium tracking-[0.08em] uppercase text-sage-dark mb-2">
                  {member.title}
                </p>
                <p className="text-sm text-warm-gray italic">
                  {member.specialty}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Press */}
      <section className="section-padding bg-charcoal text-white">
        <div className="container-premium">
          <div className="text-center mb-16">
            <p className="overline !text-champagne-light mb-4">Recognition</p>
            <h2 className="font-[family-name:var(--font-heading)] text-white">
              Awards & Press Features
            </h2>
            <div className="w-16 h-[2px] bg-champagne mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <div className="w-12 h-12 rounded-full bg-champagne/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-champagne" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.01 6.01 0 01-4.27 1.772 6.01 6.01 0 01-4.27-1.772" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl text-white mb-2">
                Most Outstanding Beauty Therapist Student
              </h3>
              <p className="text-sm text-white/50">CMM Monita Beauty Academy HK, 2009</p>
            </div>
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <div className="w-12 h-12 rounded-full bg-champagne/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-champagne" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.01 6.01 0 01-4.27 1.772 6.01 6.01 0 01-4.27-1.772" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl text-white mb-2">
                Most Outstanding Esthetician
              </h3>
              <p className="text-sm text-white/50">FILAMCCNC, 2023</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              As Seen In
            </p>
            <div className="flex flex-wrap items-center justify-center gap-12">
              <a href="https://voyageraleigh.com/interview/rising-stars-meet-mayra-salonga-davis-of-cary-north-carolina/" target="_blank" rel="noopener noreferrer" className="text-lg font-[family-name:var(--font-heading)] text-white/50 hover:text-champagne transition-colors">
                Voyage Raleigh
              </a>
              <a href="https://shoutoutnorthcarolina.com/meet-mayra-salonga-davis-beauty-therapist-specialist-esthetician-esthetic-educator/" target="_blank" rel="noopener noreferrer" className="text-lg font-[family-name:var(--font-heading)] text-white/50 hover:text-champagne transition-colors">
                ShoutOut North Carolina
              </a>
              <a href="https://canvasrebel.com/meet-mayra-salonga-davis/" target="_blank" rel="noopener noreferrer" className="text-lg font-[family-name:var(--font-heading)] text-white/50 hover:text-champagne transition-colors">
                CanvasRebel
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 md:py-36">
        <div className="absolute inset-0">
          <Image
            src="/hero-2.png"
            alt="Book your treatment"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1510]/85 via-[#1a1510]/60 to-[#1a1510]/40" />
        </div>
        <div className="relative z-10 container-premium text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl text-white mb-6">
            Experience the Skin Reboot Difference
          </h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto mb-10">
            Trusted by clients across Cary, Raleigh, Apex, and Morrisville. Book your treatment and see the difference.
          </p>
          <a
            href="https://mayrasalonga.glossgenius.com/services"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-champagne"
          >
            Book an Appointment
          </a>
        </div>
      </section>
    </>
  );
}
