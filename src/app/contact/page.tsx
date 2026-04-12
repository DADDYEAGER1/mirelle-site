'use client';
import { useState } from 'react';
import { Metadata } from 'next';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Mirellé",
  "description": "Get in touch with Mirellé for inquiries, partnerships, and collaboration opportunities",
  "url": "https://mirelleinspo.com/contact",
  "mainEntity": {
    "@type": "Organization",
    "name": "Mirellé Inspo",
    "email": "contact@mirelleinspo.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "contact@mirelleinspo.com"
    }
  }
};

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-background">
        {/* Header Section */}
        <section className="py-20 bg-background border-b border-foreground/10">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <h1 className="font-heading text-5xl md:text-6xl text-foreground mb-6">
              Contact Mirellé
            </h1>
            <p className="font-body text-lg text-foreground leading-relaxed max-w-2xl mx-auto">
              Questions about our content? Interested in partnerships? Looking for collaboration opportunities? We're here to help.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              
              {/* Email Contact */}
              <div className="bg-background border border-foreground/10 p-6">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl text-foreground mb-2">Email</h3>
                <a 
                  href="mailto:contact@mirelleinspo.com" 
                  className="font-body text-base text-foreground hover:opacity-70 transition-opacity"
                >
                  contact@mirelleinspo.com
                </a>
                <p className="font-body text-sm text-foreground mt-3">
                  For all inquiries including general questions, partnerships, collaborations, and content feedback.
                </p>
              </div>

              {/* Response Time */}
              <div className="bg-background border border-foreground/10 p-6">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl text-foreground mb-2">Response Time</h3>
                <p className="font-body text-base text-foreground">
                  Monday - Friday
                </p>
                <p className="font-body text-sm text-foreground mt-3">
                  We typically respond within 24-48 business hours.
                </p>
              </div>

              {/* Social Media */}
              <div className="bg-background border border-foreground/10 p-6">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl text-foreground mb-3">Connect With Us</h3>
                <div className="space-y-2">
                  <a 
                    href="https://in.pinterest.com/mirelle_inspo/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-body text-sm text-foreground hover:opacity-70 transition-opacity"
                  >
                    Pinterest
                  </a>
                  <a 
                    href="https://instagram.com/mirelle_inspo" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-body text-sm text-foreground hover:opacity-70 transition-opacity"
                  >
                    Instagram
                  </a>
                  <a 
                    href="https://x.com/mirelleinspo" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-body text-sm text-foreground hover:opacity-70 transition-opacity"
                  >
                    X (Twitter)
                  </a>
                </div>
              </div>

            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-background border border-foreground/10 p-8">
                <h2 className="font-heading text-3xl text-foreground mb-6">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div>
                    <label htmlFor="name" className="block font-ui text-sm text-foreground mb-2 uppercase tracking-wide">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-foreground/20 bg-background text-foreground font-body focus:outline-none focus:border-foreground transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-ui text-sm text-foreground mb-2 uppercase tracking-wide">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-foreground/20 bg-background text-foreground font-body focus:outline-none focus:border-foreground transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block font-ui text-sm text-foreground mb-2 uppercase tracking-wide">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-foreground/20 bg-background text-foreground font-body focus:outline-none focus:border-foreground transition-colors"
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-ui text-sm text-foreground mb-2 uppercase tracking-wide">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-foreground/20 bg-background text-foreground font-body focus:outline-none focus:border-foreground transition-colors resize-none"
                      placeholder="Please provide details about your inquiry"
                    />
                  </div>

                  {status === 'success' && (
                    <div className="bg-background border border-foreground/20 p-4">
                      <p className="font-body text-foreground">Message sent successfully!</p>
                      <p className="font-body text-sm text-foreground mt-1">Thank you for contacting us. We'll respond within 24-48 hours.</p>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="bg-background border border-foreground/20 p-4">
                      <p className="font-body text-foreground">Something went wrong</p>
                      <p className="font-body text-sm text-foreground mt-1">{errorMessage || 'Please try again or email us directly.'}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-foreground text-background px-6 py-4 font-ui text-sm uppercase tracking-wider hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>

                  <p className="font-body text-xs text-foreground text-center">
                    We respect your privacy. Your information will never be shared with third parties.
                  </p>
                </form>
              </div>
            </div>

          </div>

          {/* Common Inquiries Section */}
          <div className="mt-20 bg-background border border-foreground/10 p-8">
            <h2 className="font-heading text-3xl text-foreground mb-8 text-center">
              Common Inquiries
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading text-xl text-foreground mb-3">Partnership Opportunities</h3>
                <p className="font-body text-base text-foreground leading-relaxed">
                  We collaborate with beauty brands, nail care companies, and industry professionals. Email contact@mirelleinspo.com with "Partnership" in the subject line.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xl text-foreground mb-3">Content Licensing</h3>
                <p className="font-body text-base text-foreground leading-relaxed">
                  Interested in syndicating our content? We offer licensing options for publishers and media companies. Contact us for details.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xl text-foreground mb-3">Press & Media</h3>
                <p className="font-body text-base text-foreground leading-relaxed">
                  Media inquiries, interview requests, and press kit requests should be sent to contact@mirelleinspo.com with "Press" in the subject line.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xl text-foreground mb-3">Content Feedback</h3>
                <p className="font-body text-base text-foreground leading-relaxed">
                  We value your feedback. Have suggestions for topics, spotted an error, or want to share your experience? We'd love to hear from you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
