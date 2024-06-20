
import React, { useEffect, useState } from "react";
import { getAllorder, update } from "../service/api";
import { Select } from "flowbite-react";

const DashAllorders = () => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const res = await getAllorder();
      if (res.data.success) {
        setOrders(res.data.data);
        console.log("Fetched orders:", res.data.data);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };
const handleChange=async(e,orderId)=>{
    // orderId, status
    const statue= e.target.value
    // console.log(statue, orderId)
    try {
        const res = await update(orderId,statue)
        // console.log(res)
    } catch (error) {
        console.log('the error while updating the status is', error.message)
    }
}
  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 md:mb-1 mb-5">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 text-left">Items</th>
            <th className="py-2 px-4 text-left">Address</th>
            <th className="py-2 px-4 text-left">Amount</th>
            <th className="py-2 px-4 text-left">Date</th>
            <th className="py-2 px-4 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id} className="border-b border-gray-200 bg-slate-400">
              <td className="py-2 px-4">
                {order.items.map((item, index) => (
                  <div key={index} className="mb-1">
                    {`${item.name} x ${item.quantity}`}
                  </div>
                ))}
              </td>
              <td className="py-2 px-4">
                <p className="text-slate-500 font-semibold">{order.address.firstName}</p>
                {`${order.address.address}, ${order.address.zipCode}`}
              </td>
              <td className="py-2 px-4">${order.amount.toFixed(2)}</td>
              <td className="py-2 px-4">
                {new Date(order.date).toLocaleDateString()}
              </td>
              <td>
                <Select onChange={(e)=>handleChange(e,order._id)}>
                    <option value="Food Processing">Food Processing</option>
                    <option value="Out for Delivery">Out for Delivery</option>
                    <option value="Deliverd">Deliverd</option>
                </Select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashAllorders;
