'use client';
import { useState } from 'react';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL!, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      // no-cors mode doesn't return response, so we assume success
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blush-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-charcoal-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
            Have questions about nail care, looking for specific inspiration, or want to collaborate? 
            We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Email Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-blush-100 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blush-100 rounded-full flex items-center justify-center">
                    <EnvelopeIcon className="w-6 h-6 text-blush-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal-900 mb-1">Email Us</h3>
                  <a 
                    href="mailto:contact@mirelleinspo.com" 
                    className="text-blush-600 hover:text-blush-700 transition-colors"
                  >
                    contact@mirelleinspo.com
                  </a>
                  <p className="text-sm text-charcoal-500 mt-1">
                    We'll respond within 24-48 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-blush-100 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blush-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blush-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal-900 mb-2">Follow Us</h3>
                  <div className="space-y-1">
                    <a 
                      href="https://in.pinterest.com/mirelle_inspo/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-blush-600 hover:text-blush-700 transition-colors text-sm"
                    >
                      Pinterest @mirelle_inspo
                    </a>
                    <a 
                      href="https://instagram.com/mirelle_inspo" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-blush-600 hover:text-blush-700 transition-colors text-sm"
                    >
                      Instagram @mirelle_inspo
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-blush-100 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blush-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blush-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal-900 mb-1">Response Time</h3>
                  <p className="text-sm text-charcoal-600">
                    Monday - Friday: 9AM - 6PM IST
                  </p>
                  <p className="text-sm text-charcoal-500 mt-1">
                    Weekend messages answered on Monday
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-blush-100">
              <h2 className="font-serif text-2xl font-bold text-charcoal-900 mb-6">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blush-500 focus:border-transparent transition-all"
                    placeholder="Jane Doe"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blush-500 focus:border-transparent transition-all"
                    placeholder="jane@example.com"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blush-500 focus:border-transparent transition-all"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blush-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    <p className="font-medium">Message sent successfully!</p>
                    <p className="text-sm">We'll get back to you soon.</p>
                  </div>
                )}

                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                    <p className="font-medium">Oops! Something went wrong.</p>
                    <p className="text-sm">{errorMessage}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-blush-1000 hover:bg-blush-1000 text-black font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>

                <p className="text-xs text-charcoal-500 text-center">
                  By submitting this form, you agree to our privacy policy. We'll never share your information.
                </p>
              </form>
            </div>
          </div>

        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-blush-100">
          <h2 className="font-serif text-2xl font-bold text-charcoal-900 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-charcoal-900 mb-2">Can I request specific nail designs?</h3>
              <p className="text-charcoal-600 text-sm">
                Absolutely! We love hearing your ideas. Send us a message with your design preferences and we'll feature similar styles.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-charcoal-900 mb-2">Do you collaborate with brands?</h3>
              <p className="text-charcoal-600 text-sm">
                Yes! For business inquiries and partnerships, please email us with "Collaboration" in the subject line.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-charcoal-900 mb-2">How often do you post new content?</h3>
              <p className="text-charcoal-600 text-sm">
                We publish fresh nail inspiration and guides multiple times per week. Subscribe to never miss an update!
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-charcoal-900 mb-2">Can I submit my own nail art?</h3>
              <p className="text-charcoal-600 text-sm">
                We'd love to see your creations! Tag us on Instagram or send photos via the contact form for a chance to be featured.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
