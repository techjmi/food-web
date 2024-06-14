import { button } from "flowbite-react";
import React from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const BtnGroup = ({ removeCart, id , addCart}) => {
  return (
    <div className="flex gap-2">
      <button
        className="bg-slate-300 px-2 py-1 rounded-lg"
        onClick={() => removeCart(id)}
      >
        <AiFillMinusCircle className="size-6" />
      </button>
      <button className="bg-slate-300 px-2 py-1 rounded-lg" onClick={()=>addCart(id)}>
        <AiFillPlusCircle className="size-6" />
      </button>
    </div>
  );
};

export default BtnGroup;
