import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: 'Gaming Consoles',
      description: 'Latest gaming consoles from top manufacturers',
      image: 'https://images.pexels.com/photos/7776098/pexels-photo-7776098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      subcategories: [
        {
          name: 'PlayStation',
          image: 'https://images.pexels.com/photos/7776099/pexels-photo-7776099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          description: 'PS5, PS4, and accessories'
        },
        {
          name: 'Xbox',
          image: 'https://images.pexels.com/photos/7776100/pexels-photo-7776100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          description: 'Series X|S, One, and accessories'
        },
        {
          name: 'Nintendo',
          image: 'https://images.pexels.com/photos/7776101/pexels-photo-7776101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          description: 'Switch, 3DS, and accessories'
        }
      ]
    },
    {
      id: 2,
      name: 'Video Games',
      description: 'Popular games for all platforms',
      image: 'https://images.pexels.com/photos/7776102/pexels-photo-7776102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      subcategories: [
        {
          name: 'Action & Adventure',
          image: 'https://images.pexels.com/photos/7776103/pexels-photo-7776103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          description: 'Thrilling adventures and epic battles'
        },
        {
          name: 'Sports & Racing',
          image: 'https://images.pexels.com/photos/7776104/pexels-photo-7776104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          description: 'Sports games and racing simulators'
        },
        {
          name: 'RPG & Strategy',
          image: 'https://images.pexels.com/photos/7776105/pexels-photo-7776105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          description: 'Role-playing and strategy games'
        }
      ]
    },
    {
      id: 3,
      name: 'Gaming Accessories',
      description: 'Essential gaming peripherals and accessories',
      image: 'https://images.pexels.com/photos/7776106/pexels-photo-7776106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      subcategories: [
        {
          name: 'Controllers',
          image: 'https://images.pexels.com/photos/7776107/pexels-photo-7776107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          description: 'Game controllers and pads'
        },
        {
          name: 'Headsets',
          image: 'https://images.pexels.com/photos/7776108/pexels-photo-7776108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          description: 'Gaming headsets and audio'
        },
        {
          name: 'Storage & Cases',
          image: 'https://images.pexels.com/photos/7776109/pexels-photo-7776109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          description: 'Storage solutions and protective cases'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Shop by Category</h1>
        
        {categories.map((category) => (
          <div key={category.id} className="mb-16">
            {/* Category Header */}
            <div className="relative h-96 rounded-lg overflow-hidden mb-8">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-white mb-2">{category.name}</h2>
                  <p className="text-lg text-gray-200">{category.description}</p>
                </div>
              </div>
            </div>

            {/* Subcategories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {category.subcategories.map((subcategory) => (
                <Link
                  key={subcategory.name}
                  to={`/products?category=${subcategory.name.toLowerCase()}`}
                  className="group"
                >
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img
                      src={subcategory.image}
                      alt={subcategory.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <div className="text-center">
                        <h3 className="text-xl font-semibold text-white mb-2">{subcategory.name}</h3>
                        <p className="text-sm text-gray-200">{subcategory.description}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories; 