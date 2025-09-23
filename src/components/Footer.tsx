import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-charcoal-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and brand */}
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <img 
              src="/logo.png" 
              alt="Mirelle Logo" 
              className="w-8 h-8 object-contain"
            />
          </div>

          {/* Social links */}
          <div className="flex space-x-6">
            <Link
              href="https://www.pinterest.com/mirelle_inspo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal-600 hover:text-blush-400 transition-colors"
            >
              <span className="sr-only">Pinterest</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
              </svg>
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-charcoal-700 text-center text-black">
          <p>&copy; 2024 Mirelle. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/app/privacy-policy" className="hover:text-blush-400">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/app/terms" className="hover:text-blush-400">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
