'use client';

import { useState } from 'react';
import GlassCard from '@/components/ui/GlassCard';

export default function InlineNewsletterForm() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setStatus('idle');

    try {
      await fetch(process.env.NEXT_PUBLIC_GOOGLE_COMMENTS_SCRIPT_URL || '', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email,
          source: 'blog-inline',
          timestamp: new Date().toISOString()
        }),
      });

      setStatus('success');
      setEmail('');

      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Newsletter signup error:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <GlassCard className="flex flex-col justify-center items-center text-center my-8 bg-gradient-to-br from-pink-50 to-purple-50">
      <h3 className="text-2xl font-bold text-gray-800 mb-3">
        💅 Get Weekly Nail Inspo
      </h3>
      <p className="text-gray-600 mb-4 max-w-md">
        Join 10,000+ nail enthusiasts! Get trending designs, expert tips, and exclusive finds delivered weekly.
      </p>
      <form 
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
      >
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isSubmitting}
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all disabled:opacity-50"
        />
        <button 
          type="submit"
          disabled={isSubmitting || status === 'success'}
          className={`px-6 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
            status === 'success'
              ? 'bg-green-500 text-white'
              : 'bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:shadow-lg'
          }`}
        >
          {status === 'success' ? '✓ Subscribed!' : isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      {status === 'error' && (
        <p className="text-xs text-red-500 mt-2">Something went wrong. Please try again.</p>
      )}
      <p className="text-xs text-gray-500 mt-3">
        ✓ Trending designs ✓ Expert tips ✓ No spam ever
      </p>
    </GlassCard>
  );
}
