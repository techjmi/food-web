import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/Dataprovider";
import { fetchTopOrder } from "../service/api";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FaArrowUp } from "react-icons/fa6";
import { BsBoxSeam } from "react-icons/bs";

const DashboardSumm = () => {
  const { users, orders } = useContext(DataContext);
  const [topUsers, setTopUsers] = useState([]);
  const token = localStorage.getItem('food_token');

  const fetchTopOrders = async () => {
    try {
      const res = await fetchTopOrder(token);
      if (res.success === true) {
        setTopUsers(res.result); // Assuming res.result contains the array of top users
      }
    } catch (error) {
      console.error('Error fetching top users:', error.message);
    }
  };

  useEffect(() => {
    fetchTopOrders();
  }, []);

  return (
    <div className="w-full md:w-3/4 mx-auto flex gap-2 px-2 md:px-5 pt-1 md:pt-5 flex-col">
      <div className="top flex gap-2">
        <div className="bg-slate-100 shadow-sm w-full rounded-md p-4">
          <div className="total flex justify-between">
            <div className="left">
              <p className="text-slate-700 md:font-semibold font-light">TOTAL USER</p>
              <p className="text-slate-700 md:font-semibold font-light">{users.totalUsers}</p>
            </div>
            <div className="right">
              <div className="bg-slate-400 p-2 rounded-full">
                <HiOutlineUserGroup className=" md:size-8 size-4" />
              </div>
            </div>
          </div>
          <div className="lastMonth">
            <p className="flex mt-4 items-center">
              <span className="mr-1">
                <FaArrowUp />
              </span>
              <span className="mr-1 text-slate-500">Last month users &nbsp;</span>
              <span>{users.lastMonthUsers}</span>
            </p>
          </div>
        </div>

        <div className="bg-slate-100 shadow-sm w-full rounded-md p-4">
          <div className="total flex justify-between">
            <div className="left">
              <p className="text-slate-700 md:font-semibold font-light">TOTAL ORDER</p>
              <p className="text-slate-700 md:font-semibold font-light">{orders.totalOrders}</p>
            </div>
            <div className="right">
              <div className="bg-slate-400 p-2 rounded-full">
                <BsBoxSeam className=" md:size-8 size-4" />
              </div>
            </div>
          </div>
          <div className="lastMonth">
            <p className="flex mt-4 items-center">
              <span className="mr-1">
                <FaArrowUp />
              </span>
              <span className="mr-1 text-slate-500">Last month orders &nbsp;</span>
              <span>{orders.lastMonthOrders}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="top mt-4 w-full overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 md:mb-1 mb-5">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 text-left">Image</th>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Total Orders</th>
            </tr>
          </thead>
          <tbody>
            {topUsers.map((user) => (
              <tr key={user.userId} className="border-b border-gray-200 bg-slate-400">
                <td className="py-2 px-4">
                  <img src={user.profilePic} alt={user.name} className="rounded-full h-10 w-10" />
                </td>
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.orderCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardSumm;
