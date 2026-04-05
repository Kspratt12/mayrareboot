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
    <section className="relative min-h-screen flex items-center">
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
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1510]/75 via-[#1a1510]/35 to-transparent z-[1]" />

      {/* Content */}
      <div className="relative z-10 container-premium w-full pt-32 pb-20">
        <div className="max-w-2xl">
          <p className="overline !text-champagne-light mb-5 animate-fade-in-up">
            5.0 Rated &middot; Trusted by 500+ Clients
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-heading)] font-medium text-white leading-[1.1] mb-5 animate-fade-in-up animate-delay-100">
            Where Clinical Precision Meets{" "}
            <span className="italic text-champagne-light">Elevated Skincare</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-lg animate-fade-in-up animate-delay-200">
            Advanced corrective facials, body treatments, and eye enhancements
            delivered by internationally certified estheticians. Real expertise.
            Visible results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-300">
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
              className="btn-secondary !border-white/40 !text-white hover:!bg-white/10 text-center"
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
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-champagne w-8" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
