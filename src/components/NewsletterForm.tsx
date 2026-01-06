'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-12 shadow-lg max-w-lg mx-auto rounded-lg">
        <div className="w-16 h-16 border-2 border-green-500 flex items-center justify-center mx-auto mb-6 rounded-full">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading text-2xl text-foreground mb-4 text-center">
          Welcome to Mirellé Inspo!
        </h3>
        <p className="font-ui text-base text-gray-600 text-center">
          Check your email for your first dose of nail inspiration
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <div className="space-y-5">
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Your Name"
          className="w-full px-6 py-4 border border-gray-300 focus:border-foreground focus:ring-2 focus:ring-foreground/20 focus:outline-none font-ui text-base transition-all duration-300 rounded-md"
        />
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Your Email Address"
          required
          className="w-full px-6 py-4 border border-gray-300 focus:border-foreground focus:ring-2 focus:ring-foreground/20 focus:outline-none font-ui text-base transition-all duration-300 rounded-md"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-foreground text-background px-8 py-4 font-ui text-sm uppercase tracking-widest font-semibold hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 rounded-md"
        >
          {status === 'loading' ? 'SUBSCRIBING...' : 'SUBSCRIBE NOW'}
        </button>
      </div>

      {status === 'error' && (
        <p className="text-red-600 font-ui text-sm mt-4 text-center">
          Something went wrong. Please try again.
        </p>
      )}

      <p className="font-ui text-xs text-gray-500 mt-6 text-center">
        Unsubscribe anytime. No spam, just beauty.
      </p>
    </form>
  );
}