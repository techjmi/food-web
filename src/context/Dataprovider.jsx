import React, { createContext, useState } from 'react';
import { food_list } from '../assets/assets';

// Create the DataContext
export const DataContext = createContext(null);

const Dataprovider = ({ children }) => {
  const [food, setFood] = useState(food_list);
  const[addTocart, setAddTocart]= useState({})

  return (
    <div>
      <DataContext.Provider value={{ food, setFood,addTocart, setAddTocart }}>
        {children}
      </DataContext.Provider>
    </div>
  );
};

export default Dataprovider;
