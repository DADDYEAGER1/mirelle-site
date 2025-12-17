// src/components/Inspo/AboutSection.tsx
'use client';

import { useState } from 'react';

interface AboutSectionProps {
  title: string;
  content: string | React.ReactNode;
  defaultExpanded?: boolean;
}

export default function AboutSection({ 
  title, 
  content, 
  defaultExpanded = false 
}: AboutSectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <section className="bg-gradient-to-br from-cream-50 to-white py-16 border-y border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between group"
          aria-expanded={isExpanded}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 text-left group-hover:text-accent/80 transition-colors">
            {title}
          </h2>
          <div className={`flex-shrink-0 ml-4 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-all duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
            <svg className="w-6 h-6 text-accent/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>

        <div 
          className={`grid transition-all duration-500 ease-in-out ${
            isExpanded ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              {typeof content === 'string' ? (
                <div dangerouslySetInnerHTML={{ __html: content }} />
              ) : (
                content
              )}
            </div>
            
            {/* Read More indicator when collapsed */}
            {!isExpanded && (
              <div className="mt-4 text-center">
                <button
                  onClick={() => setIsExpanded(true)}
                  className="text-accent/80 hover:text-accent font-semibold text-sm flex items-center gap-2 mx-auto group"
                >
                  <span>Read More</span>
                  <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// Category-specific about content generator
export function generateCategoryAbout(categorySlug: string): string {
  const aboutContent: { [key: string]: string } = {
    'almond-nails-2026': `
      <p class="mb-4">Almond nails have emerged as the quintessential nail shape for 2026, combining timeless elegance with modern versatility. This gracefully tapered shape elongates fingers naturally while providing a perfect canvas for trending nail art techniques including chrome finishes, cat-eye effects, and the viral aura nail trend.</p>
      
      <p class="mb-4">The almond shape works beautifully for professionals seeking office-appropriate nail designs without sacrificing style. Unlike dramatic stiletto or coffin shapes, almond nails offer practical length while maintaining sophisticated appearance. The soft taper prevents snagging and allows comfortable typing, making them ideal for healthcare workers, teachers, and corporate professionals.</p>
      
      <p class="mb-4">Current 2026 trends favor shorter, healthier almond lengths over extreme extensions. The quiet luxury aesthetic dominates with milky white bases, nude chrome, and soft shimmer effects. Soft tapered almonds paired with minimalist line art or single accent nails create elevated everyday looks. For special occasions, almond nails showcase dimensional chrome, velvet cat-eye, and multi-color aura effects beautifully.</p>
      
      <p class="mb-4">Achieving perfect almond shape requires filing sides at gentle angle toward center tip. Professional nail technicians recommend starting with square shape, then carefully filing corners to create smooth taper. The key is maintaining symmetry between both sides while keeping tip rounded rather than pointed. Regular maintenance every 2-3 weeks preserves ideal almond shape and prevents chips.</p>
      
      <p>Whether you prefer natural nails, gel extensions, or acrylic applications, almond shape flatters all finger types and skin tones. This universally flattering nail shape continues trending throughout 2026 as the perfect balance between elegance and practicality.</p>
    `,
    'coffin-ballerina-nails-2026': `
      <p class="mb-4">Coffin nails, also known as ballerina nails, continue dominating fashion-forward nail trends in 2026 with their bold, dramatic silhouette. This distinctive shape features straight sides that taper to a flat, squared tip—creating striking statement nails perfect for showcasing intricate nail art, 3D embellishments, and trending finishes.</p>
      
      <p class="mb-4">The subtle difference between coffin and ballerina shapes lies in the tip softness. Coffin nails feature sharper, more defined squared edges, while ballerina nails have slightly softer, rounded corners. Both variations provide extended nail bed canvas ideal for complex designs including glass effects, chrome finishes, gothic elegance, and jeweled accents trending on runways and social media.</p>
      
      <p class="mb-4">Spring 2026 fashion weeks showcase coffin nails in trending finishes: rose gold chrome, lavender velvet, champagne beige, and dramatic black with metallic accents. The shape's flat tip provides stable surface for 3D pearl embellishments, rhinestone clusters, and sculptural nail art. Coffin nails excel at displaying ombré gradients, with color transitions appearing more dramatic than on rounded shapes.</p>
      
      <p class="mb-4">Creating perfect coffin shape requires medium to long nail length for best results. File nails straight along sides, then file tip straight across before softening corners slightly for ballerina variation. Professional application ensures structural integrity, as coffin nails need proper reinforcement to prevent breakage at the squared tip. Gel or acrylic extensions work best for achieving and maintaining this shape.</p>
      
      <p>Coffin nails suit confident personalities who embrace bold fashion statements. While less practical for typing-intensive work, they're perfect for special occasions, creative professionals, and Instagram-worthy nail art. The dramatic silhouette continues trending in 2026 as ultimate statement nail shape.</p>
    `,
    'valentine-nails-2026': `
      <p class="mb-4">Valentine's Day nail designs in 2026 transcend traditional pink and red palettes, embracing innovative techniques and modern romantic aesthetics. The season's trending looks include aura hearts with soft gradient halos, 3D pearl embellishments, and coquette-inspired designs featuring delicate bows and feminine details.</p>
      
      <p class="mb-4">Aura nails have revolutionized Valentine's nail art, creating ethereal heart designs with multiple color halos that glow from within. This Northern Lights-inspired technique uses 2-3 complementary shades blended around heart motifs, creating dimensional romantic effects. Popular color combinations include soft pink to burgundy, nude to red, and unconventional pairings like burgundy to lavender for modern edge.</p>
      
      <p class="mb-4">The coquette aesthetic brings romantic femininity to Valentine's nails through pearl embellishments, ribbon bows, and delicate lace-inspired details. This trend pairs beautifully with sheer pink bases, glazed finishes, and subtle shimmer. For those seeking edgier Valentine's looks, jelly red nails with black heart accents offer contemporary twist, while chrome glazed finishes add modern luxe to classic romantic designs.</p>
      
      <p class="mb-4">Beyond traditional February 14th celebrations, Valentine's nail designs work beautifully for anniversaries, date nights, bridal showers, and romantic getaways. The versatile aesthetic ranges from subtle nude bases with single heart accents (office-appropriate) to dramatic full-set red with 3D embellishments (special occasions). Medium length almond or coffin shapes showcase Valentine's designs most effectively.</p>
      
      <p>Valentine's nails in 2026 celebrate love through artistic expression, combining classic romance with innovative nail art techniques. Whether you prefer subtle elegance or bold romantic statements, this season offers endless inspiration for expressing love through beautiful nail art.</p>
    `,
    'ombre-gradient-nails-2026': `
      <p class="mb-4">Ombré and gradient nail designs dominate 2026 trends with viral aura nails leading the aesthetic revolution. This technique creates seamless color transitions from light to dark, multiple color halos, or horizontal gradient effects—offering endless creative possibilities for nail artists and enthusiasts alike.</p>
      
      <p class="mb-4">The aura nail trend, dubbed "Northern Lights nails," creates multi-dimensional glowing effects using 2-4 complementary colors blended in concentric halos. This ethereal technique works beautifully with sunset palettes (orange-pink-purple), galaxy themes (navy-purple-pink), and nature-inspired combinations (sage-mint-cream). The dimensional glow effect catches light beautifully, creating dynamic look that changes with movement and lighting.</p>
      
      <p class="mb-4">Neon ombré brings electric energy to gradient nails with glowing color transitions perfect for festivals, parties, and bold fashion statements. Meanwhile, iced French ombré combines classic French tips with frosted gradient, creating sophisticated look suitable for professionals and brides. Vertical gradients elongate shorter nails visually, making them flattering choice for those preferring practical lengths.</p>
      
      <p class="mb-4">Creating flawless ombré requires makeup sponge technique for smoothest blends. Apply 2-3 polish colors side-by-side on dense sponge, then dab onto nails in bouncing motion, blending where colors meet. Multiple thin layers build opacity while maintaining smooth transitions. Finish with glossy top coat to blend any remaining texture and enhance color vibrancy.</p>
      
      <p>Whether you prefer subtle two-tone gradients or dramatic rainbow ombré, this versatile technique suits all nail shapes, lengths, and occasions. The forgiving nature of gradient designs makes them perfect for DIY nail enthusiasts while offering professional nail artists endless creative opportunities.</p>
    `,
    'french-tip-nails-2026': `
      <p class="mb-4">French tip nails experience sophisticated renaissance in 2026 with micro whisper-thin lines emerging as the quiet luxury trend for discerning professionals and minimalist enthusiasts. Moving beyond traditional white tips, contemporary French manicures embrace colored tips, asymmetrical designs, and innovative variations that honor the classic while embracing modern aesthetics.</p>
      
      <p class="mb-4">Micro French tips, featuring barely-there 1-2mm tip lines, represent the epitome of understated elegance. This refined approach works perfectly for conservative workplaces, healthcare professionals, and anyone seeking elevated manicure that whispers rather than shouts. Micro tips pair beautifully with nude, sheer pink, or milky white bases, creating lengthening effect while maintaining professional appropriateness.</p>
      
      <p class="mb-4">Colored French tips revolutionize the traditional manicure with chrome pink, chocolate brown, navy blue, sage green, and dramatic black replacing classic white. These contemporary interpretations allow personal style expression while maintaining the elegant French tip silhouette. Double-line French creates geometric frames, outline French adds dimensional depth, and asymmetrical diagonal tips bring modern edge to the classic look.</p>
      
      <p class="mb-4">Application techniques have evolved with striping tape ensuring perfectly straight lines, stamping plates creating intricate tip designs, and gel polish providing 2-3 week wear. For special occasions, glitter French tips add sparkle, ombré French creates soft color transitions, and embellished French incorporates pearls or rhinestones for luxury aesthetic.</p>
      
      <p>French tips remain timelessly versatile choice suitable for brides, professionals, and classic elegance seekers. The technique's adaptability allows customization for any occasion—from barely-there micro tips for daily wear to dramatic colored or embellished tips for special events. In 2026, French tips prove that classics evolve while maintaining their essential sophistication.</p>
    `
  };

  return aboutContent[categorySlug] || aboutContent['almond-nails-2026'];
}