
import React from 'react';
import { menu_list } from '../assets/assets';

const ExploreMenu = () => {
  return (
    <div className="md:mx-28">
      <h2 className="text-center font-bold opacity-50 text-2xl mt-7 mb-4">This is a menu section</h2>
      <div className="flex flex-nowrap overflow-x-auto space-x-4 no-scrollbar">
        {menu_list.map((item) => (
          <div key={item.id} className="flex-shrink-0 w-40 h-auto text-center cursor-pointer">
            <img src={item.menu_image} alt='food' className="object-cover rounded-lg" />
            <h4 className="mt-2">{item.menu_name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExploreMenu;
