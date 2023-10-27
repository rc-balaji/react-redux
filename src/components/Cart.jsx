// src/CART.jsx

import React from 'react';
import { useSelector } from 'react-redux';

export const Cart = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};


