import Link from 'next/link';

const trendyProducts = [
  {
    id: 1,
    name: " French Riviera",
    price: "$15.99",
    image: "https://m.media-amazon.com/images/I/611GPwYMy-L._SX679_.jpg",
    description: "Semi-Transparent Navy Dark Blue French Tip Short Almond Fake Nails in a Glossy Finish",
    cta: "Get This Look",
    affiliateUrl: "https://amzn.to/42s3MZ0"
  },
  {
    id: 2,
    name: "Pink Cat Eye",
    price: "$19.99",
    image: "https://m.media-amazon.com/images/I/71X5aKMakpL._SL1500_.jpg",
    description: "Pink Cat Eye Pastel Glitter Holographic Fake Nails Kit for Women",
    cta: "Steal The Style",
    affiliateUrl: "https://amzn.to/46Hj6Du"
  },
  {
    id: 3,
    name: "Purple Cat Eye",
    price: "$12.99",
    image: "https://m.media-amazon.com/images/I/71G26eMHFnL._SY450_.jpg",
    description: "French Tip Holographic Glitter Nails Kit for Women, Reusable Fake Nails",
    cta: "Nail The Trend",
    affiliateUrl: "https://amzn.to/41ZDIEy"
  },
  {
    id: 4,
    name: "Pink Cat Eye",
    price: "$17.99",
    image: "https://m.media-amazon.com/images/I/71kWahC51nL._SY450_.jpg",
    description: "French Tip Glitter Holographic Nails Kit for Woman, Reusable Opaque Gel Magnetic Effect Fake Nails",
    cta: "Get This Look",
    affiliateUrl: "https://amzn.to/47GuZe2"
  },
  {
    id: 5,
    name: "Halloween Short Nails",
    price: "$13.99",
    image: "https://m.media-amazon.com/images/I/41IfNEh3mrL._SY300_SX300_QL70_FMwebp_.jpg",
    description: "French Tips in a Matte Finish, Stick on Nails",
    cta: "Steal The Style",
    affiliateUrl: "https://amzn.to/41SJ8kD"
  },
  {
    id: 6,
    name: "White French Tip Press on Nails",
    price: "$18.99",
    image: "https://m.media-amazon.com/images/I/616flXkXiVL._SX679_.jpg",
    description: "Soft Gel Almond Press on Nails Short for Women, Glossy Stick on Nails",
    cta: "Nail The Trend",
    affiliateUrl: "https://amzn.to/46vgoQr"
  },
  {
    id: 7,
    name: "Glitter Red Press on Nails ",
    price: "$17.98",
    image: "https://m.media-amazon.com/images/I/81Dy58yGEfL._SX679_.jpg",
    description: "Soft Gel Fake Nails Short with Glue, Glossy Glue On Nails ",
    cta: "Get This Look",
    affiliateUrl: "https://amzn.to/4nhvH6n"
  },
  {
    id: 8,
    name: "Cherry Red Press on Nails",
    price: "$8.99",
    image: "https://m.media-amazon.com/images/I/61xZBWKjDSL._SX679_.jpg",
    description: "Handmade Jelly Soft Gel Dark Red Glue on Nails",
    cta: "Steal The Style",
    affiliateUrl: "https://amzn.to/4nasNjV"
  },
  {
    id: 9,
    name: " Red Cat Eye Press",
    price: "$15.99",
    image: "https://m.media-amazon.com/images/I/412W1CTlRgL._SY300_SX300_QL70_FMwebp_.jpg",
    description: " Ombre Chrome Fake Nails With UV Cure Glue, Reusable Stick On Nails ",
    cta: "Nail The Trend",
    affiliateUrl: "https://amzn.to/46iGY0p"
  },
  {
    id: 10,
    name: "Cloudy White nude ",
    price: "$6.99",
    image: "https://m.media-amazon.com/images/I/51ZvHra4gSL._SY300_SX300_QL70_FMwebp_.jpg",
    description: "French Tip and 3D Gold Line Design, Glossy Gel Finish Acrylic Nails",
    cta: "Get This Look",
    affiliateUrl: "https://amzn.to/3K4Hw16"
  },
  {
    id: 11,
    name: "Trendy Nail Art Stickers",
    price: "$6.99",
    image: "https://m.media-amazon.com/images/I/61LgGnIaL5L._SX679_.jpg",
    description: "Easy-to-apply stickers for instant trendy looks",
    cta: "Steal The Style",
    affiliateUrl: "https://amzn.to/3KrAMdC"
  },
  {
    id: 12,
    name: "Blue Floral Petal",
    price: "$9.99",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Transform any polish into a trendy matte finish",
    cta: "Nail The Trend",
    affiliateUrl: "https://amzn.to/3Vm51VU"
  },
  {
    id: 13,
    name: "Sparkling Pentagram & Mixed Cat Eye",
    price: "$3.99",
    image: "https://m.media-amazon.com/images/I/71O69jvtK2L._SX679_.jpg",
    description: "Natural Stick on Nails, Glossy Acrylic Short Press on Nails ",
    cta: "Get This Look",
    affiliateUrl: "https://amzn.to/3VlifSQ"
  },
  {
    id: 14,
    name: "Pink&White",
    price: "$6.99",
    image: "https://m.media-amazon.com/images/I/71sAX6WBV+L._SX679_.jpg",
    description: "Gradient Glitter Glue Full Cover Acrylic Artificial Rhinestones Stick on Nails Glossy",
    cta: "Steal The Style",
    affiliateUrl: "https://amzn.to/46n2Vdh"
  },
  {
    id: 15,
    name: "Elegantly Crafted Gold French Tips",
    price: "$6.99",
    image: "https://m.media-amazon.com/images/I/41rzn5oPvnL._SY300_SX300_QL70_FMwebp_.jpg",
    description: "Glossy Gel Finish, Thick Natural Reusable Glue On Nails ",
    cta: "Nail The Trend",
    affiliateUrl: "https://amzn.to/4mdDjW5"
  }
];

export default function TrendyShop() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/trendynailbanner.jpg"
            alt="Trendy nail products"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
            Trendy Nails
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Latest Trends & Must-Have Nail Products
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-charcoal-800 mb-4">
              Mirelle's Trendy Favorites
            </h2>
            <p className="text-lg text-charcoal-600 max-w-3xl mx-auto">
              Stay ahead of the curve with these cutting-edge nail products that are 
              taking the beauty world by storm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {trendyProducts.map((product) => (
              <div key={product.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
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
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 text-center block"
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
              href="https://amzn.to/48iPr4O"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-charcoal-800 transition-colors duration-300"
            >
              Show More Trendy Products
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
