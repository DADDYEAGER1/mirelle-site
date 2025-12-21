'use client';

import { useEffect, useState } from 'react';

interface TOCItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -66%' }
    );

    items.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <div className="bg-[#f9fafb] border border-gray-200 p-6 mb-8 sticky top-4">
      <h3 
        className="text-lg mb-4"
        style={{ fontFamily: 'Jeremiah, Georgia, serif' }}
      >
        Table of Contents
      </h3>
      <nav className="space-y-2">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`block text-sm py-1 transition-colors ${
              activeId === item.id 
                ? 'text-[#252220] font-medium' 
                : 'text-gray-600 hover:text-[#252220]'
            }`}
            style={{ fontFamily: 'Crimson Text, Georgia, serif' }}
            dangerouslySetInnerHTML={{ __html: item.title }}
          />
        ))}
      </nav>
    </div>
  );
}