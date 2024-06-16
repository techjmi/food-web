
import React, { useContext, useState } from 'react';
import { Button, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai";
import UserProfile from './UserProfile';
import { BsCart3 } from "react-icons/bs";
import { Badge} from '@mui/material';
import { DataContext } from '../context/Dataprovider';
const Header = () => {
  const location = useLocation();
  const path = location.pathname;
  const[searchTerm,setSearchTerm]=useState('')
  const[login,setLogin]= useState(false)
  const{addTocart}= useContext(DataContext)
  console.log('the cartsss',addTocart)
  const itemCount = Object.keys(addTocart).length;
//serach text function
const handleSubmit=()=>{

}
  return (
    
    <Navbar className="border-b-2 md:px-10 sticky top-0 z-10">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white ">
          Shamim
        </span>
        Blog
      </Link>
      <form onSubmit={handleSubmit}>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline sm:hidden"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          size='small'
        />
      </form>
      {/* <Button className="w-12 h-10  hidden lg:inline" color="gray" pill>
        <AiOutlineSearch />
      </Button> */}
      <Link to="/cart" className="cursor-pointer">
      <Badge badgeContent={itemCount} color="secondary">
        <BsCart3 className='size-8 sm:size-6 cursor-pointer' />
      </Badge>
    </Link>
      
      <div className="flex gap-2 md:order-2">
        {/* <Button
          className="md:w-12 md:h-10 hidden lg:inline"
          color="gray"
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === "light" ? <MdOutlineLightMode /> : <MdDarkMode />}
        </Button> */}
        <UserProfile />
        <Navbar.Toggle />
      </div>
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
        <Navbar.Link active={path === "/dashboard"} as={"div"}>
          <Link to="/dashboard">Dashboard</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
