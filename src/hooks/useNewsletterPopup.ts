'use client';

import { useState, useEffect } from 'react';

export default function useNewsletterPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false); // ✅ NEW: Track if popup already shown

  useEffect(() => {
    if (hasShown) return; // ✅ If already shown once, stop all triggers

    let timeoutId: NodeJS.Timeout;

    // ✅ Exit-intent detection (DESKTOP ONLY - doesn't work on mobile)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setShowPopup(true);
        setHasShown(true); // ✅ Mark as shown
      }
    };

    // ✅ Scroll trigger (50% depth, fires ONCE) - WORKS ON MOBILE
    const handleScroll = () => {
      if (hasShown) return;
      
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercent >= 50) {
        setShowPopup(true);
        setHasShown(true); // ✅ Mark as shown
      }
    };

    // ✅ Time delay (15 seconds for mobile, 30s for desktop)
    const isMobile = window.innerWidth < 768;
    const delay = isMobile ? 15000 : 30000; // ✅ Faster on mobile
    
    timeoutId = setTimeout(() => {
      if (!hasShown) {
        setShowPopup(true);
        setHasShown(true); // ✅ Mark as shown
      }
    }, delay);

    // Only add mouse leave on desktop
    if (!isMobile) {
      document.addEventListener('mouseleave', handleMouseLeave);
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasShown]);

  const dismissPopup = () => {
    setShowPopup(false);
  };

  return {
    showPopup,
    dismissPopup,
    isVisible: showPopup,
  };
}
