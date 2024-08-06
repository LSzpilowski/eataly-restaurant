"use client";

import { useState } from "react";
import { GiMeal, GiHotMeal } from "react-icons/gi";
import { FaIceCream } from "react-icons/fa";
import { PiCoffeeFill } from "react-icons/pi";
import { RiDrinks2Fill } from "react-icons/ri";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import SwitchDisplay from "./switchDisplay";

const CategoryButtons = [
  { category: "All", label: "All" },
  { icon: <GiMeal />, category: "appetizers", label: "Appetizers" },
  { icon: <GiHotMeal />, category: "main courses", label: "Main course" },
  { icon: <FaIceCream />, category: "desserts", label: "Desserts" },
  { icon: <PiCoffeeFill />, category: "hot drinks", label: "Hot drinks" },
  { icon: <RiDrinks2Fill />, category: "soft drinks", label: "Soft drinks" },
];

function FilterCategory({ onCategoryChange, activeCategoryIndex }) {
  const handleClick = (index: number) => {
    onCategoryChange(CategoryButtons[index].category, index);
  };

  return (
    <div className="w-4/5 flex flex-row justify-center items-center md:gap-6">
      {CategoryButtons.map((item, index) => (
        <TooltipProvider delayDuration={100} key={index}>
          <Tooltip>
            <TooltipTrigger
              className={`border-2 m-1 rounded-full  ${
                activeCategoryIndex === index
                  ? "bg-orange-700 border-slate-300"
                  : "hover:bg-secondary"
              }`}
              onClick={() => handleClick(index)}
            >
              {item.icon ? (
                <div className="text-xl md:text-2xl p-2 md:p-3">
                  {item.icon}
                </div>
              ) : (
                <p className="px-[0.3rem] py-[0.24rem] md:px-3 md:py-[0.62rem] m-0 text-base md:text-lg font-bold">
                  {item.label}
                </p>
              )}
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>{item.category}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
}

export default FilterCategory;
