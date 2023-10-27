// src/HOME.jsx

import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './actions';

export const Home = () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Home</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}{' '}
            <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

