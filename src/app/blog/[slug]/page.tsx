import { notFound } from 'next/navigation';
import { getBlogPost, getAllBlogSlugs } from '@/lib/blog';
import BlogPost from '@/components/Blog/BlogPost';
import type { Metadata } from 'next';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// ✅ THIS IS THE FIX — Dynamic metadata per post
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = params;
  const post = await getBlogPost(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found - Mirelle',
      description: 'The blog post you are looking for does not exist.',
    };
  }

  return {
    title: `${post.title} | Mirelle`,
    description: post.excerpt || `Discover ${post.title} - expert nail tips, trends, and tutorials from Mirelle.`,
    keywords: post.tags?.join(', ') || 'nail art, nail care, nail trends',
    openGraph: {
      title: `${post.title} | Mirelle`,
      description: post.excerpt || `Discover ${post.title} - expert nail inspiration from Mirelle.`,
      type: 'article',
      url: `https://mirelleinspo.com/blog/${slug}`,
      images: post.image ? [{
        url: `https://mirelleinspo.com${post.image}`,
        width: 1200,
        height: 630,
        alt: post.title,
      }] : [],
      publishedTime: post.date,
      authors: [post.author || 'Mirelle'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Mirelle`,
      description: post.excerpt || `Discover ${post.title} - expert nail inspiration from Mirelle.`,
      images: post.image ? [`https://mirelleinspo.com${post.image}`] : [],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = params;
  const post = await getBlogPost(slug);
  
  if (!post) notFound();

  // Article Schema (for all posts)
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": post.title,
  "description": post.excerpt,
  "image": `https://www.mirelleinspo.com${post.image}`,
  "datePublished": post.date,
  "dateModified": post.date,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://www.mirelleinspo.com/blog/${slug}`
  },
  "author": {
    "@type": "Person",
    "name": post.author,
    "url": "https://www.mirelleinspo.com/about"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Mirellé",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.mirelleinspo.com/logo.png"
    }
  }
};
  // FAQ Schema (only for specific posts)
  let faqSchema = null;

  if (slug === 'christmas-nail-designs-2025') {
    faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long before Christmas should I get my nails done?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For gel or acrylic nails, book your appointment 3-5 days before Christmas. Regular polish should be applied 1-2 days prior to your event. If doing DIY at home, allow 2-3 hours for proper application, drying, and any necessary touch-ups."
          }
        },
        {
          "@type": "Question",
          "name": "Can I do Christmas nail designs with regular polish?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! Regular nail polish works perfectly for Christmas designs. Use a quality base coat and topcoat with proper drying time between coats. Expect 5-7 days of wear with proper care and maintenance."
          }
        },
        {
          "@type": "Question",
          "name": "What's the easiest Christmas nail design for beginners?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Candy cane French tips or single snowflake accent nails are most beginner-friendly. Both take under 30 minutes and require minimal artistic skill. Nail stickers and decals are excellent shortcuts for achieving complex Christmas looks."
          }
        },
        {
          "@type": "Question",
          "name": "How do I prevent dark polish from staining my nails?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Always apply a quality base coat before dark reds, greens, or metallics. Let the base coat dry completely (2-3 minutes) before applying color. If staining occurs, use a buffing block gently or apply whitening toothpaste for 5 minutes before washing."
          }
        },
        {
          "@type": "Question",
          "name": "Are press-on nails good for Christmas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Modern press-on nails last 1-2 weeks with proper application and are perfect for elaborate Christmas designs without salon prices. Brands like Static Nails, Olive & June, and Kiss offer quality festive options with intricate artwork already applied."
          }
        },
        {
          "@type": "Question",
          "name": "What nail shape is best for Christmas designs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Almond and coffin shapes offer maximum versatility. Almond works beautifully for both minimalist and detailed Christmas designs, while coffin provides a larger canvas for dramatic holiday artwork. Every nail shape works—choose designs that complement your natural length and lifestyle."
          }
        },
        {
          "@type": "Question",
          "name": "How can I make my Christmas nails last through New Year's?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Opt for gel or dip powder for 2-3 week longevity. Apply cuticle oil daily, wear gloves when doing dishes or cleaning, reapply topcoat every 3-4 days, and avoid using nails as tools. Choose classic designs that transition well beyond December 25th."
          }
        },
        {
          "@type": "Question",
          "name": "What's trending in Christmas nails for 2025?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Velvet chrome finishes, minimalist elegance with single accent nails, jewel-tone color palettes, and warm neutral combinations are dominating 2025 Christmas nail trends. Unexpected colors like icy blue and burgundy are replacing traditional red and green."
          }
        }
      ]
    };
  }

  if (slug === 'halloween-nail-ideas-2025') {
    faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long before Halloween should I get my nails done?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For gel or acrylic, book 2-4 days before Halloween. Regular polish should be applied 1-2 days prior. DIY at home needs 2-3 hours for drying and touch-ups."
          }
        },
        {
          "@type": "Question",
          "name": "Can I do Halloween nail designs with regular polish?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! Regular nail polish works perfectly. Use quality base and topcoat with proper drying time. Expect 5-7 days wear with proper care."
          }
        },
        {
          "@type": "Question",
          "name": "What's the easiest Halloween nail design for beginners?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Black French tips or single ghost accent nail are most beginner-friendly. Both take under 30 minutes. Nail stickers are great shortcuts for complex looks."
          }
        },
        {
          "@type": "Question",
          "name": "How do I remove glitter or dark Halloween polish without staining?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Soak cotton pad in acetone-based remover, press onto nail for 30-60 seconds before wiping. For stubborn glitter, use foil method: wrap each nail in foil with acetone-soaked pad for 5 minutes. Apply cuticle oil afterward."
          }
        },
        {
          "@type": "Question",
          "name": "Are press-on nails good for Halloween?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Modern press-ons last 1-2 weeks with proper application. Perfect for elaborate designs without salon prices. Brands like Static Nails, Olive & June, and Glamnetic offer quality Halloween options."
          }
        },
        {
          "@type": "Question",
          "name": "What nail shape is best for Halloween designs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Almond and coffin shapes offer most versatility. Almond works for minimalist and detailed designs, while coffin provides larger canvas for dramatic artwork. Every shape works—choose designs complementing your length."
          }
        },
        {
          "@type": "Question",
          "name": "Can I do glow-in-the-dark Halloween nails at home?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Purchase glow-in-the-dark nail polish and apply over white base for maximum glow. Charge nails under bright light before darkness. Lasts as long as regular polish with proper topcoat."
          }
        },
        {
          "@type": "Question",
          "name": "What colors work best besides black and orange?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Try deep burgundy, forest green, midnight purple, charcoal grey, or metallic silver and gold. Pairing unexpected colors creates modern, fashion-forward Halloween nails."
          }
        }
      ]
    };
  }

  if (slug === 'easy-halloween-nail-designs') {
    faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'How long do Halloween nail designs last?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Regular polish Halloween nail designs last 3-5 days with normal wear. Gel polish designs last 2-3 weeks. To extend wear time, apply top coat every 2-3 days and wear gloves when cleaning or doing dishes.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What are the easiest Halloween nail designs for beginners?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'The easiest Halloween nail designs for beginners include simple ghost faces (white base with black dots), solid orange pumpkin nails with vertical lines, black cat silhouettes, candy corn stripes, and basic dot patterns. These require only basic nail polish and a toothpick for detail work.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How do I make my Halloween nails last longer?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'To make Halloween nails last longer: properly prep nails by buffing and cleaning, apply thin coats of polish, let each layer dry completely, use quality base and top coats, reapply top coat every 2-3 days, and wear gloves when doing wet tasks. Gel polish lasts significantly longer than regular polish.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Can I do Halloween nails at home without special tools?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes, you can create most Halloween nail designs at home using only regular nail polish and a toothpick. A toothpick works as a dotting tool and detail brush for simple designs. For more options, invest in basic nail art brushes ($10), dotting tools ($5), and striping tape ($3).'
          }
        },
        {
          '@type': 'Question',
          'name': 'What nail polish colors are best for Halloween?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'The best nail polish colors for Halloween are orange, black, deep purple, burgundy red, and white. These classic colors can be combined to create hundreds of Halloween designs. In 2025, adding chrome finishes and metallic accents to traditional Halloween colors is trending.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How much do Halloween nails cost at a salon?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Halloween nails at a salon typically cost $45-65 for basic designs with gel polish, and $80-120 for intricate designs with 3D elements. DIY Halloween nails at home cost $20-30 in supplies that last for multiple manicures, making it a more budget-friendly option.'
          }
        },
        {
          '@type': 'Question',
          'name': 'When should I get my Halloween nails done?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Get Halloween nails done 3-5 days before your event if using gel or acrylics, or 1-2 days before if using regular polish. This timing allows nails to settle and any issues to appear before your event, giving you time to fix problems if needed.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How do I remove Halloween nail art without damaging my nails?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Remove regular Halloween nail polish with acetone and cotton balls after 30 seconds of contact. For gel polish, soak acetone-soaked cotton wrapped in foil for 10-15 minutes, then gently scrape off. Never peel off gel polish as it damages the nail bed. Apply cuticle oil after removal.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What are good Halloween nail ideas for short nails?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Good Halloween nail designs for short nails include simple dots (ghosts, pumpkins), minimalist lines like corner spiderwebs, solid colors with one accent nail, stamping plates, and nail stickers. Short nails work best with bold, simple designs rather than detailed scenes.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Do I need special tools for Halloween nail art?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'No special tools are required for basic Halloween nail art. You only need regular nail polish, a toothpick, and patience. Optional affordable tools include thin nail art brushes ($3), dotting tools ($5), striping tape ($3), and nail art pens ($5) for under $20 total.'
          }
        }
      ]
    };
  }

  return (
    <>
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      {/* FAQ Schema (if applicable) */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      
      <BlogPost post={post} />
    </>
  );
}
