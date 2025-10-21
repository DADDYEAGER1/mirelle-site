import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  currentPage: string;
}

export default function Breadcrumbs({ items, currentPage }: BreadcrumbsProps) {
  // Generate JSON-LD Schema for Google
  const baseUrl = 'https://mirelleinspo.com';
  
  const schemaItems = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": baseUrl
    },
    ...items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 2,
      "name": item.label,
      "item": `${baseUrl}${item.href}`
    })),
    {
      "@type": "ListItem",
      "position": items.length + 2,
      "name": currentPage
      // NO "item" property for current page (Google spec)
    }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": schemaItems
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />

      {/* Visual Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          {/* Home Link */}
          <li>
            <Link 
              href="/" 
              className="text-charcoal-600 hover:text-blush-400 transition-colors"
            >
              Home
            </Link>
          </li>

          {/* Dynamic Breadcrumb Items */}
          {items.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              <span className="text-charcoal-400">/</span>
              <Link 
                href={item.href} 
                className="text-charcoal-600 hover:text-blush-400 transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}

          {/* Current Page (not linked) */}
          <li className="flex items-center space-x-2">
            <span className="text-charcoal-400">/</span>
            <span className="text-charcoal-800 font-medium" aria-current="page">
              {currentPage}
            </span>
          </li>
        </ol>
      </nav>
    </>
  );
}
