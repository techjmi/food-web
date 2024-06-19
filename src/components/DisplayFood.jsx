import React, { useContext, useState, useEffect } from 'react';
import { DataContext } from '../context/Dataprovider';
import Foodlist from './Foodlist';
import { Spinner } from "flowbite-react";
import { getFood } from '../service/api';

const DisplayFood = ({ category }) => {
  const { food ,setFood} = useContext(DataContext);
  const [loading, setLoading] = useState(true);
  const fetchfood= async()=>{
    try {
      setLoading(true)
      const res= await getFood()
      setFood(res.data)
      setLoading(false)
    } catch (error) {
      console.log('the error while getting food is', error.message)
    }
  }

  useEffect(()=>{
fetchfood()
  },[])
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
