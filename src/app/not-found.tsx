import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8 text-center">Page not found - but we have plenty of nail inspiration instead!</p>
      
      <div className="flex gap-4 mb-8">
        <Link href="/" className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200">
          Back to Home
        </Link>
        <Link href="/blog" className="px-6 py-3 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700">
          Browse Blog
        </Link>
      </div>

      <div className="mt-12 text-center text-gray-400">
        <p>Try these popular pages:</p>
        <ul className="mt-4 space-y-2">
          <li><Link href="/shop/fall" className="text-pink-400 hover:text-pink-300">Fall Nail Designs</Link></li>
          <li><Link href="/blog" className="text-pink-400 hover:text-pink-300">Nail Art Blog</Link></li>
          <li><Link href="/topics/seasonal-trends" className="text-pink-400 hover:text-pink-300">Seasonal Trends</Link></li>
        </ul>
      </div>
    </div>
  );
}
