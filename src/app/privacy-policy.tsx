import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        At Mirelle, your privacy is important to us. This website does not
        collect, store, or share any personal information from visitors.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Information Collection</h2>
      <p className="mb-4">
        We do not request or store personal data such as names, emails, or
        payment details. Our website is a content platform that shares nail art
        inspiration and product recommendations.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Affiliate Links</h2>
      <p className="mb-4">
        Mirelle includes affiliate links, primarily to Amazon and other partner
        platforms. If you click on these links and make a purchase, we may earn
        a commission at no extra cost to you. These third-party sites may use
        cookies or tracking technologies. We recommend reviewing their privacy
        policies for more details.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Third-Party Services</h2>
      <p className="mb-4">
        Any data collected when you visit affiliate websites (such as Amazon) is
        handled by those platforms directly. Mirelle has no access to or control
        over this information.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Any changes will be
        reflected on this page with a new “Last Updated” date.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, you can contact us at:{" "}
        <a href="mailto:contact@mirelle.com" className="text-blue-600 underline">
          contact@mirelle.com
        </a>
      </p>

      <p className="mt-8 text-sm text-gray-500">Last Updated: September 2025</p>
    </div>
  );
};

export default PrivacyPolicy;
