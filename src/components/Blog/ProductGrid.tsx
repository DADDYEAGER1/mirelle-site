'use client';

interface Product {
  image: string;
  title: string;
  price: string;
  brand: string;
  url: string;
}

interface ProductGridProps {
  products: Product[];
  layout?: 'single' | 'dual' | 'quad';
}

export default function ProductGrid({ products, layout = 'dual' }: ProductGridProps) {
  // Always use dual layout (2 products per row)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 my-12 md:my-16">
      {products.map((product, index) => (
        <a
          key={index}
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <div className="relative bg-background overflow-hidden">
            {/* Product Image */}
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Product Info */}
            <div className="pt-4">
              <p className="font-ui text-xs uppercase tracking-wide text-gray-500 mb-1">
                {product.brand}
              </p>
              <h3 className="font-ui text-base mb-2 line-clamp-2">
                {product.title}
              </h3>
              <p className="font-ui text-base text-gray-900">
                {product.price}
              </p>
              <div className="mt-3">
                <span className="font-ui text-xs uppercase tracking-wide text-foreground underline">
                  NET-A-PORTER
                </span>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}