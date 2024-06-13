import React, { useContext } from 'react';
import { DataContext } from '../context/Dataprovider';

const Cart = () => {
  const { addTocart, food } = useContext(DataContext);

  return (
    <div>
      {
        food.map(item => {
          if (addTocart[item._id] > 0) {
            return (
              <div key={item._id}>
                <p>{item.name}</p>
                {/* Display other details as needed */}
              </div>
            );
          }
          return null; // If item is not in cart or quantity is 0, return null or empty fragment
        })
      }
    </div>
  );
};

export default Cart;
