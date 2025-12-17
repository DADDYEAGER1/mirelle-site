'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, ShoppingBag, BookOpen } from 'lucide-react';

export default function StickyBottomNav() {
  const pathname = usePathname();

  const navItems = [
    {
      href: '/',
      label: 'Home',
      icon: Home,
      isActive: pathname === '/',
    },
    {
      href: '/shop',
      label: 'Shop',
      icon: ShoppingBag,
      isActive: pathname.startsWith('/shop'),
    },
    {
      href: '/blog',
      label: 'Blog',
      icon: BookOpen,
      isActive: pathname.startsWith('/blog'),
    },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden glass-card border-t border-editorial-stone"
      style={{
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
      }}
    >
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center flex-1 h-full touch-target transition-all duration-300 ${
                item.isActive
                  ? 'text-accent'
                  : 'text-editorial-slate hover:text-text-primary'
              }`}
            >
              <Icon
                size={24}
                strokeWidth={item.isActive ? 2.5 : 2}
                className="mb-1"
              />
              <span
                className={`text-xs font-medium uppercase tracking-wide ${
                  item.isActive ? 'font-semibold' : ''
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
