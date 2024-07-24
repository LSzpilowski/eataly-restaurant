"use client"

import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CartNav from "./navbar/cartNav";
import SideNav from "./navbar/sideNav";

const Navbar: React.FC = () => {
  const [sideNav, setSideNav] = useState<boolean>(false);
  const [cartNav, setCartNav] = useState<boolean>(false);

  const toggleSideNav = () => setSideNav(!sideNav);
  const toggleCartNav = () => setCartNav(!cartNav);

  return (
        <div className="w-full mx-auto flex justify-between items-center p-4 border-b-2">
          <div className="flex items-center">
            <div
              onClick={toggleSideNav}
              className="cursor-pointer"
            >
              <AiOutlineMenu size={30} className= "hover:text-orange-700" />
            </div>
            <Link
              href="/home"
              className="p-0 mr-5 ml-1"
            >
              <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
                Yum
                <span className="font-bold">Eats</span>
              </h1>
            </Link>
            <Link
              href="/home/delivery" 
              className="hidden lg:flex items-center bg-gray-200 rounded-full p-1  text-[14px] border-none hover:bg-gray-300"
            >
              <p className="bg-orange-700 text-white rounded-full p-2 text-bold">
                Free
              </p>
              <p className="p-2 text-bold text-md text-black">Delivery</p>
            </Link>
          </div>
          <div className="bg-gray-100 hover:bg-gray-300 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] duration-300 text-black">
            <AiOutlineSearch size={25} />
            <input
              className="bg-transparent p-2 w-full focus:outline-none"
              type="text"
              placeholder="Search meals"
            />
          </div>
          <Button
            onClick={toggleCartNav}
            className="bg-orange-700 font-bold text-white hover:bg-white hover:text-orange-700 hidden md:flex items-center mr-6 py-2 rounded-full  duration-300"
          >
            <BsFillCartFill size={20} className="mr-2" /> Cart
          </Button>
          <CartNav cartNav={cartNav} toggleCartNav={toggleCartNav}/>
          <SideNav sideNav={sideNav} toggleSideNav={toggleSideNav}/>

          
        </div>
  );
};

export default Navbar;
