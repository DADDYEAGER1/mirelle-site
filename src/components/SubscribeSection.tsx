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
    <section className="py-20 bg-gradient-to-br from-blush-100 to-purple-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal-800 mb-4">
          Stay Inspired
        </h2>
        <p className="text-xl text-charcoal-600 mb-8 max-w-2xl mx-auto">
          Get exclusive nail art trends, seasonal looks, and beauty tips delivered to your inbox
        </p>

        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Your Name"
              required
              className="w-full px-6 py-3 rounded-full border-2 border-white focus:border-blush-300 focus:outline-none text-charcoal-800"
            />
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="Your Email"
              required
              className="w-full px-6 py-3 rounded-full border-2 border-white focus:border-blush-300 focus:outline-none text-charcoal-800"
            />
            <button
              type="submit"
              className="w-full bg-charcoal-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-charcoal-700 transition-colors"
            >
              Subscribe Now
            </button>
          </form>
        ) : (
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md mx-auto">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-2">
              Welcome to Mirelle Inspo!
            </h3>
            <p className="text-charcoal-600">
              Check your email for your first dose of nail inspiration
            </p>
          </div>
        )}
        
        <p className="text-sm text-charcoal-500 mt-6">
          Unsubscribe anytime. No spam, just beauty.
        </p>
      </div>
    </section>
  );
}
