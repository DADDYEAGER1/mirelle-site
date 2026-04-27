import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { getBusinessPost, getAllBusinessSlugs } from '@/lib/business';
import BusinessTemplate from './templates/BusinessTemplate';

export const revalidate = 86400;

// ─── Static Params ─────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  const slugs = await getAllBusinessSlugs();
  return slugs.map(slug => ({ slug }));
}

// ─── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const post = await getBusinessPost(params.slug);
  if (!post) return {};

  const title       = post.title;
  const description = post.excerpt;
  const canonical   = post.canonical;
  const ogImage     = post.image;

  return {
    title,
    description,
    robots: post.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    alternates: {
      canonical,
      languages: {
        [post.regionCode]: canonical,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'website',
      siteName: 'Mirellé',
      locale: post.locale,
      images: ogImage
        ? [{ url: ogImage, width: post.imageWidth ?? 1200, height: post.imageHeight ?? 800, alt: post.imageAlt }]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage ? [ogImage] : [],
    },
  };
}

// ─── JSON-LD Schemas ────────────────────────────────────────────────────────────

function generateBusinessSchemas(post: Awaited<ReturnType<typeof getBusinessPost>>) {
  if (!post) return [];

  const schemas = [];

  // 1. ProfessionalService / LocalBusiness
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': post.schemaType || 'ProfessionalService',
    '@id': post.canonical,
    name: 'Mirellé',
    description: post.excerpt,
    url: post.canonical,
    logo: 'https://mirelleinspo.com/images/logo.png',
    sameAs: [
      'https://instagram.com/mirelleinspo',
      'https://pinterest.com/mirelleinspo',
    ],
    areaServed: {
      '@type': 'City',
      name: post.city,
      containedInPlace: {
        '@type': 'Country',
        name: post.country,
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Nail Editorial Services  ${post.region}`,
      itemListElement: post.services.map(service => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
        },
      })),
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: post.contact.email,
      contactType: 'customer service',
    },
  };
  schemas.push(serviceSchema);

  // 2. FAQPage
  if (post.faqSchema.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: post.faqSchema.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });
  }

  // 3. BreadcrumbList
  schemas.push({
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
      {
        '@type': 'ListItem',
        position: 3,
        name: post.region,
        item: post.canonical,
      },
    ],
  });

  // 4. Speakable
  if (post.speakable) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: post.title,
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.business-tldr', '.business-about'],
      },
      url: post.canonical,
    });
  }

  return schemas;
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default async function BusinessSlugPage(
  { params }: { params: { slug: string } }
) {
  const post = await getBusinessPost(params.slug);
  if (!post) notFound();

  const schemas = generateBusinessSchemas(post);

  let mdxSource = undefined;
  if (post.isMDX) {
    mdxSource = await serialize(post.content);
  }

  return (
    <>
      {/* JSON-LD injection */}
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <BusinessTemplate post={post} mdxSource={mdxSource} />
    </>
  );
}