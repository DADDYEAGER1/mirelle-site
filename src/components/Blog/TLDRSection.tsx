import React from 'react';

interface TLDRProps {
  summary: string[];
  readTime: string;
  keyTakeaways?: string[];
}

export default function TLDRSection({ summary, readTime, keyTakeaways }: TLDRProps) {
  return (
    <section 
      className="tldr-section bg-gradient-to-br from-pink-50 to-purple-50 border-l-4 border-pink-500 p-6 rounded-lg shadow-md mb-8 hover:shadow-lg transition-shadow duration-300"
      itemProp="abstract"
      aria-label="Article summary"
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl" aria-hidden="true">⚡</span>
        <h2 className="text-xl font-bold text-gray-900 font-serif">TL;DR - Quick Summary</h2>
        <span className="ml-auto text-sm text-gray-600 font-sans">{readTime} read</span>
      </div>
      
      <div className="space-y-3">
        <p className="text-gray-700 font-medium font-sans">What You'll Learn:</p>
        <ul className="space-y-2">
          {summary.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-pink-500 mt-1 flex-shrink-0" aria-hidden="true">✓</span>
              <span className="text-gray-700 font-sans leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        
        {keyTakeaways && keyTakeaways.length > 0 && (
          <div className="mt-4 pt-4 border-t border-pink-200">
            <p className="text-gray-700 font-medium mb-2 font-sans">Key Takeaways:</p>
            <div className="flex flex-wrap gap-2">
              {keyTakeaways.map((takeaway, index) => (
                <span 
                  key={index} 
                  className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium font-sans hover:bg-pink-200 transition-colors duration-200"
                >
                  {takeaway}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
