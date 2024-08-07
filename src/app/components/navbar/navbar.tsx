"use client";

import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CartNav from "./cartNav";
import SideNav from "./sideNav";

function Navbar() {
  const [sideNav, setSideNav] = useState<boolean>(false);
  const [cartNav, setCartNav] = useState<boolean>(false);

  const toggleSideNav = () => setSideNav(!sideNav);
  const toggleCartNav = () => setCartNav(!cartNav);

  return (
    <div className="w-full mx-auto flex justify-between items-center p-4 border-b-2 bg-black z-20 sticky top-0 h-[8vh]">
      <div className="flex items-center">
        <div onClick={toggleSideNav} className="cursor-pointer">
          <AiOutlineMenu className="hover:text-orange-700 size-7" />
        </div>
        <Link href="/home" className="p-0 mr-5 ml-1">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
            Eat
            <span className="font-bold">aly</span>
          </h1>
        </Link>
        <Link
          href="/home/menu"
          className="hidden lg:flex items-center bg-gray-200 rounded-full p-1  text-[14px] border-none hover:bg-gray-300"
        >
          <p className="bg-orange-700 text-white rounded-full p-2 text-bold">
            Our
          </p>
          <p className="px-2 text-bold text-md text-black">Menu</p>
        </Link>
      </div>
      <div className="bg-gray-100 hover:bg-gray-300 rounded-full flex items-center px-2 w-1/2 md:w-1/3 duration-300 text-black">
        <AiOutlineSearch className="size-5 md:size-6" />
        <input
          className="bg-transparent p-1 md:p-2 w-full focus:outline-none text-sm md:text-base"
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
      <CartNav cartNav={cartNav} toggleCartNav={toggleCartNav} />
      <SideNav sideNav={sideNav} toggleSideNav={toggleSideNav} />
    </div>
  );
}

export default Navbar;
