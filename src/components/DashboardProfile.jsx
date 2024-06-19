//this is a profile section of dashbord... common to both user and admin
import React, { useContext } from "react";
import { DataContext } from "../context/Dataprovider";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsBoxSeam, BsCart3, BsHeadphones } from "react-icons/bs";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
const DashboardProfile = () => {
  const { currentUser } = useContext(DataContext);
  const { addTocart } = useContext(DataContext);
  const itemCount = Object.keys(addTocart).length;
  return (
    <div className="flex  flex-col w-full md:w-3/5 mx-auto h-full pb-3">
      <div className="avtar flex flex-row md:flex-col gap-2 items-center md:shadow-[0]shadow-md md:rounded-none rounded-lg bg-slate-50 w-full p-4 md:bg-white">
        <img
          src={currentUser.profilePic}
          alt="profile_pic"
          className="h-28 w-28 rounded-full"
        />
        <div className="name flex md:flex-row flex-col gap-1">
          <p className="font-extrabold">Hii</p>
          <p className="">{currentUser.name}</p>
        </div>
      </div>
      <div className="history ">
        <div className="order flex flex-row gap-3 justify-center w-full p-4">
          <div className="ur_order flex flex-row shadow-sm-light bg-slate-50 rounded-lg px-2 py-2 items-center gap-3 font-medium w-1/2 outline cursor-pointer">
            <BsBoxSeam className="size-8" />
            <span>Orders</span>
          </div>
          <div className="wishlist flex flex-row shadow-sm-light bg-slate-50 rounded-lg px-2 py-2 items-center gap-3 font-medium w-1/2 outline cursor-pointer">
            <IoMdHeartEmpty className="size-8" />
            <p>Wishist</p>
          </div>
        </div>
        {/* dial and help part */}
        <div className="order flex flex-row gap-3 justify-center w-full p-4">
          <Link to="/cart" className="w-1/2">
            <div className="ur_order flex flex-row shadow-sm-light bg-slate-50 rounded-lg px-2 py-2 items-center gap-3 font-medium w-full outline cursor-pointer">
              <Badge badgeContent={itemCount} color="secondary">
                <BsCart3 className="size-8" />
              </Badge>
              <span>Cart</span>
            </div>
          </Link>
          <div className="wishlist flex flex-row shadow-sm-light bg-slate-50 rounded-lg px-2 py-2 items-center gap-3 font-medium w-1/2 outline cursor-pointer">
            <BsHeadphones className="size-8" />
            <p>Help Center</p>
          </div>
        </div>
      </div>
      <Button
        className="self-center mt-8"
        gradientDuoTone="purpleToPink"
        outline
      >
        Update Profle
      </Button>
    </div>
  );
};

export default DashboardProfile;
