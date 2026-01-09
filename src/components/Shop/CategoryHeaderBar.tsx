'use client';

interface CategoryHeaderBarProps {
  categoryName: string;
  totalItems: number;
}

export default function CategoryHeaderBar({
  categoryName,
  totalItems,
}: CategoryHeaderBarProps) {
  return (
    <div className="w-full border-t border-b border-gray-200 bg-background py-6">
      <div className="container-wide">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-product text-sm uppercase tracking-widest">
            Category: {categoryName}
          </h2>
          <span className="font-product text-sm">
            {totalItems} <span className="uppercase tracking-wider">Styles</span>
          </span>
        </div>

        {/* Disclaimer */}
        <p className="font-body text-xs text-foreground/70 leading-relaxed border-t border-gray-200 pt-4">
          All products featured on Mirellé are independently selected by our editors. 
          However, we may receive compensation from retailers and/or from purchases of 
          products through these links.
        </p>
      </div>
    </div>
  );
}