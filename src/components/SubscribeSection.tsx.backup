'use client';
import { useState } from 'react';

export default function NewsletterSection() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Replace with your backend endpoint
    console.log('Subscriber:', formData);
    
    setIsSubscribed(true);
    setFormData({ name: '', email: '' });
    
    setTimeout(() => setIsSubscribed(false), 5000);
  };

  return (
    <section id="newsletter" className="py-26 bg-editorial-charcoal">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* Header */}
        <p className="text-overline text-editorial-accent uppercase tracking-widest mb-6 font-semibold">
          Newsletter
        </p>
        <h2 className="font-display text-display-md text-white mb-8 tracking-magazine">
          Stay Inspired
        </h2>
        <p className="text-body-lg text-white/80 mb-16 max-w-2xl mx-auto leading-relaxed font-light">
          Get exclusive nail art trends, seasonal looks, and beauty tips delivered to your inbox
        </p>

        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="space-y-5">
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Your Name"
                required
                className="w-full px-6 py-4 bg-white/10 border border-white/20 focus:border-editorial-accent focus:bg-white/15 focus:outline-none text-white placeholder-black/50 font-sans text-body transition-all duration-300"
              />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="Your Email Address"
                required
                className="w-full px-6 py-4 bg-white/10 border border-white/20 focus:border-editorial-accent focus:bg-white/15 focus:outline-none text-white placeholder-black/50 font-sans text-body transition-all duration-300"
              />
              <button
                type="submit"
                className="w-full bg-white text-editorial-charcoal px-8 py-4 font-sans text-caption uppercase tracking-widest font-semibold hover:bg-editorial-accent hover:text-white transition-all duration-500 shadow-editorial"
              >
                Subscribe Now
              </button>
            </div>
          </form>
        ) : (
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-12 shadow-editorial-lg max-w-lg mx-auto">
            <div className="w-16 h-16 border-2 border-editorial-accent flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-editorial-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-display text-headline-lg text-white mb-4 tracking-magazine">
              Welcome to Mirellé Inspo!
            </h3>
            <p className="text-body-lg text-white/80 font-sans font-light">
              Check your email for your first dose of nail inspiration
            </p>
          </div>
        )}
        
        <p className="text-caption text-white/50 mt-10 font-sans uppercase tracking-wide">
          Unsubscribe anytime. No spam, just beauty.
        </p>
      </div>
    </section>
  );
}
