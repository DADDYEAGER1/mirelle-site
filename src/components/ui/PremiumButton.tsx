'use client';

import { ReactNode, ButtonHTMLAttributes } from 'react';
import Link from 'next/link';

interface PremiumButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
}

export default function PremiumButton({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  disabled = false,
  ...props
}: PremiumButtonProps) {
  const handleRipple = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (disabled) return;

    const button = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add('ripple-effect');

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);

    if (onClick && !href) {
      onClick(e as React.MouseEvent<HTMLButtonElement>);
    }
  };

  const getVariantClasses = () => {
    const baseClasses = 'relative overflow-hidden transition-all duration-500 font-sans uppercase tracking-widest font-medium';
    
    switch (variant) {
      case 'primary':
        return `${baseClasses} bg-editorial-charcoal text-white hover:bg-accent hover:text-text-primary`;
      case 'secondary':
        return `${baseClasses} border-2 border-editorial-charcoal text-text-primary hover:bg-background`;
      case 'ghost':
        return `${baseClasses} text-text-primary hover:bg-editorial-stone`;
      default:
        return baseClasses;
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-xs';
      case 'lg':
        return 'px-10 py-5 text-base';
      case 'md':
      default:
        return 'px-8 py-4 text-sm';
    }
  };

  const buttonClasses = `${getVariantClasses()} ${getSizeClasses()} ${
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
  } ${className}`;

  // If href is provided, render as Link
  if (href) {
    return (
      <Link
        href={href}
        className={buttonClasses}
        onClick={handleRipple}
      >
        {children}
        <style jsx>{`
          .ripple-effect {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
          }

          @keyframes ripple {
            to {
              transform: scale(4);
              opacity: 0;
            }
          }
        `}</style>
      </Link>
    );
  }

  // Otherwise, render as button
  return (
    <button
      onClick={handleRipple}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      {children}
      <style jsx>{`
        .ripple-effect {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          transform: scale(0);
          animation: ripple 0.6s ease-out;
          pointer-events: none;
        }

        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
    </button>
  );
}
