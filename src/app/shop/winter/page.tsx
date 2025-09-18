import Link from 'next/link';

const winterProducts = [
  {
    id: 1,
    name: "Snowveil Short Almond Snowflake Nails",
    price: "$9.99",
    image: "https://m.media-amazon.com/images/I/71DlgHh+BRL._SY450_.jpg",
    description: "Delicate snowflake designs for winter wonderland nails",
    cta: "Get This Look",
    affiliateUrl: "https://amzn.to/4pqmkmr"
  },
  {
    id: 2,
    name: "Black French Tip Press On Nails",
    price: "$9.99",
    image: "https://m.media-amazon.com/images/I/811Q6x9mMmL._SY450_.jpg",
    description: "Black Short Almond Fake Nails, French Tip Press On Nails Reusable Stick On Nails",
    cta: "Steal The Style",
    affiliateUrl: "https://amzn.to/48m4GtL"
  },
  {
    id: 3,
    name: "Twinkle Red Short Almond nails",
    price: "$9.99",
    image: "https://m.media-amazon.com/images/I/71N+e5ZN8sL._SY450_.jpg",
    description: "French Tip Nails with a Glossy Finish, Press On Nails Reusable Stick On Nails",
    cta: "Nail The Trend",
    affiliateUrl: "https://amzn.to/4mfUshX"
  },
  {
    id: 4,
    name: "Winter Press on Nails",
    price: "$6.99",
    image: "https://m.media-amazon.com/images/I/41qkDRn2IsL._SY300_SX300_QL70_FMwebp_.jpg",
    description: "Scenery Glitter False Nails Artificial Nail with Snowy Forest Snowflake Designs Full Cover Glue on Nails for Women",
    cta: "Get This Look",
    affiliateUrl: "https://amzn.to/4pt1rae"
  },
  {
    id: 5,
    name: "Short Fake Nails",
    price: "$6.99",
    image: "https://m.media-amazon.com/images/I/51b3xXlURQL._SY300_SX300_QL70_FMwebp_.jpg",
    description: "Sophisticated navy for elegant winter looks",
    cta: "Steal The Style",
    affiliateUrl: "https://amzn.to/4pwzO00"
  },
  {
    id: 6,
    name: "White Light Red Gradient False Nails",
    price: "$5.99",
    image: "https://m.media-amazon.com/images/I/71Z7oNmU2YL._SX679_.jpg",
    description: "Pine trees, snowflakes, and winter scenes",
    cta: "Nail The Trend",
    affiliateUrl: "https://amzn.to/46ixDpn"
  },
  {
    id: 7,
    name: "Snowflake Fake Nails ",
    price: "$6.99",
    image: "https://m.media-amazon.com/images/I/71kFuhLKaYL._SX679_.jpg",
    description: "Reusable Silver Glitter Acrylic Nails Snow Glue on Nails Full Cover Winter False Nails ",
    cta: "Get This Look",
    affiliateUrl: "https://amzn.to/3ImTgLK"
  },
  {
    id: 8,
    name: "Christmas Blue French Tip Press",
    price: "$6.99",
    image: "https://m.media-amazon.com/images/I/41iJRVhAeZL._SY300_SX300_QL70_FMwebp_.jpg",
    description: "Nude Pink Gradient False Nail Full Cover Reusable Acrylic Nails Christmas Glue on Nail",
    cta: "Steal The Style",
    affiliateUrl: "https://amzn.to/3K6v54L"
  },
  {
    id: 9,
    name: "Velvet Snow Short Almond nails",
    price: "$9.99",
    image: "https://m.media-amazon.com/images/I/71C4etR1TnL._SY450_.jpg",
    description: "Easy-to-apply holiday-themed nail stickers",
    cta: "Nail The Trend",
    affiliateUrl: "https://amzn.to/48m5Jdb"
  },
  {
    id: 10,
    name: "Christmas Press On Nails",
    price: "$9.99",
    image: "https://m.media-amazon.com/images/I/71KOe+czVTL._SL1500_.jpg",
    description: "Elegant pearl finish for sophisticated winter nails",
    cta: "Get This Look",
    affiliateUrl: "https://amzn.to/484RQQP"
  },
  {
    id: 11,
    name: "Short Almond French Tip",
    price: "$9.99",
    image: "https://m.media-amazon.com/images/I/817lOc7j36L._SY450_.jpg",
    description: "Specialty brushes for detailed winter nail art",
    cta: "Steal The Style",
    affiliateUrl: "https://amzn.to/3IsX4v5"
  },
  {
    id: 12,
    name: " Blue Witch",
    price: "$6.99",
    image: "https://m.media-amazon.com/images/I/61fpIwD4V+L._SL1200_.jpg",
    description: " Semi-transparent and alluring blue French short Almond False Nails " ,
    cta: "Nail The Trend",
    affiliateUrl: "https://amzn.to/4nio9QE"
  },
  {
    id: 13,
    name: "White French",
    price: "$6.99",
    image: "https://m.media-amazon.com/images/I/71zoGI4oJAL._SY450_.jpg",
    description: "Iridescent finish that changes color in different lights",
    cta: "Get This Look",
    affiliateUrl: "https://amzn.to/47MSNgj"
  },
  {
    id: 14,
    name: "Nude Acrylic Nails",
    price: "$5.99",
    image: "https://m.media-amazon.com/images/I/71bHSheqAQL._SX679_.jpg",
    description: "Snowflake Designs Fake Nails Cute Gradient Glue on Nails for Xmas Manicure Women",
    cta: "Steal The Style",
    affiliateUrl: "https://amzn.to/4pt333M"
  },
  {
    id: 15,
    name: "Christmas Medium Fake Nails",
    price: "$5.99",
    image: "https://m.media-amazon.com/images/I/71-SH3fDmXL._SX679_.jpg",
    description: "Nude False Nails Snowflake Line with Designs Acrylic Nails Silvery Glitter Stick on Nails",
    cta: "Nail The Trend",
    affiliateUrl: "https://amzn.to/4nzC58O"
  }
];

export default function WinterShop() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/winternailbg.jpg"
            alt="Winter nail products"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
            Winter Nails
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Cozy & Elegant Nail Products for Winter
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-charcoal-800 mb-4">
              Mirelle's Winter Favorites
            </h2>
            <p className="text-lg text-charcoal-600 max-w-3xl mx-auto">
              Embrace the cozy elegance of winter with these beautiful nail products 
              that capture the magic of the season.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {winterProducts.map((product) => (
              <div key={product.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.price}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-charcoal-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-charcoal-600 mb-4 text-sm">
                    {product.description}
                  </p>
                  
                  <a
                    href={product.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-4 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 text-center block"
                  >
                    {product.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          <div className="text-center mt-12">
            <a
              href="https://amzn.to/3VlWpyy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-charcoal-800 transition-colors duration-300"
            >
              Show More Winter nails
              <svg 
                className="ml-2 w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
