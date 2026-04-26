import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getBusinessPostsByCountry } from '@/lib/business';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Work With Us — Mirellé Editorial',
  description:
    'Mirellé is an editorial nail platform producing trend-led content, campaign direction, and nail art coverage for brands and salons across key global markets.',
  alternates: {
    canonical: 'https://mirelleinspo.com/business',
  },
  openGraph: {
    title: 'Work With Us — Mirellé Editorial',
    description:
      'Editorial nail content, campaign direction, and trend coverage for brands and salons worldwide.',
    url: 'https://mirelleinspo.com/business',
    type: 'website',
    siteName: 'Mirellé',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Work With Us — Mirellé Editorial',
    description:
      'Editorial nail content, campaign direction, and trend coverage for brands and salons worldwide.',
  },
};

const indexSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://mirelleinspo.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Business',
      item: 'https://mirelleinspo.com/business',
    },
  ],
};

export default async function BusinessIndexPage() {
  const postsByCountry = await getBusinessPostsByCountry();
  const countries = Object.keys(postsByCountry).sort();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(indexSchema) }}
      />

      <div className="min-h-screen bg-background">

        {/* ── Editorial Hero ──────────────────────────────────────────────────── */}
        <section className="w-full border-b border-[#E0E0E0]">
          <div className="w-full flex justify-center">
            <div className="w-full max-w-7xl px-6 md:px-12 lg:px-16 py-16 md:py-24">

              <p className="font-ui text-ui uppercase tracking-wider text-[#666666] mb-6">
                Mirellé · Editorial
              </p>

              <h1 className="font-heading text-h1-mobile md:text-h1 text-foreground max-w-[700px] leading-tight mb-6">
                Work With Us
              </h1>

              <p className="font-body text-body-lg text-foreground max-w-[560px] leading-relaxed">
                We produce editorial nail content, campaign direction, and trend coverage for
                brands and salons in key markets worldwide. Select a region below to learn
                what we offer in your area.
              </p>

            </div>
          </div>
        </section>

        {/* ── Country Sections ────────────────────────────────────────────────── */}
        {countries.map(country => (
          <section key={country} className="w-full border-b border-[#E0E0E0]">
            <div className="w-full flex justify-center">
              <div className="w-full max-w-7xl px-6 md:px-12 lg:px-16 py-12 md:py-16">

                {/* Country header */}
                <p className="font-ui text-ui uppercase tracking-wider text-[#666666] mb-10">
                  {country}
                </p>

                {/* Region cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {postsByCountry[country].map(post => (
                    <Link
                      key={post.slug}
                      href={`/business/${post.slug}`}
                      className="group block"
                    >
                      {/* Card image */}
                      {post.image && (
                        <div className="w-full aspect-[4/3] overflow-hidden mb-5 relative">
                          <Image
                            src={post.image}
                            alt={post.imageAlt}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                          />
                        </div>
                      )}

                      {/* Card text */}
                      <p className="font-ui text-ui-xs uppercase tracking-wider text-[#666666] mb-2">
                        {post.city}
                      </p>

                      <h2 className="font-heading text-h3-mobile md:text-h3 text-foreground mb-3 group-hover:opacity-70 transition-opacity">
                        {post.region}
                      </h2>

                      <p className="font-body text-body-sm text-foreground leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>

                      <span className="inline-block mt-4 font-ui text-ui-xs uppercase tracking-wider text-foreground border-b border-foreground pb-0.5 group-hover:opacity-60 transition-opacity">
                        View
                      </span>
                    </Link>
                  ))}
                </div>

              </div>
            </div>
          </section>
        ))}

        {/* ── Empty state ─────────────────────────────────────────────────────── */}
        {countries.length === 0 && (
          <div className="w-full flex justify-center">
            <div className="w-full max-w-7xl px-6 md:px-12 lg:px-16 py-24">
              <p className="font-body text-body text-[#666666]">
                No regions available yet. Check back soon.
              </p>
            </div>
          </div>
        )}

      </div>
    </>
  );
}