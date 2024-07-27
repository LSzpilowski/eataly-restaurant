"use client";

import { useState } from "react";
import { GiMeal, GiHotMeal } from "react-icons/gi";
import { FaIceCream } from "react-icons/fa";
import { PiCoffeeFill } from "react-icons/pi";
import { RiDrinks2Fill } from "react-icons/ri";
import { LuMenu } from "react-icons/lu";
import { CiGrid41 } from "react-icons/ci";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const CategoryButtons = [
  {
    category: "All",
  },
  {
    icon: <GiMeal key={1} />,
    category: "Appetizers",
  },
  {
    icon: <GiHotMeal key={2} />,
    category: "Main course",
  },
  {
    icon: <FaIceCream key={3} />,
    category: "Desserts",
  },
  {
    icon: <PiCoffeeFill key={4} />,
    category: "Hot drinks",
  },
  {
    icon: <RiDrinks2Fill key={5} />,
    category: "Soft drinks",
  },
];

function FilterCategory() {
  const [isListLayout, setIsListLayout] = useState<boolean>(false);
  const [isGridLayout, setIsGridLayout] = useState<boolean>(true);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-row sticky top-[79px] bg-black bg-opacity-80">
      <div className="w-full flex flex-row justify-end border-b-2 py-1">
        <div className="w-2/3 flex flex-row justify-center items-center gap-6   ">
          {CategoryButtons.map((item, index) => (
            <TooltipProvider delayDuration={100} key={index}>
              <Tooltip>
                <TooltipTrigger
                  className={`border-2 m-1 rounded-full  ${
                    activeIndex === index
                      ? "bg-orange-700 border-slate-300"
                      : "hover:bg-secondary"
                  }`}
                >
                  {item.icon ? (
                    <div
                      onClick={() => handleClick(index)}
                      className="text-2xl p-3"
                    >
                      {item.icon}
                    </div>
                  ) : (
                    <p
                      className="px-3 py-[0.62rem] m-0 text-lg font-bold"
                      onClick={() => handleClick(index)}
                    >
                      {item.category}
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
        <div className="flex flex-row justify-center items-center w-1/6  ">
          <div className="flex flex-row w-24 ">
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger
                  onClick={() => {
                    setIsListLayout(true),
                    setIsGridLayout(false);
                  }}
                  className={`${
                    isListLayout === true
                      ? "bg-orange-700 border-orange-700"
                      : "hover:bg-secondary"
                  }  flex flex-row justify-center w-1/2 border-2 border-r-[1px]  rounded-tl-full rounded-bl-full py-2 `}
                >
                  <LuMenu />
                </TooltipTrigger>
                <TooltipContent side="bottom">List Layout</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger
                  onClick={() => {
                    setIsGridLayout(true),
                    setIsListLayout(false);
                  }}
                  className={`${
                    isGridLayout === true
                      ? "bg-orange-700 border-orange-700"
                      : "hover:bg-secondary"
                  } flex flex-row justify-center w-1/2 border-2 border-l-[1px] rounded-tr-full rounded-br-full py-2`}
                >
                  <CiGrid41 />
                </TooltipTrigger>
                <TooltipContent side="bottom">Grid layout</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterCategory;
