import Image from "next/image";
import Link from "next/link";
import VideoShowcase from "@/components/VideoShowcase";

const serviceCategories = [
  {
    title: "Facials",
    description:
      "From corrective treatments to holistic rituals, our facials are designed to transform your skin with precision and care.",
    image: "/Skin-Reboot-Signature-Facial.png",
    href: "/facials",
  },
  {
    title: "Body Treatments",
    description:
      "Targeted treatments for the back, chest, underarms, and more. Designed to cleanse, refine, and rejuvenate.",
    image: "/Backcial.png",
    href: "/body-treatments",
  },
  {
    title: "Eye Enhancements",
    description:
      "Lash lifts, brow lamination, professional tinting, and our signature Eye Perfecting Facial for a brighter, more defined look.",
    image: "/Lash-Lift-Perm.png",
    href: "/eye-enhancements",
  },
  {
    title: "Waxing",
    description:
      "Quick, precise, and comfortable waxing services using professional techniques for smooth, lasting results.",
    image: "/Eyebrow-Tinting.png",
    href: "/waxing",
  },
];

const featuredTreatments = [
  {
    name: "Luxury Astrodome Facial",
    duration: "105 Min",
    price: "$310",
    tag: "Most Luxurious",
    image: "/Luxury-Astrodome-Facial.png",
    href: "/facials",
  },
  {
    name: "HydraGlow Facial",
    duration: "90 Min",
    price: "$245",
    tag: "Most Popular",
    image: "/HydraGlow-Facial.png",
    href: "/facials",
  },
  {
    name: "The Buccal Glow-up",
    duration: "90 Min",
    price: "$250",
    tag: "Trending",
    image: "/The-Buccal-Glow-up.png",
    href: "/facials",
  },
];

const featuredProducts = [
  { name: "Caviar Skin Cream", size: "50ml / 1.69oz", price: "$85", image: "https://static.wixstatic.com/media/8e64c2_21b81d341e8f4f738b3ce2ad4c4f2dfa~mv2.jpg/v1/fit/w_1080,h_1080,q_90/file.jpg" },
  { name: "Fermented Fluid", size: "50ml / 1.69oz", price: "$90", image: "https://static.wixstatic.com/media/8e64c2_14d9813713104ef9aa5696870727fc3d~mv2.jpg/v1/fit/w_1080,h_1080,q_90/file.jpg" },
  { name: "Regenon Serum", size: "50ml / 1.69oz", price: "$93", image: "https://static.wixstatic.com/media/8e64c2_18b6b164f84c4e4c8dfa73b620d85931~mv2.jpg/v1/fit/w_1080,h_1080,q_90/file.jpg" },
  { name: "B5 Gel Hydration", size: "30ml / 1oz", price: "$60", image: "https://static.wixstatic.com/media/8e64c2_7cb234ed947340bb9cfa20c64d618433~mv2.jpg/v1/fit/w_1080,h_1080,q_90/file.jpg" },
];

