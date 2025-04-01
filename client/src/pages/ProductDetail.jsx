import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';
import toast from 'react-hot-toast';

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  // Mock product data (in a real app, this would come from an API)
  const product = {
    id: parseInt(id),
    name: 'PlayStation 5',
    price: 499.99,
    description: 'Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio, and an all-new generation of incredible PlayStation games.',
    features: [
      'Lightning Speed - Harness the power of a custom CPU, GPU, and SSD with Integrated I/O that rewrite the rules of what a PlayStation console can do.',
      'Stunning Games - Marvel at incredible graphics and experience new PS5 features.',
      'Breathtaking Immersion - Discover a deeper gaming experience with support for haptic feedback, adaptive triggers, and 3D Audio technology.',
    ],
    image: 'https://via.placeholder.com/800x600',
    specifications: {
      'CPU': 'AMD Zen 2',
      'GPU': 'AMD RDNA 2',
      'RAM': '16GB GDDR6',
      'Storage': '825GB SSD',
      'Resolution': '4K',
    },
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    toast.success('Added to cart!');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
        {/* Product Image */}
        <div className="lg:max-w-lg lg:self-end">
          <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product.name}</h1>
          <div className="mt-3">
            <p className="text-3xl text-gray-900">${product.price}</p>
          </div>
          <div className="mt-6">
            <h3 className="sr-only">Description</h3>
            <div className="text-base text-gray-700 space-y-6">{product.description}</div>
          </div>

          {/* Add to Cart */}
          <div className="mt-8 flex">
            <div className="flex items-center border border-gray-300 rounded-md">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 text-gray-500 hover:text-gray-700"
              >
                <span className="sr-only">Decrease quantity</span>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
              <span className="px-4 py-2 text-gray-700">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 text-gray-500 hover:text-gray-700"
              >
                <span className="sr-only">Increase quantity</span>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="ml-8 flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add to Cart
            </button>
          </div>

          {/* Features */}
          <div className="mt-10">
            <h3 className="text-sm font-medium text-gray-900">Features</h3>
            <div className="mt-4">
              <ul className="pl-4 list-disc text-sm space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-gray-700">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="mt-16">
        <h3 className="text-lg font-medium text-gray-900">Specifications</h3>
        <div className="mt-4 border-t border-gray-200">
          <dl className="divide-y divide-gray-200">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-500">{key}</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
} 