import React, { useContext, useEffect } from "react";
import {
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { DataContext } from "../context/Dataprovider";

const Foodlist = ({ _id, name, image, price, description, category }) => {
  const { addTocart, setAddTocart } = useContext(DataContext);

  const addCart = (itemId) => {
    if (!addTocart[itemId]) {
      // Item does not exist in cart, add it with quantity 1
      setAddTocart((prevState) => ({
        ...prevState,
        [itemId]: 1,
      }));
    } else {
      // Item already exists in cart, increment its quantity
      setAddTocart((prevState) => ({
        ...prevState,
        [itemId]: prevState[itemId] + 1,
      }));
    }
  };

  const removeCart = (itemId) => {
    if (addTocart[itemId] === 1) {
      // If only one item, remove it from cart
      const updatedCart = { ...addTocart };
      delete updatedCart[itemId];
      setAddTocart(updatedCart);
    } else if (addTocart[itemId] > 1) {
      // Decrease quantity if more than one
      setAddTocart((prevState) => ({
        ...prevState,
        [itemId]: prevState[itemId] - 1,
      }));
    }
  };
useEffect(()=>{
    console.log(addTocart)
},)
  return (
    <div className="flex flex-col mx-2 my-4 shadow-sm rounded-lg relative">
      <img
        src={image}
        alt={name}
        className="object-cover rounded-lg cursor-pointer hover:scale-95 transition-transform duration-200"
      />
      <div className="add absolute bottom-3 right-3">
        {!addTocart[_id] ? (
          <button
            className="text-black font-extrabold text-2xl m-0 p-0"
            onClick={() => addCart(_id)}
          >
            <AiFillPlusCircle />
          </button>
        ) : (
          <div className="inc flex flex-row justify-between rounded-xl bg-slate-300 px-2 py-1">
            <button
              className="text-black font-extrabold text-2xl m-0 p-0 mx-1"
              onClick={() => removeCart(_id)}
            >
              <AiFillMinusCircle />
            </button>
            <h2>{addTocart[_id]}</h2>
            <button
              className="text-black font-extrabold text-2xl m-0 p-0"
              onClick={() => addCart(_id)}
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
