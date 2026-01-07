import { BlogPost } from '@/types/blog';
import Breadcrumbs from '@/components/Breadcrumbs';
import ImageCarousel from '@/components/Blog/ImageCarousel';
import ProductGrid from '@/components/Blog/ProductGrid';
import InlineNewsletter from '@/components/Blog/InlineNewsletter';
import AboutEEAT from '@/components/Blog/AboutEEAT';
import FinalNewsletter from '@/components/Blog/FinalNewsletter';
import ReadMoreSection from '@/components/Blog/ReadMoreSection';

interface CenterTemplateProps {
  post: BlogPost;
}

export default function CenterTemplate({ post }: CenterTemplateProps) {
  const contentSections = post.content.split(/(<h2[^>]*>)/);
  const totalSections = Math.ceil(contentSections.length / 2);
  
  const section1End = Math.max(2, Math.floor(totalSections * 0.25) * 2);
  const section2End = Math.max(4, Math.floor(totalSections * 0.5) * 2);
  const section3End = Math.max(6, Math.floor(totalSections * 0.75) * 2);
  
  const firstSection = contentSections.slice(0, section1End).join('');
  const middleSection = contentSections.slice(section1End, section2End).join('');
  const moreContent = contentSections.slice(section2End, section3End).join('');
  const remainingContent = contentSections.slice(section3End).join('');

  return (
    <div className="min-h-screen bg-background">
      {/* Inline Newsletter */}
      <div className="w-full">
        <InlineNewsletter />
      </div>

      {/* Hero Section */}
      <div className="w-full">
        {/* Metadata Section with brand background */}
        <div className="text-center py-12 md:py-16 px-6" style={{ backgroundColor: '#f9fafb' }}>
          {post.category && (
            <p className="font-ui text-sm uppercase tracking-wider text-gray-600 mb-4">
              {post.category}
            </p>
          )}
          <h1 className="font-heading text-[36px] md:text-[42px] leading-tight mb-6" style={{ color: '#252220' }}>
            {post.title}
          </h1>
          <p className="font-ui text-sm uppercase tracking-wide mb-2" style={{ color: '#252220' }}>
            BY {post.author}
          </p>
          <p className="font-ui text-sm text-gray-600">
            {new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        {/* Hero Image - Full Width */}
        <div className="w-full">
          <img
            src={post.image}
            alt={post.imageAlt || post.title}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Article Content - CENTERED on page, content left-aligned within container */}
      <div className="w-full flex flex-col items-center">
        {/* Narrow content container */}
        <div className="w-full max-w-[700px] px-6 md:px-12 lg:px-16 mt-12">
          
          {/* Breadcrumbs */}
          <div className="mb-8">
            <Breadcrumbs
              items={[{ label: 'Blog', href: '/blog' }]}
              currentPage={post.title}
              includeSchema={false}
            />
          </div>

          {/* Article Content - 20px font, left-aligned text */}
          <article className="prose-content-magazine">
            <div dangerouslySetInnerHTML={{ __html: firstSection }} />

            {post.carouselImages && post.carouselImages.length > 0 && (
              <div className="my-12">
                <ImageCarousel images={post.carouselImages} />
              </div>
            )}

            <div dangerouslySetInnerHTML={{ __html: middleSection }} />

            {post.products && post.products.length > 0 && (
              <div className="my-12">
                <ProductGrid products={post.products} layout="dual" />
              </div>
            )}

            <div dangerouslySetInnerHTML={{ __html: moreContent }} />
          </article>
        </div>

        {/* Break out - Full width newsletter */}
        <div className="w-full my-12">
          <InlineNewsletter />
        </div>

        {/* Resume narrow content container */}
        <div className="w-full max-w-[700px] px-6 md:px-12 lg:px-16">
          <article className="prose-content-magazine">
            <div dangerouslySetInnerHTML={{ __html: remainingContent }} />
          </article>
        </div>
      </div>

      {/* End Sections */}
      <AboutEEAT />
      <FinalNewsletter />
      <ReadMoreSection currentSlug={post.slug} />
    </div>
  );
}