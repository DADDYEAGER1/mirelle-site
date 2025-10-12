// src/app/error.tsx
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="font-serif text-3xl font-bold text-charcoal-800 mb-4">
          Something went wrong!
        </h2>
        <button
          onClick={reset}
          className="bg-blush-500 text-white px-6 py-3 rounded-full hover:bg-blush-600 transition"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
