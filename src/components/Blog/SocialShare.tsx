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
    <div className="flex items-center gap-3">
      <span className="text-sm font-semibold text-gray-700">Share:</span>
      
      {/* Pinterest */}
      
        href={`https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors"
        aria-label="Share on Pinterest"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0a12 12 0 0 0-4.37 23.17c-.11-1.02-.21-2.59.04-3.71.23-1.01 1.5-6.38 1.5-6.38s-.38-.77-.38-1.91c0-1.79 1.04-3.13 2.34-3.13 1.1 0 1.64.83 1.64 1.82 0 1.11-.71 2.77-1.07 4.31-.3 1.29.65 2.35 1.92 2.35 2.31 0 4.08-2.44 4.08-5.96 0-3.11-2.24-5.29-5.43-5.29-3.7 0-5.87 2.77-5.87 5.64 0 1.12.43 2.32.97 2.97.11.13.12.24.09.38l-.36 1.48c-.06.22-.18.27-.42.16-1.57-.73-2.55-3.03-2.55-4.88 0-4.1 2.98-7.87 8.59-7.87 4.51 0 8.02 3.21 8.02 7.51 0 4.48-2.82 8.09-6.74 8.09-1.32 0-2.56-.68-2.98-1.49l-.81 3.09c-.29 1.13-1.08 2.55-1.61 3.42A12 12 0 1 0 12 0z"/>
        </svg>
      </a>

      {/* Twitter/X */}
      
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
        aria-label="Share on Twitter"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </a>

      {/* Facebook */}
      
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        aria-label="Share on Facebook"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </a>
    </div>
  );
}
