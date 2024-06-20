// components/OrderList.js
import { Button } from "flowbite-react";
import React from "react";
const url =
  "https://ideogram.ai/assets/image/lossless/response/LiKZ2cCnTOG1pUWoaLhMDQ";
const OrderList = ({ items, order }) => {
  return (
    <div className="shadow-sm outline md:p-4 p-1 md:w-[80%] mx-auto flex justify-between items-start gap-1 w-full">
      {/* <div className="flex w-[85%] bg-slate-50 m-0"> */}
      <img
        src={url}
        alt="order_image"
        width="50px"
        height="auto"
        className="relative w-[15%]"
      />
      <div className="list w-[40%] relative ">
        {items.map((item) => (
          <div key={item.id} className="w-full relative inline flex-wrap gap-2">
            {item.name} <span className="font-bold inline">x</span>
            {item.quantity},
          </div>
        ))}
        <p className="font-semibold">{order.items.length}</p>
      </div>
      <p className="relative w-[8%] font-bold">{order.amount}</p>
      <p className="relative w-[15%]">{order.status}</p>
      {/* </div> */}
      {/* <div className="bg-slate-400"> */}
      <Button
        outline
        gradientDuoTone="purpleToPink"
        className=""
      >
        Track
      </Button>
      {/* </div> */}
    </div>
  );
};

export default OrderList;
