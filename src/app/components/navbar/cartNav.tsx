import React from "react";
import { AiOutlineClose } from "react-icons/ai";

interface ICartNavProps {
  cartNav: boolean;
  toggleCartNav: () => void;
}

function CartNav({ cartNav, toggleCartNav }: ICartNavProps) {
  return (
    <>
      {cartNav && (
        <div
          className="bg-black/60  w-full h-screen z-10 top-0 left-0"
          onClick={toggleCartNav}
        ></div>
      )}
      <div
        className={
          cartNav
            ? "fixed top-0 right-0 w-full md:w-1/4 h-screen bg-white z-20 duration-300 overflow-y-auto"
            : "fixed top-0 right-[-100%] w-full md:w-1/4 h-screen bg-white z-20 duration-300 overflow-y-auto"
        }
      >
        <AiOutlineClose
          onClick={toggleCartNav}
          size={25}
          className="absolute left-4 top-4 cursor-pointer text-black"
        />
        <ul className="p-4 text-black">
          <li className="text-xl py-4">Item 1</li>
          <li className="text-xl py-4">Item 2</li>
          <li className="text-xl py-4">Item 3</li>
        </ul>
      </div>
    </>
  );
}

export default CartNav;
