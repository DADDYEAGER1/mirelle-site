// src/components/Homepage/SubscribeSection.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function SubscribeSection() {
  return (
    <section className="bg-white pt-8 pb-8">
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-center gap-8 px-3 md:px-6 lg:px-12 py-4">
        {/* Image */}
        <div className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Mirellé Inspo"
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
            className="bg-foreground text-white px-6 py-3 font-ui text-sm uppercase tracking-wider hover:opacity-80 transition-opacity"
          >
            SUBSCRIBE NOW
          </Link>
        </div>
      </div>
      
      {/* Mobile Layout - Horizontal with Image Left */}
      <div className="md:hidden flex items-center justify-center py-4 px-3 gap-3">
        {/* Image */}
        <div className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Mirellé Magazine"
            width={45}
            height={45}
            className="object-cover"
          />
        </div>
        
        {/* Text and Button */}
        <div className="flex flex-col gap-2.5">
          {/* Text */}
          <p className="font-body text-foreground text-sm leading-tight">
            Elevate the Season with <span className="italic">Mirellé</span>
          </p>
          
          {/* Button */}
          <Link 
            href="/subscribe"
            className="bg-foreground text-white px-4 py-2 font-ui text-xs uppercase tracking-wider hover:opacity-80 transition-opacity inline-block text-center"
          >
            SUBSCRIBE NOW
          </Link>
        </div>
      </div>
    </section>
  );
}
