"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { IMealData } from "@/app/data/data";

type FoodTypeFilters = {
  lowCalories: boolean;
  highProtein: boolean;
  lowCarb: boolean;
  lowFat: boolean;
};

type AllergenFilters = {
  dairy: boolean;
  eggs: boolean;
  fish: boolean;
  shellfish: boolean;
  treeNuts: boolean;
  peanuts: boolean;
  wheat: boolean;
  soy: boolean;
  sesame: boolean;
  sulphites: boolean;
  mustard: boolean;
  celery: boolean;
  lupin: boolean;
  molluscs: boolean;
  gluten: boolean;
};
interface FilterDetailsProps {
  meals: IMealData[];
  onFilter: (filterData: IMealData[]) => void;
  sliderValue: number;
  onSliderChange: (value: number[]) => void;
  foodTypeFilters: FoodTypeFilters;
  onFoodTypeChange: (type: keyof FoodTypeFilters) => void;
  allergenFilters: AllergenFilters;
  onAllergenChange: (type: keyof AllergenFilters) => void;
  onResetFilters: () => void;
}

const FoodType: Array<keyof FoodTypeFilters> = [
  "lowCalories",
  "highProtein",
  "lowCarb",
  "lowFat",
];
const Allergens: Array<keyof AllergenFilters> = [
  "dairy",
  "eggs",
  "fish",
  "shellfish",
  "treeNuts",
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

function FilterDetails({
  meals,
  onFilter,
  sliderValue,
  onSliderChange,
  foodTypeFilters,
  onFoodTypeChange,
  allergenFilters,
  onAllergenChange,
  onResetFilters,
}: FilterDetailsProps) {
  return (
    <div className="md:fixed right-0 flex flex-col items-center justify-between md:w-1/5 p-5  min-h-[80vh]">
      <div className="w-full flex flex-col items-center gap-5 ">
        <p className=" font-bold hidden md:block">Filters</p>
        <div className="w-full flex flex-col gap-1">
          <p className="font-bold">Price</p>
          <Slider
            defaultValue={[sliderValue]}
            max={17}
            min={5}
            step={1}
            onValueChange={onSliderChange}
            className="cursor-pointer"
          />
          <p>{`£${sliderValue}`}</p>
        </div>
        <div className="w-full flex flex-col gap-2">
          <p className="font-bold">Food type</p>
          <div className="grid grid-cols-2 w-full">
            {FoodType.map((item, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  id={item}
                  className="mr-2 cursor-pointer"
                  checked={foodTypeFilters[item]}
                  onChange={() => onFoodTypeChange(item)}
                />
                <label htmlFor={item}>
                  {item.replace(/([A-Z])/g, "-$1").toLowerCase()}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <p className="font-bold">Allergens</p>
          <div className="grid grid-cols-2 w-full">
            {Allergens.map((item, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  id={item}
                  className="mr-2 cursor-pointer"
                  checked={allergenFilters[item]}
                  onChange={() => onAllergenChange(item)}
                />
                <label htmlFor={item}>
                  {item.replace(/([A-Z])/g, " $1").toLowerCase()}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <Input
            type="submit"
            value="Submit"
            onClick={() => onFilter(meals)}
            className="hover:bg-secondary cursor-pointer"
          />
          <Input
            type="reset"
            value="Reset"
            onClick={onResetFilters}
            className="hover:bg-secondary cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default FilterDetails;
