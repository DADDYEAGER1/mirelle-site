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
  // Split content by <h2> tags to preserve HTML structure
  const contentSections = post.content.split(/(<h2[^>]*>)/);
  const totalSections = Math.ceil(contentSections.length / 2);
  
  // Calculate insertion points (sections are pairs: text + h2)
  const section1End = Math.max(2, Math.floor(totalSections * 0.25) * 2);
  const section2End = Math.max(4, Math.floor(totalSections * 0.5) * 2);
  const section3End = Math.max(6, Math.floor(totalSections * 0.75) * 2);
  
  const firstSection = contentSections.slice(0, section1End).join('');
  const middleSection = contentSections.slice(section1End, section2End).join('');
  const moreContent = contentSections.slice(section2End, section3End).join('');
  const remainingContent = contentSections.slice(section3End).join('');

  return (
    <div className="min-h-screen bg-background">
      {/* Inline Newsletter - NO PADDING, FULL WIDTH */}
      <div className="w-full">
        <InlineNewsletter />
      </div>

      {/* Hero Section - NO PADDING, FULL WIDTH */}
      <div className="w-full">
        {/* Metadata Section */}
        <div className="text-center py-12 md:py-16 px-6 bg-gray-50">
          {post.category && (
            <p className="font-ui text-sm uppercase tracking-wider text-gray-600 mb-4">
              {post.category}
            </p>
          )}
          <h1 className="font-heading text-4xl md:text-6xl mb-6" style={{ color: 'var(--foreground)' }}>
            {post.title}
          </h1>
          <p className="font-ui text-sm uppercase tracking-wide mb-2" style={{ color: 'var(--foreground)' }}>
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

        {/* Hero Image - FULL WIDTH */}
        <div className="w-full">
          <img
            src={post.image}
            alt={post.imageAlt || post.title}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Editorial Magazine Layout with Responsive Padding */}
      <div className="w-full">
        <div className="px-6 md:pl-12 md:pr-[298px] lg:pl-16 lg:pr-[350px] mt-12">
          
          {/* Breadcrumbs */}
          <div className="mb-8">
            <Breadcrumbs
              items={[{ label: 'Blog', href: '/blog' }]}
              currentPage={post.title}
              includeSchema={false}
            />
          </div>

          {/* Article Content - JUSTIFIED TEXT */}
          <article className="prose-content prose-content-justified">
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

            <div className="my-12">
              <InlineNewsletter />
            </div>

            <div dangerouslySetInnerHTML={{ __html: remainingContent }} />
          </article>
        </div>

        {/* Ad Space - Fixed on Right */}
        <div className="hidden md:block fixed top-24 right-0 w-[298px] lg:w-[350px] h-screen bg-gray-100 border-l border-gray-200">
          <div className="p-6">
            <div className="bg-gray-200 h-[600px] flex items-center justify-center text-gray-500">
              Ad Space
            </div>
          </div>
        </div>
      </div>

      {/* End Sections */}
      <AboutEEAT />
      <FinalNewsletter />
      <ReadMoreSection currentSlug={post.slug} />
    </div>
  );
}