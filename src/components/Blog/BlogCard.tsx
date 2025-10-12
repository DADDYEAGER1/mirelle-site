import Link from 'next/link';
import Image from 'next/image';
import { BlogMetadata } from '@/types/blog';

interface BlogCardProps {
  post: BlogMetadata;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link 
      href={`/blog/${post.slug}`}
      className="group block relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400" />
        )}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="relative h-full p-6 flex flex-col justify-between text-white">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 2).map(tag => (
            <span 
              key={tag}
              className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom Content */}
        <div>
          <h3 className="text-2xl font-bold mb-2 line-clamp-2 group-hover:text-pink-200 transition-colors">
            {post.title}
          </h3>
          
          <p className="text-white/90 mb-4 line-clamp-2 text-sm">
            {post.excerpt}
          </p>

          <div className="flex justify-between items-center text-sm text-white/80 mb-4">
            <span>{new Date(post.date).toLocaleDateString()}</span>
            <span>{post.readTime} min read</span>
          </div>

          <div className="inline-flex items-center text-white font-semibold hover:text-pink-200 transition-colors">
            Read More 
            <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}



// import Link from 'next/link';
// import Image from 'next/image';
// import { BlogMetadata } from '@/types/blog';

// interface BlogCardProps {
//   post: BlogMetadata;
// }

// export default function BlogCard({ post }: BlogCardProps) {
//   return (
//     <Link 
//       href={`/blog/${post.slug}`}
//       className="group block relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
//     >
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         {post.image ? (
//           <Image
//             src={post.image}
//             alt={post.title}
//             fill
//             className="object-cover transition-transform duration-500 group-hover:scale-110"
//           />
//         ) : (
//           <div className="w-full h-full bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400" />
//         )}
//         {/* Dark gradient overlay for depth */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
//       </div>

//       {/* Content */}
//       <div className="relative h-full p-6 flex flex-col justify-between">
//         {/* Tags */}
//         <div className="flex flex-wrap gap-2">
//           {post.tags.slice(0, 2).map(tag => (
//             <span 
//               key={tag}
//               className="bg-white/90 backdrop-blur-md text-gray-800 px-3 py-1 rounded-full text-xs font-semibold shadow-sm"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>

//         {/* Bottom Content with Premium Translucent White Overlay */}
//         <div className="bg-white/85 backdrop-blur-lg rounded-xl p-4 shadow-xl border border-white/20">
//           <h3 className="text-xl font-bold mb-2 line-clamp-2 text-gray-900 group-hover:text-pink-600 transition-colors">
//             {post.title}
//           </h3>
          
//           <p className="text-gray-700 mb-3 line-clamp-2 text-sm leading-relaxed">
//             {post.excerpt}
//           </p>

//           <div className="flex justify-between items-center text-xs text-gray-600 mb-3 font-medium">
//             <span>{new Date(post.date).toLocaleDateString()}</span>
//             <span>{post.readTime} min read</span>
//           </div>

//           <div className="inline-flex items-center text-pink-600 font-semibold text-sm group-hover:text-pink-700 transition-colors">
//             Read More 
//             <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
//             </svg>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// }
