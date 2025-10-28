'use client';

interface SocialShareProps {
  title: string;
  slug: string;
}

export default function SocialShare({ title, slug }: SocialShareProps) {
  const url = `https://mirelleinspo.com/blog/${slug}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className='flex items-center gap-3'>
      <span className='text-sm font-semibold text-gray-700'>Share:</span>
      
      <a
        href={`https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}`}
        target='_blank'
        rel='noopener noreferrer'
        className='px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors text-sm font-medium'
        aria-label='Share on Pinterest'
      >
        Pinterest
      </a>

      
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target='_blank'
        rel='noopener noreferrer'
        className='px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition-colors text-sm font-medium'
        aria-label='Share on Twitter'
      >
        Twitter
      </a>

      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target='_blank'
        rel='noopener noreferrer'
        className='px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm font-medium'
        aria-label='Share on Facebook'
      >
        Facebook
      </a>
    </div>
  );
}
