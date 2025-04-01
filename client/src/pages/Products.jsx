import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  // Mock products data
  const products = [
    {
      id: 1,
      name: 'PlayStation 5',
      price: 499.99,
      category: 'consoles',
      image: 'https://via.placeholder.com/300x200',
      description: 'Experience lightning-fast loading with an ultra-high speed SSD.',
    },
    {
      id: 2,
      name: 'Xbox Series X',
      price: 499.99,
      category: 'consoles',
      image: 'https://via.placeholder.com/300x200',
      description: 'The most powerful Xbox ever with next-gen performance.',
    },
    {
      id: 3,
      name: 'Nintendo Switch OLED',
      price: 349.99,
      category: 'consoles',
      image: 'https://via.placeholder.com/300x200',
      description: '7-inch OLED screen, enhanced audio, and more.',
    },
    {
      id: 4,
      name: 'The Legend of Zelda: Breath of the Wild',
      price: 59.99,
      category: 'games',
      image: 'https://via.placeholder.com/300x200',
      description: 'Explore the vast world of Hyrule in this epic adventure.',
    },
    {
      id: 5,
      name: 'God of War Ragnarök',
      price: 59.99,
      category: 'games',
      image: 'https://via.placeholder.com/300x200',
      description: 'Continue the epic journey of Kratos and Atreus.',
    },
    {
      id: 6,
      name: 'Gaming Headset Pro',
      price: 99.99,
      category: 'accessories',
      image: 'https://via.placeholder.com/300x200',
      description: 'High-quality audio with noise-canceling microphone.',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'consoles', name: 'Consoles' },
    { id: 'games', name: 'Games' },
    { id: 'accessories', name: 'Accessories' },
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'price-asc', name: 'Price: Low to High' },
    { id: 'price-desc', name: 'Price: High to Low' },
    { id: 'newest', name: 'Newest' },
  ];

  const filteredProducts = products.filter(
    (product) => selectedCategory === 'all' || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'newest':
        return b.id - a.id;
      default:
        return 0;
    }
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4 sm:mb-0">All Products</h1>
        <div className="flex items-center space-x-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            {sortOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              selectedCategory === category.id
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {sortedProducts.map((product) => (
          <div key={product.id} className="group relative">
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <Link to={`/products/${product.id}`}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.description}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 