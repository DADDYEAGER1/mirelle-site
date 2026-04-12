// src/components/Posts/AdSpace.tsx

export default function AdSpace() {
  return (
    <aside className="sticky top-6">
      {/* Ad Placeholder - 300x600 standard size */}
      <div className="w-full h-[600px] bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
        <p className="font-ui text-sm text-gray-400 uppercase tracking-wide">
          Ad Space
        </p>
      </div>
    </aside>
  );
}