// src/components/Homepage/SubscribeSection.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function SubscribeSection() {
  return (
    <section className="bg-white">
      {/* Top Line */}
      <div className="w-full h-[1px] bg-border-color" />
      
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-center gap-8 px-8 lg:px-16 py-6">
        {/* Image */}
        <div className="flex-shrink-0">
          <Image
            src="/images/vogue-magazine.jpg"
            alt="Mirellé Magazine"
            width={60}
            height={60}
            className="object-cover"
          />
        </div>
        
        {/* Text */}
        <div className="flex-shrink-0">
          <p className="font-body text-foreground text-lg">
            Elevate the Season with <span className="italic">Mirellé</span>
          </p>
        </div>
        
        {/* Button */}
        <div className="flex-shrink-0">
          <Link 
            href="/subscribe"
            className="bg-foreground text-white px-6 py-3 font-product text-sm uppercase tracking-wider hover:opacity-80 transition-opacity"
          >
            SUBSCRIBE NOW
          </Link>
        </div>
      </div>
      
      {/* Mobile Layout - Horizontal with Image Left */}
      <div className="md:hidden flex items-center py-6 px-6 gap-4">
        {/* Image */}
        <div className="flex-shrink-0">
          <Image
            src="/images/vogue-magazine.jpg"
            alt="Mirellé Magazine"
            width={50}
            height={50}
            className="object-cover"
          />
        </div>
        
        {/* Text and Button */}
        <div className="flex flex-col gap-3">
          {/* Text */}
          <p className="font-body text-foreground text-sm">
            Elevate the Season with <span className="italic">Mirellé</span>
          </p>
          
          {/* Button */}
          <Link 
            href="/subscribe"
            className="bg-foreground text-white px-5 py-2.5 font-product text-xs uppercase tracking-wider hover:opacity-80 transition-opacity inline-block text-center"
          >
            SUBSCRIBE NOW
          </Link>
        </div>
      </div>
      
      {/* Bottom Line */}
      <div className="w-full h-[1px] bg-border-color" />
    </section>
  );
}
