import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center section-padding">
      <div className="container-premium text-center">
        <p className="overline mb-4">Page Not Found</p>
        <h1 className="font-[family-name:var(--font-heading)] text-6xl md:text-8xl text-charcoal mb-4">
          404
        </h1>
        <p className="text-warm-gray text-lg mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved. Let us
          help you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary text-center">
            Back to Home
          </Link>
          <Link href="/services" className="btn-secondary text-center">
            View Services
          </Link>
          <a
            href="https://mayrasalonga.glossgenius.com/services"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-champagne text-center"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
}
