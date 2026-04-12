import { BlogPost } from '@/types/blog';
import Breadcrumbs from '@/components/Breadcrumbs';
import ImageCarousel from '@/components/Blog/ImageCarousel';
import ProductGrid from '@/components/Blog/ProductGrid';
import InlineNewsletter from '@/components/Blog/InlineNewsletter';
import AboutEEAT from '@/components/Blog/AboutEEAT';
import FinalNewsletter from '@/components/Blog/FinalNewsletter';
import ReadMoreSection from '@/components/Blog/ReadMoreSection';

interface GridTemplateProps {
  post: BlogPost;
}

export default function GridTemplate({ post }: GridTemplateProps) {
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
      <div className="w-full">
        <InlineNewsletter />
      </div>

      <div className="w-full">
        {/* Desktop: Grid hero with image overlay */}
        <div className="hidden md:grid md:grid-cols-2 md:grid-rows-2 h-[600px]">
          <div className="relative col-span-2 row-span-1 bg-gray-50 p-12 flex items-center justify-center">
            {post.image && (
              <>
                <img
                  src={post.image}
                  alt={post.imageAlt || post.title}
                  className="max-w-full max-h-full object-contain"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <div className="text-center px-6 text-white">
                    {post.category && (
                      <p className="font-ui text-sm uppercase tracking-wider mb-4 text-white/90">
                        {post.category}
                      </p>
                    )}
                    <h1 className="font-heading text-4xl lg:text-5xl mb-4 text-white">
                      {post.title}
                    </h1>
                    <p className="font-ui text-sm uppercase tracking-wide mb-2 text-white/90">
                      BY {post.author}
                    </p>
                    <p className="font-ui text-sm text-white/80">
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', month: 'long', day: 'numeric' 
                      })}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="bg-gray-100"></div>
          <div className="bg-gray-200"></div>
        </div>

        {/* Mobile */}
        <div className="md:hidden relative w-full">
          {post.image && (
            <>
              <img
                src={post.image}
                alt={post.imageAlt || post.title}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 px-6">
                <div className="text-center text-white">
                  {post.category && (
                    <p className="font-ui text-xs uppercase tracking-wider mb-3 text-white/90">
                      {post.category}
                    </p>
                  )}
                  <h1 className="font-heading text-3xl mb-3 text-white">{post.title}</h1>
                  <p className="font-ui text-xs uppercase tracking-wide mb-2 text-white/90">
                    BY {post.author}
                  </p>
                  <p className="font-ui text-xs text-white/80">
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', month: 'long', day: 'numeric' 
                    })}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="w-full">
        <div className="px-6 md:pl-12 md:pr-[298px] lg:pl-16 lg:pr-[350px] mt-12">
          <div className="mb-8">
            <Breadcrumbs
              items={[{ label: 'Blog', href: '/blog' }]}
              currentPage={post.title}
              includeSchema={false}
            />
          </div>

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
              <ProductGrid products={post.products} count={2} indices={[0, 1]} />
              </div>
            )}

            <div dangerouslySetInnerHTML={{ __html: moreContent }} />

            <div className="my-12">
              <InlineNewsletter />
            </div>

            <div dangerouslySetInnerHTML={{ __html: remainingContent }} />
          </article>
        </div>

        <div className="hidden md:block fixed top-24 right-0 w-[298px] lg:w-[350px] h-screen bg-gray-100 border-l border-gray-200">
          <div className="p-6">
            <div className="bg-gray-200 h-[600px] flex items-center justify-center text-gray-500">
              Ad Space
            </div>
          </div>
        </div>
      </div>

      <AboutEEAT />
      <FinalNewsletter />
      <ReadMoreSection currentSlug={post.slug} />
    </div>
  );
}