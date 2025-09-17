import Link from 'next/link';

const halloweenProducts = [
  {
    id: 1,
    name: "Til Death ",
    price: "$21.99",
    image: "https://m.media-amazon.com/images/I/71PUcXj5YYL._SL1500_.jpg",
    description: "3D Lace Medium Almond Fake Nails with Glossy Finish, Salon Quality Halloween Nails",
    cta: "Get This Look",
    affiliateUrl: "https://amzn.to/46kK7eD"
  },
  {
    id: 2,
    name: "Ghosted",
    price: "$19.99",
    image: "https://m.media-amazon.com/images/I/71sPuMmbetL._SL1500_.jpg",
    description: "Short Almond Black Fake Nails with Ghost Motif & Glossy Finish",
    cta: "Steal The Style",
    affiliateUrl: "https://amzn.to/47MklCA"
  },
  {
    id: 3,
    name: "Crybaby Clown ",
    price: "$21.99",
    image: "https://m.media-amazon.com/images/I/71-5-NHYeLL._SL1500_.jpg",
    description: "Short Almond 3D Fake Nails with Clown & Swirl Designs in a Chrome Finish",
    cta: "Nail The Trend",
    affiliateUrl: "https://amzn.to/41XVR5A"
  },
  {
    id: 4,
    name: "Pumpkin Patch",
    price: "$19.99",
    image: "https://m.media-amazon.com/images/I/71CSH8hX06L._SL1500_.jpg",
    description: "Short Oval Fake Nails with a Velvet Finish",
    cta: "Get This Look",
    affiliateUrl: "https://amzn.to/46kL06X"
  },
  {
    id: 5,
    name: "Peek-o'-Lantern",
    price: "$19.99",
    image: "https://m.media-amazon.com/images/I/81dOrEH7aTL._SL1500_.jpg",
    description: "Short Round Fake Nails with Pumpkin Jack-o’-Lantern Graphics & Velvet Finish",
    cta: "Steal The Style",
    affiliateUrl: "https://amzn.to/42pzl5K"
  },
  {
    id: 6,
    name: "Midnight Romance",
    price: "$19.99",
    image: "https://m.media-amazon.com/images/I/711T6nOvTQL._SY450_.jpg",
    description: "Short Squoval Black Fake Nails with Magnetic Cat-Eye Design & Finish",
    cta: "Nail The Trend",
    affiliateUrl: "https://amzn.to/3K7gaY7"
  },
  {
    id: 7,
    name: "Tiny Pumpkin",
    price: "$19.99",
    image: "https://m.media-amazon.com/images/I/71ZpLRPv4OL._SY450_.jpg",
    description: "| Short Squoval French Tip Fake Nails with Pumpkin Graphics & Glossy Finish",
    cta: "Get This Look",
    affiliateUrl: "https://amzn.to/48qoZGq"
  },
  {
    id: 8,
    name: "Rosy Remains",
    price: "$21.99",
    image: "https://m.media-amazon.com/images/I/71U9wwdKYFL._SY450_.jpg",
    description: "Charcoal Gray 3D Skeleton Medium Coffin Fake Nails with Matte Finish",
    cta: "Steal The Style",
    affiliateUrl: "https://amzn.to/3K4t0GE"
  },
  {
    id: 9,
    name: "Halloween Acrylic Nails",
    price: "$6.99",
    image: "https://m.media-amazon.com/images/I/41Aj6Irp6+L._SY300_SX300_QL70_FMwebp_.jpg",
    description: "Matte False Nails with Gold Skeleton Designs Glue on Nail Full Cover Artificial Stick",
    cta: "Nail The Trend",
    affiliateUrl: "https://amzn.to/3K6pueL"
  },
  {
    id: 10,
    name: "Monster Claw Nail Tips",
    price: "$16.99",
    image: "https://m.media-amazon.com/images/I/71g1ikBufML._SY450_.jpg",
    description: "White Glue on Nail Cute Ghost False Nails with Spider Web Designs Blood Heart Stick",
    cta: "Get This Look",
    affiliateUrl: "https://amzn.to/4go7MiS"
  },
  {
    id: 11,
    name: " Cute Ghost Acrylic Stick Nails",
    price: "$6.99",
    image: "https://m.media-amazon.com/images/I/71+wAfDJMWL._SL1500_.jpg",
    description: "Brown Leopard Print False Nails with Gold Cobweb Designs Gloss Full Cover",
    cta: "Steal The Style",
    affiliateUrl: "https://amzn.to/4nd2Jom"
  },
  {
    id: 12,
    name: "Coffin Goth",
    price: "$6.99",
    image: "https://m.media-amazon.com/images/I/71NBay0YIvL._SY450_.jpg",
    description: "Sharp fang designs for vampire-inspired nails",
    cta: "Nail The Trend",
    affiliateUrl: "https://amzn.to/46ff5oo"
  },
  {
    id: 13,
    name: "Black White Grid French Tip",
    price: "$6.99",
    image: "https://m.media-amazon.com/images/I/71hpFYXL8vL._SL1500_.jpg",
    description: "  French Tip Acrylic Stick on Nail Cute Ghost Glue on Nail with Pumpkin Spider Designs",
    cta: "Get This Look",
    affiliateUrl: "https://amzn.to/3VhueRh"
  },
  {
    id: 14,
    name: "Witch Hat Nail Decals",
    price: "$6.99",
    image: "https://m.media-amazon.com/images/I/71FAxn1rR5L._SL1500_.jpg",
    description: "French Tip Acrylic Glue on Nail with Designs Cute Ghost False Nails Fall Pumpkin Stick on Nail",
    cta: "Steal The Style",
    affiliateUrl: "https://amzn.to/46qaUGz"
  },
  {
    id: 15,
    name: " Purple Green Glitter Acrylic Nails",
    price: "$6.99",
    image: "https://m.media-amazon.com/images/I/71L8Jt8EcKL._SY450_.jpg",
    description: "Medium Gloss False Nails with Skeleton Bat Designs Spider Web Artificial Glue on Nails ",
    cta: "Nail The Trend",
    affiliateUrl: "https://amzn.to/3K3kRlT"
  }
];

export default function HalloweenShop() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/halloweenbannerimg.jpg"
            alt="Halloween nail products"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
            Halloween Nails
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Spooky & Stylish Nail Products for Halloween
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-charcoal-800 mb-4">
              Mirelle's Halloween Favorites
            </h2>
            <p className="text-lg text-charcoal-600 max-w-3xl mx-auto">
              Discover the perfect products to create spooky, stylish Halloween nail looks 
              that will make you the star of any Halloween party.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {halloweenProducts.map((product) => (
              <div key={product.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-blush-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
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
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-4 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 text-center block"
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
              href="https://amzn.to/4n3qqPD"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-charcoal-800 transition-colors duration-300"
            >
              Show More Halloween Products
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
