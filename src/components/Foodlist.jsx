import { Button } from "flowbite-react";
import React, { useState } from "react";
import {
  AiOutlineSearch,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
const Foodlist = ({ _id, name, image, price, description, category }) => {
  const [addItem, setAddItem] = useState(0);
  return (
    <div className="flex flex-col mx-2 my-4 shadow-sm rounded-lg relative">
      <img
        src={image}
        alt={name}
        className="object-cover rounded-lg cursor-pointer hover:scale-95 transition-transform duration-200"
      />
      <div className="add absolute bottom-40 right-3">
        {!addItem ? (
          <button
            className="text-black font-extrabold text-2xl m-0 p-0"
            onClick={() => setAddItem((prev) => prev + 1)}
          >
            <AiFillPlusCircle />
          </button>
        ) : (
          <div className="inc flex flex-row justify-between">
            <button
              className="text-black font-extrabold text-2xl m-0 p-0 mx-1"
              onClick={() => setAddItem((prev) => prev - 1)}
            >
              <AiFillMinusCircle />
            </button>
            <h2>{addItem}</h2>
            <button
              className="text-black font-extrabold text-2xl m-0 p-0"
              onClick={() => setAddItem((prev) => prev + 1)}
            >
              <AiFillPlusCircle />
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-row justify-between mt-3">
        <div className="">
          <h3 className="ms-4 font-bold">{name}</h3>
          <h2 className="mx-4 font-semibold">36-40 Mins Away</h2>
        </div>
        <div className="">
          <p className="text-slate-400 font-medium">${price}</p>
        </div>
      </div>

      <p className="ms-4 mt-1">{description}</p>
      <p className="ms-4 text-gray-500 font-bold">{category}</p>
    </div>
  );
};

export default Foodlist;
