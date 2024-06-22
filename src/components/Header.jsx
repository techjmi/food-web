import React, { useContext, useState } from "react";
import { Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import UserProfile from "./UserProfile";
import { BsCart3 } from "react-icons/bs";
import { Badge } from "@mui/material";
import { DataContext } from "../context/Dataprovider";
const url =
  "https://ideogram.ai/assets/image/lossless/response/Ts-4Pc2gRMGh2WYPgZtG1A";
const Header = () => {
  const location = useLocation();
  const path = location.pathname;
  const [searchTerm, setSearchTerm] = useState("");
  const { addTocart, currentUser } = useContext(DataContext);
  const itemCount = Object.keys(addTocart).length;
  const isAdmin = currentUser && currentUser.isAdmin;
  const handleSubmit = () => {
    // Implement search functionality
  };
  if (!addTocart) {
    return <div className="text-center">Loading Cart...</div>;
  }
  return (
    <Navbar className="border-b-2 md:px-10 sticky top-0 z-10 m-0 p-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <img
          src={url}
          alt="logo"
          width="70px"
          height="60px"
          className="rounded-full bg-slate-200"
        />
      </Link>
      <form onSubmit={handleSubmit} className="hidden lg:inline">
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline sm:hidden"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          size="small"
        />
      </form>
      {currentUser && !currentUser.isAdmin && (
        <Link to="/cart" className="cursor-pointer">
          <Badge badgeContent={itemCount} color="secondary">
            <BsCart3 className="size-8 sm:size-6 cursor-pointer" />
          </Badge>
        </Link>
      )}
      <div className="flex gap-2 md:order-2">
        <UserProfile />
      </div>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
        {currentUser && isAdmin && (
          <Navbar.Link active={path === "/dashboard?tab=dash"} as={"div"}>
            <Link to="/dashboard">Dashboard</Link>
          </Navbar.Link>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
