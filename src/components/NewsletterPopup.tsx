'use client';

import { useState, useEffect } from 'react';
import useNewsletterPopup from '@/hooks/useNewsletterPopup';
import GlassCard from '@/components/ui/GlassCard';
import PremiumButton from '@/components/ui/PremiumButton';
import { X, Mail, CheckCircle } from 'lucide-react';

export default function NewsletterPopup() {
  const { isVisible, dismissPopup } = useNewsletterPopup();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isVisible]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || '', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          dismissPopup();
        }, 2000);
      }
    } catch (error) {
      console.error('Newsletter signup error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      dismissPopup();
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/40 animate-fade-in"
      onClick={handleOverlayClick}
    >
      <div className="animate-slide-up">
        <GlassCard className="max-w-md w-full relative">
          <button
            onClick={dismissPopup}
            className="absolute top-4 right-4 text-editorial-charcoal hover:text-editorial-accent transition-colors touch-target"
            aria-label="Close popup"
          >
            <X className="w-6 h-6" />
          </button>

          {isSuccess ? (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-cormorant font-bold text-editorial-charcoal mb-2">
                You're In! 💅
              </h3>
              <p className="text-editorial-charcoal/70">
                Check your inbox for weekly nail inspo!
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-6">
                <Mail className="w-12 h-12 text-editorial-accent mx-auto mb-4" />
                <h3 className="text-3xl font-cormorant font-bold text-editorial-charcoal mb-2">
                  Get Weekly Nail Inspo 💅
                </h3>
                <p className="text-editorial-charcoal/80 text-sm">
                  Join 10,000+ nail lovers getting:
                </p>
              </div>

              <div className="space-y-2 mb-6 text-editorial-charcoal/70 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-editorial-accent">✓</span>
                  <span>Trending designs every week</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-editorial-accent">✓</span>
                  <span>Expert tips & tutorials</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-editorial-accent">✓</span>
                  <span>Exclusive product finds</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoFocus
                  className="w-full px-4 py-3 border-2 border-editorial-stone rounded-lg focus:border-editorial-accent focus:outline-none transition-colors touch-target"
                />
                <PremiumButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Subscribing...' : 'Get Inspired'}
                </PremiumButton>
              </form>

              <p className="text-xs text-editorial-charcoal/50 text-center mt-4">
                Unsubscribe anytime. No spam, ever. 🎨
              </p>
            </>
          )}
        </GlassCard>
      </div>
    </div>
  );
}
