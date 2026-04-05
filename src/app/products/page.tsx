import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Shop professional skincare products at Skin Reboot Spa Clinic. Curated from South Korea, France, Spain, and South Africa. Creams, serums, masks, and more.",
};

const products = [
  { name: "Ceutisome CC Mask 6pcs", category: "Skin Recovery", price: "$33", image: "https://static.wixstatic.com/media/8e64c2_d9e700b88a764e908530b7c3d3bb7139~mv2.jpg/v1/fit/w_1080,h_1080,q_90/file.jpg", href: "https://www.skinrebootbymayra.com/product-page/ceutisome-cc-mask-6pcs-faster-skin-recovery" },
  { name: "Double Makeup Remover", size: "110ml / 3.72oz", category: "Cleansing", price: "$40", image: "https://static.wixstatic.com/media/8e64c2_c199f5c124204e6eac0fd1e75e27b81c~mv2.jpg/v1/fit/w_1080,h_1080,q_90/file.jpg", href: "https://www.skinrebootbymayra.com/product-page/double-makeup-remover-110ml" },
  { name: "Skin Balancing Toner", size: "300ml / 10oz", category: "Toner", price: "$54", image: "https://static.wixstatic.com/media/8e64c2_164b6c5f5fd843efa7922860099d12e1~mv2.jpg/v1/fit/w_1080,h_1080,q_90/file.jpg", href: "https://www.skinrebootbymayra.com/product-page/skin-balancing-toner-300ml" },
  { name: "Ceutisome AG Mask 6pcs", category: "Anti-Aging", price: "$33", image: "https://static.wixstatic.com/media/8e64c2_7ef603f0b9524a9b8b52c92e81c1700c~mv2.jpg/v1/fit/w_1080,h_1080,q_90/file.jpg", href: "https://www.skinrebootbymayra.com/product-page/ceutisome-ag-mask-6psc-sheets-anti-aging-skincare" },
  { name: "Antioxidant Cream", size: "50ml / 1.69oz", category: "Anti-Aging", price: "$78", image: "https://static.wixstatic.com/media/8e64c2_3ef785420cdd4ae286931b9adb465407~mv2.jpg/v1/fit/w_1080,h_1080,q_90/file.jpg", href: "https://www.skinrebootbymayra.com/product-page/anti-oxidant-cream-anti-aging" },
  { name: "Caviar Skin Cream", size: "50ml / 1.69oz", category: "Anti-Aging", price: "$85", image: "https://static.wixstatic.com/media/8e64c2_21b81d341e8f4f738b3ce2ad4c4f2dfa~mv2.jpg/v1/fit/w_1080,h_1080,q_90/file.jpg", href: "https://www.skinrebootbymayra.com/product-page/age-defying-caviar-cream-50ml-1-69oz-anti-aging-skincare" },
  { name: "Regenon Starter Kit", category: "Anti-Aging Kit", price: "$55", image: "https://static.wixstatic.com/media/8e64c2_6a22929131da4ae2b0c4fa173de63b2b~mv2.jpg/v1/fit/w_1080,h_1080,q_90/file.jpg", href: "https://www.skinrebootbymayra.com/product-page/regenon-starter-kit-anti-aging" },
  { name: "2-Piece Purifying Kit", category: "Acne Treatment", price: "$80", image: "https://static.wixstatic.com/media/8e64c2_b68e4315468e431682f1ed8132d5c62c~mv2.jpg/v1/fit/w_1080,h_1080,q_90/file.jpg", href: "https://www.skinrebootbymayra.com/product-page/purifying-kit-acne-treatment" },
  { name: "AG Starter Kit", category: "Anti-Aging Kit", price: "$49", image: "https://static.wixstatic.com/media/8e64c2_ac531f5a67f7496881e77b2997472faf~mv2.jpg/v1/fit/w_1080,h_1080,q_90/file.jpg", href: "https://www.skinrebootbymayra.com/product-page/ag-starter-kit-anti-aging-skincare" },
  { name: "Fermented Fluid", size: "50ml / 1.69oz", category: "Brightening Serum", price: "$90", image: "https://static.wixstatic.com/media/8e64c2_14d9813713104ef9aa5696870727fc3d~mv2.jpg/v1/fit/w_1080,h_1080,q_90/file.jpg", href: "https://www.skinrebootbymayra.com/product-page/fermented-fluid-50ml-1-69oz-brightening-serum" },
  { name: "Caviar Protein Fluid", size: "50ml / 1.69oz", category: "Anti-Aging Serum", price: "$96", image: "https://static.wixstatic.com/media/8e64c2_8d13848738a74480bf0a02b62103079a~mv2.jpg/v1/fit/w_1080,h_1080,q_90/file.jpg", href: "https://www.skinrebootbymayra.com/product-page/caviar-protein-fluid-50ml-1-69oz-anti-aging-skincare" },
  { name: "Couperose Fluid", size: "50ml / 1.69oz", category: "Soothing Serum", price: "$65", image: "https://static.wixstatic.com/media/8e64c2_bfe796431b9144e6bab3d696069f6fa7~mv2.jpg/v1/fit/w_1080,h_1080,q_90/file.jpg", href: "https://www.skinrebootbymayra.com/product-page/couperose-fluid-50ml-1-69oz-soothing-serum" },
  { name: "Herbal Fluid", size: "50ml / 1.69oz", category: "Acne Treatment", price: "$60", image: "https://static.wixstatic.com/media/8e64c2_ed725d0d17df4f119a9bc6b3cee2673c~mv2.jpg/v1/fit/w_1080,h_1080,q_90/file.jpg", href: "https://www.skinrebootbymayra.com/product-page/herbal-fluid-50ml-1-69oz-acne-treatment" },
  { name: "B5 Gel Skin Hydration", size: "30ml / 1oz", category: "Vitamin Serum", price: "$60", image: "https://static.wixstatic.com/media/8e64c2_7cb234ed947340bb9cfa20c64d618433~mv2.jpg/v1/fit/w_1080,h_1080,q_90/file.jpg", href: "https://www.skinrebootbymayra.com/product-page/b5-gel-30ml-1oz--vitamin-serum" },
  { name: "Phyto Gel", size: "30ml / 1oz", category: "Brightening Serum", price: "$60", image: "https://static.wixstatic.com/media/8e64c2_a10cb2319d7d48d6a650809d2ab46ca4~mv2.jpg/v1/fit/w_1080,h_1080,q_90/file.jpg", href: "https://www.skinrebootbymayra.com/product-page/phyto-gel-30ml-1oz-brightening-serum" },
  { name: "Regenon Serum", size: "50ml / 1.69oz", category: "Brightening Serum", price: "$93", image: "https://static.wixstatic.com/media/8e64c2_18b6b164f84c4e4c8dfa73b620d85931~mv2.jpg/v1/fit/w_1080,h_1080,q_90/file.jpg", href: "https://www.skinrebootbymayra.com/product-page/regenon-serum-50ml-1-69oz-brightening-serum" },
  { name: "Amazing Base Cream", size: "300ml / 10oz", category: "Moisturizer", price: "$110", image: "https://static.wixstatic.com/media/8e64c2_a25f53bafcc24f7bb13a5cb4ef6ddc34~mv2.jpg/v1/fit/w_1080,h_1080,q_90/file.jpg", href: "https://www.skinrebootbymayra.com/product-page/amazing-base-cream-moisturizer" },
  { name: "Moisture Aqua Serum", size: "50ml", category: "Moisturizer", price: "$65", image: "https://static.wixstatic.com/media/8e64c2_6a4e0c6e0fe24da3bfd7dd5c715778a0~mv2.jpg/v1/fit/w_1080,h_1080,q_90/file.jpg", href: "https://www.skinrebootbymayra.com/product-page/moisture-aqua-serum-50ml" },
  { name: "Couperose Cream", size: "50ml", category: "Soothing Cream", price: "$65", image: "https://static.wixstatic.com/media/8e64c2_6774527652c042159bd198d54a9256b2~mv2.jpg/v1/fit/w_1080,h_1080,q_90/file.jpg", href: "https://www.skinrebootbymayra.com/product-page/couperose-cream-50ml-soothing-cream" },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[350px] flex items-center">
        <div className="absolute inset-0">
          <Image src="/staff-4.png" alt="Premium skincare products" fill className="object-cover" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1510]/80 via-[#1a1510]/50 to-[#1a1510]/30" />
        </div>
        <div className="relative z-10 container-premium text-center">
          <p className="overline !text-champagne-light mb-4">
            Curated Collection
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl text-white">
            Professional Skincare Products
          </h1>
          <p className="text-lg text-white/70 mt-4 max-w-2xl mx-auto">
            Clinical-grade formulations from leading labs in South Korea,
            France, Spain, and South Africa. The same products our estheticians trust in every treatment.
          </p>
        </div>
      </section>

      {/* Product Origin Strip */}
      <section className="bg-cream py-6">
        <div className="container-premium">
          <div className="flex flex-wrap items-center justify-center gap-6 text-center">
            {["South Korea", "France", "Spain", "South Africa", "Ukraine", "Australia"].map((country) => (
              <span key={country} className="text-xs font-medium tracking-[0.12em] uppercase text-warm-gray">
                {country}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-background">
        <div className="container-premium">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <a
                key={product.name}
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer"
              >
                <div className="relative aspect-square bg-white rounded-xl overflow-hidden mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-full bg-cream text-warm-gray">
                      {product.category}
                    </span>
                  </div>
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-base mb-1 leading-tight group-hover:text-sage-dark transition-colors">
                  {product.name}
                </h3>
                {product.size && (
                  <p className="text-xs text-warm-gray-light mb-1">
                    {product.size}
                  </p>
                )}
                <p className="text-lg font-[family-name:var(--font-heading)] font-semibold text-charcoal">
                  {product.price}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* How to Purchase */}
      <section className="section-padding bg-cream">
        <div className="container-premium text-center max-w-2xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] mb-4">
            How to Purchase
          </h2>
          <p className="text-warm-gray leading-relaxed mb-4">
            Our professional skincare products are available for purchase during
            your appointment or by contacting us directly. Our estheticians can
            recommend the right products for your skin type and concerns.
          </p>
          <p className="text-sm text-warm-gray-light mb-8">
            Product sales are non-refundable. See our policies for details.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://mayrasalonga.glossgenius.com/services"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center"
            >
              Book an Appointment
            </a>
            <a href="mailto:mayra@skinrebootbymayra.com" className="btn-secondary text-center">
              Email Us to Order
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
