'use client';

import { useState, useEffect } from 'react';

export default function useNewsletterPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false); // ✅ NEW: Track if popup already shown

  useEffect(() => {
    if (hasShown) return; // ✅ If already shown once, stop all triggers

    let timeoutId: NodeJS.Timeout;

    // ✅ Exit-intent detection (fires ONCE)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setShowPopup(true);
        setHasShown(true); // ✅ Mark as shown
      }
    };

    // ✅ Scroll trigger (50% depth, fires ONCE)
    const handleScroll = () => {
      if (hasShown) return;
      
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercent >= 50) {
        setShowPopup(true);
        setHasShown(true); // ✅ Mark as shown
      }
    };

    // ✅ Time delay (30 seconds, fires ONCE if other triggers didn't fire)
    timeoutId = setTimeout(() => {
      if (!hasShown) {
        setShowPopup(true);
        setHasShown(true); // ✅ Mark as shown
      }
    }, 30000);

    document.addEventListener('mouseleave', handleMouseLeave);
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
