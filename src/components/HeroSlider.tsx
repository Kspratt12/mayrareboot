"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const heroImages = ["/hero-1.png", "/hero-2.png", "/hero-3.png"];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center -mt-20 md:-mt-24">
      {/* Background Images */}
      {heroImages.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Skin Reboot Spa Clinic hero ${i + 1}`}
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}
      {/* Clean overlay - dark enough to read, light enough to see image */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/15 z-[1]" />

      {/* Content */}
      <div className="relative z-10 container-premium w-full pt-32 pb-20">
        <div className="max-w-2xl" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.6), 0 1px 4px rgba(0,0,0,0.4)" }}>
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 mb-7 animate-fade-in-up" style={{ textShadow: "none" }}>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 text-[#FBBC04]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-semibold tracking-wide text-white">
              5.0 Rated &middot; 500+ Clients
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-heading)] font-medium text-white leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Where Clinical Precision Meets{" "}
            <span className="italic text-champagne">Elevated Skincare</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-lg animate-fade-in-up animate-delay-200">
            Advanced corrective facials, body treatments, and eye enhancements
            delivered by internationally certified estheticians.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-300" style={{ textShadow: "none" }}>
            <a
              href="https://mayrasalonga.glossgenius.com/services"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-champagne text-center"
            >
              Book Your Treatment
            </a>
            <Link
              href="/services"
              className="btn-hero-glass text-center"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "bg-champagne w-10" : "bg-white/30 w-6"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
