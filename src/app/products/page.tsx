import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Shop professional skincare products at Skin Reboot Spa Clinic. Curated from South Korea, France, Spain, and South Africa. Creams, serums, masks, and more.",
};

const products = [
  { name: "Ceutisome CC Mask 6pcs", category: "Skin Recovery", price: "$33", image: "/skin-balancing-toner.png", href: "https://www.skinrebootbymayra.com/product-page/ceutisome-cc-mask-6pcs-faster-skin-recovery" },
  { name: "Double Makeup Remover", size: "110ml / 3.72oz", category: "Cleansing", price: "$40", image: "/skin-balancing-toner.png", href: "https://www.skinrebootbymayra.com/product-page/double-makeup-remover-110ml" },
  { name: "Skin Balancing Toner", size: "300ml / 10oz", category: "Toner", price: "$54", image: "/skin-balancing-toner.png", href: "https://www.skinrebootbymayra.com/product-page/skin-balancing-toner-300ml" },
  { name: "Ceutisome AG Mask 6pcs", category: "Anti-Aging", price: "$33", image: "/skin-balancing-toner.png", href: "https://www.skinrebootbymayra.com/product-page/ceutisome-ag-mask-6psc-sheets-anti-aging-skincare" },
  { name: "Antioxidant Cream", size: "50ml / 1.69oz", category: "Anti-Aging", price: "$78", image: "/skin-balancing-toner.png", href: "https://www.skinrebootbymayra.com/product-page/anti-oxidant-cream-anti-aging" },
  { name: "Caviar Skin Cream", size: "50ml / 1.69oz", category: "Anti-Aging", price: "$85", image: "/skin-balancing-toner.png", href: "https://www.skinrebootbymayra.com/product-page/age-defying-caviar-cream-50ml-1-69oz-anti-aging-skincare" },
  { name: "Regenon Starter Kit", category: "Anti-Aging Kit", price: "$55", image: "/skin-balancing-toner.png", href: "https://www.skinrebootbymayra.com/product-page/regenon-starter-kit-anti-aging" },
  { name: "2-Piece Purifying Kit", category: "Acne Treatment", price: "$80", image: "/skin-balancing-toner.png", href: "https://www.skinrebootbymayra.com/product-page/purifying-kit-acne-treatment" },
  { name: "AG Starter Kit", category: "Anti-Aging Kit", price: "$49", image: "/skin-balancing-toner.png", href: "https://www.skinrebootbymayra.com/product-page/ag-starter-kit-anti-aging-skincare" },
  { name: "Fermented Fluid", size: "50ml / 1.69oz", category: "Brightening Serum", price: "$90", image: "/skin-balancing-toner.png", href: "https://www.skinrebootbymayra.com/product-page/fermented-fluid-50ml-1-69oz-brightening-serum" },
  { name: "Caviar Protein Fluid", size: "50ml / 1.69oz", category: "Anti-Aging Serum", price: "$96", image: "/skin-balancing-toner.png", href: "https://www.skinrebootbymayra.com/product-page/caviar-protein-fluid-50ml-1-69oz-anti-aging-skincare" },
  { name: "Couperose Fluid", size: "50ml / 1.69oz", category: "Soothing Serum", price: "$65", image: "/skin-balancing-toner.png", href: "https://www.skinrebootbymayra.com/product-page/couperose-fluid-50ml-1-69oz-soothing-serum" },
  { name: "Herbal Fluid", size: "50ml / 1.69oz", category: "Acne Treatment", price: "$60", image: "/skin-balancing-toner.png", href: "https://www.skinrebootbymayra.com/product-page/herbal-fluid-50ml-1-69oz-acne-treatment" },
  { name: "B5 Gel Skin Hydration", size: "30ml / 1oz", category: "Vitamin Serum", price: "$60", image: "/skin-balancing-toner.png", href: "https://www.skinrebootbymayra.com/product-page/b5-gel-30ml-1oz--vitamin-serum" },
  { name: "Phyto Gel", size: "30ml / 1oz", category: "Brightening Serum", price: "$60", image: "/skin-balancing-toner.png", href: "https://www.skinrebootbymayra.com/product-page/phyto-gel-30ml-1oz-brightening-serum" },
  { name: "Regenon Serum", size: "50ml / 1.69oz", category: "Brightening Serum", price: "$93", image: "/skin-balancing-toner.png", href: "https://www.skinrebootbymayra.com/product-page/regenon-serum-50ml-1-69oz-brightening-serum" },
  { name: "Amazing Base Cream", size: "300ml / 10oz", category: "Moisturizer", price: "$110", image: "/skin-balancing-toner.png", href: "https://www.skinrebootbymayra.com/product-page/amazing-base-cream-moisturizer" },
  { name: "Moisture Aqua Serum", size: "50ml", category: "Moisturizer", price: "$65", image: "/skin-balancing-toner.png", href: "https://www.skinrebootbymayra.com/product-page/moisture-aqua-serum-50ml" },
  { name: "Couperose Cream", size: "50ml", category: "Soothing Cream", price: "$65", image: "/skin-balancing-toner.png", href: "https://www.skinrebootbymayra.com/product-page/couperose-cream-50ml-soothing-cream" },
  { name: "Daily Botanical Enzyme Peel", size: "75ml", category: "Exfoliant", price: "$50", image: "/skin-balancing-toner.png", href: "https://www.skinrebootbymayra.com/shop-premium-skincare-products" },
  { name: "TP Sun Cream SPF 50 PA+++", size: "50ml", category: "Sun Protection", price: "$60", image: "/skin-balancing-toner.png", href: "https://www.skinrebootbymayra.com/shop-premium-skincare-products" },
  { name: "Pore Mask", size: "200ml", category: "Mask", price: "$45", image: "/skin-balancing-toner.png", href: "https://www.skinrebootbymayra.com/shop-premium-skincare-products" },
  { name: "Gentle Facial Cleansing Lotion", size: "250ml", category: "Cleansing", price: "$50", image: "/skin-balancing-toner.png", href: "https://www.skinrebootbymayra.com/shop-premium-skincare-products" },
  { name: "Purifying Foaming Wash", size: "100ml", category: "Cleansing", price: "$40", image: "/skin-balancing-toner.png", href: "https://www.skinrebootbymayra.com/shop-premium-skincare-products" },
  { name: "Hydrating Cream", category: "Moisturizer", price: "$65", image: "/skin-balancing-toner.png", href: "https://www.skinrebootbymayra.com/shop-premium-skincare-products" },
  { name: "Nutrient Toner", size: "300ml", category: "Toner", price: "$54", image: "/skin-balancing-toner.png", href: "https://www.skinrebootbymayra.com/shop-premium-skincare-products" },
  { name: "Vit C Serum 12", category: "Brightening Serum", price: "$60", image: "/skin-balancing-toner.png", href: "https://www.skinrebootbymayra.com/shop-premium-skincare-products" },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-charcoal" />
        <div className="relative z-10 container-premium text-center">
          <p className="overline !text-champagne-light mb-4">
            Curated Collection
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl text-white">
            Professional Skincare Products
          </h1>
          <p className="text-lg text-white/70 mt-4 max-w-2xl mx-auto">
            Formulated with advanced ingredients from leading labs in South Korea,
            France, Spain, and South Africa. The same products our estheticians
            trust in every treatment.
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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <a
                key={product.name}
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl overflow-hidden card-hover group cursor-pointer"
              >
                <div className="relative aspect-square bg-cream overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/90 text-warm-gray">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-[family-name:var(--font-heading)] text-base mb-1 leading-tight">
                    {product.name}
                  </h3>
                  {product.size && (
                    <p className="text-xs text-warm-gray-light mb-2">
                      {product.size}
                    </p>
                  )}
                  <p className="text-lg font-[family-name:var(--font-heading)] font-semibold text-charcoal">
                    {product.price}
                  </p>
                </div>
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
