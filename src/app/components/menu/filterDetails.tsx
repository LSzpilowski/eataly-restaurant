"use client";

import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { mealData as mealDataArray } from "@/app/data/data";

const FoodType = ["lowCalories", "highProtein", "lowCarb", "lowFat"];
const Allergens = [
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

function FilterDetails() {
  const [sliderValue, setSliderValue] = useState(17);
  const [foodTypeFilters, setFoodTypeFilters] = useState({
    lowCalories: false,
    highProtein: false,
    lowCarb: false,
    lowFat: false,
  });
  const [allergenFilters, setAllergenFilters] = useState({
    dairy: false,
    eggs: false,
    fish: false,
    shellfish: false,
    treeNuts: false,
    peanuts: false,
    wheat: false,
    soy: false,
    sesame: false,
    sulphites: false,
    mustard: false,
    celery: false,
    lupin: false,
    molluscs: false,
    gluten: false,
  });

  const handleSliderChange = (value) => {
    setSliderValue(value[0]);
  };

  const handleFoodTypeChange = (type) => {
    setFoodTypeFilters((prevFilters) => ({
      ...prevFilters,
      [type]: !prevFilters[type],
    }));
  };

  const handleAllergenChange = (type) => {
    setAllergenFilters((prevFilters) => ({
      ...prevFilters,
      [type]: !prevFilters[type],
    }));
  };

  const filterMeals = () => {
    return mealDataArray.filter((meal) => {
      const meetsPrice = parseFloat(meal.price.substring(1)) <= sliderValue;
      const meetsFoodType = Object.keys(foodTypeFilters).every(
        (key) => !foodTypeFilters[key] || meal.foodType[key]
      );
      const meetsAllergens = Object.keys(allergenFilters).every(
        (key) => !allergenFilters[key] || !meal.allergens[key]
      );
      return meetsPrice && meetsFoodType && meetsAllergens;
    });
  };

  const filteredMeals = filterMeals();

  return (
    <div className="flex flex-col items-center border-x-2 w-1/5 fixed top-[149px] right-0 min-h-screen p-5">
      <p className="text-2xl font-bold">Filters</p>
      <div className="w-full flex flex-col items-center gap-10 mt-5">
        <div className="w-full flex flex-col gap-2">
          <p className="font-bold">Price</p>
          <Slider
            defaultValue={[17]}
            max={17}
            min={5}
            step={1}
            onValueChange={handleSliderChange}
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
                  className="mr-2"
                  checked={foodTypeFilters[item]}
                  onChange={() => handleFoodTypeChange(item)}
                />
                <label htmlFor={item}>{item.replace(/([A-Z])/g, "-$1").toLowerCase()}</label>
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
                  className="mr-2"
                  checked={allergenFilters[item]}
                  onChange={() => handleAllergenChange(item)}
                />
                <label htmlFor={item}>{item.replace(/([A-Z])/g, " $1").toLowerCase()}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2">
        <Input type="submit" value="Submit" onClick={() => console.log(filteredMeals)} />
        <Input type="reset" value="Reset" onClick={() => {
          setSliderValue(17);
          setFoodTypeFilters({
            lowCalories: false,
            highProtein: false,
            lowCarb: false,
            lowFat: false,
          });
          setAllergenFilters({
            dairy: false,
            eggs: false,
            fish: false,
            shellfish: false,
            treeNuts: false,
            peanuts: false,
            wheat: false,
            soy: false,
            sesame: false,
            sulphites: false,
            mustard: false,
            celery: false,
            lupin: false,
            molluscs: false,
            gluten: false,
          });
        }} />
      </div>
    </div>
  );
}

export default FilterDetails;
