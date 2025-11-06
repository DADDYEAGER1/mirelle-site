'use client';
import { useState } from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { generateContactPageSchema } from '@/lib/generateSchemas';


// Metadata moved to layout or use next/head for client components
export default function ContactPage() {
  const baseUrl = 'https://mirelleinspo.com';
  const email = 'team.mirelle@gmail.com';
  const contactPageSchema = generateContactPageSchema(email);

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
    <>
      {/* ContactPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageSchema),
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contact Mirellé
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Questions about our content? Interested in partnerships? Looking for collaboration opportunities? 
              We're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              
              {/* Email Card - General Inquiries */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-pink-100 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                      <EnvelopeIcon className="w-6 h-6 text-pink-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">General Inquiries</h3>
                    <a 
                      href="mailto:team.mirelle@gmail.com" 
                      className="text-pink-600 hover:text-pink-700 transition-colors text-sm"
                    >
                      team.mirelle@gmail.com
                    </a>
                    <p className="text-sm text-gray-500 mt-2">
                      For general questions, content feedback, and support
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Inquiries Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-purple-100 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business & Partnerships</h3>
                    <a 
                      href="mailto:team.mirelle@gmail.com" 
                      className="text-purple-600 hover:text-purple-700 transition-colors text-sm"
                    >
                      team.mirelle@gmail.com
                    </a>
                    <p className="text-sm text-gray-500 mt-2">
                      Brand collaborations, sponsorships, and business opportunities
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Connect With Us</h3>
                    <div className="space-y-1">
                      <a 
                        href="https://in.pinterest.com/mirelle_inspo/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-600 hover:text-blue-700 transition-colors text-sm"
                      >
                        Pinterest @mirelle_inspo
                      </a>
                      <a 
                        href="https://instagram.com/mirelle_inspo" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-600 hover:text-blue-700 transition-colors text-sm"
                      >
                        Instagram @mirelle_inspo
                      </a>
                      <a 
                        href="https://x.com/mirelleinspo" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-600 hover:text-blue-700 transition-colors text-sm"
                      >
                        X (Twitter) @mirelleinspo
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-green-100 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Response Time</h3>
                    <p className="text-sm text-gray-600">
                      Monday - Friday: 9AM - 6PM IST
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      We typically respond within 24-48 business hours
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-pink-100">
                <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                      placeholder="What is this regarding?"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                      placeholder="Please provide details about your inquiry..."
                    />
                  </div>

                  {/* Status Messages */}
                  {status === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                      <p className="font-medium">✓ Message sent successfully!</p>
                      <p className="text-sm">Thank you for contacting us. We'll respond within 24-48 hours.</p>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                      <p className="font-medium">⚠ Something went wrong</p>
                      <p className="text-sm">{errorMessage || 'Please try again or email us directly.'}</p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
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

                  <p className="text-xs text-gray-500 text-center">
                    We respect your privacy. Your information will never be shared with third parties.
                  </p>
                </form>
              </div>
            </div>

          </div>

          {/* FAQ Section - Business Focused */}
          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-pink-100">
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6 text-center">
              Common Inquiries
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Partnership Opportunities</h3>
                <p className="text-gray-600 text-sm">
                  We collaborate with beauty brands, nail care companies, and industry professionals. 
                  Email team.mirelle@gmail.com with "Partnership" in the subject line.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Content Licensing</h3>
                <p className="text-gray-600 text-sm">
                  Interested in syndicating our content? We offer licensing options for publishers and 
                  media companies. Contact us for details.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Press & Media</h3>
                <p className="text-gray-600 text-sm">
                  Media inquiries, interview requests, and press kit requests should be sent to 
                  team.mirelle@gmail.com with "Press" in the subject line.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Content Feedback</h3>
                <p className="text-gray-600 text-sm">
                  We value your feedback! Have suggestions for topics, spotted an error, or want to 
                  share your experience? We'd love to hear from you.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
