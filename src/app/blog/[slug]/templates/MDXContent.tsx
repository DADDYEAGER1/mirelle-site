import { MDXRemote } from 'next-mdx-remote/rsc';
import ProductGrid from '@/components/Blog/ProductGrid';
import { Product } from '@/types/blog';

interface MDXContentProps {
  source: string;
  products: Product[];
}

export default function MDXContent({ source, products }: MDXContentProps) {
  console.log('MDXContent products received:', products?.length);
  const mdxComponents = {
    ProductGrid: (props: any) => (
      <ProductGrid {...props} products={products} />
    ),
  };

  return (
    <MDXRemote
      source={source}
      components={mdxComponents}
    />
  );
}