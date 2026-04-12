'use client';

import HeroCarousel from './HeroCarousel';

interface CategoryHeroProps {
  title: string;
  description: string;
  carouselImages: Array<{
    url: string;
    name: string;
  }>;
}

export default function CategoryHero({
  title,
  description,
  carouselImages,
}: CategoryHeroProps) {
  return (
    <section className="w-full bg-background pt-20 pb-16 sm:pt-24 sm:pb-20">
      <div className="container-standard">
        {/* Title & Description */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-[36px] sm:text-[42px] leading-tight tracking-tight mb-4">
            {title}
          </h1>
          <p className="font-body text-base sm:text-lg text-foreground/80 max-w-[800px] mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Carousel */}
        <HeroCarousel images={carouselImages} />
      </div>
    </section>
  );
}