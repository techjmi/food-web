import React, { createContext, useState } from 'react';
import { food_list } from '../assets/assets';

// Create the DataContext
export const DataContext = createContext(null);

const Dataprovider = ({ children }) => {
  const [food, setFood] = useState(food_list);

  return (
    <div>
      <DataContext.Provider value={{ food, setFood }}>
        {children}
      </DataContext.Provider>
    </div>
  );
};

export default Dataprovider;
