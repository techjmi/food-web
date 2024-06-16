//sidebar of dashbaord.... left side of dashboard.jsx and showing all option
import React from "react";
import { MdDashboard } from "react-icons/md";
import { CiBoxList } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import {
  HiUser,
  HiArrowSmRight,
  HiDocumentText,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { Sidebar } from "flowbite-react";
import { Link } from "react-router-dom";
const DashboardSide = () => {
  return (
    <Sidebar className="w-full md:w-56">
      <Sidebar.Items>
        <Sidebar.ItemGroup className=" flex flex-col gap-3">
          <Link to='/dashboard?tab=dash'>
            <Sidebar.Item icon={MdDashboard} as="div">
                Dashbaord
            </Sidebar.Item>
          </Link>
          <Link to='/dashboard?tab=add-food'>
            <Sidebar.Item icon={IoMdAdd} as="div">
                Add Food
            </Sidebar.Item>
          </Link>
          <Link to='/dashboard?tab=profile'>
            <Sidebar.Item icon={HiUser} as="div">
                profile
            </Sidebar.Item>
          </Link>
          <Link to='/dashboard?tab=food-list'>
            <Sidebar.Item icon={CiBoxList} as="div">
                Food List
            </Sidebar.Item>
          </Link>
          <Link to='/dashboard?tab=user-list'>
            <Sidebar.Item icon={HiOutlineUserGroup} as="div">
                User
            </Sidebar.Item>
          </Link>
          <Link>
            <Sidebar.Item icon={HiArrowSmRight} as="div">
                Sign Out
            </Sidebar.Item>
          </Link>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default DashboardSide;
