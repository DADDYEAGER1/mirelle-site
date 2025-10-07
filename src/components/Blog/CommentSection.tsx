'use client';

import { useState } from 'react';

interface CommentSectionProps {
  postSlug: string;
  postTitle: string;
}

export default function CommentSection({ postSlug, postTitle }: CommentSectionProps) {
  const [formData, setFormData] = useState({
    rating: '',
    name: '',
    email: '',
    comment: ''
  });
  const [status, setStatus] = useState({ message: '', type: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    // Validation
    if (!formData.rating || !formData.name || !formData.email || !formData.comment) {
      setStatus({ message: '❌ Please fill in all fields', type: 'error' });
      return;
    }

    if (!formData.email.includes('@')) {
      setStatus({ message: '❌ Please enter a valid email', type: 'error' });
      return;
    }

    setIsSubmitting(true);

    try {
      // Send to your API endpoint (create this next)
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          postSlug,
          postTitle,
          timestamp: new Date().toISOString()
        })
      });

      if (response.ok) {
        setStatus({ 
          message: '✨ Thanks! I\'ll reply within 24 hours!', 
          type: 'success' 
        });
        setFormData({ rating: '', name: '', email: '', comment: '' });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setStatus({ 
        message: '❌ Oops! Try again or email me directly.', 
        type: 'error' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl text-base transition-all focus:border-purple-500 focus:ring-4 focus:ring-purple-100 focus:outline-none bg-white";
  const labelClass = "block mb-2 font-semibold text-gray-700 text-sm";

  return (
    <div className="mt-12 p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">💬 Your Turn!</h3>
      <p className="text-gray-600 mb-6">Which of the designs are you trying? Let me know!</p>

      {/* Rating */}
      <div className="mb-5">
        <label htmlFor="rating" className={labelClass}>⭐ Rate This Guide</label>
        <select
          id="rating"
          value={formData.rating}
          onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
          className={inputClass}
        >
          <option value="">Select your rating</option>
          <option value="5">⭐⭐⭐⭐⭐ Absolutely amazing!</option>
          <option value="4">⭐⭐⭐⭐ Really helpful</option>
          <option value="3">⭐⭐⭐ Pretty good</option>
          <option value="2">⭐⭐ Could be better</option>
          <option value="1">⭐ Needs improvement</option>
        </select>
      </div>

      {/* Name */}
      <div className="mb-5">
        <label htmlFor="name" className={labelClass}>👤 Your Name</label>
        <input
          type="text"
          id="name"
          placeholder="e.g., Sarah"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={inputClass}
        />
      </div>

      {/* Email */}
      <div className="mb-5">
        <label htmlFor="email" className={labelClass}>📧 Your Email</label>
        <input
          type="email"
          id="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={inputClass}
        />
        <p className="mt-1.5 text-xs text-gray-500">So I can reply to your questions personally!</p>
      </div>

      {/* Comment */}
      <div className="mb-6">
        <label htmlFor="comment" className={labelClass}>💭 Your Comment</label>
        <textarea
          id="comment"
          placeholder="Tell me which design you're trying, ask questions, or share your nail pics! I read every single one 💅"
          value={formData.comment}
          onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
          className={`${inputClass} min-h-[120px] resize-y`}
        />
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? '⏳ Submitting...' : '✨ Submit Comment'}
      </button>

      {/* Status Message */}
      {status.message && (
        <div className={`mt-4 p-4 rounded-xl text-center font-semibold ${
          status.type === 'success' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {status.message}
        </div>
      )}

      <p className="text-center mt-5 text-sm text-gray-600">
        🤝 I reply to <strong>everyone</strong> within 24 hours. That's a promise!
      </p>
    </div>
  );
}
