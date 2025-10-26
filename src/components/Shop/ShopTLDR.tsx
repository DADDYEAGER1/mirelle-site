interface ShopTLDRProps {
  summary: string[];
  keyTakeaways?: string[];
}

export default function ShopTLDR({ summary, keyTakeaways }: ShopTLDRProps) {
  return (
    <section className="tldr-section bg-gradient-to-br from-pink-50 to-purple-50 border-l-4 border-pink-500 p-6 rounded-lg shadow-md mb-8">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">⚡</span>
        <h2 className="text-xl font-bold text-gray-900 font-serif">Quick Overview</h2>
      </div>
      <ul className="space-y-2">
        {summary.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-pink-500 mt-1">✓</span>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
      {keyTakeaways && keyTakeaways.length > 0 && (
        <div className="mt-4 pt-4 border-t border-pink-200">
          <div className="flex flex-wrap gap-2">
            {keyTakeaways.map((takeaway, index) => (
              <span key={index} className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                {takeaway}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
