'use client';

import { useState, useEffect } from 'react';

export default function useNewsletterPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    let timeoutId: NodeJS.Timeout;
    let scrollTriggered = false;
    let exitTriggered = false;

    // Exit-intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !exitTriggered && !dismissed) {
        exitTriggered = true;
        setShowPopup(true);
      }
    };

    // Scroll trigger (50% depth)
    const handleScroll = () => {
      if (scrollTriggered || dismissed) return;
      
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercent >= 50) {
        scrollTriggered = true;
        setShowPopup(true);
      }
    };

    // Time delay (30 seconds)
    timeoutId = setTimeout(() => {
      if (!dismissed && !scrollTriggered && !exitTriggered) {
        setShowPopup(true);
      }
    }, 30000);

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dismissed]);

  const dismissPopup = () => {
    setDismissed(true);
    setShowPopup(false);
  };

  return {
    showPopup,
    dismissPopup,
    isVisible: showPopup && !dismissed,
  };
}
