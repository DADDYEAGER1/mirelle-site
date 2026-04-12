import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  currentPage: string;
  includeSchema?: boolean; // Default true for non-blog pages
}

export default function Breadcrumbs({ items, currentPage, includeSchema = true }: BreadcrumbsProps) {
  const baseUrl = 'https://mirelleinspo.com';
  
  // Generate JSON-LD Schema for Google (only if includeSchema is true)
  let breadcrumbSchema = null;
  
  if (includeSchema) {
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
        // NO "item" property for current page (Google spec requirement)
      }
    ];

    breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": schemaItems
    };
  }

  return (
    <>
      {/* JSON-LD Structured Data (only for non-blog pages) */}
      {includeSchema && breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema)
          }}
        />
      )}

      {/* Visual Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          {/* Home Link */}
          <li>
            <Link 
              href="/" 
              className="text-gray-600 hover:text-blush-400 transition-colors"
            >
              Home
            </Link>
          </li>

          {/* Dynamic Breadcrumb Items */}
          {items.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              <span className="text-gray-400">/</span>
              <Link 
                href={item.href} 
                className="text-gray-600 hover:text-blush-400 transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}

          {/* Current Page (not linked) */}
          <li className="flex items-center space-x-2">
            <span className="text-gray-400">/</span>
            <span className="text-gray-800 font-medium" aria-current="page">
              {currentPage}
            </span>
          </li>
        </ol>
      </nav>
    </>
  );
}
