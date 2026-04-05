import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Skin Reboot Spa Clinic in Cary, NC. 130 Iowa Lane, Suite 103. By appointment Mon-Sat. Call (919) 945-6068 or book online.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/room.png"
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
            Get in Touch
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl text-white">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-background">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-[family-name:var(--font-heading)] mb-8">
                Skin Reboot Spa Clinic
              </h2>

              <div className="space-y-8">
                {/* Location */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-sage/15 flex items-center justify-center">
                    <svg className="w-6 h-6 text-sage-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-charcoal text-lg mb-1">Location</p>
                    <p className="text-warm-gray">
                      130 Iowa Lane, Suite 103
                      <br />
                      Cary, NC 27511
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-sage/15 flex items-center justify-center">
                    <svg className="w-6 h-6 text-sage-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-charcoal text-lg mb-1">Hours</p>
                    <div className="text-warm-gray space-y-1">
                      <p>Monday &ndash; Saturday: 10am &ndash; 6:30pm</p>
                      <p>Sunday: Closed</p>
                      <p className="text-sage-dark font-medium mt-2">By Appointment Only</p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-sage/15 flex items-center justify-center">
                    <svg className="w-6 h-6 text-sage-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-charcoal text-lg mb-1">Phone</p>
                    <a href="tel:+19199456068" className="text-warm-gray hover:text-sage-dark transition-colors text-lg">
                      (919) 945-6068
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-sage/15 flex items-center justify-center">
                    <svg className="w-6 h-6 text-sage-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-charcoal text-lg mb-1">Email</p>
                    <a href="mailto:mayra@skinrebootbymayra.com" className="text-warm-gray hover:text-sage-dark transition-colors">
                      mayra@skinrebootbymayra.com
                    </a>
                  </div>
                </div>

                {/* Social */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-sage/15 flex items-center justify-center">
                    <svg className="w-6 h-6 text-sage-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-charcoal text-lg mb-2">Follow Us</p>
                    <div className="flex gap-4">
                      <a
                        href="https://www.instagram.com/skinrebootspaclinic/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-warm-gray hover:text-sage-dark transition-colors"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                      </a>
                      <a
                        href="https://www.facebook.com/skinreboot/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-warm-gray hover:text-sage-dark transition-colors"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Qualifications */}
                <div className="bg-cream rounded-xl p-6 mt-8">
                  <p className="text-xs font-medium tracking-[0.15em] uppercase text-sage-dark mb-4">
                    International Recognized Qualifications
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <span className="text-sm font-medium text-charcoal bg-white px-4 py-2 rounded-lg">
                      CIBTAC
                    </span>
                    <span className="text-sm font-medium text-charcoal bg-white px-4 py-2 rounded-lg">
                      ITEC
                    </span>
                    <span className="text-sm font-medium text-charcoal bg-white px-4 py-2 rounded-lg">
                      NC Licensed Esthetician
                    </span>
                  </div>
                </div>
              </div>

              <a
                href="https://mayrasalonga.glossgenius.com/services"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-champagne mt-8 w-full sm:w-auto text-center"
              >
                Book an Appointment
              </a>
            </div>

            {/* Map */}
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden h-[400px] lg:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.175!2d-78.7914!3d35.7811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac5a44dbaaeb65%3A0x3a5893a46b3cde79!2s130%20Iowa%20Ln%20%23103%2C%20Cary%2C%20NC%2027511!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Skin Reboot Spa Clinic Location"
                />
              </div>
              <div className="relative h-[250px] rounded-2xl overflow-hidden">
                <Image
                  src="/patient-room.png"
                  alt="Treatment room at Skin Reboot"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
