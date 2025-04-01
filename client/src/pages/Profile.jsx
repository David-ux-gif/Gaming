import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateUser } from '../store/slices/authSlice';
import toast from 'react-hot-toast';

export default function Profile() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || '',
  });

  // Mock order history data
  const orderHistory = [
    {
      id: '1',
      date: '2024-03-15',
      total: 559.98,
      status: 'Delivered',
      items: [
        {
          id: 1,
          name: 'PlayStation 5',
          quantity: 1,
          price: 499.99,
        },
        {
          id: 6,
          name: 'Gaming Headset Pro',
          quantity: 1,
          price: 59.99,
        },
      ],
    },
    {
      id: '2',
      date: '2024-03-10',
      total: 59.99,
      status: 'Processing',
      items: [
        {
          id: 4,
          name: 'The Legend of Zelda: Breath of the Wild',
          quantity: 1,
          price: 59.99,
        },
      ],
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(formData));
    setIsEditing(false);
    toast.success('Profile updated successfully');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto">
        {/* Profile Information */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Profile Information</h2>
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="text-indigo-600 hover:text-indigo-500"
              >
                Edit Profile
              </button>
            )}
          </div>

          {isEditing ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <textarea
                  name="address"
                  id="address"
                  rows={3}
                  value={formData.address}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save Changes
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Name</h3>
                <p className="mt-1 text-sm text-gray-900">{user?.name}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Email</h3>
                <p className="mt-1 text-sm text-gray-900">{user?.email}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                <p className="mt-1 text-sm text-gray-900">{user?.phone || 'Not provided'}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Address</h3>
                <p className="mt-1 text-sm text-gray-900">{user?.address || 'Not provided'}</p>
              </div>
            </div>
          )}
        </div>

        {/* Order History */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Order History</h2>
          <div className="space-y-6">
            {orderHistory.map((order) => (
              <div key={order.id} className="border-b border-gray-200 pb-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Order #{order.id}</p>
                    <p className="text-sm text-gray-500">{order.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">${order.total.toFixed(2)}</p>
                    <p className="text-sm text-gray-500">{order.status}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <div>
                        <span className="font-medium text-gray-900">{item.name}</span>
                        <span className="text-gray-500"> x {item.quantity}</span>
                      </div>
                      <span className="text-gray-900">${item.price.toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 