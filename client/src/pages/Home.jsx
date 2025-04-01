import { Link } from 'react-router-dom';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'PlayStation 5',
      price: 499.99,
      image: 'https://images.pexels.com/photos/7776091/pexels-photo-7776091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio.'
    },
    {
      id: 2,
      name: 'Xbox Series X',
      price: 499.99,
      image: 'https://images.pexels.com/photos/7776092/pexels-photo-7776092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'The most powerful Xbox ever. Experience next-gen speed and performance with the Xbox Velocity Architecture.'
    },
    {
      id: 3,
      name: 'Nintendo Switch OLED',
      price: 349.99,
      image: 'https://images.pexels.com/photos/7776093/pexels-photo-7776093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'The newest member of the Nintendo Switch family features a vibrant 7-inch OLED screen, a wide adjustable stand, and a dock with a wired LAN port.'
    }
  ];

  const categories = [
    {
      id: 1,
      name: 'Consoles',
      image: 'https://images.pexels.com/photos/7776094/pexels-photo-7776094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Latest gaming consoles from PlayStation, Xbox, and Nintendo'
    },
    {
      id: 2,
      name: 'Games',
      image: 'https://images.pexels.com/photos/7776095/pexels-photo-7776095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Popular games for all platforms'
    },
    {
      id: 3,
      name: 'Accessories',
      image: 'https://images.pexels.com/photos/7776096/pexels-photo-7776096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Controllers, headsets, and more'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/7776097/pexels-photo-7776097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Gaming background"
          />
          <div className="absolute inset-0 bg-gray-900 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Level Up Your Gaming
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Discover the latest gaming consoles, games, and accessories. Your one-stop shop for everything gaming.
          </p>
          <div className="mt-10">
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {featuredProducts.map((product) => (
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
                    <Link to={`/product/${product.id}`}>
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

      {/* Categories */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Shop by Category</h2>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {categories.map((category) => (
              <div key={category.id} className="group relative">
                <div className="w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 lg:h-80">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <Link to={`/products?category=${category.name.toLowerCase()}`}>
                    <span className="absolute inset-0" />
                    {category.name}
                  </Link>
                </h3>
                <p className="text-base font-semibold text-gray-900">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 