const reviews = [
  {
    name: "Sophia D.",
    text: "I saw Mayra right before Thanksgiving for my first facial ever and it was truly amazing! She has tons of experience and is incredibly skilled, knowledgeable and personable. The spa itself is beautiful and relaxing from the moment you walk in.",
    rating: 5,
  },
  {
    name: "Arianna Sims",
    text: "Mayra and her daughter Ezra are the sweetest most welcoming people I've ever met. I feel like family every time I see them since day 1. Their spa is drop dead gorgeous and so relaxing. The attention to detail really sets the ambiance.",
    rating: 5,
  },
  {
    name: "Mary Le",
    text: "I stumbled upon Skin Reboot Clinic by chance as I was searching for a local clinic that could target my skin concerns. Immediately upon my arrival, Mayra greeted me with a warm smile and we spoke about the treatment I selected. I felt comfortable and relaxed throughout.",
    rating: 5,
  },
  {
    name: "Kristine Besa",
    text: "I can't say enough good things about Skin Reboot! Mayra is not only an incredibly talented aesthetician, but also a genuinely good person and puts her heart into what she does. I've been seeing her since the days she was still in a smaller space.",
    rating: 5,
  },
  {
    name: "Brittany Gibbs",
    text: "This review is long overdue! Mayra is an absolute beam of light. From the moment you walk in, her warmth and professionalism makes you feel completely at ease. She puts so much care into everything she does.",
    rating: 5,
  },
  {
    name: "Nanette N.",
    text: "My experience at this spa just keeps getting better! There is never any judgement or upselling; just effective treatment options, delivered with confident expertise. I trust them completely with my skincare.",
    rating: 5,
  },
  {
    name: "Tracy Stone",
    text: "On my 57th birthday, my daughter treated me to my first ever facial. I was a little apprehensive but was put at ease right away. Every step of the nanoneedling was explained and all my questions were answered with ease. The results were incredible.",
    rating: 5,
  },
  {
    name: "Kate Howard",
    text: "Skin Reboot is wonderful. Mayra and Ezra are very knowledgeable and give you their full attention. They don't just do the work, they make sure you feel genuinely cared for. You leave refreshed, glowing, and confident.",
    rating: 5,
  },
  {
    name: "Gabriella G.",
    text: "Hands down the best facial I've ever had! From start to finish, the experience was so relaxing, thoughtful, and effective. My skin felt incredible afterward, glowy, hydrated, and refreshed, and even better, it healed beautifully in the days following.",
    rating: 5,
  },
  {
    name: "Amanda Burgin",
    text: "I had a wonderful signature facial with Mayra. She took time to understand my skin care needs and ask about my skin care routine and products. This resulted in a truly customized facial and I'm excited to go back.",
    rating: 5,
  },
  {
    name: "Jillian Smith",
    text: "Ezra gives the best facials ever. By far the best facials I've ever received. She takes time and explains everything she's doing. She takes time to understand your skin needs and gives great advice.",
    rating: 5,
  },
  {
    name: "Alexandra M.",
    text: "Mayra's knowledge and methods are truly differential in providing results, amid a relaxing and nourishing experience. This spa is quickly becoming one of my favorites in the world! Kudos to Mayra for choosing treatments and products that truly yield results.",
    rating: 5,
  },
  {
    name: "Amy Brewer",
    text: "I have been going to Mayra for years for facials. My skin always looks and feels amazing after each treatment. She is professional and her space is calming and clean. I highly recommend her. She is so kind.",
    rating: 5,
  },
  {
    name: "Rehan Baba",
    text: "Definitely recommended. I had an amazing experience at Skin Reboot Spa Clinic! The staff was very professional, friendly, and made me feel comfortable throughout my visit. The service was excellent, and I could really see improvement after my treatment.",
    rating: 5,
  },
  {
    name: "Pavani Venkata",
    text: "I recently got my facial from Ezra. I had the best experience. I would 100 times recommend this place. I was so skeptical after my last facial at another clinic on the price and the experience, but Skin Reboot changed my perspective completely.",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* ============================================ */}
      {/* SECTION 1: PREMIUM HERO */}
      {/* ============================================ */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/hero-1.png"
            alt="Premium skincare treatment at Skin Reboot Spa Clinic in Cary, NC"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-transparent" />
        </div>
        <div className="relative z-10 container-premium w-full pt-32 pb-20">
          <div className="max-w-2xl">
            <p className="overline !text-champagne-light mb-6 animate-fade-in-up">
              Premium Skincare in Cary, NC
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-heading)] font-medium text-white leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
              Where Science Meets{" "}
              <span className="italic text-champagne-light">Skin Wellness</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-lg animate-fade-in-up animate-delay-200">
              Corrective facials, body treatments, waxing, and eye enhancements
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
              <Link href="/services" className="btn-secondary !border-white/40 !text-white hover:!bg-white/10 text-center">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 2: TRUST STRIP */}
      {/* ============================================ */}
      <section className="bg-charcoal py-5">
        <div className="container-premium">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center">
            <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-white/50">
              CIBTAC Certified
            </span>
            <span className="text-white/20">|</span>
            <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-white/50">
              ITEC Qualified
            </span>
            <span className="text-white/20 hidden sm:inline">|</span>
            <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-white/50">
              International Expertise
            </span>
            <span className="text-white/20 hidden md:inline">|</span>
            <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-white/50 hidden md:inline">
              Products from 6 Countries
            </span>
            <span className="text-white/20 hidden lg:inline">|</span>
            <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-white/50 hidden lg:inline">
              5.0 ★ on Google (353 Reviews)
            </span>
            <span className="text-white/20 hidden lg:inline">|</span>
            <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-white/50 hidden lg:inline">
              By Appointment
            </span>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 3: SERVICE CATEGORIES */}
      {/* ============================================ */}
      <section className="section-padding bg-background">
        <div className="container-premium">
          <div className="text-center mb-16">
            <p className="overline mb-4">What We Offer</p>
            <h2 className="font-[family-name:var(--font-heading)]">
              Our Signature Services
            </h2>
            <div className="divider-sage mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group card-hover bg-white rounded-xl overflow-hidden"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-heading)] text-xl mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-warm-gray leading-relaxed">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-sage-dark group-hover:text-champagne transition-colors">
                    Explore
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 4: WHY CHOOSE SKIN REBOOT */}
      {/* ============================================ */}
      <section className="section-padding bg-cream">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="overline mb-4">Why Skin Reboot</p>
              <h2 className="font-[family-name:var(--font-heading)] mb-8">
                A Different Standard of Care
              </h2>
              <div className="space-y-8">
                {[
                  {
                    title: "Internationally Sourced Products",
                    desc: "Professional skincare from South Korea, France, Spain, UK, South Africa, Ukraine, and Australia. Each product chosen for proven clinical results.",
                  },
                  {
                    title: "Corrective and Holistic Approach",
                    desc: "Every treatment blends traditional Asian and Western techniques with a focus on both visible correction and whole-body wellness.",
                  },
                  {
                    title: "Certified Expertise",
                    desc: "CIBTAC and ITEC internationally recognized qualifications, combined with continuous education and advanced training.",
                  },
                  {
                    title: "Personalized Treatments",
                    desc: "No two skin types are the same. Every session is customized to your unique needs, concerns, and goals.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-sage/15 flex items-center justify-center mt-0.5">
                      <svg className="w-5 h-5 text-sage-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-[family-name:var(--font-heading)] text-lg mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-warm-gray leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden">
                <Image
                  src="/front-desk.png"
                  alt="Skin Reboot Spa Clinic interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-lg max-w-[250px] hidden md:block">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 star-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-2xl font-[family-name:var(--font-heading)] font-semibold text-charcoal">
                  5.0
                </p>
                <p className="text-xs text-warm-gray mt-1">
                  353 reviews on Google
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 5: ABOUT MAYRA / CLINIC STORY */}
      {/* ============================================ */}
      <section className="section-padding bg-background">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative h-[450px] md:h-[550px] rounded-2xl overflow-hidden">
                <Image
                  src="/mayra-2.png"
                  alt="Mayra Salonga Davis, founder of Skin Reboot Spa Clinic"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-champagne/10 rounded-2xl w-full h-full -z-10 hidden md:block" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="overline mb-4">Meet the Founder</p>
              <h2 className="font-[family-name:var(--font-heading)] mb-6">
                Mayra Salonga Davis
              </h2>
              <p className="text-sm tracking-[0.1em] uppercase text-sage-dark font-medium mb-6">
                Certified Esthetician &middot; Beauty Therapist &middot; Educator
              </p>
              <div className="space-y-4 text-warm-gray leading-relaxed">
                <p>
                  With a profound understanding of beauty from multiple traditions,
                  Mayra blends traditional Asian and Western treatments with a
                  holistic and corrective approach that sets Skin Reboot apart.
                </p>
                <p>
                  Her journey began in Hong Kong, where she earned her beauty
                  specialist diploma with honors and received the Most Outstanding
                  Student of the Year award. After relocating to the United States
                  in 2018, she built Skin Reboot from the ground up, earning a
                  reputation for exceptional care and visible results.
                </p>
                <p>
                  Today, she leads a team of certified estheticians who share her
                  commitment to personalized, results-driven skincare using
                  professional products sourced from six countries.
                </p>
              </div>
              <Link
                href="/about"
                className="btn-secondary mt-8 inline-flex"
              >
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* VIDEO SHOWCASE */}
      {/* ============================================ */}
      <VideoShowcase />

      {/* ============================================ */}
      {/* SECTION 6: FEATURED TREATMENTS */}
      {/* ============================================ */}
      <section className="section-padding bg-cream">
        <div className="container-premium">
          <div className="text-center mb-16">
            <p className="overline mb-4">Signature Experiences</p>
            <h2 className="font-[family-name:var(--font-heading)]">
              Featured Treatments
            </h2>
            <div className="divider-sage mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTreatments.map((treatment) => (
              <Link
                key={treatment.name}
                href={treatment.href}
                className="group card-hover bg-white rounded-xl overflow-hidden"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={treatment.image}
                    alt={treatment.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-champagne text-white text-[11px] font-medium tracking-wider uppercase px-4 py-1.5 rounded-full">
                      {treatment.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-heading)] text-xl mb-3">
                    {treatment.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-warm-gray">
                      {treatment.duration}
                    </span>
                    <span className="text-lg font-[family-name:var(--font-heading)] font-semibold text-charcoal">
                      {treatment.price}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-sage-dark group-hover:text-champagne transition-colors">
                    Learn More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/facials" className="btn-secondary">
              View All Treatments
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 7: PRODUCT HIGHLIGHTS */}
      {/* ============================================ */}
      <section className="section-padding bg-background">
        <div className="container-premium">
          <div className="text-center mb-16">
            <p className="overline mb-4">Curated Skincare</p>
            <h2 className="font-[family-name:var(--font-heading)]">
              Professional Products
            </h2>
            <p className="text-warm-gray mt-4 max-w-2xl mx-auto">
              Sourced from leading skincare labs in South Korea, France, Spain, South Africa, and beyond.
              Every product in our collection has been selected for proven clinical results.
            </p>
            <div className="divider-sage mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link
                key={product.name}
                href="/products"
                className="group card-hover bg-white rounded-xl p-6 text-center"
              >
                <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden bg-cream">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <h4 className="font-[family-name:var(--font-heading)] text-base mb-1">
                  {product.name}
                </h4>
                <p className="text-xs text-warm-gray-light mb-2">
                  {product.size}
                </p>
                <p className="font-medium text-charcoal">{product.price}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products" className="btn-secondary">
              Shop All Products
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 8: TEAM SECTION */}
      {/* ============================================ */}
      <section className="section-padding bg-cream">
        <div className="container-premium">
          <div className="text-center mb-16">
            <p className="overline mb-4">Our Team</p>
            <h2 className="font-[family-name:var(--font-heading)]">
              Meet Your Estheticians
            </h2>
            <div className="divider-sage mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Mayra",
                title: "Certified Esthetician / Beauty Therapist / Educator",
                image: "/mayra-main.png",
                bio: "Founder and lead esthetician with international training from Hong Kong. Specializes in blending Asian and Western techniques for corrective and holistic skincare.",
              },
              {
                name: "Ezra",
                title: "Certified Esthetician / Beauty Therapist",
                image: "/ezra.png",
                bio: "Expert in advanced facial manipulation techniques with a corrective and holistic approach. Known for thorough, gentle extractions and personalized care.",
              },
              {
                name: "Zoe",
                title: "Certified Esthetician / Beauty Therapist",
                image: "/zoe.png",
                bio: "Specializes in facial treatments and skin wellness with a focus on the connection between skin vitality and overall health.",
              },
            ].map((member) => (
              <div key={member.name} className="bg-white rounded-xl overflow-hidden card-hover text-center">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[11px] font-medium tracking-[0.08em] uppercase text-sage-dark mb-3">
                    {member.title}
                  </p>
                  <p className="text-sm text-warm-gray leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 9: REVIEWS / SOCIAL PROOF */}
      {/* ============================================ */}
      <section className="section-padding bg-background">
        <div className="container-premium">
          {/* Google Rating Header */}
          <div className="text-center mb-16">
            <p className="overline mb-4">Client Experiences</p>
            <h2 className="font-[family-name:var(--font-heading)]">
              What Our Clients Say
            </h2>

            {/* Prominent Google Rating Badge */}
            <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-8 py-5 mt-8 shadow-sm border border-stone/20">
              {/* Colorful Google G Logo */}
              <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none">
                <path d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" fill="#FFC107"/>
                <path d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" fill="#FF3D00"/>
                <path d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" fill="#4CAF50"/>
                <path d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.001-.001 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" fill="#1976D2"/>
              </svg>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 star-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-2xl font-[family-name:var(--font-heading)] font-bold text-charcoal">
                    5.0
                  </span>
                </div>
                <p className="text-sm text-warm-gray mt-0.5">
                  Based on <span className="font-medium text-charcoal">353 reviews</span> on Google
                </p>
              </div>
            </div>
          </div>

          {/* Review Photos Row */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-12">
            {[
              "/karla-roland-review.png",
              "/karla-roland-review2.png",
              "/karla-roland-review3.png",
              "/beatriz-review.png",
              "/jana-mostafa-review.png",
              "/jana-mostafa-review2.png",
            ].map((img, i) => (
              <div key={i} className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src={img}
                  alt={`Client review photo ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 33vw, 16vw"
                />
              </div>
            ))}
          </div>

          {/* Reviews Grid - First 6 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {reviews.slice(0, 6).map((review) => (
              <div
                key={review.name}
                className="bg-white rounded-xl p-8 card-hover"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 star-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-warm-gray leading-relaxed mb-6 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sage/15 flex items-center justify-center">
                    <span className="text-sm font-medium text-sage-dark">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-charcoal">{review.name}</p>
                    <p className="text-xs text-warm-gray-light flex items-center gap-1">
                      <svg className="w-3 h-3" viewBox="0 0 48 48" fill="none">
                        <path d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" fill="#FFC107"/>
                        <path d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" fill="#FF3D00"/>
                        <path d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" fill="#4CAF50"/>
                        <path d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.001-.001 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" fill="#1976D2"/>
                      </svg>
                      Google Review
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Reviews Grid - Next 9 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.slice(6).map((review) => (
              <div
                key={review.name}
                className="bg-white rounded-xl p-6 card-hover"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 star-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-warm-gray leading-relaxed mb-4 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-sage/15 flex items-center justify-center">
                    <span className="text-xs font-medium text-sage-dark">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-charcoal">{review.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 10: AWARDS & RECOGNITION */}
      {/* ============================================ */}
      <section className="section-padding bg-charcoal text-white">
        <div className="container-premium">
          <div className="text-center mb-16">
            <p className="overline !text-champagne-light mb-4">Recognition</p>
            <h2 className="font-[family-name:var(--font-heading)] text-white">
              Awards & Press
            </h2>
            <div className="w-16 h-[2px] bg-champagne mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Most Outstanding Beauty Therapist Student",
                org: "CMM Monita Beauty Academy HK",
                year: "2009",
              },
              {
                title: "Most Outstanding Esthetician",
                org: "FILAMCCNC",
                year: "2023",
              },
              {
                title: "Featured in Voyage Raleigh",
                org: "Rising Stars Series",
                year: "2023",
              },
              {
                title: "Featured in CanvasRebel",
                org: "Stories & Insights",
                year: "2024",
              },
            ].map((award) => (
              <div
                key={award.title}
                className="text-center p-6 rounded-xl border border-white/10 hover:border-champagne/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-champagne/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-champagne" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.01 6.01 0 01-4.27 1.772 6.01 6.01 0 01-4.27-1.772" />
                  </svg>
                </div>
                <h4 className="font-[family-name:var(--font-heading)] text-lg text-white mb-2">
                  {award.title}
                </h4>
                <p className="text-xs text-white/50 uppercase tracking-wider">
                  {award.org}
                </p>
                <p className="text-sm text-champagne-light mt-2">{award.year}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-12 border-t border-white/10">
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-white/30">
              As Seen In
            </span>
            <span className="text-sm text-white/50">Voyage Raleigh</span>
            <span className="text-sm text-white/50">ShoutOut North Carolina</span>
            <span className="text-sm text-white/50">CanvasRebel</span>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 11: BEFORE & AFTER */}
      {/* ============================================ */}
      <section className="section-padding bg-background">
        <div className="container-premium">
          <div className="text-center mb-16">
            <p className="overline mb-4">Real Results</p>
            <h2 className="font-[family-name:var(--font-heading)]">
              Transformations
            </h2>
            <p className="text-warm-gray mt-4 max-w-xl mx-auto">
              See the real results our clients experience with professional skincare
              treatments at Skin Reboot Spa Clinic.
            </p>
            <div className="divider-sage mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div
                key={num}
                className="relative aspect-square rounded-xl overflow-hidden card-hover"
              >
                <Image
                  src={`/before-after-${num}.png`}
                  alt={`Skincare treatment result ${num}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 12: PROMOTIONS / PACKAGES */}
      {/* ============================================ */}
      <section className="section-padding bg-cream">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="overline mb-4">Special Offers</p>
              <h2 className="font-[family-name:var(--font-heading)] mb-6">
                Value Packages & Gift Cards
              </h2>
              <p className="text-warm-gray leading-relaxed mb-8">
                Invest in your skincare journey with our value packages. The more
                you commit, the more you save. Packages are valid for one year,
                applicable to any treatment, and can be shared with family and
                friends.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { amount: "$1,000", discount: "10% Off" },
                  { amount: "$2,000", discount: "15% Off" },
                  { amount: "$3,000", discount: "20% Off" },
                ].map((pkg) => (
                  <div
                    key={pkg.amount}
                    className="flex items-center justify-between bg-white rounded-lg p-5 border border-stone/30"
                  >
                    <span className="font-[family-name:var(--font-heading)] text-xl text-charcoal">
                      {pkg.amount}
                    </span>
                    <span className="bg-sage/15 text-sage-dark text-sm font-medium px-4 py-1.5 rounded-full">
                      {pkg.discount}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/promotions" className="btn-primary text-center">
                  View Packages
                </Link>
                <a
                  href="https://mayrasalonga.glossgenius.com/services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-center"
                >
                  Buy a Gift Card
                </a>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/front-chairs.png"
                alt="Skin Reboot Spa Clinic"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 13: CONTACT / LOCATION / HOURS + FINAL CTA */}
      {/* ============================================ */}
      <section className="section-padding bg-background">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <p className="overline mb-4">Visit Us</p>
              <h2 className="font-[family-name:var(--font-heading)] mb-8">
                Skin Reboot Spa Clinic
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-sage/15 flex items-center justify-center">
                    <svg className="w-5 h-5 text-sage-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Location</p>
                    <p className="text-sm text-warm-gray">
                      130 Iowa Lane, Suite 103
                      <br />
                      Cary, NC 27511
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-sage/15 flex items-center justify-center">
                    <svg className="w-5 h-5 text-sage-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Hours</p>
                    <p className="text-sm text-warm-gray">
                      Monday &ndash; Saturday: 10am &ndash; 6:30pm
                      <br />
                      Sunday: Closed
                    </p>
                    <p className="text-sm text-sage-dark font-medium mt-1">
                      By Appointment Only
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-sage/15 flex items-center justify-center">
                    <svg className="w-5 h-5 text-sage-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Contact</p>
                    <a href="tel:+19199456068" className="text-sm text-warm-gray hover:text-sage-dark transition-colors block">
                      (919) 945-6068
                    </a>
                    <a href="mailto:mayra@skinrebootbymayra.com" className="text-sm text-warm-gray hover:text-sage-dark transition-colors block">
                      mayra@skinrebootbymayra.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden h-[400px]">
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
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FINAL CTA */}
      {/* ============================================ */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="/hero-3.png"
            alt="Book your skincare treatment"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="relative z-10 container-premium text-center">
          <p className="overline !text-champagne-light mb-4">
            Your Skin Deserves Expert Care
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl text-white mb-6 max-w-2xl mx-auto">
            Ready to Experience the Difference?
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
            Book your appointment today and discover why over 350 clients trust
            Skin Reboot for their skincare journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://mayrasalonga.glossgenius.com/services"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-champagne text-center"
            >
              Book Your Appointment
            </a>
            <a
              href="tel:+19199456068"
              className="btn-secondary !border-white/40 !text-white hover:!bg-white/10 text-center"
            >
              Call (919) 945-6068
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
