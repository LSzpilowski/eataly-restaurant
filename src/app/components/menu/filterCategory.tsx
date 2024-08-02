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

function FilterCategory({ onCategoryChange}) {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);

  const handleClick = (index: number) => {
    setActiveCategoryIndex(index);
    onCategoryChange(CategoryButtons[index].category)
  };


  return (
        <div className="w-2/3 flex flex-row justify-center items-center gap-6   ">
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
                    <div
                      className="text-2xl p-3"
                    >
                      {item.icon}
                    </div>
                  ) : (
                    <p
                      className="px-3 py-[0.62rem] m-0 text-lg font-bold"
                    >
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
