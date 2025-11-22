// src/lib/faqSchemas.ts
import type { DesignData } from '@/types/inspo';

interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(designData: DesignData) {
  const faqs = getFAQsForCategory(designData);
  
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

function getFAQsForCategory(designData: DesignData): FAQItem[] {
  const categoryName = designData.displayName.toLowerCase();
  
  // Base FAQs that apply to all categories
  const baseFAQs: FAQItem[] = [
    {
      question: `What nail shapes work best for ${categoryName}?`,
      answer: `Almond, oval, and square shapes showcase ${categoryName} beautifully. Almond and oval shapes elongate fingers, while square provides a classic, clean look. Choose based on your natural nail shape and lifestyle preferences.`
    },
    {
      question: `How long do ${categoryName} last?`,
      answer: `With proper application using gel polish, ${categoryName} typically last 2-3 weeks. Regular polish lasts 5-7 days. Using a quality base coat, top coat, and avoiding harsh chemicals helps extend wear time significantly.`
    },
    {
      question: `Can I create ${categoryName} at home?`,
      answer: `Yes! ${categoryName} can be achieved at home with the right tools and practice. Start with simpler designs and work your way up to more complex techniques. Quality nail tools and steady hands are key to success.`
    },
    {
      question: `What's the best way to maintain ${categoryName}?`,
      answer: `Apply cuticle oil daily, wear gloves when doing dishes or cleaning, avoid using nails as tools, and touch up the top coat every 3-4 days. Keep nails hydrated and protected from harsh chemicals for best results.`
    },
    {
      question: `How much does it cost to get ${categoryName} at a salon?`,
      answer: `Salon prices for ${categoryName} typically range from $40-80 for basic designs with regular polish, $60-100 for gel, and $80-150+ for intricate nail art with embellishments. Prices vary by location and salon expertise.`
    },
  ];

  // Category-specific FAQs
  const categorySpecificFAQs = getCategorySpecificFAQs(designData.slug, categoryName);
  
  return [...baseFAQs, ...categorySpecificFAQs];
}

function getCategorySpecificFAQs(slug: string, categoryName: string): FAQItem[] {
  const specificFAQs: { [key: string]: FAQItem[] } = {
    'snowflake-winter-nails': [
      {
        question: 'How do I create detailed snowflake designs?',
        answer: 'Use a thin nail art brush or dotting tool for hand-painted snowflakes. Stamping plates offer quick, precise results. For 3D effects, apply small rhinestones or use snowflake nail stickers. Practice on paper first to perfect your technique.'
      },
      {
        question: 'What colors work best for snowflake nails?',
        answer: 'Classic white snowflakes on icy blue, navy, or nude bases are timeless. Silver and holographic glitters add sparkle. Pastel blues and pinks create soft winter vibes. Dark bases like burgundy or forest green make white snowflakes pop dramatically.'
      },
      {
        question: 'Are snowflake nails only for winter?',
        answer: 'While traditionally winter designs, snowflake nails work year-round for special occasions like winter weddings, holiday parties, or ski vacations. The design is versatile enough to wear whenever you want elegant, detailed nail art.'
      },
    ],
    'chrome-metallic-winter-nails': [
      {
        question: 'How do I apply chrome powder at home?',
        answer: 'Apply gel base coat and cure, then no-wipe gel top coat and cure. While slightly tacky, rub chrome powder using a silicone applicator or eyeshadow brush in circular motions. Seal with no-wipe top coat and cure. Buffing nails smooth beforehand ensures mirror finish.'
      },
      {
        question: 'Why does my chrome look dull or patchy?',
        answer: 'Common causes include rough nail surface (buff smooth first), thick top coat layer (use thin coat), or rubbing powder too hard. Ensure gel is fully cured before powder application and use quality chrome powder for best results.'
      },
      {
        question: 'What is aurora chrome and how is it different?',
        answer: 'Aurora chrome creates shifting rainbow effects versus traditional single-color mirror finish. It uses special pigments that reflect multiple colors depending on light angle, creating holographic, oil-slick, or pearl-like iridescent effects popular in 2025.'
      },
    ],
    'burgundy-wine-winter-nails': [
      {
        question: 'What skin tones look best with burgundy nails?',
        answer: 'Burgundy is universally flattering! Fair skin tones shine with true burgundy or oxblood. Medium tones glow with wine red or merlot shades. Deep skin tones look stunning in rich mahogany or cranberry burgundy. All skin tones benefit from this elegant color.'
      },
      {
        question: 'How do I make burgundy nails look more professional?',
        answer: 'Choose glossy finishes over matte for classic elegance. Keep nail length moderate (not too long). Avoid excessive embellishments. Pair with neutral or gold accents rather than bright colors. Burgundy French tips offer professional sophistication with subtle flair.'
      },
      {
        question: 'Can I wear burgundy nails in summer?',
        answer: 'Absolutely! While burgundy peaks in winter, lighter wine shades work beautifully year-round. Pair with rose gold accents in spring, coral undertones in summer, and darker oxblood shades in fall. Burgundy is a timeless, versatile color for any season.'
      },
    ],
    'chocolate-brown-winter-nails': [
      {
        question: 'Why are brown nails trending in 2025?',
        answer: 'Pantone named Mocha Mousse as 2025 Color of the Year, driving the brown nail trend. Fashion runways from Miu Miu to Bottega Veneta featured chocolate and espresso tones. Brown offers sophisticated neutral alternative to traditional nudes, perfect for quiet luxury aesthetic.'
      },
      {
        question: 'What shades of brown are most popular?',
        answer: 'Mocha mousse (warm taupe-brown), chocolate brown, espresso (dark brown), caramel (light golden brown), and cocoa (medium brown) are trending. Hazelnut and milk chocolate tones offer softer options. Each shade complements different skin tones and occasions.'
      },
      {
        question: 'Do brown nails look good on short nails?',
        answer: 'Yes! Brown nails are stunning on short nails and create sophisticated, low-maintenance look perfect for professionals. Lighter mocha shades elongate short nails visually. Brown works on any nail length from natural short nails to long stiletto shapes.'
      },
    ],
    'velvet-cat-eye-winter-nails': [
      {
        question: 'How does magnetic polish create cat eye effect?',
        answer: 'Cat eye polish contains metallic particles. When you hold a magnet over wet polish before curing (for gel) or drying (for regular), particles align creating light-reflecting stripe resembling cat's eye. Different magnet positions create various patterns.'
      },
      {
        question: 'What is velvet nail finish and how do I get it?',
        answer: 'Velvet finish creates plush, dimensional texture using magnetic gel polish or special matte top coats over metallic bases. For true velvet effect, use blooming gel technique where one gel color disperses through another creating soft, fabric-like appearance.'
      },
      {
        question: 'Can I do cat eye nails without gel?',
        answer: 'Yes! Regular magnetic nail polish works without UV lamp. Apply polish, hold magnet close (not touching) for 15-30 seconds while wet, then let dry completely. Gel gives longer-lasting, more dramatic effect, but regular polish works for trying the trend.'
      },
    ],
    'minimalist-winter-nails': [
      {
        question: 'What makes a nail design minimalist?',
        answer: 'Minimalist nails feature clean lines, negative space, subtle colors, and sparse design elements. Think single line art, tiny dots, micro French tips, or one delicate accent nail. Less is more philosophy creates sophisticated, understated elegance perfect for professionals.'
      },
      {
        question: 'Are minimalist nails easier to maintain?',
        answer: 'Yes! Minimalist designs typically use neutral colors that show less chipping, require fewer touch-ups, and have simpler designs that last longer. Perfect for busy lifestyles. Small imperfections are less noticeable compared to bold, intricate nail art.'
      },
      {
        question: 'What is negative space nail art?',
        answer: 'Negative space uses bare nail (natural or nude polish) as part of design intentionally. Instead of full coverage, sections remain unpainted creating geometric patterns, line art, or modern French tips. Creates airy, sophisticated look embracing natural nail beauty.'
      },
    ],
  };

  return specificFAQs[slug] || [];
}

export function generateArticleSchema(designData: DesignData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${designData.displayName} - Winter Nail Design Inspiration 2025`,
    image: designData.heroImage.startsWith('/')
      ? `https://mirelleinspo.com${designData.heroImage}`
      : designData.heroImage,
    author: {
      '@type': 'Organization',
      name: 'Mirellé Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Mirellé',
      logo: {
        '@type': 'ImageObject',
        url: 'https://mirelleinspo.com/logo.png',
      },
    },
    datePublished: '2025-11-23T08:00:00+00:00',
    dateModified: new Date().toISOString(),
    mainEntityOfPage: `https://mirelleinspo.com/inspo/${designData.slug}`,
    description: designData.seo.description,
  };
}

