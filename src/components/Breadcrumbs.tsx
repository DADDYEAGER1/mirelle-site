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
  return (
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
  );
}
