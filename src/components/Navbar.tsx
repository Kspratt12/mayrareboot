"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Facials", href: "/facials" },
      { label: "Waxing", href: "/waxing" },
      { label: "Eye Enhancements", href: "/eye-enhancements" },
      { label: "Body Treatments", href: "/body-treatments" },
    ],
  },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Promotions", href: "/promotions" },
  { label: "Journal", href: "/journal" },
  { label: "Policies", href: "/policies" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-premium">
        <nav className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-11 h-11 md:w-13 md:h-13 rounded-full overflow-hidden relative bg-background border border-stone/20" style={{ clipPath: "circle(50%)" }}>
              <Image
                src="/logo.png"
                alt="Skin Reboot Spa Clinic"
                width={200}
                height={200}
                className="w-[130%] h-[130%] object-cover mix-blend-multiply absolute -top-[3%] -left-[15%]"
                style={{ objectPosition: "center 35%" }}
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span className="font-[family-name:var(--font-heading)] text-xl md:text-2xl font-medium text-charcoal tracking-wide">
                Skin Reboot
              </span>
              <span className="block text-[10px] font-medium tracking-[0.2em] uppercase text-warm-gray -mt-1">
                Spa Clinic
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="px-3 xl:px-4 py-2 text-[13px] font-medium tracking-[0.08em] uppercase text-charcoal-light hover:text-sage-dark transition-colors"
                  >
                    {link.label}
                    <svg
                      className={`inline-block ml-1 w-3 h-3 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 pt-2">
                      <div className="bg-white rounded-lg shadow-lg border border-stone/50 py-2 min-w-[200px]">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-5 py-2.5 text-[13px] font-medium tracking-wide text-charcoal-light hover:text-sage-dark hover:bg-cream transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-3 xl:px-4 py-2 text-[13px] font-medium tracking-[0.08em] uppercase text-charcoal-light hover:text-sage-dark transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Book Now Button + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="https://mayrasalonga.glossgenius.com/services"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !py-2.5 !px-5 !text-xs hidden sm:inline-flex"
            >
              Book Now
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-[1.5px] bg-charcoal transition-all ${
                  isOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block w-6 h-[1.5px] bg-charcoal transition-all ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-[1.5px] bg-charcoal transition-all ${
                  isOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-white z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto px-6 py-8">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between py-3 text-lg font-[family-name:var(--font-heading)] font-medium text-charcoal border-b border-stone/30"
                >
                  {link.label}
                  <svg
                    className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileServicesOpen && (
                  <div className="pl-4 py-1">
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 text-base text-warm-gray hover:text-sage-dark transition-colors"
                    >
                      All Services
                    </Link>
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-2 text-base text-warm-gray hover:text-sage-dark transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-3 text-lg font-[family-name:var(--font-heading)] font-medium text-charcoal border-b border-stone/30"
              >
                {link.label}
              </Link>
            )
          )}

          <a
            href="https://mayrasalonga.glossgenius.com/services"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 w-full text-center"
          >
            Book Now
          </a>

          <div className="mt-auto pt-8 pb-4">
            <p className="text-sm text-warm-gray text-center">
              130 Iowa Lane, Suite 103, Cary, NC 27511
            </p>
            <p className="text-sm text-warm-gray text-center mt-1">
              Mon &ndash; Sat, 10am &ndash; 6:30pm | By Appointment
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <a
                href="https://www.instagram.com/skinrebootspaclinic/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-warm-gray hover:text-sage-dark transition-colors"
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
                className="text-warm-gray hover:text-sage-dark transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="tel:+19199456068"
                aria-label="Call us"
                className="text-warm-gray hover:text-sage-dark transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
