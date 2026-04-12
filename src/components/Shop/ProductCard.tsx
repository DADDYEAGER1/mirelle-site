'use client';

import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
  imageAlt?: string;
  brand?: string;
  categorySlug: string;
  productSlug?: string;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  imageAlt,
  brand,
  categorySlug,
  productSlug,
}: ProductCardProps) {
  const productUrl = productSlug 
    ? `/shop/${categorySlug}/${productSlug}`
    : `/shop/${categorySlug}#${id}`;

  return (
    <Link
      href={productUrl}
      className="group block"
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 mb-3">
        <Image
          src={image}
          alt={imageAlt || name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>

      {/* Info */}
      <div className="space-y-1">
        {/* Brand */}
        {brand && (
          <p className="font-body text-xs uppercase tracking-widest text-foreground/60">
            {brand}
          </p>
        )}

        {/* Product Name */}
        <h3 className="font-product text-base leading-tight text-foreground line-clamp-2">
          {name}
        </h3>

        {/* Price */}
        <p className="font-product text-base font-semibold text-foreground">
          {price}
        </p>

        {/* CTA Link */}
        <span className="inline-block font-body text-sm text-foreground underline underline-offset-2 group-hover:opacity-70 transition-opacity">
          Shop Now
        </span>
      </div>
    </Link>
  );
}