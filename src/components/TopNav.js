import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsFillCartFill, BsPerson } from "react-icons/bs";
import { TbTruckReturn } from "react-icons/tb";
import { FaGoogleWallet } from "react-icons/fa";
import { MdHelp, MdOutlineFavorite } from "react-icons/md";

import { Route, Routes, useNavigate } from "react-router-dom";

import HomePage from "../pages/HomePage";
import MyAccountPage from "../pages/MyAccountPage";
import DeliveryPage from "../pages/DeliveryPage";
import MyFavouritePage from "../pages/MyFavouritePage";
import MyWalletPage from "../pages/MyWalletPage";
import HelpPage from "../pages/HelpPage";

const TopNav = () => {
  const [sideNav, setSideNav] = useState(false);
  const [cartNav, setCartNav] = useState(false);

  const navigate = useNavigate();

  function NavigateHome() {
    navigate("/");
    setSideNav(!sideNav);
  }

  function NavigateAccount() {
    navigate("/myAccountPage");
    setSideNav(!sideNav);
  }
  function NavigateDelivery() {
    navigate("/deliveryPage");
    setSideNav(!sideNav);
  }
  function NavigateMyFavourite() {
    navigate("/myFavouritePage");
    setSideNav(!sideNav);
  }
  function NavigateMyWallet() {
    navigate("/myWalletPage");
    setSideNav(!sideNav);
  }
  function NavigateHelp() {
    navigate("/helpPage");
    setSideNav(!sideNav);
  }

  return (
    // That's the main div
    <div>
      {/* Below is the div for TopNav - I just needed to separate it from the Routes, which are in the bottom */}
      <div>
        <div className="max-w-[1520px] mx-auto flex justify-between items-center p-4">
          <div className="flex items-center">
            <div
              onClick={() => setSideNav(!sideNav)}
              className="cursor-pointer hover:scale-110 duration-300 ml-2"
            >
              <AiOutlineMenu size={30} />
            </div>
            <button
              onClick={() => navigate("/")}
              className="border-none p-0 mr-5 ml-1 hover:scale-105 duration-300"
            >
              <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
                Yum
                <span className="font-bold">Eats</span>
              </h1>
            </button>
            <button
              onClick={() => navigate("/deliveryPage")}
              className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 ml-2 text-[14px] border-none hover:scale-105 duration-300"
            >
              <p className="bg-orange-700 text-white rounded-full p-2 text-bold">
                Free
              </p>
              <p className="p-2 text-bold">Delivery</p>
            </button>
          </div>
          <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] hover:scale-105 duration-300">
            <AiOutlineSearch size={25} />
            <input
              className="bg-transparent p-2 w-full focus:outline-none"
              type="text"
              placeholder="Search meals"
            />
          </div>
          <button
            onClick={() => setCartNav(!cartNav)}
            className="bg-orange-700 text-white hidden md:flex items-center mr-6 py-2 rounded-full hover:scale-105 duration-300"
          >
            <BsFillCartFill size={20} className="mr-2" /> Cart
          </button>

          {cartNav ? (
            <div
              className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"
              onClick={() => setCartNav(!cartNav)}
            ></div>
          ) : (
            ""
          )}
          <div
            className={
              cartNav
                ? "fixed top-0 right-0 w-[500px] h-screen bg-white z-10 duration-300"
                : "fixed top-0 right-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
            }
          >
            <AiOutlineClose
              onClick={() => setCartNav(!cartNav)}
              size={25}
              className="absolute left-4 top-4 cursor-pointer"
            />
          </div>

          {sideNav ? (
            <div
              className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"
              onClick={() => setSideNav(!sideNav)}
            ></div>
          ) : (
            ""
          )}
          <div
            className={
              sideNav
                ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
                : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
            }
          >
            <AiOutlineClose
              onClick={() => setSideNav(!sideNav)}
              size={25}
              className="absolute right-4 top-4 cursor-pointer"
            />
            <button
              onClick={NavigateHome}
              className="p-0 border-none hover:scale-105 duration-300"
            >
              <h2 className="text-4xl p-4">
                Yum<span className="text-orange-700 font-bold">Eats</span>
              </h2>
            </button>

            <nav>
              <ul className="flex flex-col p-4 text-gray-900">
                <li className="text-xl py-4 flex hover:scale-105 duration-300 ">
                  <button
                    onClick={NavigateAccount}
                    className="w-[200px] border-none p-0 flex duration-300"
                  >
                    <BsPerson
                      size={35}
                      className="text-white bg-orange-700 rounded-full p-1 inline-block"
                    />
                    <span className="ml-5">My Account</span>{" "}
                  </button>
                </li>
                <li className="text-xl py-4 flex hover:scale-105 duration-300 ">
                  <button
                    onClick={NavigateDelivery}
                    className="w-[200px] border-none p-0 flex duration-300"
                  >
                    <TbTruckReturn
                      size={35}
                      className="text-white bg-orange-700 rounded-full p-1 inline-block"
                    />
                    <span className="ml-5">Delivery</span>{" "}
                  </button>
                </li>
                <li className="text-xl py-4 flex hover:scale-105 duration-300 ">
                  <button
                    onClick={NavigateMyFavourite}
                    className="w-[200px] border-none p-0 flex"
                  >
                    <MdOutlineFavorite
                      size={35}
                      className="text-white bg-orange-700 rounded-full p-1 inline-block"
                    />
                    <span className="ml-5">My Favourite</span>{" "}
                  </button>
                </li>
                <li className="text-xl py-4 flex hover:scale-105 duration-300 ">
                  <button
                    onClick={NavigateMyWallet}
                    className="w-[200px] border-none p-0 flex"
                  >
                    <FaGoogleWallet
                      size={35}
                      className="text-white bg-orange-700 rounded-full p-1 inline-block"
                    />
                    <span className="ml-5">My Wallet</span>{" "}
                  </button>
                </li>
                <li className="text-xl py-4 flex hover:scale-105 duration-300 ">
                  <button
                    onClick={NavigateHelp}
                    className="w-[200px] border-none p-0 flex"
                  >
                    <MdHelp
                      size={35}
                      className="text-white bg-orange-700 rounded-full p-1 inline-block"
                    />
                    <span className="ml-5">Help</span>{" "}
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* That's the div for the routes to navigate between the screens using TopNav component */}
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/myAccountPage" element={<MyAccountPage />} />
          <Route path="/deliveryPage" element={<DeliveryPage />} />
          <Route path="/myFavouritePage" element={<MyFavouritePage />} />
          <Route path="/myWalletPage" element={<MyWalletPage />} />
          <Route path="/helpPage" element={<HelpPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default TopNav;
