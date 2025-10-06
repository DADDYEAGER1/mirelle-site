import { BlogPost } from '@/types/blog';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TutorialStep {
  position: number;
  name: string;
  text: string;
}

export interface TutorialMetadata {
  name: string;
  description: string;
  totalTime: string;
  estimatedCost: {
    currency: string;
    value: string;
  };
  tools: string[];
  supplies: string[];
}

export interface SchemaConfig {
  post: BlogPost;
  slug: string;
  faqItems?: FAQItem[];
  tutorialSteps?: TutorialStep[];
  tutorialMetadata?: TutorialMetadata;
}

export function generateSchemas(config: SchemaConfig) {
  const { post, slug, faqItems, tutorialSteps, tutorialMetadata } = config;
  const baseUrl = 'https://mirelleinspo.com';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: `${baseUrl}${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
      url: `${baseUrl}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Mirellé',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
      },
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${baseUrl}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `${baseUrl}/blog/${slug}`,
      },
    ],
  };

  let faqSchema = null;
  if (faqItems && faqItems.length > 0) {
    faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    };
  }

  let howToSchema = null;
  if (tutorialSteps && tutorialMetadata) {
    howToSchema = {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: tutorialMetadata.name,
      description: tutorialMetadata.description,
      image: `${baseUrl}${post.image}`,
      totalTime: tutorialMetadata.totalTime,
      estimatedCost: tutorialMetadata.estimatedCost,
      tool: tutorialMetadata.tools,
      supply: tutorialMetadata.supplies,
      step: tutorialSteps.map((step) => ({
        '@type': 'HowToStep',
        position: step.position,
        name: step.name,
        text: step.text,
        url: `${baseUrl}/blog/${slug}#step-${step.position}`,
      })),
    };
  }

  return {
    articleSchema,
    breadcrumbSchema,
    faqSchema,
    howToSchema,
  };
}
