// src/components/Homepage/SubscribeSection.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function SubscribeSection() {
  return (
    <section className="bg-white">
      {/* Top Line */}
      <div className="w-full h-[1px] bg-border-color" />
      
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-between px-8 lg:px-16 py-6">
        {/* Left: Image */}
        <div className="flex-shrink-0">
          <Image
            src="/images/vogue-magazine.jpg"
            alt="Vogue Magazine"
            width={60}
            height={60}
            className="object-cover"
          />
        </div>
        
        {/* Center: Text */}
        <div className="flex-1 text-center px-8">
          <p className="font-body italic text-foreground text-lg">
            Elevate the Season with Vogue
          </p>
        </div>
        
        {/* Right: Button */}
        <div className="flex-shrink-0">
          <Link 
            href="/subscribe"
            className="bg-foreground text-white px-6 py-3 font-product text-sm uppercase tracking-wider hover:opacity-80 transition-opacity"
          >
            SUBSCRIBE NOW
          </Link>
        </div>
      </div>
      
      {/* Mobile Layout - Vertical Stack */}
      <div className="md:hidden flex flex-col items-center py-6 px-6 space-y-4">
        {/* Image */}
        <div>
          <Image
            src="/images/vogue-magazine.jpg"
            alt="Vogue Magazine"
            width={50}
            height={50}
            className="object-cover"
          />
        </div>
        
        {/* Text */}
        <div className="text-center">
          <p className="font-body italic text-foreground text-base">
            Elevate the Season with Vogue
          </p>
        </div>
        
        {/* Button */}
        <div>
          <Link 
            href="/subscribe"
            className="bg-foreground text-white px-5 py-2.5 font-product text-xs uppercase tracking-wider hover:opacity-80 transition-opacity inline-block"
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