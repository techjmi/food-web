import React, { useContext, useState, useEffect } from 'react';
import { DataContext } from '../context/Dataprovider';
import Foodlist from './Foodlist';
import { Spinner } from "flowbite-react";

const DisplayFood = ({ category }) => {
  const { food } = useContext(DataContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay for loading spinner effect
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust delay time as needed

    return () => clearTimeout(timer); // Clean up timeout on unmount
  }, []);

  return (
    <div>
      <h3 className='text-center text-lg font-semibold'>Food list - Choose your favorite food</h3>
      <div className="food_list md:mx-28">
        {loading ? (
          <Spinner />
        ) : (
          food.map((item) => (
            (category === 'All' || category === item.category) && (
              <Foodlist key={item._id} {...item} />
            )
          ))
        )}
      </div>
    </div>
  );
};

export default DisplayFood;
