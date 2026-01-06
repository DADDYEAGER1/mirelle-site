'use client';

import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email })
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setName('');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h3 className="font-heading text-2xl mb-4 text-center">
        Subscribe to Our Newsletter
      </h3>
      <p className="font-ui text-sm text-gray-600 mb-6 text-center">
        Get the latest nail trends and tips delivered to your inbox.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name (optional)"
          className="w-full px-4 py-3 border border-gray-300 rounded-md font-ui text-base focus:outline-none focus:ring-2 focus:ring-foreground"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md font-ui text-base focus:outline-none focus:ring-2 focus:ring-foreground"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full px-6 py-3 bg-foreground text-background font-ui text-sm uppercase tracking-wide rounded-md hover:bg-gray-800 transition-colors disabled:opacity-50"
        >
          {status === 'loading' ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
        </button>

        {status === 'success' && (
          <p className="text-green-600 font-ui text-sm text-center">Successfully subscribed!</p>
        )}
        {status === 'error' && (
          <p className="text-red-600 font-ui text-sm text-center">Something went wrong. Please try again.</p>
        )}
      </form>
    </div>
  );
}