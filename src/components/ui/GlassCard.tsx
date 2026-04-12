import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'dark' | 'accent';
}

export default function GlassCard({
  children,
  className = '',
  variant = 'default',
}: GlassCardProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'dark':
        return 'glass-card-dark';
      case 'accent':
        return 'glass-card-accent';
      case 'default':
      default:
        return 'glass-card';
    }
  };

  return (
    <div
      className={`${getVariantClasses()} rounded-2xl p-6 shadow-editorial ${className}`}
    >
      {children}
    </div>
  );
}
