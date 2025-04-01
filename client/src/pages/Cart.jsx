import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, updateQuantity, clearCart } from '../store/slices/cartSlice';
import toast from 'react-hot-toast';

export default function Cart() {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state) => state.cart);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) {
      dispatch(removeFromCart(id));
      toast.success('Item removed from cart');
    } else {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
    toast.success('Item removed from cart');
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    toast.success('Cart cleared');
  };

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">Your cart is empty</h1>
          <p className="mt-4 text-gray-500">Add some items to your cart to see them here.</p>
          <div className="mt-6">
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-extrabold text-gray-900">Shopping Cart</h1>
      <div className="mt-8">
        <div className="flow-root">
          <ul className="-my-6 divide-y divide-gray-200">
            {items.map((item) => (
              <li key={item.id} className="py-6 flex">
                <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-center object-cover"
                  />
                </div>

                <div className="ml-4 flex-1 flex flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>{item.name}</h3>
                      <p className="ml-4">${item.price}</p>
                    </div>
                  </div>
                  <div className="flex-1 flex items-end justify-between text-sm">
                    <div className="flex items-center">
                      <label htmlFor={`quantity-${item.id}`} className="mr-2">
                        Qty
                      </label>
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="p-1 text-gray-500 hover:text-gray-700"
                        >
                          <span className="sr-only">Decrease quantity</span>
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        </button>
                        <span className="px-2 py-1 text-gray-700">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="p-1 text-gray-500 hover:text-gray-700"
                        >
                          <span className="sr-only">Increase quantity</span>
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="flex">
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>${total.toFixed(2)}</p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
        <div className="mt-6">
          <Link
            to="/checkout"
            className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Checkout
          </Link>
        </div>
        <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
          <p>
            or{' '}
            <Link to="/products" className="text-indigo-600 font-medium hover:text-indigo-500">
              Continue Shopping<span aria-hidden="true"> &rarr;</span>
            </Link>
          </p>
        </div>
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleClearCart}
            className="text-sm text-red-600 hover:text-red-500"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
} 