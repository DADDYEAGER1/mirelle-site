interface BlogSidebarProps {
  tableOfContents: { id: string; title: string }[];
  relatedPosts?: { slug: string; title: string; image: string }[];
}

export default function BlogSidebar({ tableOfContents, relatedPosts }: BlogSidebarProps) {
  return (
    <aside className="w-full lg:w-80 space-y-6">
      {/* Table of Contents */}
      <div className="bg-pink-50 rounded-lg p-6 sticky top-24">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Table of Contents</h3>
        <nav className="space-y-2">
          {tableOfContents.map((item) => (
              <a>
              key={item.id}
              href={`#${item.id}`}
              className="block text-sm text-gray-600 hover:text-pink-600 transition-colors"
            
              {item.title}
            </a>
          ))}
        </nav>
      </div>

      {/* Internal Links */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Explore More</h3>
        <ul className="space-y-3">
          <li>
            <a href="/topics/nail-care-guide" className="text-sm text-blue-600 hover:underline">
              Nail Care Basics Guide
            </a>
          </li>
          <li>
            <a href="/shop" className="text-sm text-blue-600 hover:underline">
              Shop Nail Products
            </a>
          </li>
          <li>
            <a href="/topics/seasonal-trends" className="text-sm text-blue-600 hover:underline">
              Seasonal Nail Trends
            </a>
          </li>
        </ul>
      </div>

      {/* Pinterest Follow */}
      <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg p-6 text-center">
        <h3 className="text-lg font-bold text-gray-800 mb-2">Follow Us</h3>
        <p className="text-sm text-gray-600 mb-4">Get daily nail inspiration!</p>
        
          href="https://in.pinterest.com/mirelle_inspo/"
          target="_blank"
          className="inline-block bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors"
          Follow on Pinterest
        </a>
      </div>

      {/* Related Posts */}
      {relatedPosts && relatedPosts.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">You May Also Like</h3>
          <div className="space-y-4">
            {relatedPosts.map((post) => (
              <a key={post.slug} href={`/blog/${post.slug}`} className="block group">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-32 object-cover rounded-lg mb-2 group-hover:opacity-90 transition-opacity"
                />
                <p className="text-sm font-medium text-gray-700 group-hover:text-pink-600">
                  {post.title}
                </p>
              </a>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}
