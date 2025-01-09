import React from 'react';
import { useSelector } from 'react-redux';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);

  if (cartItems.length === 0) {
    return (
      <div className="container my-5 text-center">
        <p className="alert alert-warning">Your cart is empty!</p>
      </div>
    );
  }

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container my-5">
      <h1 className="mb-4">Your Cart</h1>
      <div className="list-group">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <h5>{item.title}</h5>
              <p>Price: ${item.price}</p>
            </div>
            <img
              src={item.thumbnail}
              alt={item.title}
              style={{ width: '50px', height: '50px', objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
      <h3 className="mt-4">Total: ${totalPrice.toFixed(2)}</h3>
      <button className="btn btn-primary btn-lg mt-3">Proceed to Payment</button>
    </div>
  );
};

export default CartPage;
