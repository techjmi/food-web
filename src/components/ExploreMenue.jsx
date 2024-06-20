
import React from 'react';
import { menu_list } from '../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {

  // Function to handle click on a menu item and update category state
  const handleCategoryChange = (menuName) => {
    setCategory(menuName);
  };
// console.log(category)
  return (
    <div className="md:mx-28">
      <h2 className="text-center font-bold opacity-50 text-xl mt-7 mb-4">Choose Your Menu From Below </h2>
      <div className="flex flex-nowrap overflow-x-auto space-x-1 no-scrollbar">
        {menu_list.map((item) => (
          <div key={item._id} className="flex-shrink-0 md:w-40 md:h-auto w-20 h-auto text-center cursor-pointer" onClick={() => handleCategoryChange(item.menu_name)}>
            <img src={item.menu_image} alt='food' className="object-cover rounded-lg" />
            <h4 className="mt-2">{item.menu_name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExploreMenu;
