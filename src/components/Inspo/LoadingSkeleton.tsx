// src/components/Inspo/LoadingSkeleton.tsx
'use client';

interface LoadingSkeletonProps {
  type?: 'gallery' | 'category-grid' | 'hero' | 'card';
  count?: number;
}

export default function LoadingSkeleton({ type = 'gallery', count = 12 }: LoadingSkeletonProps) {
  // Shimmer animation styles
  const shimmerClass = "animate-pulse bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%]";

  if (type === 'hero') {
    return (
      <div className="relative h-[500px] md:h-[600px] overflow-hidden">
        <div className={`absolute inset-0 ${shimmerClass}`} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4 px-4">
            <div className={`h-12 md:h-16 w-64 md:w-96 mx-auto rounded-2xl ${shimmerClass}`} />
            <div className={`h-6 w-48 md:w-72 mx-auto rounded-lg ${shimmerClass}`} />
            <div className={`h-12 w-40 mx-auto rounded-full ${shimmerClass} mt-6`} />
          </div>
        </div>
      </div>
    );
  }

  if (type === 'category-grid') {
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <div className={`h-8 w-48 mx-auto md:mx-0 rounded-full ${shimmerClass} mb-4`} />
          <div className={`h-12 w-72 mx-auto md:mx-0 rounded-lg ${shimmerClass} mb-4`} />
          <div className={`h-6 w-96 mx-auto md:mx-0 rounded-lg ${shimmerClass}`} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: count }).map((_, index) => (
            <div key={index} className={`h-[450px] rounded-3xl ${shimmerClass}`} />
          ))}
        </div>
      </section>
    );
  }

  if (type === 'card') {
    return (
      <div className="break-inside-avoid mb-4">
        <div className={`rounded-2xl overflow-hidden ${shimmerClass}`}>
          <div className="aspect-[3/4]" />
        </div>
      </div>
    );
  }

  // Default: Gallery masonry skeleton
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Results count skeleton */}
        <div className="mb-8 text-center">
          <div className={`h-6 w-48 mx-auto rounded-lg ${shimmerClass}`} />
        </div>

        {/* Masonry grid skeleton */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {Array.from({ length: count }).map((_, index) => {
            // Randomize heights for realistic masonry look
            const heights = ['aspect-[3/4]', 'aspect-square', 'aspect-[4/5]', 'aspect-[2/3]'];
            const randomHeight = heights[index % heights.length];
            
            return (
              <div key={index} className="break-inside-avoid mb-4">
                <div className={`rounded-2xl overflow-hidden ${shimmerClass}`}>
                  <div className={randomHeight} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Shimmer keyframe animation (add to globals.css)
export const shimmerStyles = `
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.animate-shimmer {
  animation: shimmer 2s infinite linear;
  background: linear-gradient(
    90deg,
    #f3f4f6 0%,
    #e5e7eb 20%,
    #f3f4f6 40%,
    #f3f4f6 100%
  );
  background-size: 200% 100%;
}
`;