import Link from 'next/link';

export default function AboutEEAT() {
  return (
    <section className="bg-background py-16 md:py-16 px-[6px] md:px-3 lg:px-[12px]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl mb-6">
          About Mirellé Inspo
        </h2>
        
        <div className="font-body text-base md:text-lg leading-relaxed space-y-4 text-gray-800">
          <p>
            Mirellé Inspo is a premium beauty editorial platform dedicated to bringing you the latest in nail art, beauty trends, and product recommendations. Our team of experienced beauty editors and industry professionals curates content that combines expert knowledge with real-world insights.
          </p>
          
          <p>
            With years of combined experience in beauty journalism, product testing, and trend forecasting, our editorial team is committed to providing accurate, trustworthy, and inspiring content. We collaborate with licensed beauty professionals, dermatologists, and industry experts to ensure every piece of advice meets the highest standards of quality and reliability.
          </p>
          
          <p>
            Our mission is to empower beauty enthusiasts with the information they need to make informed decisions about products, techniques, and trends. Every recommendation is thoroughly researched, personally tested, and backed by expert opinion.
          </p>

          {/* Link to About Page */}
          <div className="pt-4">
            <Link 
              href="/about" 
              className="font-ui text-sm uppercase tracking-wide text-foreground underline hover:no-underline transition-all"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}