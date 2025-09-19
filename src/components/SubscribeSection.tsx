// 'use client';

// import { useState } from 'react';

// export default function SubscribeSection() {
//   const [email, setEmail] = useState('');
//   const [isSubscribed, setIsSubscribed] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Here you would typically send the email to your backend
//     console.log('Email submitted:', email);
//     setIsSubscribed(true);
//     setEmail('');
//   };

//   return (
//     <section className="py-20 bg-gradient-to-br from-blush-100 to-purple-100">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal-800 mb-4">
//           Subscribe – It's Free
//         </h2>
//         <p className="text-xl text-charcoal-600 mb-8 max-w-2xl mx-auto">
//           We'll keep you updated with the latest trends, exclusive nail art tutorials, 
//           and seasonal inspiration delivered straight to your inbox.
//         </p>

//         {!isSubscribed ? (
//           <form onSubmit={handleSubmit} className="max-w-md mx-auto">
//             <div className="flex flex-col sm:flex-row gap-4">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email address"
//                 required
//                 className="flex-1 px-6 py-3 rounded-full border-2 border-white focus:border-blush-300 focus:outline-none text-charcoal-800 placeholder-charcoal-400"
//               />
//               <button
//                 type="submit"
//                 className="bg-charcoal-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-charcoal-700 transition-colors duration-300 whitespace-nowrap"
//               >
//                 Subscribe
//               </button>
//             </div>
//           </form>
//         ) : (
//           <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md mx-auto">
//             <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//               </svg>
//             </div>
//             <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-2">
//               Welcome to the Mirelle Family!
//             </h3>
//             <p className="text-charcoal-600">
//               Thank you for subscribing. Check your email for a special welcome message.
//             </p>
//           </div>
//         )}

//         <p className="text-sm text-charcoal-500 mt-6">
//           No spam, just beautiful nail inspiration.
//         </p>
//       </div>
//     </section>
//   );
// }
