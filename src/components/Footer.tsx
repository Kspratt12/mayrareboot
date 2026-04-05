import Link from "next/link";
import Image from "next/image";

const serviceLinks = [
  { label: "Facials", href: "/facials" },
  { label: "Body Treatments", href: "/body-treatments" },
  { label: "Eye Enhancements", href: "/eye-enhancements" },
  { label: "Waxing", href: "/waxing" },
  { label: "All Services", href: "/services" },
];

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Promotions", href: "/promotions" },
  { label: "Journal", href: "/journal" },
  { label: "Policies", href: "/policies" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      {/* Main Footer */}
      <div className="container-premium section-padding !pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-6">
              <div className="w-10 h-10">
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                  <circle cx="50" cy="50" r="46" stroke="#C9A96E" strokeWidth="1.5" />
                  <circle cx="50" cy="50" r="40" stroke="#C9A96E" strokeWidth="0.8" opacity="0.5" />
                  <text x="50" y="48" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="18" fontStyle="italic" fill="#C9A96E" fontWeight="400">skin</text>
                  <text x="50" y="66" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="18" fontStyle="italic" fill="#C9A96E" fontWeight="400">reboot</text>
                </svg>
              </div>
              <div>
                <span className="font-[family-name:var(--font-heading)] text-xl font-medium text-white tracking-wide">
                  Skin Reboot
                </span>
                <span className="block text-[10px] font-medium tracking-[0.2em] uppercase text-white/50 -mt-1">
                  Spa Clinic
                </span>
              </div>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              A premium skin clinic in Cary, NC offering corrective and holistic
              skincare treatments with internationally sourced products and
              techniques.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/skinrebootspaclinic/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/50 hover:text-champagne transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/skinreboot/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/50 hover:text-champagne transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-lg font-medium text-white mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-champagne transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-lg font-medium text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-champagne transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-lg font-medium text-white mb-6">
              Visit Us
            </h4>
            <div className="space-y-4 text-sm text-white/60">
              <div>
                <p className="text-white/80 font-medium mb-1">Location</p>
                <p>130 Iowa Lane, Suite 103</p>
                <p>Cary, NC 27511</p>
              </div>
              <div>
                <p className="text-white/80 font-medium mb-1">Hours</p>
                <p>Mon &ndash; Sat: 10am &ndash; 6:30pm</p>
                <p>Sunday: Closed</p>
                <p className="text-champagne-light mt-1">By Appointment Only</p>
              </div>
              <div>
                <p className="text-white/80 font-medium mb-1">Contact</p>
                <a
                  href="tel:+19199456068"
                  className="block hover:text-champagne transition-colors"
                >
                  (919) 945-6068
                </a>
                <a
                  href="mailto:mayra@skinrebootbymayra.com"
                  className="block hover:text-champagne transition-colors"
                >
                  mayra@skinrebootbymayra.com
                </a>
              </div>
            </div>

            <a
              href="https://mayrasalonga.glossgenius.com/services"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-champagne !py-3 !px-6 !text-xs mt-6 w-full text-center"
            >
              Book an Appointment
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-premium py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Skin Reboot Spa Clinic. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-white/30">CIBTAC</span>
            <span className="text-xs text-white/30">ITEC</span>
            <span className="text-xs text-white/30">Internationally Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
