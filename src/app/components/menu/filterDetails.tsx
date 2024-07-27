"use client";

import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";

const FoodType = ["low-calories", "high-protein", "low-carb", "low-fat"];
const Allergens = [
  "dairy",
  "eggs",
  "fish",
  "shellfish",
  "tree nuts",
  "peanuts",
  "wheat",
  "soy",
  "sesame",
  "sulphites",
  "mustard",
  "celery",
  "lupin",
  "molluscs",
  "gluten",
];

function FilterDetails() {
  const [sliderValue, setSliderValue] = useState([15]);

  const handleValueChange = (value: number[]) => {
    setSliderValue(value);
  };

  const handleValueCommit = (value: number[]) => {
    console.log(value);
  };

  return (
    <div className="bg-black flex flex-col items-center border-x-2 w-1/5 fixed top-[149px] right-0 min-h-screen p-5">
      <p className="text-2xl font-bold">Filters</p>
       <div className="w-full flex flex-col items-center gap-10 mt-5">
      <div className="w-full flex flex-col gap-2">
        <p className="font-bold">Price</p>
        <Slider
          defaultValue={[15]}
          max={30}
          step={1}
          onValueChange={handleValueChange}
          onValueCommit={handleValueCommit}
        />
        <p>{`£${sliderValue}`}</p>
      </div>
      <div className="w-full flex flex-col gap-2">
        <p className="font-bold">Food type</p>
        <div className="grid grid-cols-2 w-full">
          {FoodType.map((item, index) => (
            <div key={index}>
              <input type="checkbox" id={item} className="mr-2" />
              <label id={item}>{item}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col gap-2">
        <p className="font-bold">Allergens</p>
        <div className="grid grid-cols-2 w-full">
          {Allergens.map((item, index) => (
            <div key={index}>
              <input type="checkbox" id={item} className="mr-2" />
              <label id={item}>{item}</label>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}

export default FilterDetails;
