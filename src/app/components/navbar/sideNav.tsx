import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillCartFill, BsPersonFill } from "react-icons/bs";
import { GiCook } from "react-icons/gi";
import { TbTruckReturn } from "react-icons/tb";
import {
  MdOutlineFavorite,
  MdMenuBook,
  MdRestaurantMenu,
} from "react-icons/md";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CartNav from "./cartNav";

interface ISideNavProps {
  sideNav: boolean;
  toggleSideNav: () => void;
}

const Links = [
  {
    url: "/home/menu",
    icon: <MdRestaurantMenu />,
    title: "Menu",
  },
  {
    url: "/home/account",
    icon: <BsPersonFill />,
    title: "My Account",
  },
  {
    url: "/home/account/favourites",
    icon: <MdOutlineFavorite />,
    title: "My Favourite",
  },
  {
    url: "/home/delivery",
    icon: <TbTruckReturn />,
    title: "Delivery",
  },
  {
    url: "/home/newsletter",
    icon: <MdMenuBook />,
    title: "Newsletter",
  },
  {
    url: "/home/about",
    icon: <GiCook />,
    title: "About Us",
  },
];

function SideNav({ sideNav, toggleSideNav }: ISideNavProps) {
  const [cartNav, setCartNav] = useState<boolean>(false);
  const toggleCartNav = () => setCartNav(!cartNav);

  return (
    <>
      {sideNav ? (
        <div
          className="bg-black/60 fixed w-full h-screen z-20 top-0 left-0"
          onClick={toggleSideNav}
        ></div>
      ) : null}
      <div
        className={
          sideNav
            ? "fixed top-0 left-0 w-full md:w-1/5 h-screen bg-white z-50 duration-300 overflow-y-auto "
            : "fixed top-0 left-[-100%] w-1/5 h-screen bg-white z-50 duration-300 overflow-y-auto"
        }
      >
        <AiOutlineClose
          onClick={toggleSideNav}
          size={25}
          className="absolute right-4 top-4 cursor-pointer text-black z-20"
        />
        <Link
          href="/home"
          onClick={toggleSideNav}
          className="w-1/2 p-4 text-4xl flex flex-row justify-center md:justify-start hover:opacity-60"
        >
          <h2 className="text-black">Yum</h2>
          <span className="text-orange-700 font-bold">Eats</span>
        </Link>
        <div className="flex flex-col text-gray-900 mt-5 overflow-hidden">
          <div
            onClick={() => {
              toggleCartNav(), toggleSideNav();
            }}
            className="w-full flex md:hidden flex-row items-center justify-start gap-3 text-2xl pl-8 py-2 hover:scale-105 ease-in-out duration-300 bg-white hover:bg-slate-100 cursor-pointer"
          >
            <div className="text-white bg-orange-700 rounded-full p-2 inline-block">
              <BsFillCartFill />
            </div>
            <p className="font-normal">Cart</p>
          </div>
          {Links.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              onClick={toggleSideNav}
              className="w-full flex flex-row items-center gap-3 text-2xl py-2 pl-8 hover:scale-105 ease-in-out duration-300 hover:bg-slate-100"
            >
              <div className="text-white bg-orange-700 rounded-full p-2 inline-block">
                {link.icon}
              </div>
              {link.title}
            </Link>
          ))}
        </div>
        <CartNav cartNav={cartNav} toggleCartNav={toggleCartNav} />
      </div>
    </>
  );
}

export default SideNav;