export function generateHowToSchema(designData: DesignData) {
  const categoryName = designData.displayName.toLowerCase();
  
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to Create ${designData.displayName}`,
    description: `Step-by-step guide to creating beautiful ${categoryName} at home or salon.`,
    image: designData.heroImage.startsWith('/')
      ? `https://mirelleinspo.com${designData.heroImage}`
      : designData.heroImage,
    totalTime: 'PT45M',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '60',
    },
    supply: [
      {
        '@type': 'HowToSupply',
        name: 'Base coat',
      },
      {
        '@type': 'HowToSupply',
        name: 'Nail polish or gel',
      },
      {
        '@type': 'HowToSupply',
        name: 'Top coat',
      },
      {
        '@type': 'HowToSupply',
        name: 'Nail art tools',
      },
    ],
    tool: [
      {
        '@type': 'HowToTool',
        name: 'Nail file and buffer',
      },
      {
        '@type': 'HowToTool',
        name: 'Cuticle pusher',
      },
      {
        '@type': 'HowToTool',
        name: 'Detail brushes',
      },
    ],
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Prep nails',
        text: 'File nails to desired shape, push back cuticles, buff surface smooth, and clean with alcohol to remove oils.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Apply base coat',
        text: 'Apply thin layer of base coat to protect natural nails and improve polish adhesion. Let dry completely.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Apply color',
        text: `Apply ${categoryName} design using chosen technique. Work with thin layers, allowing each coat to dry before adding next.`,
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Add details',
        text: 'Add any embellishments, nail art, or finishing touches specific to the design. Take your time for precise results.',
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Seal with top coat',
        text: 'Apply glossy or matte top coat to seal design and add shine. Cap the free edge to prevent chipping.',
      },
    ],
  };
}
